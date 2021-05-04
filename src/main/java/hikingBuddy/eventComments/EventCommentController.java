
package hikingBuddy.eventComments;

import hikingBuddy.auth.AuthService;
import hikingBuddy.events.Event;
import hikingBuddy.events.EventRepository;
import hikingBuddy.exceptions.ResourceNotFoundException;
import hikingBuddy.posts.Post;
import hikingBuddy.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class EventCommentController {
    EventCommentRepository eventCommentRepository;
    EventRepository eventRepository;
    UserRepository userRepository;
    AuthService authService;
    EventCommentService eventCommentService;

    @Autowired
    public EventCommentController(EventCommentRepository eventCommentRepository, EventRepository eventRepository, UserRepository userRepository , AuthService authService, EventCommentService eventCommentService) {
        this.eventCommentRepository = eventCommentRepository;
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
        this.authService= authService;
        this.eventCommentService= eventCommentService;
    }


    //Creates a new event comment
    @PostMapping("/events/{eventId}/eventComments")
    public ResponseEntity<EventComment> createEventComment(@PathVariable Long eventId, @RequestBody EventComment eventCommentParam) {
       Event event = eventRepository.findById(eventId).orElseThrow(ResourceNotFoundException::new);
        eventCommentParam.setCommentedEvent(event);
        eventCommentParam.setUser(userRepository.findByEmail(authService.getLoggedInUserEmail()));
       EventComment eventComment = eventCommentService.saveEventComment(eventCommentParam);
        return ResponseEntity.status(HttpStatus.CREATED).body(eventComment);
    }


    //Returns all event comments on event given by eventId
    @GetMapping("/events/{eventId}/eventComments")
    public ResponseEntity<List<EventComment>> getEventComments(@PathVariable Long eventId) {
        Event event = eventRepository.findById(eventId).orElseThrow(ResourceNotFoundException::new);
        List<EventComment> eventComment = eventCommentRepository.findAll();
        return ResponseEntity.ok(eventComment);
    }


    //Deletes an event comment
    @DeleteMapping("/eventComments/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteEventComment(@PathVariable Long id) {
        EventComment eventComment = eventCommentRepository.findById(id)
                .orElseThrow(ResourceNotFoundException::new);
        eventCommentRepository.delete(eventComment);
    }



    //Returns all event comments
    @GetMapping("/eventComments")
    public ResponseEntity <List<EventComment>> listAllEventComments(){
        List<EventComment> eventComments = eventCommentRepository.findAll();
        return ResponseEntity.ok(eventComments);
    }


    //Updates a comment 
    @PutMapping("/eventComments/{id}")
    public ResponseEntity<EventComment> updateEventComment(@PathVariable Long id, @RequestBody EventComment eventCommentParam) {
       eventCommentRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        EventComment eventComment = eventCommentService.updateEventComment(id, eventCommentParam);
        return ResponseEntity.ok(eventComment);
    }

}

