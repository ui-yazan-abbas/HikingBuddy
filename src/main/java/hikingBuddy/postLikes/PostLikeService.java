package hikingBuddy.postLikes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import hikingBuddy.auth.AuthService;
import hikingBuddy.exceptions.ForbiddenException;
import hikingBuddy.exceptions.ResourceNotFoundException;
import hikingBuddy.posts.Post;
import hikingBuddy.posts.PostRepository;
import hikingBuddy.user.User;
import hikingBuddy.user.UserRepository;
import java.util.List;

@Service
public class PostLikeService {

    private PostRepository postRepository;
    private PostLikeRepository postLikeRepository;
    private AuthService authService;
    private UserRepository userRepository;

    @Autowired
    public PostLikeService(PostRepository postRepository, PostLikeRepository postLikeRepository,
            AuthService authService, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.postLikeRepository = postLikeRepository;
        this.authService = authService;
        this.userRepository = userRepository;
    }

    public PostLike addLike(Long postId) {
        Post likedPost = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        String loggedUserEmail = authService.getLoggedInUserEmail();
        User loggedUser = userRepository.findByEmail(loggedUserEmail);
        List<PostLike> listOfAllLikedByUser = loggedUser.getLikedPosts();
        for (PostLike postLike : listOfAllLikedByUser) {
            if (postLike.getLikedPost().getId().equals(postId)) {
                throw new ForbiddenException();
            }
        }
        PostLike newPostLike = new PostLike();
        newPostLike.setLikedPost(likedPost);
        newPostLike.setLikedUser(loggedUser);
        return postLikeRepository.save(newPostLike);
    }

    public void removeLike(Long postId) {
        Post likedPost = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        String loggedUserEmail = authService.getLoggedInUserEmail();
        User loggedUser = userRepository.findByEmail(loggedUserEmail);
        List<PostLike> listOfAllLikedByUser = loggedUser.getLikedPosts();
        for (PostLike postLike : listOfAllLikedByUser) {
            if (postLike.getLikedPost().getId().equals(postId)) {
                loggedUser.getLikedPosts().remove(postLike);
                postLikeRepository.delete(postLike);
                return;
            }
        }
        throw new ForbiddenException();
    }

    public List<PostLike> getAllLikes(Long postId) {
        Post commentedPost = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        return commentedPost.getListOfLikes();
    }
}