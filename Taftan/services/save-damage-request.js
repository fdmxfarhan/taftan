import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const saveRequestActionReport = async (options) => {
    const authData = await getAuthData();
    var response = null;
    try {
        if (use_local_data) return {
            success: true, data: "ثبت درخواست با شماره1041462 با موفقیت انجام شد"
        };
        response = await api.post('/RequestDamageController/SaveDamageRequest', options, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error /RequestDamageController/SaveDamageRequest:', error);
        return { success: false, error: 'Failed to submit /RequestDamageController/SaveDamageRequest request' };
    }
};


