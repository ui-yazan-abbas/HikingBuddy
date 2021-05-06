import Api from "./Api";

class UserApi {

    updateUser(userData) {
        return Api.put('/user', userData);
    }
    getUser() {
        return Api.get("/user");
    }
    getUserByName(name) {
        return Api.get(`/user/${name}`);
    }
    deleteUser(name) {
        return Api.delete(`/user/${name}`);
    }

}

export default new UserApi();