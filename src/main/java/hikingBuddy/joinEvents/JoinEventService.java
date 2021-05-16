package hikingBuddy.joinEvents;

import com.sun.java.accessibility.util.EventID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import hikingBuddy.auth.AuthService;
import hikingBuddy.exceptions.ForbiddenException;
import hikingBuddy.exceptions.ResourceNotFoundException;
import hikingBuddy.events.Event;
import hikingBuddy.joinEvents.JoinEvent;
import hikingBuddy.events.EventController;
import hikingBuddy.events.EventRepository;
import hikingBuddy.user.User;
import hikingBuddy.user.UserRepository;
import java.util.List;

@Service
public class JoinEventService {

    private static EventRepository eventRepository;
    private JoinEventRepository joinEventRepository;
    private AuthService authService;
    private UserRepository userRepository;

    @Autowired
    public JoinEventService(EventRepository eventRepository, JoinEventRepository joinEventRepository,
            AuthService authService, UserRepository userRepository) {
        this.eventRepository = eventRepository;
        this.joinEventRepository = joinEventRepository;
        this.authService = authService;
        this.userRepository = userRepository;
    }

    public JoinEvent addJoin(Long eventId) {
        Event joinEvent = eventRepository.findById(eventId).orElseThrow(ResourceNotFoundException::new);
        String loggedUserEmail = authService.getLoggedInUserEmail();
        User loggedUser = userRepository.findByEmail(loggedUserEmail);
        List<JoinEvent> listOfAllJoinByUser = loggedUser.getJoinEvent();
        for (JoinEvent joinEvent1 : listOfAllJoinByUser) {
            if (joinEvent.getListOfJoin().equals(eventId)) {
                throw new ForbiddenException();
            }
        }
        JoinEvent newJoinEvent = new JoinEvent();
        newJoinEvent.setJoinEvent(joinEvent);
        newJoinEvent.setJoinUser(loggedUser);
        return joinEventRepository.save(newJoinEvent);
    }

    public void removeJoin(Long eventId) {
        Event joinEvent = eventRepository.findById(eventId).orElseThrow(ResourceNotFoundException::new);
        String loggedUserEmail = authService.getLoggedInUserEmail();
        User loggedUser = userRepository.findByEmail(loggedUserEmail);
        List<JoinEvent> listOfAllJoinByUser = loggedUser.getJoinEvent();
        for (JoinEvent joinEvent1 : listOfAllJoinByUser) {
            if (joinEvent.getListOfJoin().equals(eventId)) {
                loggedUser.getJoinEvent().remove(joinEvent);
                joinEventRepository.delete(joinEvent1);
                return;
            }
        }
        throw new ForbiddenException();
    }

    public static List<JoinEvent> getAllJoin(Long eventId) {
        Event commentedEvent = eventRepository.findById(eventId).orElseThrow(ResourceNotFoundException::new);
        return commentedEvent.getListOfJoin();
    }
}