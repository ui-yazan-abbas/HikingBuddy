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
    return Api.post(`/posts/${eventId}/likes`, { eventJoin: "join" });
  }

  undoJoinEvent(likeId) {
    return Api.delete(`/posts/likes/${likeId}`);
  }
}

export default new EventsApi();
