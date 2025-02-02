import api from '../config/api';
import { use_local_data } from '../config/consts';

export const DoneExpertRequest = async (requestId) => {
    var response = null;
    try {
        if (use_local_data) return {
            success: true, data: " ثبت وضعیت سرویس توسط مدیر"
        };
        response = await api.get(`/RequestController/DoneExpertRequest/${requestId}?api_key=getExpertList`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error /RequestController/DoneExpertRequest');
        return { success: false, error: error.response.data.Message };
    }
};


