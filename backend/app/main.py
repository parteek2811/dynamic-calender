from fastapi import FastAPI, HTTPException, Depends # type: ignore
from motor.motor_asyncio import AsyncIOMotorClient # type: ignore
from pydantic import BaseModel, Field   # type: ignore
from typing import List, Optional
from bson import ObjectId # type: ignore
import uvicorn # type: ignore

app = FastAPI()

# MongoDB connection setup
MONGODB_URL = "mongodb://localhost:27017"
client = AsyncIOMotorClient(MONGODB_URL)
db = client.calendar_db

# Pydantic models
class Event(BaseModel):
    title: str
    description: Optional[str]
    start_time: str
    end_time: str
    recurrence: Optional[str]
    all_day: bool
    color: Optional[str]

class EventInDB(Event):
    id: str = Field(default_factory=lambda: str(ObjectId()))

# Helper functions
async def get_event(event_id: str):
    event = await db.events.find_one({"_id": ObjectId(event_id)})
    if event is None:
        raise HTTPException(status_code=404, detail="Event not found")
    return EventInDB(**event)

# Routes
@app.post("/events/", response_model=EventInDB)
async def create_event(event: Event):
    event_dict = event.dict()
    result = await db.events.insert_one(event_dict)
    event_in_db = EventInDB(**event_dict, id=str(result.inserted_id))
    return event_in_db

@app.get("/events/", response_model=List[EventInDB])
async def list_events():
    events = []
    async for event in db.events.find():
        events.append(EventInDB(**event))
    return events

@app.get("/events/{event_id}", response_model=EventInDB)
async def read_event(event_id: str):
    return await get_event(event_id)

@app.put("/events/{event_id}", response_model=EventInDB)
async def update_event(event_id: str, event: Event):
    existing_event = await get_event(event_id)
    updated_event = {**existing_event.dict(), **event.dict()}
    await db.events.update_one({"_id": ObjectId(event_id)}, {"$set": updated_event})
    return EventInDB(**updated_event)

@app.delete("/events/{event_id}")
async def delete_event(event_id: str):
    result = await db.events.delete_one({"_id": ObjectId(event_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Event not found")
    return {"message": "Event deleted successfully"}

# Main entry point
if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
