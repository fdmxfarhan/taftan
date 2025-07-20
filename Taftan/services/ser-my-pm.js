import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const submitMyPMRequest = async (skip, take, navigation) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: {
                "Data": [
                    {
                        "id": 592728,
                        "requestId": 1041449,
                        "deviceName": "باجه پایگاه توحید مشهد",
                        "customerName": "ملت",
                        "deviceTerminal": "2580",
                        "deviceModelTitle": "Wincor 2050 Xe",
                        "areaName": "دفتر غرب تهران",
                        "currentUserName": "حسین صبوری",
                        "customerInsertName": "فاطمه حمزه",
                        "branchName": "خزانه داری خراسان رضوی",
                        "serviceName": "درخواست مدیریت پروژه",
                        "lastState": "OfficeView",
                        "deviceId": 11546,
                        "reportHasFile": 0,
                        "persianLastState": "مشاهده مدیر",
                        "insertedDate": 14030816123758,
                        "persianInsertedDate": "1403/08/16",
                        "endDate": null,
                        "requestDeadLine": 14030816163700,
                        "SLAStyle": 150,
                        "duplicatePMNumber": 0,
                        "isPilot": 0
                    }
                ],
                "TotalCount": 1
            }
        };
        const response = await api.post('/RequestPMController/loadMyPMRequestList', {
            "skip": skip,
            "take": take,
            "sort": [
                {
                    "field": "id",
                    "dir": "desc"
                }
            ],
            "filter": {
                "logic": "and",
                "filters": [
                    {
                        "field": "lastState",
                        "operator": "Eq",
                        "value": "Acting"
                    },
                ]
            }
        }, {
            headers: {
                Authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'UserAgent': 'Mobile',
            }
        });
        return { success: true, data: response.data };

    } catch (error) {
        console.log('Error submitting /RequestPMController/loadMyPMRequestList request:', error);
        
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
        
        return { success: false, error: 'Failed to submit my PM request' };
    }
}; 