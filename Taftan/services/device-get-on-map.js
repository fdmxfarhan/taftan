import api from '../config/api';
import { use_local_data } from '../config/consts';

export const getDevicesOnMap = async () => {
    try {
        if (use_local_data) return {
            success: true, data: {
                "Data": [],
                "TotalCount": 0
            }
        };
        const response = await api.post('/Device/getDevicesOnMap', {
            "skip": 0,
            "take": 100000,
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
                        "field": "areaId",
                        "operator": "Eq",
                        "value": 26
                    },
                    {
                        "logic": "or",
                        "filters": [
                            {
                                "field": "customerId",
                                "operator": "Eq",
                                "value": "20081"
                            }
                        ]
                    }
                ]
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /Device/getDevicesOnMap request:', error);
        return { success: false, error: 'Failed to submit /Device/getDevicesOnMap request' };
    }
};









// {
//     "skip": 0,
//     "take": 10,
//     "sort": [
//         {
//             "field": "id",
//             "dir": "desc"
//         }
//     ],
//     "filter": {
//         "logic": "and",
//         "filters": [
//             {
//                 "field": "customerName",
//                 "operator": "contains",
//                 "value": "asdf"
//             },
//             {
//                 "field": "deviceBranchName",
//                 "operator": "contains",
//                 "value": "asdf"
//             },
//             {
//                 "field": "branchCode",
//                 "operator": "contains",
//                 "value": "asdf"
//             },
//             {
//                 "field": "deviceSerial",
//                 "operator": "contains",
//                 "value": "asdf"
//             },
//             {
//                 "field": "deviceTerminal",
//                 "operator": "contains",
//                 "value": "sadf"
//             },
//             {
//                 "field": "deviceName",
//                 "operator": "contains",
//                 "value": "asdf"
//             },
//             {
//                 "field": "deviceTypeTitle",
//                 "operator": "contains",
//                 "value": "asdf"
//             },
//             {
//                 "field": "deviceModelTitle",
//                 "operator": "contains",
//                 "value": "asdf"
//             },
//             {
//                 "field": "areaName",
//                 "operator": "contains",
//                 "value": "asdf"
//             },
//             {
//                 "field": "provinceName",
//                 "operator": "contains",
//                 "value": "asdf"
//             },
//             {
//                 "field": "cityName",
//                 "operator": "contains",
//                 "value": "asdf"
//             },
//             {
//                 "field": "deviceStatus",
//                 "operator": "eq",
//                 "value": "فعال"
//             }
//         ]
//     }
// }