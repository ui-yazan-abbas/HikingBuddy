import Api from "./Api";

class CommentsApi {

    getComments(postId) {
    return Api.get(`/posts/${postId}/comments`);
    }

    createComment(postId, commentData) {
        
        return Api.post(`/posts/${postId}/comments`, commentData);
    }

 
    deleteComment(id) {
        return Api.delete('/comments/'+ id);
    } 
}

export default new CommentsApi();