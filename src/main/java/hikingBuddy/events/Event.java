package hikingBuddy.events;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
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
    private String eventTitle;
    private String eventOrg;
    private String eventTrail; //might be not like this
    private String eventDifficulty;
    private int eventMaxNum;
    private String eventDuration;
    private String eventBody;
    private String eventMustBring;
    private String eventMeetPoint;
    // private LocalDate eventStartDateTime;

    @ManyToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "name")
    @JsonIdentityReference(alwaysAsId = true)
    private User user;


    public Event() {
    }

    public Event(@NotEmpty String eventTitle, String eventOrg, String eventTrail, String eventDifficulty, int eventMaxNum, String eventDuration, String eventBody, String eventMustBring, String eventMeetPoint) {
        this.eventTitle = eventTitle;
        this.eventOrg = eventOrg;
        this.eventTrail = eventTrail;
        this.eventDifficulty = eventDifficulty;
        this.eventMaxNum = eventMaxNum;
        this.eventDuration = eventDuration;
        this.eventBody = eventBody;
        this.eventMustBring = eventMustBring;
        this.eventMeetPoint = eventMeetPoint;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEventTitle() {
        return eventTitle;
    }

    public void setEventTitle(String eventTitle) {
        this.eventTitle = eventTitle;
    }

    public String getEventOrg() {
        return eventOrg;
    }

    public void setEventOrg(String eventOrg) {
        this.eventOrg = eventOrg;
    }

    public String getEventTrail() {
        return eventTrail;
    }

    public void setEventTrail(String eventTrail) {
        this.eventTrail = eventTrail;
    }

    public String getEventDifficulty() {
        return eventDifficulty;
    }

    public void setEventDifficulty(String eventDifficulty) {
        this.eventDifficulty = eventDifficulty;
    }

    public int getEventMaxNum() {
        return eventMaxNum;
    }

    public void setEventMaxNum(int eventMaxNum) {
        this.eventMaxNum = eventMaxNum;
    }

    public String getEventDuration() {
        return eventDuration;
    }

    public void setEventDuration(String eventDuration) {
        this.eventDuration = eventDuration;
    }

    public String getEventBody() {
        return eventBody;
    }

    public void setEventBody(String eventBody) {
        this.eventBody = eventBody;
    }

    public String getEventMustBring() {
        return eventMustBring;
    }

    public void setEventMustBring(String eventMustBring) {
        this.eventMustBring = eventMustBring;
    }

    public String getEventMeetPoint() {
        return eventMeetPoint;
    }

    public void setEventMeetPoint(String eventMeetPoint) {
        this.eventMeetPoint = eventMeetPoint;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User userEvents) {
        this.user = userEvents;
    }

}
