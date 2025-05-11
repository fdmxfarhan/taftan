import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const GetUnreadMessageCount = async (navigation) => {
    const authData = await getAuthData();

    try {
        if (use_local_data) return { success: true, data: 114 };
        const response = await api.get(`/MessageBox/GetUnreadMessageCount?isActive=true`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'User-Agent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /MessageBox/GetUnreadMessageCount request:', error.response?.data);
        
        if (error.response) {
            // Check for specific HTTP status codes
            if (error.response.status === 404) {
                return { success: false, error: 'Resource not found (404)' };
            }
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
        
        return { 
            success: false, 
            error: error.response?.data?.Message || 'Failed to submit /MessageBox/GetUnreadMessageCount request' 
        };
    }
};


