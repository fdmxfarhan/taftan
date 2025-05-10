import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const loadDeviceConfigList = async (deviceId) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: {
                "Data": [{
                    "Code": "258",
                    "GroupModuleId": 2,
                    "ModuleGroupKey": "e2afe96a-4150-4799-8213-31d5af87874d",
                    "ModuleGroupTitle": "3In1 Module",
                    "ModuleTitle": "Module32",
                    "TypeId": 29,
                    "count": 1,
                    "deviceId": 144734,
                    "deviceModuleGroupKey": "e2afe96a-4150-4799-8213-31d5af87874d",
                    "deviceModuleKey": "1274bd37-3941-480a-ac82-d7f5b5452116",
                    "deviceModuleSerialKey": null,
                    "haveSerial": false,
                    "id": 9,
                    "serial": null
                }],
                "TotalCount": 1
            }
        };

        const response = await api.post(`/Device/loadDeviceConfigList`, {
            "skip": 0,
            "take": 10,
            "sort": [{
                "field": "id",
                "dir": "desc"
            }],
            "filter": {
                "logic": "and",
                "filters": [{
                    "field": "deviceId",
                    "operator": "contains",
                    "value": deviceId
                },
                {
                    "field": "deviceId",
                    "operator": "contains",
                    "value": deviceId
                },
                {
                    "field": "deviceId",
                    "operator": "contains",
                    "value": deviceId
                }]
            }
        }, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting loadDeviceConfigList request:', error);
        return { success: false, error: 'Failed to submit loadDeviceConfigList request' };
    }
};


