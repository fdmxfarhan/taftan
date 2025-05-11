import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const LoadAllowedRequestAction = async (requestId, navigation) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: [
                "InsertReport",
                "RequestStatus",
                "SendToExpert",
                "Closed",
                "Cancel",
            ]
        };
        // console.log('Making request with:', {
        //     requestId,
        //     headers: {
        //         Authorization: authData.token,
        //         Accessid: authData.Constraintid,
        //         Constraintid: authData.Constraintid,
        //     }
        // });
        const response = await api.get(`/RequestController/LoadAllowedRequestAction?requestId=${requestId}`, {
            headers: {
                Authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        // console.log('Response:', {
        //     status: response.status,
        //     headers: response.headers,
        //     data: response.data
        // });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /RequestController/LoadAllowedRequestAction request:', error);
        
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                logout();
                navigation.navigate('Login');
                return { success: false, error: 'Unauthorized access' };
            }
            if (error.response.data?.Message === "Authorization has been denied for this request.") {
                logout();
                navigation.navigate('Login');
                return { success: false, error: 'Authorization denied' };
            }
        }
        
        return { success: false, error: 'Failed to submit /RequestController/LoadAllowedRequestAction request' };
    }
};


