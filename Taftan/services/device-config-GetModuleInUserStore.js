import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const GetModuleInUserStore = async (moduleGroupKey, officeKey) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: []
        };
        const response = await api.get(`/StoreController/GetModuleInUserStore/${moduleGroupKey}/${officeKey}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /StoreController/GetModuleInUserStore request:', error.response);
        return { success: false, error: 'Failed to submit GetModuleGroupTitleList request' };
    }
};
