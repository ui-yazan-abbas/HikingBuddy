package hikingBuddy.events;

import hikingBuddy.posts.Post;
import hikingBuddy.posts.PostRepository;
import org.springframework.stereotype.Service;

@Service
public class EventService {
    EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public Event saveEvent (Event event){ return eventRepository.save(event); }

    public Event updateEvent(Long id, Event eventParam, Event existingEvent){
        existingEvent.setEventTitle(eventParam.getEventTitle());
        existingEvent.setEventOrg(eventParam.getEventOrg());
        existingEvent.setEventTrail(eventParam.getEventTrail());
        existingEvent.setEventDifficulty(eventParam.getEventDifficulty());
        existingEvent.setEventMaxNum(eventParam.getEventMaxNum());
        existingEvent.setEventDuration(eventParam.getEventDuration());
        existingEvent.setEventBody(eventParam.getEventBody());
        existingEvent.setEventMustBring(eventParam.getEventMustBring());
        existingEvent.setEventMeetPoint(eventParam.getEventMeetPoint());
        Event event = eventRepository.save(existingEvent);
        return event;
    }


}
