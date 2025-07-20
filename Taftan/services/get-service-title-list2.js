import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const GetServiceTitleListByDeviceId = async (deviceId, serviceGroupId, navigation) => {
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
                'UserAgent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /DeviceTypeService/GetServiceTitleListByDeviceId request:', error);
        
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                logout();
                navigation.navigate('Login');
                return { success: false, error: 'Unauthorized access' };
            }
            if (error.response.data?.Message === "Authorization has been denied for this request.") {
                logout();
                navigation.navigate('Login');
                return { success: false, error: 'Authorization denied' };
            }
        }
        
        return { success: false, error: 'Failed to submit /DeviceTypeService/GetServiceTitleListByDeviceId request' };
    }
};


