import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';


export const pickRequestService = async (req, navigation) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: {}
        };
        const response = await api.post('/RequestController/ChangeRequestLable', req, {
            headers: {
                Authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'User-Agent': 'Mobile',
            }
        });
        return { success: true, data: response };

    } catch (error) {
        console.log('Error submitting /RequestController/ChangeRequestLable request:', error);
        
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
        
        return { success: false, error: 'Failed to submit pick request' };
    }
};


