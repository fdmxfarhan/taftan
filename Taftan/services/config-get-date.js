import api from '../config/api';
import { use_local_data } from '../config/consts';

export const GetCurrentDate = async () => {
    try {
        if (use_local_data) return {
            success: true,
            data: "1403/10/01"
        };
        const response = await api.get(`/Configuration/GetCurrentDate?api_key=date`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /Configuration/GetCurrentDate request:', error);
        return { success: false, error: 'Failed to submit /Configuration/GetCurrentDate request' };
    }
};


