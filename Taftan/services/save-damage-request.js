import api from '../config/api';
import { use_local_data } from '../config/consts';

export const saveRequestActionReport = async (options) => {
    var response = null;
    try {
        if (use_local_data) return {
            success: true, data: "ثبت درخواست با شماره1041462 با موفقیت انجام شد"
        };
        response = await api.post('/RequestDamageController/SaveDamageRequest', options);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error /RequestDamageController/SaveDamageRequest:', error);
        return { success: false, error: 'Failed to submit /RequestDamageController/SaveDamageRequest request' };
    }
};


