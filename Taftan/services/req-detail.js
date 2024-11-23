import api from '../config/api';

export const getRequestDetail = async ( requestId) => {
    try {
        const response = await api.get(`/RequestController/GetRequestDetail/${requestId}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting damage request:', error);
        return { success: false, error: 'Failed to submit damage request' };
    }
};


