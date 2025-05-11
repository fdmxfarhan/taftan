import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const loadMyDamageRequestList = async (skip, take, navigation) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: {
                "Data": [
                    {
                        "id": 602739,
                        "requestId": 1051460,
                        "deviceName": "شعبه شعبه چهارباغ 1",
                        "customerName": "سامان",
                        "deviceTerminal": "1280",
                        "deviceModelTitle": "Eastcom 285",
                        "areaName": "دفتر غرب تهران",
                        "currentUserName": "فرزانه وفا",
                        "customerInsertName": "ادمین سیستم",
                        "branchName": "شعبه چهار باغ بالا اصفهان",
                        "serviceName": "خرابی چاپگر رسید مشتری",
                        "lastState": "DoneOffice",
                        "deviceId": 21085,
                        "reportHasFile": 1,
                        "persianLastState": "بستن دفتر",
                        "insertedDate": 14031010113511,
                        "persianInsertedDate": "1403/10/10",
                        "endDate": 14031010102500,
                        "requestDeadLine": 14031021130000,
                        "SLAStyle": 0,
                        "duplicateDamgeNumber": 0,
                        "isPilot": null
                    },
                    {
                        "id": 60212739,
                        "requestId": 1051460,
                        "deviceName": "شعبه شعبه چهارباغ 1",
                        "customerName": "سامان",
                        "deviceTerminal": "1280",
                        "deviceModelTitle": "Eastcom 285",
                        "areaName": "دفتر غرب تهران",
                        "currentUserName": "فرزانه وفا",
                        "customerInsertName": "ادمین سیستم",
                        "branchName": "شعبه چهار باغ بالا اصفهان",
                        "serviceName": "خرابی چاپگر رسید مشتری",
                        "lastState": "DoneOffice",
                        "deviceId": 21085,
                        "reportHasFile": 1,
                        "persianLastState": "بستن دفتر",
                        "insertedDate": 14031010113511,
                        "persianInsertedDate": "1403/10/10",
                        "endDate": 14031010102500,
                        "requestDeadLine": 14031021130000,
                        "SLAStyle": 0,
                        "duplicateDamgeNumber": 0,
                        "isPilot": null
                    },{
                        "id": 6027239,
                        "requestId": 1051460,
                        "deviceName": "شعبه شعبه چهارباغ 1",
                        "customerName": "سامان",
                        "deviceTerminal": "1280",
                        "deviceModelTitle": "Eastcom 285",
                        "areaName": "دفتر غرب تهران",
                        "currentUserName": "فرزانه وفا",
                        "customerInsertName": "ادمین سیستم",
                        "branchName": "شعبه چهار باغ بالا اصفهان",
                        "serviceName": "خرابی چاپگر رسید مشتری",
                        "lastState": "DoneOffice",
                        "deviceId": 21085,
                        "reportHasFile": 1,
                        "persianLastState": "بستن دفتر",
                        "insertedDate": 14031010113511,
                        "persianInsertedDate": "1403/10/10",
                        "endDate": 14031010102500,
                        "requestDeadLine": 14031021130000,
                        "SLAStyle": 0,
                        "duplicateDamgeNumber": 0,
                        "isPilot": null
                    },{
                        "id": 6027156739,
                        "requestId": 1051460,
                        "deviceName": "شعبه شعبه چهارباغ 1",
                        "customerName": "سامان",
                        "deviceTerminal": "1280",
                        "deviceModelTitle": "Eastcom 285",
                        "areaName": "دفتر غرب تهران",
                        "currentUserName": "فرزانه وفا",
                        "customerInsertName": "ادمین سیستم",
                        "branchName": "شعبه چهار باغ بالا اصفهان",
                        "serviceName": "خرابی چاپگر رسید مشتری",
                        "lastState": "DoneOffice",
                        "deviceId": 21085,
                        "reportHasFile": 1,
                        "persianLastState": "بستن دفتر",
                        "insertedDate": 14031010113511,
                        "persianInsertedDate": "1403/10/10",
                        "endDate": 14031010102500,
                        "requestDeadLine": 14031021130000,
                        "SLAStyle": 0,
                        "duplicateDamgeNumber": 0,
                        "isPilot": null
                    },
                    {
                        "id": 592731,
                        "requestId": 1041455,
                        "deviceName": "شعبه مرکزی اصفهان",
                        "customerName": "ملت",
                        "deviceTerminal": "3799",
                        "deviceModelTitle": "Wincor 2050 Xe USB",
                        "areaName": "دفتر غرب تهران",
                        "currentUserName": "حسین صبوری",
                        "customerInsertName": "ادمین سیستم",
                        "branchName": "شعبه اصفهان",
                        "serviceName": "خرابی چاپگر رسید مشتری",
                        "lastState": "Acting",
                        "deviceId": 12618,
                        "reportHasFile": 0,
                        "persianLastState": "در حال اقدام",
                        "insertedDate": 14030918150925,
                        "persianInsertedDate": "1403/09/18",
                        "endDate": null,
                        "requestDeadLine": 14030919090000,
                        "SLAStyle": 150,
                        "duplicateDamgeNumber": 0,
                        "isPilot": null
                    },
                    {
                        "id": 592730,
                        "requestId": 1041451,
                        "deviceName": "باجه امور مالی",
                        "customerName": "ملت",
                        "deviceTerminal": "48866031",
                        "deviceModelTitle": "Kodak i2600",
                        "areaName": "دفتر غرب تهران",
                        "currentUserName": "حسین صبوری",
                        "customerInsertName": "فاطمه حمزه",
                        "branchName": "شعبه گلستان پاسداران",
                        "serviceName": "خرابی اسکنر",
                        "lastState": "OfficeView",
                        "deviceId": 72110,
                        "reportHasFile": 0,
                        "persianLastState": "مشاهده مدیر",
                        "insertedDate": 14030910092249,
                        "persianInsertedDate": "1403/09/10",
                        "endDate": null,
                        "requestDeadLine": 14030912130000,
                        "SLAStyle": 150,
                        "duplicateDamgeNumber": 0,
                        "isPilot": null
                    },
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
                        "isPilot": null
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
                        "isPilot": null
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
                        "isPilot": null
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
                        "isPilot": null
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
                        "isPilot": null
                    }
                ],
                "TotalCount": 40
            }
        };

        const response = await api.post('/RequestDamageController/loadMyDamageRequestList', {
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
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'User-Agent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /RequestDamageController/loadMyDamageRequestList request:', error);
        
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


