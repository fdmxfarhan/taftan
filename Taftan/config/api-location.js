import axios from 'axios';

// url = "http://10.100.52.11:8087/api";
// url = "http://10.55.5.13:8020/services/TrackingUserLocation/api";
// url = "http://taftantest.adonistech.ir:8000/Services/Taftan/api"
url = 'http://10.100.52.4:8080/api'


apiLocation = axios.create({
    baseURL: url,
    timeout: 60000,
    // headers: {
    //     token: authData.token,
    // },
});

module.exports = apiLocation;