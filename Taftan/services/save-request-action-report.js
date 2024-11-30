import api from '../config/api';

export const saveRequestActionReport = async (options) => {
    try {
        const response = await api.post('/ReportController/SaveRequestActionReport', options);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error saveRequestActionReport:', error);
        return { success: false, error: 'Failed to submit damage request' };
    }
};


