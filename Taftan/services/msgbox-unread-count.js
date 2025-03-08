import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const GetUnreadMessageCount = async () => {
    const authData = await getAuthData();

    try {
        if (use_local_data) return { success: true, data: 114 };
        const response = await api.get(`/MessageBox/GetUnreadMessageCount?isActive=true`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /MessageBox/GetUnreadMessageCount request:', error.response.data);
        return { success: false, error: 'Failed to submit /MessageBox/GetUnreadMessageCount request' };
    }
};


