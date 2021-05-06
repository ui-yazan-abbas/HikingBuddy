import Api from "./Api";

class PostLikesApi {
  getLikes(postId) {
    return Api.get(`/posts/${postId}/likes`);
  }

  createLike(postId, likeData) {
    return Api.post(`/posts/${postId}/likes`, likeData);
  }

  deleteLike(id) {
    return Api.delete("/likes/" + id);
  }
}

export default new PostLikesApi();
