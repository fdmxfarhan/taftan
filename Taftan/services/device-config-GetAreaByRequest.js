import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const GetAreaByRequest = async (requestId) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: "c11aae67-4e69-4bde-b532-018bc02ad1f0"
        };
        const response = await api.get(`/RequestController/GetAreaByRequest/${requestId}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'UserAgent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /RequestController/GetAreaByRequest request:', error.response);
        return { success: false, error: 'Failed to submit GetModuleGroupTitleList request' };
    }
};
