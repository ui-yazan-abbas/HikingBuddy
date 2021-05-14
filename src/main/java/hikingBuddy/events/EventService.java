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
        existingEvent.setTrailName(eventParam.getTrailName());
        existingEvent.setBody(eventParam.getBody());
        existingEvent.setEventDuration(eventParam.getEventDuration());
        existingEvent.setEventDistance(eventParam.getEventDistance());
        existingEvent.setMaxNum(eventParam.getMaxNum());
        existingEvent.setEventDifficulty(eventParam.getEventDifficulty());
        existingEvent.setMeetPoint(eventParam.getMeetPoint());
        existingEvent.setTrailHyperlink(eventParam.getTrailHyperlink());
        existingEvent.setRoomName(eventParam.getRoomName());
        
      
        Event event = eventRepository.save(existingEvent);
        return event;
    }


}
