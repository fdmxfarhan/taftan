import api from '../config/api';

export const getUserList = async (areaId, requestId) => {
    try {
        const response = await api.get(`/User/LoadUserListByAreaIdAndRequestId?AreaId=${areaId}&RequestId=${requestId}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting damage request:', error);
        return { success: false, error: 'Failed to submit damage request' };
    }
};


