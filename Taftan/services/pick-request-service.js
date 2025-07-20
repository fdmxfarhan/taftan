import api from '../config/api';
import apiLocation from '../config/api-location';
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
                'UserAgent': 'Mobile',
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



export const SendLocation = async (req) => {
    const authData = await getAuthData();
    try {
        console.log('[SendLocation] ارسال لوکیشن به سرور با داده‌ها:', req, 'در', new Date().toLocaleString());

        if (use_local_data) return {
            success: true, data: {}
        };

        console.log('authData token:', authData.token);

        const response = await apiLocation.post('/UserLocation/insert-user-location', req, {
            headers: {
                Authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'UserAgent': 'Mobile',
            }
        });

        const currentTime = new Date().toLocaleString();
        console.log('[SendLocation] موفقیت در ارسال لوکیشن به سرور:', response.data, 'در', currentTime);

        return { success: true, data: response };

    } catch (error) {
        console.log('[SendLocation] خطا در ارسال لوکیشن به سرور:', error, 'در', new Date().toLocaleString());

        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                logout();
                return { success: false, error: 'Unauthorized access' };
            }
            if (error.response.data?.Message === "Authorization has been denied for this request.") {
                logout();
                return { success: false, error: 'Authorization denied' };
            }
        }

        return { success: false, error: 'Failed to submit pick request' };
    }
};

