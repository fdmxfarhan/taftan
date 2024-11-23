import axios from 'axios';

url = "http://10.100.52.11:9090/taftanService/api";

api = axios.create({
    baseURL: url,
    timeout: 5000,
})

module.exports = api;