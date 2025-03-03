import api from '../config/api';
import { use_local_data } from '../config/consts';

export const GetUserConstraintTitleList = async (userToken) => {
    try {
        if (use_local_data) return {
            success: true, data: []
        };
        const response = await api.get(`/Constraint/GetUserConstraintTitleList`, {
            headers: {
                Authorization: userToken,
            }
        });
        return { success: true, data: response.data };

    } catch (error) {
        console.log('Error submitting GetUserConstraintTitleList request:', error.response);
        return { success: false, error: 'Failed to submit GetUserConstraintTitleList request' };
    }
};
