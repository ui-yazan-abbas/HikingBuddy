import Api from "./Api";

class UserApi {

    addFollower(name, currentUser){
        return Api.put(`user/${name}/follow`, currentUser);
    }

    updateUser(currentUser) {
        return Api.put('/user', currentUser);
    }
    getUser() {
        return Api.get("/user");
    }
    getUserByName(name) {
        return Api.get(`/user/${name}`);

    }

}

export default new UserApi();