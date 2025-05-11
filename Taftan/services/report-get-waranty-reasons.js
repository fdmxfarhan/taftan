import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const GetWarrantyListByRequestId = async (requestId, navigation) => {
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
                'User-Agent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submiting /RequestController/GetWarrantyListByRequestId request:', error);
        
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
        
        return { success: false, error: 'Failed to submit request' };
    }
};


