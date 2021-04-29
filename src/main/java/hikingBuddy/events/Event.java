package hikingBuddy.events;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import hikingBuddy.comments.Comment;
import hikingBuddy.eventComments.EventComment;
import hikingBuddy.user.User;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Entity
public class Event{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotEmpty
    private String eventBody;
    // private LocalDate eventStartDateTime;

    @OneToMany(mappedBy = "commentedEvent", cascade = CascadeType.ALL)

    private List<EventComment> eventCommentList;
    @ManyToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "name")
    @JsonIdentityReference(alwaysAsId = true)
    private User user;


    public Event() {
    }

    public Event(@NotEmpty String eventBody) {
        this.eventBody = eventBody;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEventBody() {
        return eventBody;
    }

    public void setEventBody(String eventBody) {
        this.eventBody = eventBody;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User userEvents) {
        this.user = userEvents;
    }

    public List<EventComment> getEventCommentList() {
        return eventCommentList;
    }

    public void setEventCommentList(List<EventComment> eventCommentList) {
        this.eventCommentList = eventCommentList;
    }

}
