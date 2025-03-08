import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const LoadAllowedRequestAction = async (requestId, token) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
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
        const response = await api.get(`/RequestController/LoadAllowedRequestAction?requestId=${requestId}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /RequestController/LoadAllowedRequestAction request:', error);
        return { success: false, error: 'Failed to submit /RequestController/LoadAllowedRequestAction request' };
    }
};


