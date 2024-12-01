import api from '../config/api';

export const submitProjectRequest = async (skip, take) => {
    try {
        const response = await api.post('/RequestProjectController/loadAllProjectRequestList', { "skip": skip, "take": take, "sort": [{ "field": "id", "dir": "desc" }], "filter": { "logic": "and", "filters": [{ "field": "IsArchived", "operator": "Eq", "value": 0 }] } });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting damage request:', error);
        return { success: false, error: 'Failed to submit damage request' };
    }
};


