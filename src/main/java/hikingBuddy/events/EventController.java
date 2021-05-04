package hikingBuddy.events;

import hikingBuddy.auth.AuthService;
import hikingBuddy.exceptions.ResourceNotFoundException;
import hikingBuddy.posts.Post;
import hikingBuddy.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EventController {
    EventRepository eventRepository;
    EventService eventService;
    UserRepository userRepository;
    AuthService authService;

    @Autowired
    public EventController(EventRepository eventRepository, EventService eventService, UserRepository userRepository, AuthService authService) {
        this.eventRepository = eventRepository;
        this.eventService = eventService;
        this.userRepository = userRepository;
        this.authService = authService;
    }


    //Creates an event and associates with a user´s name
    @PostMapping("/events")
    public ResponseEntity<Event> createEvent(@RequestBody Event eventParam) {
        eventParam.setUser(userRepository.findByEmail(authService.getLoggedInUserEmail()));
        Event event = eventService.saveEvent(eventParam);
        return ResponseEntity.status(HttpStatus.CREATED).body(event);
    }

    //Returns all created events
    @GetMapping("/events")
    public ResponseEntity<List<Event>> viewAllEvents(){
        List<Event> events = eventRepository.findAll();
        return ResponseEntity.ok(events);
    }

    //Returns a specific event given its Id
    @GetMapping("/events/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id){
        Event event = eventRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(event);
    }

    //Deletes a specific event given its Id
    @DeleteMapping ("/events/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteEvent (@PathVariable Long id){
        Event event = eventRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        eventRepository.delete(event);
    }

    //Updates event given its Id
   @PutMapping("/events/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event eventParam){

        Event existingEvent = eventRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        Event event = eventService.updateEvent(id, eventParam, existingEvent);
        return ResponseEntity.ok(event);
    }





}
