package hikingBuddy.posts;

import org.springframework.stereotype.Service;


@Service
public class PostService {
    PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Post savePost (Post post){ return postRepository.save(post); }

    public Post updatePost(Long id, Post postParam, Post existingPost){
        existingPost.setBody(postParam.getBody());
        existingPost.setPostLocation(postParam.getPostLocation());
        existingPost.setPostDistance(postParam.getPostDistance());
        Post post = postRepository.save(existingPost);
        return post;
    }


}
