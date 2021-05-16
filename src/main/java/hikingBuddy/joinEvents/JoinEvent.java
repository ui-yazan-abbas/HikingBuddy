package hikingBuddy.joinEvents;

import com.fasterxml.jackson.annotation.*;
import hikingBuddy.events.Event;
import hikingBuddy.user.User;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
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
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "name")
    @JsonIdentityReference(alwaysAsId = true)
    @JoinColumn(nullable = false)
    @NotNull
    private User joinUser;

    public JoinEvent() {

    }

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

    public void setJoinUser(User joinUser) {
        this.joinUser = joinUser;
    }
}