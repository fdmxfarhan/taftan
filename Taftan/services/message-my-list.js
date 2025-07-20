import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const loadMyMessageBoxList = async (skip, take) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: {
                "Data": [
                    {
                        "Id": 71514,
                        "SenderName": "ادمین سیستم",
                        "SenderId": 10027,
                        "Message": "1051473\r\nدی\r\nباجه تجاری مهرسان(1308)\r\nتهیه اطلاعات\r\nمهدی ساجدی\r\n09127159518",
                        "DateSend": 14031011155552,
                        "persianDateSend": "1403/10/11",
                        "DateRead": 0,
                        "persianDateRead": "-",
                        "Status": false,
                        "type": 0,
                        "username": "1059"
                    },
                    {
                        "Id": 71513,
                        "SenderName": "ادمین سیستم",
                        "SenderId": 10027,
                        "Message": "1051472\r\nملت\r\nباجه مخابرات هفتم تیر(سمنان)(3328)\r\nمشکلات امنیتی\r\nامین حیدری\r\n09127159518",
                        "DateSend": 14031011154146,
                        "persianDateSend": "1403/10/11",
                        "DateRead": 0,
                        "persianDateRead": "-",
                        "Status": false,
                        "type": 0,
                        "username": "1059"
                    },
                    {
                        "Id": 71512,
                        "SenderName": "ادمین سیستم",
                        "SenderId": 10027,
                        "Message": "1051471\r\nبه پرداخت\r\nباجه بیمارستان امام خمینی(undefined3038)\r\nتهیه اطلاعات\r\nامین منصوری\r\n0912715958",
                        "DateSend": 14031011153121,
                        "persianDateSend": "1403/10/11",
                        "DateRead": 0,
                        "persianDateRead": "-",
                        "Status": false,
                        "type": 0,
                        "username": "1059"
                    },
                    {
                        "Id": 71511,
                        "SenderName": "ادمین سیستم",
                        "SenderId": 10027,
                        "Message": "1051470\r\nبه پرداخت\r\nباجه بیمارستان امام خمینی(undefined3002)\r\nتهیه اطلاعات\r\nامین حیدری\r\n09127159518",
                        "DateSend": 14031011120909,
                        "persianDateSend": "1403/10/11",
                        "DateRead": 0,
                        "persianDateRead": "-",
                        "Status": false,
                        "type": 0,
                        "username": "1059"
                    },
                    {
                        "Id": 71510,
                        "SenderName": "ادمین سیستم",
                        "SenderId": 10027,
                        "Message": "1051469\r\nملت\r\nباجه فروشگاه سالار(3471)\r\nخرابی نرم‌افزاری\r\nامینی فرد\r\n09127159518",
                        "DateSend": 14031010143946,
                        "persianDateSend": "1403/10/10",
                        "DateRead": 0,
                        "persianDateRead": "-",
                        "Status": false,
                        "type": 0,
                        "username": "1059"
                    },
                    {
                        "Id": 71509,
                        "SenderName": "ادمین سیستم",
                        "SenderId": 10027,
                        "Message": "1051468\r\nدی\r\nباجه بنیاد شهید منطقه 9 و 21(1643)\r\nخرابی بارکدخوان\r\nامین منصوری\r\n09127159518",
                        "DateSend": 14031010143847,
                        "persianDateSend": "1403/10/10",
                        "DateRead": 0,
                        "persianDateRead": "-",
                        "Status": false,
                        "type": 0,
                        "username": "1059"
                    },
                    {
                        "Id": 71505,
                        "SenderName": "ادمین سیستم",
                        "SenderId": 10027,
                        "Message": "1051464\r\nبه پرداخت\r\nباجه بیمارستان امام خمینی(undefined3002)\r\nخرابی کامپیوتر\r\nمهدی ساجدی\r\n9127159518",
                        "DateSend": 14031010121625,
                        "persianDateSend": "1403/10/10",
                        "DateRead": 0,
                        "persianDateRead": "-",
                        "Status": false,
                        "type": 0,
                        "username": "1059"
                    },
                    {
                        "Id": 71502,
                        "SenderName": "ادمین سیستم",
                        "SenderId": 10027,
                        "Message": "1051461\r\nبه پرداخت\r\nباجه بیمارستان پیامبران(5223504)\r\nمشکلات امنیتی\r\nامین منصوری\r\n9127159518",
                        "DateSend": 14031010115511,
                        "persianDateSend": "1403/10/10",
                        "DateRead": 0,
                        "persianDateRead": "-",
                        "Status": false,
                        "type": 0,
                        "username": "1059"
                    },
                    {
                        "Id": 71501,
                        "SenderName": "ادمین سیستم",
                        "SenderId": 10027,
                        "Message": "1051460\r\nسامان\r\nشعبه شعبه چهارباغ 1(1280)\r\nخرابی چاپگر رسید مشتری\r\nمهدی ساجدی\r\n9127159518",
                        "DateSend": 14031010113511,
                        "persianDateSend": "1403/10/10",
                        "DateRead": 0,
                        "persianDateRead": "-",
                        "Status": false,
                        "type": 0,
                        "username": "1059"
                    },
                    {
                        "Id": 71499,
                        "SenderName": "ادمین سیستم",
                        "SenderId": 10027,
                        "Message": "1051458\r\nبه پرداخت\r\nباجه بیمارستان پیامبران(5223504)\r\nتغییر تنظیمات دستگاه\r\nامین حیدری\r\n9127159518",
                        "DateSend": 14031010111804,
                        "persianDateSend": "1403/10/10",
                        "DateRead": 0,
                        "persianDateRead": "-",
                        "Status": false,
                        "type": 0,
                        "username": "1059"
                    }
                ],
                "TotalCount": 157
            }
        };

        const response = await api.post('/MessageBox/loadMyMessageBoxList', {
            "skip": skip,
            "take": take,
            "sort": [
                {
                    "field": "Id",
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
                'UserAgent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /MessageBox/loadMyMessageBoxList request:', error);
        return { success: false, error: 'Failed to submit damage request' };
    }
};


