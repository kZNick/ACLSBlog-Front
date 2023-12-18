import axios from "axios";

export const apiAclsBlog = axios.create({
    baseURL: "https://apiaclsforum.onrender.com",
    timeout: 55000
})


// Local Host

// export const apiAclsBlog = axios.create({
//     baseURL: "http://localhost:3001",
//     timeout: 5000
// })