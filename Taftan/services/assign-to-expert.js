import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const AssignToExpert = async (options) => {
    const authData = await getAuthData();
    var response = null;
    try {
        if (use_local_data) return {
            success: true, data: "درخواست به کارشناس مورد نظر ارجاع شد."
        };
        response = await api.post(`/RequestController/AssignToExpert?api_key=getExpertList`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'UserAgent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error /RequestController/AssignToExpert');
        return { success: false, error: error.response.data.Message };
    }
};


