import api from '../config/api';

export const getRefrenceCauseList = async () => {
    try {
        const response = await api.get(`/RefrenceCauses/GetRefrenceCausesTitleList?isActive=${true}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting damage request:', error);
        return { success: false, error: 'Failed to submit damage request' };
    }
};


