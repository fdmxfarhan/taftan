import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const saveRequestActionReport = async (options) => {
    const authData = await getAuthData();
    var response = null;
    try {
        if (use_local_data) return {
            success: true, data: {
                "resultMessage": " ثبت اقدام سرویس ",
                "resultId": 1161513,
                "result": 1
            }
        };
        response = await api.post('/ReportController/SaveRequestActionReport', options, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error saveRequestActionReport:', error);
        return { success: false, error: 'Failed to submit damage request' };
    }
};


