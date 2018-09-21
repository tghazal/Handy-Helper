import axios from "axios";

export default {
    registerUser: function (user) {
        return axios.post("/auth/register", user);

    },
    findUser: function (user) {
        return axios.post("/auth/login", user);
    },
    //this function should use axios to call url from server to get the data from database 
    getUserInfo: function (email) {

    },
    createUserProfile: function (user) {
        return axios.post("/api/register", user);

    }

}