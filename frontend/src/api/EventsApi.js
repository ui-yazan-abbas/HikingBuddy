import Api from "./Api";

class EventsApi {
  viewAllEvents() {
    return Api.get("/events");
  }

  getEventById(id) {
    return Api.get("/events/" + id);
  }

  createEvent(event) {
    return Api.post("/events", event);
  }

  updateEvent(id, event) {
    return Api.put("/events/" + id, event);
  }

  deleteEvent(id) {
    return Api.delete("/events/" + id);
  }
  joinEvent(eventId) {
    return Api.post(`/events/${eventId}/join`, { eventJoin: "join" });
  }

  undoJoinEvent(eventId) {
    return Api.delete(`/events/join/${eventId}`);
  }
}

export default new EventsApi();
