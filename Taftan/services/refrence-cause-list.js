import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const getRefrenceCauseList = async () => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: [{
                "id": 8,
                "description": "اشتباه در ارجاع اولیه",
                "comment": null,
                "isActive": true
            },
            {
                "id": 11,
                "description": "کمبود نیرو",
                "comment": null,
                "isActive": true
            },
            {
                "id": 12,
                "description": "عدم امکان انجام سرویس",
                "comment": null,
                "isActive": true
            },
            {
                "id": 13,
                "description": "شیفت روز تعطیل",
                "comment": null,
                "isActive": true
            },
            {
                "id": 15,
                "description": "دستگاه پایلوت",
                "comment": null,
                "isActive": true
            },
            {
                "id": 16,
                "description": "صدور دستور برای تغییر دفتر مجری",
                "comment": null,
                "isActive": true
            },
            {
                "id": 17,
                "description": "اقدام پس از اتمام سرویس حوزه نصب",
                "comment": null,
                "isActive": true
            },
            {
                "id": 18,
                "description": "555",
                "comment": null,
                "isActive": true
            }
            ]
        };

        const response = await api.get(`/RefrenceCauses/GetRefrenceCausesTitleList?isActive=${true}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };

    } catch (error) {
        console.log('Error submitting GetRefrenceCausesTitleList request:', error);
        return { success: false, error: 'Failed to submit GetRefrenceCausesTitleList request' };
    }
};


