import axios from 'axios';
import { api_url } from './consts';

// url = "http://10.100.52.11:8087/api"; //13
url = api_url + "/Services/Authentication/api"; //13
// url = "http://taftantest.adonistech.ir:8000/Services/Authentication/api"


api = axios.create({
    baseURL: url,
    timeout: 60000,
});

module.exports = api;