import api from '../config/api';
import { use_local_data } from '../config/consts';

export const LoadAllowedRequestAction = async (requestId, token) => {
    try {
        if (true || use_local_data) return {
            success: true,
            data: [
                // "SendToExpert",
                // "SendToOffice",
                "InsertReport",
                // "RequestStatus",
                "Closed",
                // "OfficerApprove",
                // "adminApprove",
                "Cancel",
                // "Return",
            ]
        };
        const response = await api.get(`/RequestController/LoadAllowedRequestAction?requestId=${requestId}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /RequestController/LoadAllowedRequestAction request:', error);
        return { success: false, error: 'Failed to submit /RequestController/LoadAllowedRequestAction request' };
    }
};


