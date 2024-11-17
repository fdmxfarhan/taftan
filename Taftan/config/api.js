import axios from 'axios';

// url = "http://192.168.231.148:3000";
url = "http://10.55.5.13:8020/Apps/Authentication/#";

api = axios.create({
    baseURL: url,
    timeout: 5000,
})

module.exports = api;