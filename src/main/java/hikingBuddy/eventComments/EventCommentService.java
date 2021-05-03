package hikingBuddy.eventComments;

import hikingBuddy.events.Event;
import org.springframework.stereotype.Service;

@Service
public class EventCommentService {

    EventCommentRepository eventCommentRepository;

    public EventCommentService(EventCommentRepository eventCommentRepository) {
        this.eventCommentRepository = eventCommentRepository;
    }

    public EventComment saveEventComment(EventComment eventCommentParam){
        return eventCommentRepository.save(eventCommentParam);
    }

    public EventComment updateEventComment(Long id, EventComment eventCommentParam ){
        eventCommentParam.setId(id);
       EventComment eventComment = eventCommentRepository.save(eventCommentParam);
       return eventComment;
    }
}
