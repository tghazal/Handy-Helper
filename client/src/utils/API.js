import axios from "axios";

export default {
    registerUser : function(user)
    {
      return  axios.post("/auth/register", user);
     
    },
    findUser :function(user)
    {
        console.log("findUser")
        return  axios.post("/auth/login", user);
    }

}