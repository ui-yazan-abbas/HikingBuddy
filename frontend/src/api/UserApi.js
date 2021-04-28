import Api from "./Api";

class UserApi {

    updateUser(userData) {
        return Api.put('/users', userData);
    }
    getUser(){
        return Api.get("/users");
    }

}

export default new UserApi();