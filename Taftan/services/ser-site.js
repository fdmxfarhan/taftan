import api from '../config/api';
import { use_local_data } from '../config/consts';

export const submitSiteRequest = async (skip, take) => {
    try {
        const response = await api.post('/RequestSiteController/loadAllSiteRequestList',
            {
                "skip": skip,
                "take": take,
                "sort": [{
                    "field": "id",
                    "dir": "desc"
                }],
                "filter": {
                    "logic": "and",
                    "filters": [{
                        "field": "IsArchived",
                        "operator": "Eq",
                        "value": 0
                    }]
                }
            });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting loadAllSiteRequestList request:', error);
        return { success: false, error: 'Failed to submit loadAllSiteRequestList request' };
    }
};


