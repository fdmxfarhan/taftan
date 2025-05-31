import api from '../config/api-serial';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const GetModuleSerialListByUserKeyModuleKey = async (UserKey, ModuleKey, officeKey) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: [
                {
                    "Id": 3,
                    "OfficeId": "c11aae67-4e69-4bde-b532-018bc02ad1f0",
                    "Count": 1,
                    "Source": 0,
                    "UserKey": null,
                    "ModuleSerialKey": "83d7d54c-f297-4126-b5c3-bec4229131fa",
                    "ModuleKey": "c3647bab-3b6d-46ad-b99d-92fa12f86d23",
                    "Code": null,
                    "UsingCount": 0,
                    "Name": null,
                    "Title": "20240618113001",
                    "Serial": "20240618113001",
                    "UsingDocument": false,
                    "HaveSerial": true
                }
            ]
        };
        const response = await api.get(`/Store/GetModuleSerialListByUserKeyModuleKey/${UserKey}/${ModuleKey}/${officeKey}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                // 'User-Agent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /Store/GetModuleSerialListByUserKeyModuleKey:', error.response);
        return { success: false, error: 'Failed to submit GetModuleSerialListByUserKeyModuleKey request' };
    }
}; 