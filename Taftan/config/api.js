import axios from 'axios';

// url = "http://10.100.52.11:9090/taftanService/api";
url = "http://10.100.52.11:8087/api";
// url = "http://10.55.5.13:8020/api";
// url = "http://10.100.52.4:8020/api";

api = axios.create({
    baseURL: url,
    timeout: 10000,
});

module.exports = api;