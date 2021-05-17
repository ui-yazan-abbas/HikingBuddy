import Api from "./Api";

class PostsApi {
    viewAllPosts() {
        return Api.get('/posts');
    }

    getPostById(id) {
        return Api.get('/posts/' + id);
    }

    createPost(post) {
        return Api.post('/posts', post);
    }

    updatePost(id, post) {

        return Api.put('/posts/' + id, post);

    }

    deletePost(id) {
        return Api.delete('/posts/' + id);
    }
    likePost(postId) {
        return Api.post(`/posts/${postId}/likes`, { postLike: "like" });
      }
    
      undoLikePost(likeId) {
        return Api.delete(`/posts/likes/${likeId}`);
      }

}

export default new PostsApi();