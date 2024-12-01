import axios from 'axios';

// url = "http://10.100.52.11:9090/taftanService/api";
url = "http://10.100.52.11:8087/api";

api = axios.create({
    baseURL: url,
    timeout: 10000,
});

module.exports = api;