import api from '../config/api';
import { use_local_data } from '../config/consts';

export const GetUnreadMessageCount = async () => {
    try {
        if (use_local_data) return { success: true, data: 114 };
        const response = await api.get(`/MessageBox/GetUnreadMessageCount?isActive=true`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /MessageBox/GetUnreadMessageCount request:', error);
        return { success: false, error: 'Failed to submit /MessageBox/GetUnreadMessageCount request' };
    }
};


