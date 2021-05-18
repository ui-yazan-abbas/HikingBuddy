import Api from "./Api";

class UserApi {

    addFollower(name, {id}){
        return Api.put(`user/${name}/follow`, {id});
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