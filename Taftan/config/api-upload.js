import axios from 'axios';
import { getAuthData } from '../services/auth';

// url = "http://10.100.52.11:8087/adminService/api";
url = "http://taftantest.adonistech.ir:8000/adminService/api"

api = axios.create({
    baseURL: url,
    timeout: 10000,
    // headers: {
    //     token: authData.token,
    // },

});

module.exports = api;