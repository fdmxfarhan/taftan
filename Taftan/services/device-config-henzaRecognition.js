import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const loadDeviceTypeHenzaRecognitionExpertListByDeviceTypeId = async (typeKey, ModuleGroupKey) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: [
                {
                    "deviceModuleGroupKey": null,
                    "deviceModuleGroupTitle": null,
                    "henzaRecognitionexpertId": 367,
                    "henzaRecognitionExpertTitle": "لیزر پرتاب نمی شود",
                    "id": 0,
                    "isActive": true,
                    "deviceTypeKey": null,
                    "deviceTypeTitle": null,
                    "description": "لللل"
                }
            ]
        };
        const response = await api.get(`/DeviceTypeHenzaRecognitionExpert/loadDeviceTypeHenzaRecognitionExpertListByDeviceTypeId/${typeKey}/${ModuleGroupKey}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'User-Agent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /DeviceTypeHenzaRecognitionExpert/loadDeviceTypeHenzaRecognitionExpertListByDeviceTypeId/ request:', error.response);
        return { success: false, error: 'Failed to submit loadDeviceTypeHenzaRecognitionExpertListByDeviceTypeId request' };
    }
};
