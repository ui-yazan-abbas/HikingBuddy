package hikingBuddy.Likes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import hikingBuddy.posts.Post;
import hikingBuddy.user.User;

@Entity
public class PostLike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotEmpty
    private String body;

    @ManyToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private Post likedPost;

    @ManyToOne
    @JsonIdentityReference(alwaysAsId=true)
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "name")
    public User user;

    public String getBody(){
        return body;
    }
    public void setBody(String body){
        this.body=body;
    }

    public Long getId(){
        return this.id;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public Post getLikedPost() {
        return this.likedPost;
    }

    public void setLikedPost(Post likedPost) {
        this.likedPost = likedPost;
    }

    public User getUser(){
        return user;
    }
    
    public void setUser(User userLikes){
        this.user= userLikes;

    }
    
}
 