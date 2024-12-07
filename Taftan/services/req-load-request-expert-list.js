import api from '../config/api';
import { use_local_data } from '../config/consts';

export const getRequestExpertlist = async (requestId) => {
    try {
        if (use_local_data) return {
            success: true, data: {
                "Data": [
                    {
                        "id": 40249,
                        "requestId": 1021254,
                        "currentUserName": "حسین صبوری",
                        "expertType_String": "اصلی",
                        "expertType": 0
                    }
                ],
                "TotalCount": 1
            }
        };

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


