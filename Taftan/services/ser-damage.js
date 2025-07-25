import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const submitDamageRequest = async (skip, take, navigation) => {
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
                        "serviceName": "خرابی چاپگر رسید مشتری",
                        "lastState": "OfficeView",
                        "deviceId": 11546,
                        "reportHasFile": 0,
                        "persianLastState": "مشاهده مدیر",
                        "insertedDate": 14030816123758,
                        "persianInsertedDate": "1403/08/16",
                        "endDate": null,
                        "requestDeadLine": 14030816163700,
                        "SLAStyle": 150,
                        "duplicateDamgeNumber": 0,
                        "isPilot": 0
                    },
                    {
                        "id": 592727,
                        "requestId": 1041448,
                        "deviceName": "باجه دادسرای وحدت",
                        "customerName": "ملت",
                        "deviceTerminal": "4254",
                        "deviceModelTitle": "Wincor 1500 Xe USB",
                        "areaName": "دفتر غرب تهران",
                        "currentUserName": "حسین صبوری",
                        "customerInsertName": "فاطمه حمزه",
                        "branchName": "خزانه داری خراسان رضوی",
                        "serviceName": "خرابی چاپگر رسید مشتری",
                        "lastState": "SendToOffice",
                        "deviceId": 11628,
                        "reportHasFile": 0,
                        "persianLastState": "ارجاع به دفتر",
                        "insertedDate": 14030816123704,
                        "persianInsertedDate": "1403/08/16",
                        "endDate": null,
                        "requestDeadLine": 14030816163700,
                        "SLAStyle": 150,
                        "duplicateDamgeNumber": 2,
                        "isPilot": 0
                    },
                    {
                        "id": 592726,
                        "requestId": 1041447,
                        "deviceName": "شعبه اشکاوند اصفهان",
                        "customerName": "ملت",
                        "deviceTerminal": "5541",
                        "deviceModelTitle": "Eastcom 2050 Xe USB",
                        "areaName": "دفتر غرب تهران",
                        "currentUserName": "حسین صبوری",
                        "customerInsertName": "فاطمه حمزه",
                        "branchName": "شعبه اشکاوند اصفهان",
                        "serviceName": "خرابی چاپگر ژورنال",
                        "lastState": "SendToOffice",
                        "deviceId": 22556,
                        "reportHasFile": 0,
                        "persianLastState": "ارجاع به دفتر",
                        "insertedDate": 14030816123543,
                        "persianInsertedDate": "1403/08/16",
                        "endDate": null,
                        "requestDeadLine": 14030816163500,
                        "SLAStyle": 150,
                        "duplicateDamgeNumber": 0,
                        "isPilot": 0
                    },
                    {
                        "id": 592725,
                        "requestId": 1041446,
                        "deviceName": "باجه دادسرای وحدت",
                        "customerName": "ملت",
                        "deviceTerminal": "4254",
                        "deviceModelTitle": "Wincor 1500 Xe USB",
                        "areaName": "دفتر غرب تهران",
                        "currentUserName": "حسین صبوری",
                        "customerInsertName": "فاطمه حمزه",
                        "branchName": "خزانه داری خراسان رضوی",
                        "serviceName": "خرابی چاپگر رسید مشتری",
                        "lastState": "SendToOffice",
                        "deviceId": 11628,
                        "reportHasFile": 0,
                        "persianLastState": "ارجاع به دفتر",
                        "insertedDate": 14030816123312,
                        "persianInsertedDate": "1403/08/16",
                        "endDate": null,
                        "requestDeadLine": 14030816163300,
                        "SLAStyle": 150,
                        "duplicateDamgeNumber": 1,
                        "isPilot": 0
                    },
                    {
                        "id": 592724,
                        "requestId": 1041445,
                        "deviceName": "باجه دادسرای وحدت",
                        "customerName": "ملت",
                        "deviceTerminal": "4254",
                        "deviceModelTitle": "Wincor 1500 Xe USB",
                        "areaName": "دفتر غرب تهران",
                        "currentUserName": "حسین صبوری",
                        "customerInsertName": "فاطمه حمزه",
                        "branchName": "خزانه داری خراسان رضوی",
                        "serviceName": "خرابی پانل اپراتوری",
                        "lastState": "SendToOffice",
                        "deviceId": 11628,
                        "reportHasFile": 0,
                        "persianLastState": "ارجاع به دفتر",
                        "insertedDate": 14030816122026,
                        "persianInsertedDate": "1403/08/16",
                        "endDate": null,
                        "requestDeadLine": 14030816162000,
                        "SLAStyle": 150,
                        "duplicateDamgeNumber": 0,
                        "isPilot": 0
                    },
                    {
                        "id": 592723,
                        "requestId": 1041444,
                        "deviceName": "باجه ایرانسل ",
                        "customerName": "ملت",
                        "deviceTerminal": "4218",
                        "deviceModelTitle": "Wincor 1500 Xe USB",
                        "areaName": "دفتر غرب تهران",
                        "currentUserName": "حسین صبوری",
                        "customerInsertName": "فاطمه حمزه",
                        "branchName": "خزانه داری خراسان رضوی",
                        "serviceName": "خرابی چاپگر ژورنال",
                        "lastState": "SendToOffice",
                        "deviceId": 11626,
                        "reportHasFile": 0,
                        "persianLastState": "ارجاع به دفتر",
                        "insertedDate": 14030816120235,
                        "persianInsertedDate": "1403/08/16",
                        "endDate": null,
                        "requestDeadLine": 14030816160200,
                        "SLAStyle": 150,
                        "duplicateDamgeNumber": 0,
                        "isPilot": 0
                    },
                    {
                        "id": 592722,
                        "requestId": 1041443,
                        "deviceName": "باجه فولاد مبارکه اصفهان",
                        "customerName": "ملت",
                        "deviceTerminal": "2869",
                        "deviceModelTitle": "Wincor 2050 Xe",
                        "areaName": "دفتر غرب تهران",
                        "currentUserName": "حسین صبوری",
                        "customerInsertName": "ادمین سیستم",
                        "branchName": "شعبه اصفهان",
                        "serviceName": "خرابی چاپگر ژورنال",
                        "lastState": "SendToOffice",
                        "deviceId": 15989,
                        "reportHasFile": 0,
                        "persianLastState": "ارجاع به دفتر",
                        "insertedDate": 14030812092751,
                        "persianInsertedDate": "1403/08/12",
                        "endDate": null,
                        "requestDeadLine": 14030812142700,
                        "SLAStyle": 150,
                        "duplicateDamgeNumber": 0,
                        "isPilot": 0
                    },
                    {
                        "id": 582723,
                        "requestId": 1031444,
                        "deviceName": "شعبه شرکت یاس",
                        "customerName": "به پرداخت",
                        "deviceTerminal": "20103015",
                        "deviceModelTitle": "Eastcom 8200",
                        "areaName": "دفتر شمال تهران",
                        "currentUserName": "آرش سرخیل",
                        "customerInsertName": "ادمین سیستم",
                        "branchName": "شرکت به پرداخت ملت",
                        "serviceName": "خرابی چاپگر رسید مشتری",
                        "lastState": "SendToOffice",
                        "deviceId": 39290,
                        "reportHasFile": 1,
                        "persianLastState": "ارجاع به دفتر",
                        "insertedDate": 14030809094737,
                        "persianInsertedDate": "1403/08/09",
                        "endDate": null,
                        "requestDeadLine": 14030811140000,
                        "SLAStyle": 150,
                        "duplicateDamgeNumber": 0,
                        "isPilot": 0
                    },
                    {
                        "id": 582722,
                        "requestId": 1031443,
                        "deviceName": "باجه شرکت توسن ـ ساختمان ارمغان",
                        "customerName": "آدونیس",
                        "deviceTerminal": "undefined954",
                        "deviceModelTitle": "Eastcom 280",
                        "areaName": "دفتر شمال تهران",
                        "currentUserName": "آرش سرخیل",
                        "customerInsertName": "ادمین سیستم",
                        "branchName": "واحد نصب آدونیس",
                        "serviceName": "خرابی چاپگر رسید مشتری",
                        "lastState": "SendToOffice",
                        "deviceId": 25899,
                        "reportHasFile": 0,
                        "persianLastState": "ارجاع به دفتر",
                        "insertedDate": 14030808152536,
                        "persianInsertedDate": "1403/08/08",
                        "endDate": null,
                        "requestDeadLine": 14030822100000,
                        "SLAStyle": 150,
                        "duplicateDamgeNumber": 0,
                        "isPilot": 0
                    },
                    {
                        "id": 582721,
                        "requestId": 1031411,
                        "deviceName": "باجه بیمارستان امام خمینی",
                        "customerName": "به پرداخت",
                        "deviceTerminal": "undefined3002",
                        "deviceModelTitle": "Eastcom 8200",
                        "areaName": "دفتر مرکز تهران",
                        "currentUserName": "مهدی راستی",
                        "customerInsertName": "ادمین سیستم",
                        "branchName": "شرکت به پرداخت ملت",
                        "serviceName": "خرابی چاپگر رسید مشتری",
                        "lastState": "SendToOffice",
                        "deviceId": 36268,
                        "reportHasFile": 0,
                        "persianLastState": "ارجاع به دفتر",
                        "insertedDate": 14030725113053,
                        "persianInsertedDate": "1403/07/25",
                        "endDate": null,
                        "requestDeadLine": 14030727160000,
                        "SLAStyle": 150,
                        "duplicateDamgeNumber": 0,
                        "isPilot": 0
                    }
                ],
                "TotalCount": 3862
            }
        };
        const response = await api.post('/RequestDamageController/loadAllDamageRequestList', {
            "skip": skip,
            "take": take,
            "sort": [{
                "field": "id",
                "dir": "desc"
            }],
            "filter": {
                "logic": "and",
                "filters": [{
                    "field": "IsArchived",
                    "operator": "Eq",
                    "value": 0
                }]
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
        console.log('Error submitting /RequestDamageController/loadAllDamageRequestList request:', error);
        
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
        
        return { success: false, error: 'Failed to submit damage request' };
    }
};


