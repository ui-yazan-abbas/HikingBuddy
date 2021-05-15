package hikingBuddy.joinEvents;

import com.fasterxml.jackson.annotation.*;
import hikingBuddy.events.Event;
import hikingBuddy.user.User;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

public class JoinEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @JoinColumn(nullable = false)
    @NotNull
    @JsonIgnore
    private Event joinEvent;

    @ManyToOne
    @JsonIgnoreProperties({"event", "joinEvent"})
    @JoinColumn(nullable = false)
    private User joinUser;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public Event getJoinEvent() {
        return joinEvent;
    }

    public void setJoinEvent(Event joinEvent) {
        this.joinEvent = joinEvent;
    }

    public User getJoinUser() {
        return joinUser;
    }

    public void setJoinUser(User JoinUser) {
        this.joinUser = joinUser;
    }
}