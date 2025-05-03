import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const GetModuleInUserStore = async (moduleGroupKey, officeKey) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: [
                {
                    "Code": "30101050700033",
                    "Count": 1,
                    "HaveSerial": true,
                    "Id": 3,
                    "ModuleGroupKey": "09b6c97e-4c2d-4b85-abef-1cdd14f0acad",
                    "ModuleKey": "c3647bab-3b6d-46ad-b99d-92fa12f86d23",
                    "ModuleSerialKey": "83d7d54c-f297-4126-b5c3-bec4229131fa",
                    "ModuleTitle": "SAM Card Board",
                    "Serial": "20240618113001",
                    "UserKey": "8ed21c2e-2733-4622-9e30-cc69ef8a3098"
                },
                {
                    "Code": "22222",
                    "Count": 1,
                    "HaveSerial": true,
                    "Id": 10074,
                    "ModuleGroupKey": "ebc8d678-fe1c-41d5-8cb2-eca55fc5cf36",
                    "ModuleKey": "f360e13f-41d6-4362-b820-ddabcbd273b5",
                    "ModuleSerialKey": "eb49077d-3d87-49c0-81eb-5796519a044a",
                    "ModuleTitle": "تستی3335",
                    "Serial": "0",
                    "UserKey": "8ed21c2e-2733-4622-9e30-cc69ef8a3098"
                }
            ]
        };
        console.log(moduleGroupKey, officeKey);
        const response = await api.get(`/StoreController/GetModuleInUserStore/${moduleGroupKey}/${officeKey}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        console.log(response.data);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /StoreController/GetModuleInUserStore request:', error.response);
        return { success: false, error: 'Failed to submit GetModuleGroupTitleList request' };
    }
};
