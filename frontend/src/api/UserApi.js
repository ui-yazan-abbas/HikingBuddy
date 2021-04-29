import Api from "./Api";

class UserApi {

    updateUser(userData) {
        return Api.put('/user', userData);
    }
    getUser() {
        return Api.get("/user");
    }

}

export default new UserApi();