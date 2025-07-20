import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const GetAreaDetail = async (areaId, navigation) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: {
                "id": 26,
                "title": "دفتر غرب تهران",
                "parentId": 13,
                "parentTitle": "ناحیه 2",
                "cityId": 0,
                "cityName": "",
                "leaderId": 40181,
                "leaderName": "فرزانه وفا 1514",
                "typeId": 2,
                "typeName": "اصلی",
                "ownerShipId": 1,
                "ownerShipName": "ملکی",
                "provinceId": 0,
                "provinceName": "",
                "zoneId": 0,
                "zoneName": "",
                "address": "میدان توحید- خ ستارخان- نرسیده به خ باقر خان- کوچه شادی- پلاک 6- واحد 3",
                "hasRepair": 0,
                "pilotServicePerm": 0,
                "phoneNumber": 0,
                "rentEndDate": "?",
                "repairAreaId": 0,
                "repairAreaName": "",
                "coordinateId": 0,
                "coordinateName": "",
                "strLatitude": "35.708755",
                "strLongitude": "51.37478",
                "areaUserReciverMsg": []
            }
        };
        const response = await api.get(`/AreaController/GetAreaDetail/${areaId}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'UserAgent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /AreaController/GetAreaDetail request:', error);
        
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                logout();
                navigation.navigate('Login');
                return { success: false, error: 'Unauthorized access' };
            }
            if (error.response.data?.Message === "Authorization has been denied for this request.") {
                logout();
                navigation.navigate('Login');
                return { success: false, error: 'Authorization denied' };
            }
        }
        
        return { success: false, error: 'Failed to GetAreaDetail request' };
    }
};


