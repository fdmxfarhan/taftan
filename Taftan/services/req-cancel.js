import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const CancelExpertRequest = async (options, navigation) => {
    const authData = await getAuthData();
    var response = null;
    try {
        if (use_local_data) return {success: true, data: "کنسلی کار  با موفقیت انجام شد"};
        console.log(options)
        response = await api.post('/RequestController/CancelExpertRequest', options, {
            headers: {
                Authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'User-Agent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error CancelExpertRequest:', error);
        
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
        
        return { success: false, error: 'Failed to submit damage request' };
    }
};


