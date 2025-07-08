import axios from 'axios';
import { getAuthData } from '../services/auth';

// url = "http://10.100.52.11:8087/api";
// url = "http://10.55.5.13:8020/Services/Taftan/api";
url = "http://taftantest.adonistech.ir:8000/Services/Taftan/api"


api = axios.create({
    baseURL: url,
    timeout: 60000,
    // headers: {
    //     token: authData.token,
    // },
});

module.exports = api;