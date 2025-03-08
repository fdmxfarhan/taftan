import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const loadAreaForSLList = async (customerId, branchId) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: [
                {
                    "id": 6,
                    "title": "مدیریت امور عملیات",
                    "isSecondLayer": false
                },
                {
                    "id": 7,
                    "title": "حوزه عملیاتی سه",
                    "isSecondLayer": false
                },
                {
                    "id": 8,
                    "title": "حوزه عملیاتی دو",
                    "isSecondLayer": false
                },
                {
                    "id": 9,
                    "title": "حوزه عملیاتی یک",
                    "isSecondLayer": false
                },
                {
                    "id": 11,
                    "title": "ناحیه 1",
                    "isSecondLayer": false
                },
                {
                    "id": 12,
                    "title": "دفتر شمال تهران",
                    "isSecondLayer": false
                },
                {
                    "id": 13,
                    "title": "ناحیه 2",
                    "isSecondLayer": false
                },
                {
                    "id": 14,
                    "title": "دفتر شرق تهران",
                    "isSecondLayer": false
                },
                {
                    "id": 15,
                    "title": "ناحیه 8",
                    "isSecondLayer": false
                },
                {
                    "id": 16,
                    "title": "ناحیه 5",
                    "isSecondLayer": false
                },
                {
                    "id": 17,
                    "title": "دفتر کیش",
                    "isSecondLayer": false
                }
            ]
        };
        const response = await api.get(`/AreaController/loadAreaForSLList?api_key=off`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /AreaController/loadAreaForSLList request:', error);
        return { success: false, error: 'Failed to submit /AreaController/loadAreaForSLList request' };
    }
};


