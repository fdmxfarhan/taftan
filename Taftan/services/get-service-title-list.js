import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const GetServiceTitleListByGrupId_DeviceType = async (devTypeId, serviceGroupId, navigation) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: [
                {
                    "Title": "خرابی کامپیوتر",
                    "Id": 64,
                    "Description": "ATM"
                },
                {
                    "Title": "خرابی نرم‌افزار مانیتورینگ آدونیس",
                    "Id": 70,
                    "Description": "ATM"
                },
                {
                    "Title": "تغییر تنظیمات دستگاه",
                    "Id": 69,
                    "Description": "ATM"
                },
                {
                    "Title": "تهیه اطلاعات",
                    "Id": 68,
                    "Description": "ATM"
                },
                {
                    "Title": "مشکلات امنیتی",
                    "Id": 14,
                    "Description": "ATM"
                },
                {
                    "Title": "ایراد عمومی",
                    "Id": 13,
                    "Description": "ATM"
                },
                {
                    "Title": "خرابی نرم‌افزاری",
                    "Id": 12,
                    "Description": "ATM"
                },
                {
                    "Title": "به‌روزرسانی نرم‌افزار",
                    "Id": 10,
                    "Description": "ATM"
                },
                {
                    "Title": "خرابی پرداخت کننده اسکناس",
                    "Id": 9,
                    "Description": "ATM"
                },
                {
                    "Title": "خرابی بارکدخوان",
                    "Id": 8,
                    "Description": "ATM"
                },
                {
                    "Title": "خرابی پانل اپراتوری",
                    "Id": 7,
                    "Description": "ATM"
                },
                {
                    "Title": "خرابی چاپگر ژورنال",
                    "Id": 6,
                    "Description": "ATM"
                },
                {
                    "Title": "خرابی چاپگر رسید مشتری",
                    "Id": 5,
                    "Description": "ATM"
                },
                {
                    "Title": "خرابی صفحه کلید",
                    "Id": 4,
                    "Description": "ATM"
                },
                {
                    "Title": "خرابی صفحه نمایش",
                    "Id": 3,
                    "Description": "ATM"
                },
                {
                    "Title": "خرابی دوربین",
                    "Id": 2,
                    "Description": "ATM"
                },
                {
                    "Title": "خرابی کارتخوان",
                    "Id": 1,
                    "Description": "ATM"
                },
                {
                    "Title": "خرابی ماژول جامع احراز هویت",
                    "Id": 77,
                    "Description": "ATM"
                },
                {
                    "Title": "خرابی سیم‌کارت",
                    "Id": 79,
                    "Description": "ATM"
                }
            ]
        };
        const response = await api.get(`/DeviceTypeService/GetServiceTitleListByGrupId_DeviceType/${devTypeId}/${serviceGroupId}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'User-Agent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /DeviceTypeService/GetServiceTitleListByGrupId_DeviceType request:', error);
        
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
        
        return { success: false, error: 'Failed to submit /DeviceTypeService/GetServiceTitleListByGrupId_DeviceType request' };
    }
};


