import axios from 'axios';

// url = "http://10.100.52.11:8087/api"; //13
// url = "http://10.55.5.13:8020/Services/Authentication/api"; //13
// url = "http://taftantest.adonistech.ir:8000/Services/Authentication/api"
url = 'http://10.100.52.4:8060/api'

api = axios.create({
    baseURL: url,
    timeout: 60000,
});

module.exports = api;