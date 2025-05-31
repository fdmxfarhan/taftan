import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const loadRequestExpertList = async (requestId) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: {
                "Data": [
                    {
                        "userKey": "5737bda7-74d4-4971-9b39-0fcd9970db0b",
                        "Id": 384112,
                        "currentUserName": "آرش سرخیل",
                        "expertType_String": "اصلی",
                        "expertType": 0
                    },
                    {
                        "userKey": "5737bda7-74d4-4971-9b39-0fcd9970db0b",
                        "Id": 384111,
                        "currentUserName": "آرش سرخیل",
                        "expertType_String": "اصلی",
                        "expertType": 0
                    },
                    {
                        "userKey": "5737bda7-74d4-4971-9b39-0fcd9970db0b",
                        "Id": 384110,
                        "currentUserName": "آرش سرخیل",
                        "expertType_String": "اصلی",
                        "expertType": 0
                    },
                    {
                        "userKey": "5737bda7-74d4-4971-9b39-0fcd9970db0b",
                        "Id": 384109,
                        "currentUserName": "آرش سرخیل",
                        "expertType_String": "اصلی",
                        "expertType": 0
                    },
                    {
                        "userKey": "5737bda7-74d4-4971-9b39-0fcd9970db0b",
                        "Id": 384108,
                        "currentUserName": "آرش سرخیل",
                        "expertType_String": "اصلی",
                        "expertType": 0
                    },
                    {
                        "userKey": "5737bda7-74d4-4971-9b39-0fcd9970db0b",
                        "Id": 384107,
                        "currentUserName": "آرش سرخیل",
                        "expertType_String": "اصلی",
                        "expertType": 0
                    },
                    {
                        "userKey": "b4eb5acf-0bcd-4b13-9e81-37405abccdeb",
                        "Id": 384107,
                        "currentUserName": "فاطمه حمزهء",
                        "expertType_String": " کمکی",
                        "expertType": 2
                    },
                    {
                        "userKey": "5737bda7-74d4-4971-9b39-0fcd9970db0b",
                        "Id": 364145,
                        "currentUserName": "آرش سرخیل",
                        "expertType_String": "اصلی",
                        "expertType": 0
                    },
                    {
                        "userKey": "b4eb5acf-0bcd-4b13-9e81-37405abccdeb",
                        "Id": 364145,
                        "currentUserName": "فاطمه حمزهء",
                        "expertType_String": " کمکی",
                        "expertType": 2
                    },
                    {
                        "userKey": "8ed21c2e-2733-4622-9e30-cc69ef8a3098",
                        "Id": 364138,
                        "currentUserName": "لیلا شاپوری",
                        "expertType_String": "اصلی",
                        "expertType": 0
                    }
                ],
                "TotalCount": 107
            }
        };

        const response = await api.post(`/RequestController/loadRequestExpertList`,
            {
                "skip": 0,
                "take": 10,
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
                            "field": "Id",
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
                    'User-Agent': 'Mobile',
                }
            });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error /RequestController/loadRequestExpertList:', error);
        return { success: false, error: error };
    }
};


