import axios from "axios";
const instance = axios.create({
    baseURL: "https://visionbin.programmersintheworld.com/api",
    // baseURL : "api.link"
    headers: {
        'content-Type': 'application/json'
    }
});
instance.defaults.timeout = 2500;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default instance;