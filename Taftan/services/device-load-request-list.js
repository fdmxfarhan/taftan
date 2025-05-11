import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const loadDeviceRequestList = async (deviceId) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: {
                "Data": [
                    {
                        "id": 1031359,
                        "deviceId": 36155,
                        "requestId": 1031359,
                        "insertedDate": 14030529090356,
                        "endDate": null,
                        "persianInsertedDate": "1403/05/29 09:03:56",
                        "persianEndDate": "",
                        "customerName": "به پرداخت",
                        "branchName": "شرکت به پرداخت ملت",
                        "areaNAme": "دفتر غرب تهران",
                        "persianLastState": "در حال اقدام",
                        "lastState": "Acting",
                        "serviceGroupTitle": "رفع خرابی",
                        "serviceGroupId": 1
                    },
                    {
                        "id": 1021296,
                        "deviceId": 36155,
                        "requestId": 1021296,
                        "insertedDate": 14030129132734,
                        "endDate": null,
                        "persianInsertedDate": "1403/01/29 13:27:34",
                        "persianEndDate": "",
                        "customerName": "به پرداخت",
                        "branchName": "شرکت به پرداخت ملت",
                        "areaNAme": "دفتر شمال تهران",
                        "persianLastState": "ارجاع به دفتر",
                        "lastState": "SendToOffice",
                        "serviceGroupTitle": "رفع خرابی",
                        "serviceGroupId": 1
                    },
                    {
                        "id": 1021231,
                        "deviceId": 36155,
                        "requestId": 1021231,
                        "insertedDate": 14030121082159,
                        "endDate": null,
                        "persianInsertedDate": "1403/01/21 08:21:59",
                        "persianEndDate": "",
                        "customerName": "به پرداخت",
                        "branchName": "شرکت به پرداخت ملت",
                        "areaNAme": "دفتر غرب تهران",
                        "persianLastState": "ارجاع به دفتر",
                        "lastState": "SendToOffice",
                        "serviceGroupTitle": "پروژه",
                        "serviceGroupId": 7
                    },
                    {
                        "id": 1001212,
                        "deviceId": 36155,
                        "requestId": 1001212,
                        "insertedDate": 14021128084052,
                        "endDate": null,
                        "persianInsertedDate": "1402/11/28 08:40:52",
                        "persianEndDate": "",
                        "customerName": "به پرداخت",
                        "branchName": "شرکت به پرداخت ملت",
                        "areaNAme": "دفتر تبریز",
                        "persianLastState": "مشاهده مدیر",
                        "lastState": "OfficeView",
                        "serviceGroupTitle": "رفع خرابی",
                        "serviceGroupId": 1
                    },
                    {
                        "id": 1001211,
                        "deviceId": 36155,
                        "requestId": 1001211,
                        "insertedDate": 14021128083729,
                        "endDate": null,
                        "persianInsertedDate": "1402/11/28 08:37:29",
                        "persianEndDate": "",
                        "customerName": "به پرداخت",
                        "branchName": "شرکت به پرداخت ملت",
                        "areaNAme": "دفتر تبریز",
                        "persianLastState": "ارجاع به دفتر",
                        "lastState": "SendToOffice",
                        "serviceGroupTitle": "رفع خرابی",
                        "serviceGroupId": 1
                    },
                    {
                        "id": 1001210,
                        "deviceId": 36155,
                        "requestId": 1001210,
                        "insertedDate": 14021128083348,
                        "endDate": null,
                        "persianInsertedDate": "1402/11/28 08:33:48",
                        "persianEndDate": "",
                        "customerName": "به پرداخت",
                        "branchName": "شرکت به پرداخت ملت",
                        "areaNAme": "دفتر تبریز",
                        "persianLastState": "ارجاع به دفتر",
                        "lastState": "SendToOffice",
                        "serviceGroupTitle": "رفع خرابی",
                        "serviceGroupId": 1
                    },
                    {
                        "id": 1001209,
                        "deviceId": 36155,
                        "requestId": 1001209,
                        "insertedDate": 14021117111207,
                        "endDate": null,
                        "persianInsertedDate": "1402/11/17 11:12:07",
                        "persianEndDate": "",
                        "customerName": "به پرداخت",
                        "branchName": "شرکت به پرداخت ملت",
                        "areaNAme": "ناحیه 7",
                        "persianLastState": "انتخاب دفتر",
                        "lastState": "ChooseOffice",
                        "serviceGroupTitle": "رفع خرابی",
                        "serviceGroupId": 1
                    },
                    {
                        "id": 1001206,
                        "deviceId": 36155,
                        "requestId": 1001206,
                        "insertedDate": 14021116150544,
                        "endDate": null,
                        "persianInsertedDate": "1402/11/16 15:05:44",
                        "persianEndDate": "",
                        "customerName": "به پرداخت",
                        "branchName": "شرکت به پرداخت ملت",
                        "areaNAme": "دفتر غرب تهران",
                        "persianLastState": "مشاهده مدیر",
                        "lastState": "OfficeView",
                        "serviceGroupTitle": "رفع خرابی",
                        "serviceGroupId": 1
                    },
                    {
                        "id": 1001199,
                        "deviceId": 36155,
                        "requestId": 1001199,
                        "insertedDate": 14021115104056,
                        "endDate": null,
                        "persianInsertedDate": "1402/11/15 10:40:56",
                        "persianEndDate": "",
                        "customerName": "به پرداخت",
                        "branchName": "شرکت به پرداخت ملت",
                        "areaNAme": "مدیریت امور عملیات",
                        "persianLastState": "ارجاع به دفتر",
                        "lastState": "SendToOffice",
                        "serviceGroupTitle": "پروژه",
                        "serviceGroupId": 7
                    },
                    {
                        "id": 1001192,
                        "deviceId": 36155,
                        "requestId": 1001192,
                        "insertedDate": 14021115103215,
                        "endDate": null,
                        "persianInsertedDate": "1402/11/15 10:32:15",
                        "persianEndDate": "",
                        "customerName": "به پرداخت",
                        "branchName": "شرکت به پرداخت ملت",
                        "areaNAme": "دفتر غرب تهران",
                        "persianLastState": "ارجاع به دفتر",
                        "lastState": "SendToOffice",
                        "serviceGroupTitle": "پروژه",
                        "serviceGroupId": 7
                    }
                ],
                "TotalCount": 16
            }
        };

        const response = await api.post(`/Device/loadDeviceRequestList`, {
            "skip": 0,
            "take": 10,
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
                        "field": "deviceId",
                        "operator": "contains",
                        "value": deviceId
                    }
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
        console.log('Error submitting loadDeviceRequestList request:', error);
        return { success: false, error: 'Failed to submit loadDeviceRequestList request' };
    }
};


