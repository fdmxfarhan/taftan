import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const GetCancelReasonList = async (reportTypeId) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: [
                {
                    "id": 1,
                    "title": "اعلام خرابی برای دستگاه اشتباه",
                    "isActive": true,
                    "description": "خرابی برای دستگاه اشتباه اعلام شده است."
                },
                {
                    "id": 2,
                    "title": "انجام کار توسط شعبه",
                    "isActive": true,
                    "description": "خرابی اعلام شده، توسط خود مشتری برطرف شده است."
                },
                {
                    "id": 3,
                    "title": "تشخیص آسیب دیدگی بانک ملت",
                    "isActive": true,
                    "description": "تشخیص آسیب دیدگی بانک ملت"
                },
                {
                    "id": 4,
                    "title": "تکراری بودن درخواست",
                    "isActive": true,
                    "description": "درخواست ارجاع شده تکراری است."
                },
                {
                    "id": 5,
                    "title": "دستگاه جمع آوری شده است",
                    "isActive": true,
                    "description": "دستگاهی که برای آن خرابی اعلام شده است، قبلا جمع آوری شده است."
                },
                {
                    "id": 7,
                    "title": "کنسل شدن کار از طرف بانک به دلایل مختلف",
                    "isActive": true,
                    "description": "اعلام خرابی از طرف بانک کنسل شده است."
                }
            ]
        };
        const response = await api.get(`/CancelReason/GetCancelReasonList?isActive=true`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                ConstraintId: authData.Constraintid,
                'UserAgent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /CancelReason/GetCancelReasonList request:', error);
        return { success: false, error: 'Failed to submit /CancelReason/GetCancelReasonList request' };
    }
};


