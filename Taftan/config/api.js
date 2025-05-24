import axios from 'axios';
import { getAuthData } from '../services/auth';

url = "http://10.55.5.13:8020/Services/TaftanService/api";



// url = "http://10.44.4.12:8080/Services/api"
// url = "http://10.100.52.11:8087/api";
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