import api from '../config/api';

export const getRequestExpertlist = async (requestId) => {
    try {
        const response = await api.post(`/RequestController/loadRequestExpertList`, {
            "skip": 0,
            "take": 10,
            "sort": [{
                "field": "Id",
                "dir": "desc"
            }],
            "filter": {
                "logic": "and",
                "filters": [
                    // {
                    //     "field": "requestId",
                    //     "operator": "contains",
                    //     "value": requestId
                    // }
                ]
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting damage request:', error);
        return { success: false, error: 'Failed to submit damage request' };
    }
};


