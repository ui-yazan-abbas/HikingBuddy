package hikingBuddy.posts;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import hikingBuddy.comments.Comment;
import hikingBuddy.user.User;
import hikingBuddy.postLikes.PostLike;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotEmpty
    private String body;

    @Column(nullable = false)
    @NotEmpty
    private String postLocation;

    @Column(nullable = false)
    @NotEmpty
    private String postDistance;

    @Column(name = "image_url")
    private String imageUrl;

    @OneToMany(mappedBy = "commentedPost", cascade = CascadeType.ALL)
    private List<Comment> commentList;

    @ManyToOne
    @JsonIdentityReference(alwaysAsId = true)
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "name")
    private User user;

    @OneToMany(mappedBy = "likedPost", cascade = CascadeType.ALL)
    private List<PostLike> listOfPostLikes;

    // bring another field with property

    public Post() {
    }

    public Post(@NotEmpty String body, @NotEmpty String postLocation, @NotEmpty String postDistance) {
        this.body = body;
        this.postLocation = postLocation;
        this.postDistance = postDistance;
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

    public String getPostLocation() {
        return postLocation;
    }

    public void setPostLocation(String postLocation) {
        this.postLocation = postLocation;
    }

    public String getPostDistance() {
        return postDistance;
    }

    public void setPostDistance(String postDistance) {
        this.postDistance = postDistance;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User userPosts) {
        this.user = userPosts;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public List<Comment> getCommentList() {
        return commentList;
    }

    public void setCommentList(List<Comment> commentList) {
        this.commentList = commentList;
    }

    public List<PostLike> getListOfLikes() {
        return listOfPostLikes;
    }

    public void setListOfLikes(List<PostLike> listOfPostLikes) {
        this.listOfPostLikes = listOfPostLikes;
    }
}
