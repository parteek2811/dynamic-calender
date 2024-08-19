from fastapi import FastAPI, HTTPException # type: ignore
from .database import db
from .models import Event
from bson import ObjectId # type: ignore

app = FastAPI()

@app.get("/events")
async def get_events():
    events = list(db.events.find())
    return events

@app.post("/events")
async def create_event(event: Event):
    result = db.events.insert_one(event.dict(by_alias=True))
    event.id = str(result.inserted_id)
    return event

@app.delete("/events/{id}")
async def delete_event(id: str):
    result = db.events.delete_one({"_id": ObjectId(id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Event not found")
    return {"message": "Event deleted"}
