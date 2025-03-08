import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const GetJobTitleByReportTypeId = async (reportTypeId) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: [
                {
                    "id": 7,
                    "title": "استخراج پیکربندی سخت افزاری",
                    "jobCode": "107",
                    "description": "استخراج پیکربندی سخت افزاری"
                },
                {
                    "id": 14,
                    "title": "آموزش اپراتور",
                    "jobCode": "114",
                    "description": "آموزش اپراتور"
                },
                {
                    "id": 15,
                    "title": "آموزش تغییر رمز گاوصندوق",
                    "jobCode": "115",
                    "description": "آموزش تغییر رمز گاوصندوق"
                },
                {
                    "id": 16,
                    "title": "بارگذاری Firmware",
                    "jobCode": "116",
                    "description": "بارگذاری Firmware"
                },
                {
                    "id": 17,
                    "title": "بارگذاری Font",
                    "jobCode": "117",
                    "description": "بارگذاری Font"
                }
            ]
        };
        const response = await api.get(`/JobTitle/GetJobTitleByReportTypeId?reportTypeId=${reportTypeId}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /JobTitle/GetJobTitleByReportTypeId request:', error);
        return { success: false, error: 'Failed to submit /JobTitle/GetJobTitleByReportTypeId request' };
    }
};


