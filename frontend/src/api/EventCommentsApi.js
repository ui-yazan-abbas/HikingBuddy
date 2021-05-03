import Api from "./Api";

class EventCommentsApi {

    getEventComments(eventId) {
        return Api.get(`/events/${eventId}/eventComments`);
    }

    createEventComment(eventId, eventCommentData) {

        return Api.post(`/events/${eventId}/eventComments`, eventCommentData);
    }


    deleteEventComment(id) {
        return Api.delete('/eventComments/'+ id);
    }
}

export default new EventCommentsApi();