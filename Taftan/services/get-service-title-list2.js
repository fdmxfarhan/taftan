import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const GetServiceTitleListByDeviceId = async (deviceId, serviceGroupId) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: [
                {
                    "Title": "ایراد عمومی",
                    "Id": 13,
                    "Description": null
                },
                {
                    "Title": "99999999",
                    "Id": 81,
                    "Description": null
                },
                {
                    "Title": "به‌روزرسانی نرم‌افزار",
                    "Id": 10,
                    "Description": null
                }
            ]
        };
        const response = await api.get(`/DeviceTypeService/GetServiceTitleListByDeviceId/${deviceId}/${serviceGroupId}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /DeviceTypeService/GetServiceTitleListByDeviceId request:', error);
        return { success: false, error: 'Failed to submit /DeviceTypeService/GetServiceTitleListByDeviceId request' };
    }
};


