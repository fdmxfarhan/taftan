import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const GetActionTypeList = async (deviceId) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: [
                {
                    "id": 1,
                    "title": "مراجعه",
                    "isActive": true,
                    "description": "مراجعه"
                },
                {
                    "id": 3,
                    "title": "اقدام از طریق مانیتورینگ",
                    "isActive": true,
                    "description": "اقدام از طریق مانیتورینگ"
                },
                {
                    "id": 5,
                    "title": "راهنمایی تلفنی",
                    "isActive": true,
                    "description": "راهنمایی تلفنی"
                },
                {
                    "id": 6,
                    "title": "tt",
                    "isActive": true,
                    "description": "tt"
                },
                {
                    "id": 7,
                    "title": "99",
                    "isActive": true,
                    "description": "99"
                }
            ]
        };
        const response = await api.get(`/ActionType/GetActionTypeList?isActive=true`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'UserAgent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting GetActionTypeList request:', error);
        return { success: false, error: 'Failed to submit GetActionTypeList request' };
    }
};


