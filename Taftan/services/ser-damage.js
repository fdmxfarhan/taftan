import api from '../config/api';

export const submitDamageRequest = async () => {
    try {
        const response = await api.post('/RequestDamageController/loadAllDamageRequestList', { "skip": 0, "take": 10, "sort": [{ "field": "id", "dir": "desc" }], "filter": { "logic": "and", "filters": [{ "field": "IsArchived", "operator": "Eq", "value": 0 }] } });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: 'Failed to submit damage request' };
    }
};


