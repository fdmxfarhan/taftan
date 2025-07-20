import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const getRequestDetail = async (requestId, navigation) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: {
                "requestInfo": {
                    "serviceGroup": 1,
                    "delayReasonIds": [],
                    "requestStatusList": [],
                    "requestId": 1041444,
                    "reportTypeId": 8,
                    "deviceId": 11626,
                    "deviceStatus": 1,
                    "deviceTypeId": 29,
                    "deviceModelId": 15,
                    "deviceBrandId": 3,
                    "contractNum": "1402/5506",
                    "contractName": "پشتیبانی خودپرداز بانک ملت ـ 1402",
                    "contractId": 268,
                    "branchId": 41857,
                    "areaId": 26,
                    "persianRequestDeadLine": "1403/08/16 16:02:00",
                    "persianInsertedDate": "1403/08/16 12:02:35",
                    "persianEndDate": "-",
                    "persianCurrentDate": "1403/08/16 12:02:37",
                    "persianStartDate": "1403/08/16 12:02:35",
                    "action": "ایجاد کار",
                    "customerName": "ملت",
                    "customerId": 20038,
                    "areaName": "دفتر غرب تهران",
                    "customerInsertName": "فاطمه حمزه",
                    "expertName": null,
                    "branchName": "خزانه داری خراسان رضوی-773",
                    "reportHasFile": 0,
                    "startDate": 14030816120235,
                    "insertedDate": 14030816120235,
                    "description": "درج درخواست ",
                    "lastState": "ارجاع به دفتر",
                    "branchCode": "773",
                    "requestActingTime": "17:00:57",
                    "requestDeadLineTime": "00:03:59",
                    "cancelReason": null,
                    "insertdelayCause": 1
                },
                "damageInfo": {
                    "id": 592723,
                    "deviceId": 11626,
                    "userApplicator": "علی احمدی",
                    "description": null,
                    "deviceTerminal": "4218",
                    "deviceSerial": "5300482189",
                    "deviceName": "باجه ایرانسل ",
                    "modelTitle": "Wincor 1500 Xe USB",
                    "phone": "34343434",
                    "serviceName": "خرابی چاپگر ژورنال",
                    "insertRepeaCause": 0,
                    "insertDamageCauseAfterPM": 0,
                    "isPilot": 0,
                    "repeatCauseTitle": null,
                    "failureCauseAfterPMRequestTitle": null
                },
                "siteInfo": null,
                "projectInfo": null,
                "installInfo": null,
                "pmInfo": null
            }
        };
        const response = await api.get(`/RequestController/GetRequestDetail/${requestId}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'UserAgent': 'Mobile',
            }
        });
        return { success: true, data: response.data };

    } catch (error) {
        console.log('Error submitting GetRequestDetail request:', error);
        
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
        
        return { success: false, error: 'Failed to submit GetRequestDetail request' };
    }
};



// var a =
// {
//     "damageInfo": {
//         "description": "بالا نمی آید",
//         "deviceId": 21527,
//         "deviceName": "شعبه بازار ارومیه",
//         "deviceSerial": "37945171",
//         "deviceTerminal": "1819",
//         "failureCauseAfterPMRequestTitle": null,
//         "id": 3,
//         "insertDamageCauseAfterPM": 0,
//         "insertRepeaCause": 0,
//         "isPilot": 0,
//         "modelTitle": "NCR 5886",
//         "phone": "05138403751",
//         "repeatCauseTitle": null,
//         "serviceName": "خرابی نرم‌افزاری",
//         "userApplicator": "زارع"
//     },
//     "installInfo": null,
//     "pmInfo": null,
//     "projectInfo": null,
//     "requestInfo": {
//         "action": "ثبت اقدام",
//         "areaId": 6,
//         "areaName": "مدیریت امور عملیات",
//         "branchCode": null,
//         "branchId": 36235,
//         "branchName": null,
//         "cancelReason": null,
//         "contractId": null,
//         "contractName": null,
//         "contractNum": null,
//         "customerId": 20038,
//         "customerInsertName": "لیلا شاپوری",
//         "customerName": "بانک ملت",
//         "delayReasonIds": [],
//         "description": " ثبت اقدام سرویس ",
//         "deviceBrandKey": "c59ff5c8-866a-4617-8843-7e3d2a165096",
//         "deviceId": 21527,
//         "deviceModelKey": "e4560eef-320d-4e66-933c-f0107aa69a6b",
//         "deviceStatus": 1,
//         "deviceTypeKey": "454c3f79-fea0-445e-b293-38610649db72",
//         "expertName": "لیلا شاپوری",
//         "insertdelayCause": 1,
//         "insertedDate": 13961106100622,
//         "lastState": "در حال اقدام",
//         "persianCurrentDate": "1403/10/02 13:17:20",
//         "persianEndDate": "1396/11/06 13:00:00",
//         "persianInsertedDate": "1396/11/06 10:06:22",
//         "persianRequestDeadLine": "1396/11/06 16:06:00",
//         "persianStartDate": "1396/11/06 10:06:22",
//         "reportHasFile": 1,
//         "reportTypeId": 8,
//         "requestActingTime": "00:02:54",
//         "requestDeadLineTime": "00:06:00",
//         "requestId": 364041,
//         "requestStatusList": [],
//         "serviceGroup": 1,
//         "startDate": 13961106100622
//     },
//     "siteInfo": null
// }