import api from '../config/api';
import { use_local_data } from '../config/consts';

export const GetServiceTitleListByDeviceId = async (deviceId, serviceGroupId) => {
    try {
        if (use_local_data) return {
            success: true,
            data: []
        };
        const response = await api.get(`/DeviceTypeService/GetServiceTitleListByDeviceId/${deviceId}/${serviceGroupId}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /DeviceTypeService/GetServiceTitleListByDeviceId request:', error);
        return { success: false, error: 'Failed to submit /DeviceTypeService/GetServiceTitleListByDeviceId request' };
    }
};


