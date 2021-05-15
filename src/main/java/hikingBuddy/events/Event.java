package hikingBuddy.events;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import hikingBuddy.comments.Comment;
import hikingBuddy.eventComments.EventComment;
import hikingBuddy.user.User;
import hikingBuddy.joinEvents.JoinEvent;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotEmpty
    private String trailName;

    @Column(nullable = false)
    @NotEmpty
    private String eventDuration;

    @Column(nullable = false)
    @NotEmpty
    private String eventDistance;

    @Column(nullable = false)
    @NotEmpty
    private String eventDifficulty;

    @Column(nullable = false)
    @NotEmpty
    private String maxNum;

    @Column(nullable = false)
    @NotEmpty
    private String meetPoint;

    @Column(nullable = false)
    @NotEmpty
    private String body;

    private String trailHyperlink;

    private String roomName;

    @OneToMany(mappedBy = "commentedEvent", cascade = CascadeType.ALL)

    private List<EventComment> eventCommentList;
    @ManyToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "name")
    @JsonIdentityReference(alwaysAsId = true)
    private User user;

    @OneToMany(mappedBy = "joinEvent", cascade = CascadeType.ALL)
    private List<JoinEvent> listOfJoinEvent;

    public Event() {
    }

    public Event(@NotEmpty String body, @NotEmpty String trailName, @NotEmpty String eventDuration,
            @NotEmpty String eventDistance, @NotEmpty String maxNum, @NotEmpty String eventDifficulty,
            @NotEmpty String meetPoint, String trailHyperlink, String roomName) {

        this.body = body;
        this.trailName = trailName;
        this.eventDuration = eventDuration;
        this.eventDistance = eventDistance;
        this.maxNum = maxNum;
        this.eventDifficulty = eventDifficulty;
        this.meetPoint = meetPoint;
        this.trailHyperlink = trailHyperlink;
        this.roomName = roomName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getTrailName() {
        return trailName;
    }

    public void setTrailName(String trailName) {
        this.trailName = trailName;
    }

    public String getEventDuration() {
        return eventDuration;
    }

    public void setEventDuration(String eventDuration) {
        this.eventDuration = eventDuration;
    }

    public String getEventDistance() {
        return eventDistance;
    }

    public void setEventDistance(String eventDistance) {
        this.eventDistance = eventDistance;
    }

    public String getMaxNum() {
        return maxNum;
    }

    public void setMaxNum(String maxNum) {
        this.maxNum = maxNum;
    }

    public String getEventDifficulty() {
        return eventDifficulty;
    }

    public void setEventDifficulty(String eventDifficulty) {
        this.eventDifficulty = eventDifficulty;
    }

    public String getMeetPoint() {
        return meetPoint;
    }

    public void setMeetPoint(String meetPoint) {
        this.meetPoint = meetPoint;
    }

    public String getTrailHyperlink() {
        return trailHyperlink;
    }

    public void setTrailHyperlink(String trailHyperlink) {
        this.trailHyperlink = trailHyperlink;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User userEvents) {
        this.user = userEvents;
    }

    public List<JoinEvent> getListOfJoin() {
        return listOfJoinEvent;
    }

    public void setListOfJoin(List<JoinEvent> listOfJoinEvent) {
        this.listOfJoinEvent = listOfJoinEvent;
    }

    public List<EventComment> getEventCommentList() {
        return eventCommentList;
    }

    public void setEventCommentList(List<EventComment> eventCommentList) {
        this.eventCommentList = eventCommentList;
    }

}
