import api from '../config/api';
import { use_local_data } from '../config/consts';

export const loadDeviceConfigList = async (deviceId) => {
    try {
        if (use_local_data) return {
            success: true,
            data: {
                "Data": [{
                    "id": 179431,
                    "deviceId": 36155,
                    "serial": "3924115425",
                    "deviceModuleModel": "Card Reader MSR1000D",
                    "deviceModuleModelId": 1068,
                    "deviceHWTitle": "Card Reader",
                    "deviceHWId": 78,
                    "code": "20702020021"
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
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting damage request:', error);
        return { success: false, error: 'Failed to submit damage request' };
    }
};


