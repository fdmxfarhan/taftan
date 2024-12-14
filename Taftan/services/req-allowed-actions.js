import api from '../config/api';
import { use_local_data } from '../config/consts';

export const LoadAllowedRequestAction = async (requestId) => {
    try {
        if (use_local_data) return {
            success: true,
            data: [
                "InsertReport",
                "RequestStatus",
                "SendToExpert",
                "Closed",
                "Cancel",
            ]
        };
        const response = await api.get(`/RequestController/LoadAllowedRequestAction?requestId=${requestId}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /RequestController/LoadAllowedRequestAction request:', error);
        return { success: false, error: 'Failed to submit /RequestController/LoadAllowedRequestAction request' };
    }
};


