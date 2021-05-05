package hikingBuddy.Likes;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import hikingBuddy.posts.Post;

@Entity
public class PostLike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(nullable = false)
    private String likeBy;

    @ManyToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @JoinColumn(nullable = false)
    @NotNull
    public Post postlike;

    public PostLike(){

    }

    public PostLike(String likeBy){
        this.likeBy=likeBy;
    }

    public Long getId(){
        return this.id;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public String getLikeBy() {
        return this.likeBy;
    }

    public void setLikeBy(String likeBy) {
        this.likeBy = likeBy;
    }

    public void setPostLike(Post postlike) {
        this.postlike = postlike;
    }

    public Post getPostLike() {
        return this.postlike;
    }
    

}
 