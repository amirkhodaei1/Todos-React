import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 5000
})
api.interceptors.request.use(
    (config) => {
        console.log("Config Headers =>", config.headers)
        return config
    },
    (error) => Promise.reject(error)
)
api.interceptors.response.use(
    (response) => {
        console.log();
        return response
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 401) console.log("UnAuthorized - Redirect to Login");
            else if (error.response.data) console.log("Error Response =>", error.response.data);
            else if (error.request) console.log("No Response Server =>", error.request);
            else console.log("error message", error.message);
            return Promise.reject(error)
        }

    }
)
export default api