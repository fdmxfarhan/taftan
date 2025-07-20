import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const loadRequestHistoryList = async (requestId) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: {
                "Data": [
                    {
                        "id": 6368646,
                        "requestId": 1031359,
                        "areaId": 26,
                        "action": "expertAssign",
                        "areaName": "دفتر غرب تهران",
                        "actorName": "حسین صبوری",
                        "state": "Acting",
                        "description": "کارشناس امیررضا شربیانیبه عنوان کارشناس کمکی/فرعی برای این درخواست انتخاب شدند.",
                        "actionTime": "13:50:17",
                        "actionDate": 14030910135017,
                        "persianActionDate": "1403/09/10 13:50:17",
                        "persianState": "در حال اقدام",
                        "persianAction": "تخصیص کارشناس فرعی"
                    },
                    {
                        "id": 6368645,
                        "requestId": 1031359,
                        "areaId": 26,
                        "action": "SendToExpert",
                        "areaName": "دفتر غرب تهران",
                        "actorName": "حسین صبوری",
                        "state": "Acting",
                        "description": "  ارجاع به کارشناس  حسین صبوری",
                        "actionTime": "13:50:09",
                        "actionDate": 14030910135009,
                        "persianActionDate": "1403/09/10 13:50:09",
                        "persianState": "در حال اقدام",
                        "persianAction": "تخصیص کارشناس"
                    },
                    {
                        "id": 6368644,
                        "requestId": 1031359,
                        "areaId": 26,
                        "action": "SendToExpert",
                        "areaName": "دفتر غرب تهران",
                        "actorName": "حسین صبوری",
                        "state": "Acting",
                        "description": "  ارجاع به کارشناس  امیررضا شربیانی",
                        "actionTime": "13:50:00",
                        "actionDate": 14030910135000,
                        "persianActionDate": "1403/09/10 13:50:00",
                        "persianState": "در حال اقدام",
                        "persianAction": "تخصیص کارشناس"
                    },
                    {
                        "id": 6368641,
                        "requestId": 1031359,
                        "areaId": 26,
                        "action": "RequestStatus",
                        "areaName": "دفتر غرب تهران",
                        "actorName": "حسین صبوری",
                        "state": "Acting",
                        "description": " ثبت اقدام سرویس ",
                        "actionTime": "09:20:47",
                        "actionDate": 14030910092047,
                        "persianActionDate": "1403/09/10 09:20:47",
                        "persianState": "در حال اقدام",
                        "persianAction": "ثبت اقدام"
                    },
                    {
                        "id": 6358641,
                        "requestId": 1031359,
                        "areaId": 26,
                        "action": "RequestStatus",
                        "areaName": "دفتر غرب تهران",
                        "actorName": "حسین صبوری",
                        "state": "Acting",
                        "description": " ثبت اقدام سرویس ",
                        "actionTime": "15:36:18",
                        "actionDate": 14030904153618,
                        "persianActionDate": "1403/09/04 15:36:18",
                        "persianState": "در حال اقدام",
                        "persianAction": "ثبت اقدام"
                    },
                    {
                        "id": 6358640,
                        "requestId": 1031359,
                        "areaId": 26,
                        "action": "RequestStatus",
                        "areaName": "دفتر غرب تهران",
                        "actorName": "حسین صبوری",
                        "state": "Acting",
                        "description": " ویرایش اقدام سرویس ",
                        "actionTime": "09:28:10",
                        "actionDate": 14030904092810,
                        "persianActionDate": "1403/09/04 09:28:10",
                        "persianState": "در حال اقدام",
                        "persianAction": "ثبت اقدام"
                    },
                    {
                        "id": 6358639,
                        "requestId": 1031359,
                        "areaId": 26,
                        "action": "InsertReport",
                        "areaName": "دفتر غرب تهران",
                        "actorName": "حسین صبوری",
                        "state": "Acting",
                        "description": "درج گزارش کار ",
                        "actionTime": "09:27:37",
                        "actionDate": 14030904092737,
                        "persianActionDate": "1403/09/04 09:27:37",
                        "persianState": "در حال اقدام",
                        "persianAction": "ثبت گزارش کار"
                    },
                    {
                        "id": 6358638,
                        "requestId": 1031359,
                        "areaId": 26,
                        "action": "RequestStatus",
                        "areaName": "دفتر غرب تهران",
                        "actorName": "حسین صبوری",
                        "state": "Acting",
                        "description": " ثبت اقدام سرویس ",
                        "actionTime": "09:23:23",
                        "actionDate": 14030904092323,
                        "persianActionDate": "1403/09/04 09:23:23",
                        "persianState": "در حال اقدام",
                        "persianAction": "ثبت اقدام"
                    },
                    {
                        "id": 6348541,
                        "requestId": 1031359,
                        "areaId": 26,
                        "action": "InsertReport",
                        "areaName": "دفتر غرب تهران",
                        "actorName": "حسین صبوری",
                        "state": "Acting",
                        "description": "درج گزارش کار ",
                        "actionTime": "09:07:34",
                        "actionDate": 14030529090734,
                        "persianActionDate": "1403/05/29 09:07:34",
                        "persianState": "در حال اقدام",
                        "persianAction": "ثبت گزارش کار"
                    },
                    {
                        "id": 6348540,
                        "requestId": 1031359,
                        "areaId": 26,
                        "action": "RequestStatus",
                        "areaName": "دفتر غرب تهران",
                        "actorName": "حسین صبوری",
                        "state": "Acting",
                        "description": " ثبت اقدام سرویس ",
                        "actionTime": "09:06:07",
                        "actionDate": 14030529090607,
                        "persianActionDate": "1403/05/29 09:06:07",
                        "persianState": "در حال اقدام",
                        "persianAction": "ثبت اقدام"
                    }
                ],
                "TotalCount": 13
            }
        };

        const response = await api.post(`/RequestController/loadRequestHistoryList`, {
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
                        "field": "requestId",
                        "operator": "contains",
                        "value": requestId
                    }
                ]
            }
        }, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'UserAgent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting loadRequestHistoryList request:', error);
        return { success: false, error: 'Failed to submit loadRequestHistoryList request' };
    }
};


