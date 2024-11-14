import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
console.log("abc",JSON.parse(localStorage.getItem("persist:root")).user)
//  const TOKEN =  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDMyM2JlMTEwZDczODRhNGRkZjUyNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTUzNTE5NCwiZXhwIjoxNjg1Nzk0Mzk0fQ.V3xepUOSTVklsFf7qH6nIpRzAJ3IDNckxkMLoVo2syA"




export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});