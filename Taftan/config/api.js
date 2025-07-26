import axios from 'axios';
import { getAuthData } from '../services/auth';
import { api_url } from './consts';

// url = "http://10.100.52.11:8087/api";
// url = api_url + "/Services/Taftan/api";
// url = "http://taftantest.adonistech.ir:8000/Services/Taftan/api"
url = 'http://10.100.52.4:8070/api', // HadiPanah system ip


api = axios.create({
    baseURL: url,
    timeout: 60000,
    // headers: {
    //     token: authData.token,
    // },
});

module.exports = api;