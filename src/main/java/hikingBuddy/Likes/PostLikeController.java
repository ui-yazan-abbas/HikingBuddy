
package hikingBuddy.Likes;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import hikingBuddy.auth.AuthService;
import hikingBuddy.exceptions.ResourceNotFoundException;
import hikingBuddy.posts.Post;
import hikingBuddy.posts.PostRepository;
import hikingBuddy.user.UserRepository;

import java.util.List;

@RestController
public class PostLikeController {

    PostLikeRepository postLikeRepository;
    PostRepository postRepository;
    PostLikeService postLikeService;
    UserRepository userRepository;
    AuthService authService;
    

    @Autowired
    public PostLikeController( PostLikeRepository postLikeRepository,PostRepository postRepository ,PostLikeService postLikeService, UserRepository userRepository,  AuthService authService){
        this.postLikeRepository=postLikeRepository;
        this.postRepository=postRepository;
        this.userRepository=userRepository;
        this.authService=authService;
        this.postLikeService=postLikeService;
    }

    @PostMapping("/posts/{postId}/likes")
    public ResponseEntity<PostLike> createLike(@PathVariable Long postId, @RequestBody PostLike likeParam) {
       Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        likeParam.setLikedPost(post);
        likeParam.setUser(userRepository.findByEmail(authService.getLoggedInUserEmail()));
       PostLike like = postLikeService.savePostLike(likeParam);
        return ResponseEntity.status(HttpStatus.CREATED).body(like);
    }

    @GetMapping("/posts/{postId}/likes")
    public ResponseEntity<List<PostLike>> getLikes(@PathVariable Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        List<PostLike> like = postLikeRepository.findAll();
        return ResponseEntity.ok(like);
    }

     // Delete given like.

     @DeleteMapping("/likes/{id}")
     @ResponseStatus(HttpStatus.NO_CONTENT)
     public void deleteLike(@PathVariable Long id) {
         PostLike like = postLikeRepository.findById(id)
                 .orElseThrow(ResourceNotFoundException::new);
         postLikeRepository.delete(like);
     }


    @GetMapping("/likes")
    public ResponseEntity <List<PostLike>> listAllLikes(){
        List<PostLike> likes = postLikeRepository.findAll();
        return ResponseEntity.ok(likes);
    }

      @PutMapping("/likes/{id}")
      public ResponseEntity<PostLike> updatePostLike(@PathVariable Long id, @RequestBody PostLike likeParam) {
         postLikeRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
          PostLike like = postLikeService.updatePostLike(id, likeParam);
          return ResponseEntity.ok(like);
      }

}