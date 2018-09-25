import axios from "axios";

export default {
    registerUser: function (user) {
        return axios.post("/auth/register", user);

    },
    findUser: function (user) {
        return axios.post("/auth/login", user);
    },
    //this function should use axios to call url from server to get the data from database 
    getUserInfoFromDB: function (email) {
        return axios.get("/api/getUserInfo/" + email)

    },
    updateSkills: function (skills, id) {
        let data = { skills: skills, id: id }
        console.log(data)
        return axios.post("/api/updateSkills/", data)
    },

    saveImage: function (files, id) {
        let data = ({ files: files, id: id })
        return axios.post("/images", data)
    },
    updateAddress: function (data) {
        return axios.post("/api/updateAdress", data)
    }

}