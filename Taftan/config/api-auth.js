import axios from 'axios';

// url = "http://10.44.4.12:8080/Services/api";
url = "http://10.55.5.13:8020/Services/Authentication/api"; //13


// url = "http://10.100.52.4:8020/Services/Authentication/api"; //13
// url = "http://10.100.52.4:8020/Services/Authentication/api"; //local
// url = "http://10.55.5.13:8020/Apps/Authentication/#/login"; //13

api = axios.create({
    baseURL: url,
    timeout: 10000,
});

module.exports = api;