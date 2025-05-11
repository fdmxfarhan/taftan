import api from '../config/api';
import { use_local_data } from '../config/consts';

export const GetUserConstraintTitleList = async (userToken) => {
    try {
        if (use_local_data) return {
            success: true, data: [
                {
                    "Id": 27,
                    "Title": "دسته بندی یک"
                },
                {
                    "Id": 26,
                    "Title": "دفتر غرب تهران"
                }
            ]
        };
        // console.log(userToken)
        const response = await api.get(`/Constraint/GetUserConstraintTitleList`, {
            headers: {
                "Authorization": `Bearer ${userToken}`,
                "User-Agent": "Mobile",
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting GetUserConstraintTitleList request:', error);
        // console.log(error.response.data)
        return { success: false, error: 'Failed to submit GetUserConstraintTitleList request' };
    }
};
