import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const SaveReport = async (options, navigation) => {
    const authData = await getAuthData();
    var response = null;
    try {
        if (use_local_data) return {
            success: true, data: {
                "resultMessage": "ثبت با موفقیت انجام شد",
                "resultId": null,
                "result": 0
            }
        };
        response = await api.post('/ReportController/SaveReport', options, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'User-Agent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error SaveReport:', error);
        
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
            console.log(error.response.data);
        }
        
        return { success: false, error: 'Failed to submit SaveReport request' };
    }
};


