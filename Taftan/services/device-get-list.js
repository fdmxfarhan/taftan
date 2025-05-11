import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const getDeviceList = async (skip, take) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: {
                "Data": [
                    {
                        "id": 144694,
                        "customerName": "کارآفرین",
                        "deviceBranchName": "شعبه مجازی",
                        "branchCode": "5300000",
                        "deviceSerial": "5300771533",
                        "deviceTerminal": "4144",
                        "deviceName": "باجه بیمارستان سلامت برکت",
                        "deviceTypeTitle": "ATM",
                        "deviceModelTitle": "Wincor 1500 Xe USB",
                        "areaName": "دفتر غرب تهران",
                        "provinceName": "تهران",
                        "cityName": "تهران",
                        "deviceStatus": "فعال",
                        "installationAddress": "شهرک گلستان - بلوار کوهک - خ علیمرادی - خ نسیم 10 - پ 3 - آقای حسن پور",
                        "deviceBrandId": 3
                    },
                    {
                        "id": 144692,
                        "customerName": "کارآفرین",
                        "deviceBranchName": "شعبه مجازی",
                        "branchCode": "5300000",
                        "deviceSerial": "5300512792",
                        "deviceTerminal": "3801",
                        "deviceName": "باجه شهر فرش شعبه مرکزی",
                        "deviceTypeTitle": "ATM",
                        "deviceModelTitle": "Wincor 1500 Xe USB",
                        "areaName": "دفتر غرب تهران",
                        "provinceName": "تهران",
                        "cityName": "تهران",
                        "deviceStatus": "فعال",
                        "installationAddress": "کیلومتر 5 جاده مخصوص کرج روبروی تهرانسر - آقای نیکرو",
                        "deviceBrandId": 3
                    },
                    {
                        "id": 144689,
                        "customerName": "کارآفرین",
                        "deviceBranchName": "شعبه مجازی",
                        "branchCode": "5300000",
                        "deviceSerial": "5300772384",
                        "deviceTerminal": "3001",
                        "deviceName": "باجه مجتمع اداری تجاری عرفان",
                        "deviceTypeTitle": "ATM",
                        "deviceModelTitle": "Wincor 1500 Xe USB",
                        "areaName": "دفتر غرب تهران",
                        "provinceName": "تهران",
                        "cityName": "تهران",
                        "deviceStatus": "فعال",
                        "installationAddress": "سعادت آباد - بلوار سرو غربی - خ بخشایش - پ 17 - آقای محمود همتی",
                        "deviceBrandId": 3
                    },
                    {
                        "id": 134631,
                        "customerName": "سینا",
                        "deviceBranchName": "شعبه شمشیری",
                        "branchCode": "441",
                        "deviceSerial": "56BT400676",
                        "deviceTerminal": "0",
                        "deviceName": "شعبه مرکز تجارت استیل ایران",
                        "deviceTypeTitle": "ATM",
                        "deviceModelTitle": "Eastcom 2000 Xe USB TTW",
                        "areaName": "دفتر غرب تهران",
                        "provinceName": "تهران",
                        "cityName": "تهران",
                        "deviceStatus": "غیرفعال",
                        "installationAddress": "تهران، جاده قدیم کرج، مرکز تجارت استیل ایران، طبقه همکف ، پلاک 282",
                        "deviceBrandId": 1
                    },
                    {
                        "id": 134580,
                        "customerName": "سامان",
                        "deviceBranchName": "اداره توزیع و جمع آوری نقود",
                        "branchCode": "265",
                        "deviceSerial": "EC8200225260256",
                        "deviceTerminal": "3691",
                        "deviceName": "باجه آرایشگاه چم",
                        "deviceTypeTitle": "Kiosk",
                        "deviceModelTitle": "Eastcom 8200",
                        "areaName": "دفتر غرب تهران",
                        "provinceName": "تهران",
                        "cityName": "تهران",
                        "deviceStatus": "غیرفعال",
                        "installationAddress": "تهران، شهرک قدس، میدان صنعت، نبش خیابان سیمای ایران، مرکز خرید پلاتین، طبقه 6، واحد s601 ـ  آرایشگاه چم",
                        "deviceBrandId": 1
                    },
                    {
                        "id": 134579,
                        "customerName": "سامان",
                        "deviceBranchName": "اداره توزیع و جمع آوری نقود",
                        "branchCode": "265",
                        "deviceSerial": "EC820022C150161",
                        "deviceTerminal": "0",
                        "deviceName": "باجه کلینیک دکتر مشتاقی ودکتر سیخ حسنی",
                        "deviceTypeTitle": "Kiosk",
                        "deviceModelTitle": "Eastcom 8200",
                        "areaName": "دفتر غرب تهران",
                        "provinceName": "تهران",
                        "cityName": "تهران",
                        "deviceStatus": "غیرفعال",
                        "installationAddress": "خیابان ایئانک شمالی خیابان شجریان شمالی کوچه چهارم پلاک 14",
                        "deviceBrandId": 1
                    },
                    {
                        "id": 124545,
                        "customerName": "کارآفرین",
                        "deviceBranchName": "شعبه مجازی",
                        "branchCode": "5300000",
                        "deviceSerial": "5300773123",
                        "deviceTerminal": "4147",
                        "deviceName": "ساختمان اداری مرکزی شهر فرش",
                        "deviceTypeTitle": "ATM",
                        "deviceModelTitle": "Wincor 1500 Xe USB",
                        "areaName": "دفتر غرب تهران",
                        "provinceName": "تهران",
                        "cityName": "تهران",
                        "deviceStatus": "فعال",
                        "installationAddress": "جاده مخصوص، روبروی تهرانسر، ساختمان اداری مرکزی شهر فرش",
                        "deviceBrandId": 3
                    },
                    {
                        "id": 124538,
                        "customerName": "سامان",
                        "deviceBranchName": "شعبه اریکه ایرانیان ",
                        "branchCode": "816",
                        "deviceSerial": "56ET300218",
                        "deviceTerminal": "1175",
                        "deviceName": "شعبه اریکه ایرانیان",
                        "deviceTypeTitle": "ATM",
                        "deviceModelTitle": "Wincor 8050",
                        "areaName": "دفتر غرب تهران",
                        "provinceName": "تهران",
                        "cityName": "تهران",
                        "deviceStatus": "فعال",
                        "installationAddress": "بلوار فرحزادی خیابان حافظی شعبه اریکه",
                        "deviceBrandId": 3
                    },
                    {
                        "id": 124537,
                        "customerName": "سامان",
                        "deviceBranchName": "شعبه بلوار دریا",
                        "branchCode": "883",
                        "deviceSerial": "56ET300213",
                        "deviceTerminal": "1226",
                        "deviceName": "شعبه بلوار دریا",
                        "deviceTypeTitle": "ATM",
                        "deviceModelTitle": "Wincor 8050",
                        "areaName": "دفتر غرب تهران",
                        "provinceName": "تهران",
                        "cityName": "تهران",
                        "deviceStatus": "غیرفعال",
                        "installationAddress": "شهرک غرب بلوار دریا",
                        "deviceBrandId": 3
                    },
                    {
                        "id": 124402,
                        "customerName": "سامان",
                        "deviceBranchName": "شعبه شهرک راه آهن",
                        "branchCode": "840",
                        "deviceSerial": "56DY601555",
                        "deviceTerminal": "1385",
                        "deviceName": "شعبه شهرک راه آهن",
                        "deviceTypeTitle": "ATM",
                        "deviceModelTitle": "Eastcom 285",
                        "areaName": "دفتر غرب تهران",
                        "provinceName": "تهران",
                        "cityName": "تهران",
                        "deviceStatus": "غیرفعال",
                        "installationAddress": "شهرک راه آهن - بلوار اصلی - شعبه بانک سامان",
                        "deviceBrandId": 1
                    }
                ],
                "TotalCount": 1000
            }
        };
        const response = await api.post('/Device/getDeviceList', {
            "skip": skip,
            "take": take,
            "sort": [
                {
                    "field": "id",
                    "dir": "desc"
                }
            ],
            "filter": {
                "logic": "and",
                "filters": []
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
        console.log('Error submitting /Device/getDeviceList request:', error);
        return { success: false, error: 'Failed to submit Device/getDeviceList request' };
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