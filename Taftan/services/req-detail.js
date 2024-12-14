import api from '../config/api';
import { use_local_data } from '../config/consts';

export const getRequestDetail = async (requestId) => {
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
        const response = await api.get(`/RequestController/GetRequestDetail/${requestId}`);
        return { success: true, data: response.data };

    } catch (error) {
        console.log('Error submitting GetRequestDetail request:', error);
        return { success: false, error: 'Failed to submit GetRequestDetail request' };
    }
};


