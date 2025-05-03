import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const GetWarrantyListByRequestId = async (requestId) => {
    const authData = await getAuthData();
    var response = null;
    try {
        if (use_local_data) return {
            success: true, data: [
                {
                    "Id": 11,
                    "description": "هرگونه شکستگی بدنه دستگاه",
                    "isActive": true,
                    "comment": null
                },
                {
                    "Id": 20,
                    "description": "استفاده از تجهیزات جانبی غیراستاندارد که شرایط نصب فیزیکی را مخدوش نموده است مانند پایه غیرقابل تنظیم یا سایبان متصل به دستگاه",
                    "isActive": true,
                    "comment": null
                }
            ]
        };
        response = await api.get(`/RequestController/GetWarrantyListByRequestId?requestId=${requestId}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submiting /RequestController/GetWarrantyListByRequestId request:', error);
        return { success: false };
    }
};


