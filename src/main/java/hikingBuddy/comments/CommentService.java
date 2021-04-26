package hikingBuddy.comments;

import org.springframework.stereotype.Service;

@Service
public class CommentService {

    CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment saveComment(Comment commentParam){
        return commentRepository.save(commentParam);
    }

    public Comment updateComment(Long id, Comment commentParam ){
        commentParam.setId(id);
       Comment comment = commentRepository.save(commentParam);
       return comment;
    }
}
