import api from '../config/api';

export const saveRequestActionReport = async (options) => {
    var response = null;
    try {
        response = await api.post('/ReportController/SaveRequestActionReport', options);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error saveRequestActionReport:', error);
        console.log(response);
        return { success: false, error: 'Failed to submit damage request' };
    }
};


