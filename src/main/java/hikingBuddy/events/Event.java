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

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Entity
public class Event{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotEmpty
    private String trailName;
    private LocalDate eventDate; 
    private float eventDuration;
    private int eventDistance;
    private String eventDifficulty;
    private int maxNum;
    private String meetPoint;
    private String trailHyperlink;
    private String body;

    @OneToMany(mappedBy = "commentedEvent", cascade = CascadeType.ALL)

    private List<EventComment> eventCommentList;
    @ManyToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "name")
    @JsonIdentityReference(alwaysAsId = true)
    private User user;


    public Event() {
    }

    public Event(@NotEmpty String body, @NotEmpty String trailName, String date, float eventDuration,
     int eventDistance, int maxNum, String eventDifficulty, String meetPoint, String trailHyperlink) {

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        this.body = body;
        this.trailName = trailName;
        this.eventDate = LocalDate.parse(date, formatter);
        this.eventDuration = eventDuration;
        this.eventDistance = eventDistance;
        this.maxNum = maxNum;
        this.eventDifficulty = eventDifficulty;
        this.meetPoint = meetPoint;
        this.trailHyperlink = trailHyperlink;
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

    public LocalDate getEventDate() {
        return eventDate;
    }

    public void setEventDate(LocalDate eventDate) {
        this.eventDate = eventDate;
    }

      public float getEventDuration() {
        return eventDuration;
    }

    public void setEventDuration(float eventDuration) {
        this.eventDuration = eventDuration;
    }

     public int getEventDistance() {
        return eventDistance;
    }

    public void setEventDistance(int eventDistance) {
        this.eventDistance = eventDistance;
    }

     public int getMaxNum() {
        return maxNum;
    }

    public void setMaxNum(int maxNum) {
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
