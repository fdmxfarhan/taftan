import axios from 'axios';
import { getAuthData } from '../services/auth';

// url = "http://10.100.52.11:9090/taftanService/api";
url = "http://10.100.52.11:8087/adminService/api";
// url = "http://10.55.5.13:8020/api";
// url = "http://10.100.52.4:8020/api";
// const authData = getAuthData();

api = axios.create({
    baseURL: url,
    timeout: 10000,
    // headers: {
    //     token: authData.token,
    // },

});

module.exports = api;