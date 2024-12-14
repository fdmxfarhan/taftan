import api from '../config/api';
import { use_local_data } from '../config/consts';

export const submitProjectRequest = async (skip, take) => {
    try {
        const response = await api.post('/RequestProjectController/loadAllProjectRequestList', { "skip": skip, "take": take, "sort": [{ "field": "id", "dir": "desc" }], "filter": { "logic": "and", "filters": [{ "field": "IsArchived", "operator": "Eq", "value": 0 }] } });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting loadAllProjectRequestList request:', error);
        return { success: false, error: 'Failed to submit loadAllProjectRequestList request' };
    }
};


