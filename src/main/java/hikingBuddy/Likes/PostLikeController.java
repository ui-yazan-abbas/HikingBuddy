
package hikingBuddy.Likes;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import hikingBuddy.exceptions.ResourceNotFoundException;
import hikingBuddy.posts.*;

import java.util.List;

@RequestMapping ("/posts")
@Controller
public class PostLikeController {

    PostRepository postRepository;
    PostLikeRepository postLikeRepository;

    public PostLikeController( PostRepository postRepository, PostLikeRepository postlikeRepository){
        this.postRepository=postRepository;
        this.postLikeRepository=postlikeRepository;
    }

        @GetMapping("/{postId}/likes")
        public ResponseEntity<List<PostLike>> getPostLikes(@PathVariable Long postId){
            Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
            List<PostLike> postLikes = post.getPostLikes();
            return ResponseEntity.ok(postLikes);

        }

        @PostMapping("{postId}/likes")
        public ResponseEntity<PostLike> creatPostArticle(@PathVariable Long postId, @RequestBody PostLike like){
            Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
            like.setPostLike(post);
            postLikeRepository.save(like);
            return ResponseEntity.status(HttpStatus.CREATED).body(like);

        }


    @PutMapping("/likes/{id}")
    public ResponseEntity<PostLike> updatePostLike(@PathVariable Long id,
            @RequestBody PostLike updatedPostLike) {
        PostLike fetchedPostLike = postLikeRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        fetchedPostLike.setLikeBy(updatedPostLike.getLikeBy());

        postLikeRepository.save(fetchedPostLike);
        return ResponseEntity.ok(fetchedPostLike);
    }

    // Delete given like.

    @DeleteMapping("/likes/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePostLike(@PathVariable Long id) {
        PostLike postLike = postLikeRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        postLikeRepository.delete(postLike);
    }

}