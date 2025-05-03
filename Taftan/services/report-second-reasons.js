import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const SecondReportTitleTitleList = async (serviceGroupId) => {
    const authData = await getAuthData();
    var response = null;
    try {
        if (use_local_data) return {
            success: true, data: [
                {
                    "id": 1,
                    "serviceGroupId": 1,
                    "serviceGroupTitle": null,
                    "title": "اصلاح اطلاعات گزارش کار",
                    "isActive": true,
                    "description": null
                },
                {
                    "id": 2,
                    "serviceGroupId": 1,
                    "serviceGroupTitle": null,
                    "title": "کمبود قطعه یدکی",
                    "isActive": true,
                    "description": null
                },
                {
                    "id": 3,
                    "serviceGroupId": 1,
                    "serviceGroupTitle": null,
                    "title": "نقض گارانتی",
                    "isActive": true,
                    "description": null
                },
                {
                    "id": 4,
                    "serviceGroupId": 1,
                    "serviceGroupTitle": null,
                    "title": "ایراد در اپراتوری دستگاه",
                    "isActive": true,
                    "description": null
                },
                {
                    "id": 5,
                    "serviceGroupId": 1,
                    "serviceGroupTitle": null,
                    "title": "عدم تشخیص خطا توسط کارشناس",
                    "isActive": true,
                    "description": null
                },
                {
                    "id": 6,
                    "serviceGroupId": 1,
                    "serviceGroupTitle": null,
                    "title": "ایجاد خطا در دو ماژول متفاوت",
                    "isActive": true,
                    "description": null
                },
                {
                    "id": 7,
                    "serviceGroupId": 1,
                    "serviceGroupTitle": null,
                    "title": "مشکل در قطعه تعویض شده",
                    "isActive": true,
                    "description": null
                },
                {
                    "id": 8,
                    "serviceGroupId": 1,
                    "serviceGroupTitle": null,
                    "title": "آماده نبودن بستر انجام کار",
                    "isActive": true,
                    "description": null
                },
                {
                    "id": 9,
                    "serviceGroupId": 1,
                    "serviceGroupTitle": null,
                    "title": "پایان ساعت کاری مشتری",
                    "isActive": true,
                    "description": null
                },
                {
                    "id": 10,
                    "serviceGroupId": 1,
                    "serviceGroupTitle": null,
                    "title": "عدم دسترسی به دستگاه",
                    "isActive": true,
                    "description": null
                },
            ]
        };
        response = await api.get(`/SecondReportCause/SecondReportTitleTitleList?isActive=true&serviceGroupId=${serviceGroupId}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submiting /SecondReportCause/SecondReportTitleTitleList request:', error);
        return { success: false };
    }
};


