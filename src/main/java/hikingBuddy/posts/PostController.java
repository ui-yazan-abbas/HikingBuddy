package hikingBuddy.posts;

import hikingBuddy.auth.AuthService;
import hikingBuddy.exceptions.ResourceNotFoundException;
import hikingBuddy.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {
    PostRepository postRepository;
    PostService postService;
    UserRepository userRepository;
    AuthService authService;

    @Autowired
    public PostController(PostRepository postRepository, PostService postService, UserRepository userRepository , AuthService authService) {
        this.postRepository = postRepository;
        this.postService = postService;
        this.userRepository = userRepository;
        this.authService = authService;
    }
  @PostMapping("/posts")
    public ResponseEntity<Post> createPost(@RequestBody Post postParam){
      postParam.setUser(userRepository.findByEmail(authService.getLoggedInUserEmail()));
        Post post = postService.savePost(postParam);
        return ResponseEntity.status(HttpStatus.CREATED).body(post);

  }
  @GetMapping("/posts")
    public ResponseEntity<List<Post>> viewAllPosts(){
        List<Post> posts = postRepository.findAll();
        return ResponseEntity.ok(posts);
  }
  @GetMapping("/posts/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id){
       Post post = postRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
       return ResponseEntity.ok(post);
  }
  @DeleteMapping ("/posts/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost (@PathVariable Long id){
        Post post = postRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        postRepository.delete(post);
  }

  @PutMapping("/posts/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable Long id, @RequestBody Post postParam){

        Post existingPost = postRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
         Post post = postService.updatePost(id, postParam, existingPost);
         return ResponseEntity.ok(post);
  }
}
