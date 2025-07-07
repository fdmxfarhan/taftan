import axios from 'axios';

// url = "http://10.55.5.13:8020/Services/Authentication/api"; //13
url = "http://taftantest.adonistech.ir:8000/Services/Authentication/api"


api = axios.create({
    baseURL: url,
    timeout: 60000,
});

module.exports = api;