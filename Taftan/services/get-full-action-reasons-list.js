import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const GetUnsuccessfullActionReasonList = async () => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: [
                {
                    "id": 1,
                    "title": "آماده نبودن بستر انجام کار",
                    "isActive": true,
                    "description": "در مراجعه قبلی"
                },
                {
                    "id": 2,
                    "title": "پایان ساعت کاری مشتری",
                    "isActive": true,
                    "description": "در مراجعه قبلی"
                },
                {
                    "id": 3,
                    "title": "عدم دسترسی به دستگاه",
                    "isActive": true,
                    "description": "در مراجعه قبلی"
                },
                {
                    "id": 4,
                    "title": "عدم دسترسی به کلیدهای تجهیز",
                    "isActive": true,
                    "description": "در مراجعه قبلی"
                },
                {
                    "id": 5,
                    "title": "ایراد در اپراتوری دستگاه",
                    "isActive": true,
                    "description": "ایرادی که منشا ایجاد آن اپراتور بوده باشد."
                },
                {
                    "id": 6,
                    "title": "عدم تشخیص خطا توسط کارشناس",
                    "isActive": true,
                    "description": "در مراجعه قبلی"
                },
                {
                    "id": 8,
                    "title": "کمبود قطعه یدکی",
                    "isActive": true,
                    "description": "در مراجعه قبلی"
                },
                {
                    "id": 9,
                    "title": "عدم امکان رفع مشکل از طریق سامانه مانیتورینگ",
                    "isActive": true,
                    "description": "اقدام ناموفق مانیتورینگ"
                },
                {
                    "id": 10,
                    "title": "عدم امکان رفع مشکل به صورت تلفنی",
                    "isActive": true,
                    "description": "اقدام ناموفق تلفنی"
                },
                {
                    "id": 11,
                    "title": "2",
                    "isActive": true,
                    "description": "2"
                }
            ]
        };
        const response = await api.get(`/UnsuccessfullActionReason/GetUnsuccessfullActionReasonList?isActive=true`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'User-Agent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /UnsuccessfullActionReason/GetUnsuccessfullActionReasonList request:', error);
        return { success: false, error: 'Failed to submit /UnsuccessfullActionReason/GetUnsuccessfullActionReasonList request' };
    }
};


