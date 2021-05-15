package hikingBuddy.postLikes;

import hikingBuddy.posts.PostRepository;
import hikingBuddy.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostLikeController {

    PostRepository postRepository;
    PostLikeRepository postLikeRepository;
    UserService userService;
    PostLikeService postLikeService;

    @Autowired
    public PostLikeController(PostLikeService postLikeService) {
        this.postLikeService = postLikeService;
    }

    @PostMapping("/{postId}/likes")
    public ResponseEntity<PostLike> addLike(@PathVariable Long postId) {
        return ResponseEntity.status(HttpStatus.CREATED).body(postLikeService.addLike(postId));
    }

    @GetMapping("/{postId}/likes")
    public ResponseEntity<List<PostLike>> getAllLikes(@PathVariable Long postId) {
        return ResponseEntity.ok(postLikeService.getAllLikes(postId));
    }

    @DeleteMapping("/likes/{postId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeLike(@PathVariable Long postId) {
        postLikeService.removeLike(postId);
    }
}
