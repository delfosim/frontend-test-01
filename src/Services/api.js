import axios from "axios";

//API LINK
//ATTENTION: YOUR FIRST REQUEST MAY TAKE FROM 30sec TO 1min TO FINISH
const api = axios.create({
  baseURL:"https://delfos-api.onrender.com" ,
});

export default api;

