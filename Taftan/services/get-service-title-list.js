import api from '../config/api';
import { use_local_data } from '../config/consts';

export const GetServiceTitleListByGrupId_DeviceType = async (devTypeId, serviceGroupId) => {
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
        const response = await api.get(`/DeviceTypeService/GetServiceTitleListByGrupId_DeviceType/${devTypeId}/${serviceGroupId}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /DeviceTypeService/GetServiceTitleListByGrupId_DeviceType request:', error);
        return { success: false, error: 'Failed to submit /DeviceTypeService/GetServiceTitleListByGrupId_DeviceType request' };
    }
};


