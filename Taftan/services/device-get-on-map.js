import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const getDevicesOnMap = async (latitude, longitude) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: {
                "Data": [{
                    "deviceName": "device",
                    "deviceSerial": "321",
                    "deviceTerminal": "123",
                    "id": 144734,
                    "latitude": 35.6693218789625,
                    "longitude": 51.562551195847
                },
                {
                    "deviceName": "شعبه شهرک قائم",
                    "deviceSerial": "B2105303240",
                    "deviceTerminal": "389353",
                    "id": 144707,
                    "latitude": 35.636774,
                    "longitude": 51.4846599
                },
                {
                    "deviceName": "باجه شرکت سرمایه گزاری",
                    "deviceSerial": "5300505126",
                    "deviceTerminal": "507",
                    "id": 144693,
                    "latitude": 35.77,
                    "longitude": 51.42
                },
                {
                    "deviceName": "شعبه سهروردی شمالی",
                    "deviceSerial": "56BT400647",
                    "deviceTerminal": "2106",
                    "id": 144661,
                    "latitude": 35.7284092,
                    "longitude": 51.4368239
                },
                {
                    "deviceName": "شعبه مرکز تجارت استیل ایران",
                    "deviceSerial": "56BT400676",
                    "deviceTerminal": "0",
                    "id": 134631,
                    "latitude": 35.675816,
                    "longitude": 51.300843
                },
                {
                    "deviceName": "ساختمان ملاصدرا",
                    "deviceSerial": "56BT400840",
                    "deviceTerminal": null,
                    "id": 134621,
                    "latitude": 35.123456,
                    "longitude": 50.123456
                },
                {
                    "deviceName": "شعبه شاد آباد",
                    "deviceSerial": "56BT400798",
                    "deviceTerminal": "0",
                    "id": 134598,
                    "latitude": 35.662573,
                    "longitude": 51.309294
                },
                {
                    "deviceName": " شعبه میدان کوثر",
                    "deviceSerial": "56DY401389",
                    "deviceTerminal": "7591",
                    "id": 134593,
                    "latitude": 30.293577,
                    "longitude": 57.030977
                },
                {
                    "deviceName": "باجه چهار قریه",
                    "deviceSerial": "56DY401408",
                    "deviceTerminal": "7592",
                    "id": 134590,
                    "latitude": 30.409800994848386,
                    "longitude": 56.07152875583974
                },
                {
                    "deviceName": "باجه بازار گل شهید محلاتی ۳",
                    "deviceSerial": "56BT400828",
                    "deviceTerminal": "2102",
                    "id": 134588,
                    "latitude": 35.662031,
                    "longitude": 51.476952
                }],
                "TotalCount": 10
            }
        };
        const response = await api.post('/Device/getDevicesOnMap', {
            "skip": 0,
            "take": 100,
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
                        "field": "latitude",
                        "operator": "gt",
                        "value": latitude-0.3
                    },
                    {
                        "field": "latitude",
                        "operator": "lt",
                        "value": latitude+0.3
                    },
                    {
                        "field": "longitude",
                        "operator": "gt",
                        "value": longitude-0.3
                    },
                    {
                        "field": "longitude",
                        "operator": "lt",
                        "value": longitude+0.3
                    },
                ]
            }
        }, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'UserAgent': 'Mobile',
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