from bson import ObjectId # type: ignore
from pydantic import BaseModel, Field # type: ignore
from typing import Optional

class Event(BaseModel):
    id: Optional[str] = Field(alias="_id")
    title: str
    description: str
    start: str
    end: str
    allDay: bool
    recurrence: Optional[str]

    class Config:
        json_encoders = {
            ObjectId: str
        }
