import api from '../config/api';
import { use_local_data } from '../config/consts';

export const getWorkCausesListTitle = async () => {
    try {
        if (use_local_data) return {
            success: true, data: [
                {
                    "id": 1,
                    "description": "عدم مراجعه اپراتور در زمان مناسب",
                    "comment": null,
                    "isActive": true
                },
                {
                    "id": 2,
                    "description": "پایان ساعت کاری مشتری",
                    "comment": null,
                    "isActive": true
                },
                {
                    "id": 3,
                    "description": "عدم دسترسی به دستگاه",
                    "comment": null,
                    "isActive": true
                },
                {
                    "id": 4,
                    "description": "کمبود قطعه یدکی",
                    "comment": null,
                    "isActive": true
                },
                {
                    "id": 5,
                    "description": "کمبود نرم‌افزار",
                    "comment": null,
                    "isActive": true
                },
                {
                    "id": 6,
                    "description": "کمبود نیرو",
                    "comment": null,
                    "isActive": true
                },
                {
                    "id": 7,
                    "description": "به طول انجامیدن رفع خرابی",
                    "comment": null,
                    "isActive": true
                },
                {
                    "id": 8,
                    "description": "آماده نبودن بستر انجام تعمیر",
                    "comment": null,
                    "isActive": true
                },
                {
                    "id": 9,
                    "description": "درخواست مشتری برای مراجعه با تاخیر",
                    "comment": null,
                    "isActive": true
                },
                {
                    "id": 10,
                    "description": "شرایط جوی و جغرافیایی",
                    "comment": null,
                    "isActive": true
                },
                {
                    "id": 11,
                    "description": "عدم دسترسی به کلیدهای دستگاه",
                    "comment": null,
                    "isActive": true
                },
                {
                    "id": 12,
                    "description": "عدم ارسال بین شهری تجهیز در روزهای تعطیل",
                    "comment": null,
                    "isActive": true
                },
                {
                    "id": 13,
                    "description": "نیاز به اعزام کارشناس از مرکز",
                    "comment": null,
                    "isActive": true
                },
                {
                    "id": 14,
                    "description": "33",
                    "comment": null,
                    "isActive": true
                },
                {
                    "id": 15,
                    "description": "e",
                    "comment": null,
                    "isActive": true
                }
            ]
        };
        
        const response = await api.get(`/WorkCauses/WorkCausesListTitle?isActive=true&api_key=getExpertList`);
        return { success: true, data: response.data };

    } catch (error) {
        console.log('Error submitting WorkCausesListTitle request:', error);
        return { success: false, error: 'Failed to submit WorkCausesListTitle request' };
    }
};


