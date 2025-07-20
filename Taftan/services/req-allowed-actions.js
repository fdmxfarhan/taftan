import api from '../config/api';
import { api_url, use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';
import { NativeModules } from 'react-native';
const { CustomHeaderRequest } = NativeModules;

export const LoadAllowedRequestAction = async (requestId, navigation) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: [
                "InsertReport",
                "RequestStatus",
                "SendToExpert",
                "Closed",
                "Cancel",
            ]
        };
        
        const response = await CustomHeaderRequest.sendGetRequestWithCustomHeader(api_url + `/Services/Taftan/api/RequestController/LoadAllowedRequestAction?requestId=${requestId}`,{
            Authorization: `Bearer ${authData.token}`,
            Accessid: `${authData.Constraintid}`,
            ConstraintId: `${authData.Constraintid}`,
            // 'UserAgent': 'Mobile',
        })
        // console.log('Response:', response.body);
        return { success: true, data: response.body };
    } catch (error) {
        console.log('Error submitting /RequestController/LoadAllowedRequestAction request:', error);

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

        return { success: false, error: 'Failed to submit /RequestController/LoadAllowedRequestAction request' };
    }
};


