import axios from 'axios';
import { api_url } from './consts';

// url = "http://10.100.52.11:8087/api";
url = api_url + "/adminService/api";
// url = "http://taftantest.adonistech.ir:8000/adminService/api"

api = axios.create({
    baseURL: url,
    timeout: 60000,
    // headers: {
    //     token: authData.token,
    // },

});

module.exports = api;