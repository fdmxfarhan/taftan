import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const loadRequestReportActionList = async (requestId) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: {
                "Data": [
                    {
                        "id": 1111469,
                        "startDateTime": 140210101000,
                        "endDateTime": 140210101120,
                        "actionTypeTitle": "مراجعه",
                        "actionTypeId": 1,
                        "actinResult": "موفق",
                        "unsuccessfullActionReasonTitle": null,
                        "unsuccessfullActionReasonId": null,
                        "unsuccessfullActionSide": true,
                        "description": "تعویض استکر و زک",
                        "requestId": 980747,
                        "reportId": 1110209,
                        "fileName": null
                    }
                ],
                "TotalCount": 1
            }
        };
        const response = await api.post(`/ReportController/loadRequestReportActionList`, {
            "skip": 0,
            "take": 10000,
            "sort": [
                {
                    "field": "id",
                    "dir": "desc"
                }
            ],
            "filter": {
                "logic": "and",
                "filters": [
                    {
                        "field": "requestId",
                        "operator": "contains",
                        "value": requestId
                    }
                ]
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
        console.log('Error submitting loadRequestReportActionList request:', error);
        return { success: false, error: 'Failed to submit loadRequestReportActionList request' };
    }
};


