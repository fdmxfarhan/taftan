import api from '../config/api';
import { use_local_data } from '../config/consts';

export const saveRequestActionReport = async (options) => {
    var response = null;
    try {
        if (use_local_data) return {
            success: true, data: {
                "resultMessage": " ثبت اقدام سرویس ",
                "resultId": 1161513,
                "result": 1
            }
        };

        response = await api.post('/ReportController/SaveRequestActionReport', options);
        return { success: true, data: response.data };

    } catch (error) {
        console.log('Error saveRequestActionReport:', error);
        console.log(response);
        return { success: false, error: 'Failed to submit damage request' };
    }
};


