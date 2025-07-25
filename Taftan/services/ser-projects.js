import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const submitProjectRequest = async (skip, take, navigation, optionFilters) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: {
                "Data": [
                    {
                        "SLAStyle": 150,
                        "areaName": "دفتر غرب تهران",
                        "branchName": "شعبه فردوس غرب",
                        "currentUserName": "حسین صبوری",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceId": 0,
                        "deviceModelTitle": "Wincor 2050 Xe USB 6Cass",
                        "deviceName": "شعبه فردوس غرب",
                        "deviceTerminal": "266538",
                        "endDate": null,
                        "insertedDate": 14030911155151,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/11",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "1403/09/06",
                        "projectTitle": "test1",
                        "reportHasFile": 0,
                        "requestDeadLine": 14030918000000,
                        "requestId": 374065,
                        "startDate": 14030906000000
                    },
                    {
                        "SLAStyle": 150,
                        "areaName": "دفتر غرب تهران",
                        "branchName": "شعبه کاشانی",
                        "currentUserName": "حسین صبوری",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceId": 0,
                        "deviceModelTitle": "Wincor 2050 Xe 6Cass",
                        "deviceName": "شعبه کاشانی- 1",
                        "deviceTerminal": "224798",
                        "endDate": null,
                        "insertedDate": 14030911143823,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/11",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "1403/09/06",
                        "projectTitle": "test1",
                        "reportHasFile": 0,
                        "requestDeadLine": 14030918000000,
                        "requestId": 374064,
                        "startDate": 14030906000000
                    },
                    {
                        "SLAStyle": 150,
                        "areaName": "دفتر شمال تهران",
                        "branchName": "شعبه زعفرانیه",
                        "currentUserName": "آرش سرخیل",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceId": 0,
                        "deviceModelTitle": "Wincor 2050 Xe",
                        "deviceName": "شعبه زعفرانیه",
                        "deviceTerminal": "220607",
                        "endDate": null,
                        "insertedDate": 14030911141626,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/11",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "1403/09/06",
                        "projectTitle": "test1",
                        "reportHasFile": 0,
                        "requestDeadLine": 14030918000000,
                        "requestId": 374063,
                        "startDate": 14030906000000
                    },
                    {
                        "SLAStyle": 150,
                        "areaName": "دفتر غرب تهران",
                        "branchName": "شعبه سردار جنگل",
                        "currentUserName": "حسین صبوری",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceId": 0,
                        "deviceModelTitle": "Eastcom 2050 Xe USB",
                        "deviceName": "شعبه سردار جنگل ",
                        "deviceTerminal": "386264",
                        "endDate": null,
                        "insertedDate": 14030911141015,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/11",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "1403/09/06",
                        "projectTitle": "test1",
                        "reportHasFile": 0,
                        "requestDeadLine": 14030918000000,
                        "requestId": 374062,
                        "startDate": 14030906000000
                    },
                    {
                        "SLAStyle": 150,
                        "areaName": "دفتر مشهد",
                        "branchName": "شعبه بلوار هاشمیه",
                        "currentUserName": "ابراهیم برومند کتی نژاد",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceId": 0,
                        "deviceModelTitle": "Eastcom 2050 Xe USB",
                        "deviceName": "شعبه بلوار هاشمیه",
                        "deviceTerminal": "385950",
                        "endDate": null,
                        "insertedDate": 14030911132713,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/11",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "1403/09/06",
                        "projectTitle": "test1",
                        "reportHasFile": 0,
                        "requestDeadLine": 14030918000000,
                        "requestId": 374061,
                        "startDate": 14030906000000
                    },
                    {
                        "SLAStyle": 150,
                        "areaName": "دفتر شمال تهران",
                        "branchName": "تست حنیف 1",
                        "currentUserName": "آرش سرخیل",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceId": 0,
                        "deviceModelTitle": "Eastcom 2050 Xe USB",
                        "deviceName": "device",
                        "deviceTerminal": "123",
                        "endDate": null,
                        "insertedDate": 14030911130707,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/11",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "1403/09/06",
                        "projectTitle": "test1",
                        "reportHasFile": 0,
                        "requestDeadLine": 14030918000000,
                        "requestId": 374060,
                        "startDate": 14030906000000
                    },
                    {
                        "SLAStyle": 150,
                        "areaName": "دفتر غرب تهران",
                        "branchName": "شعبه شاهین شمالی",
                        "currentUserName": "حسین صبوری",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceId": 0,
                        "deviceModelTitle": "Eastcom 2050 Xe USB",
                        "deviceName": "شعبه شاهین شمالی-2",
                        "deviceTerminal": "384954",
                        "endDate": null,
                        "insertedDate": 14030911130409,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/11",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "1403/09/06",
                        "projectTitle": "test1",
                        "reportHasFile": 0,
                        "requestDeadLine": 14030918000000,
                        "requestId": 374059,
                        "startDate": 14030906000000
                    },
                    {
                        "SLAStyle": 150,
                        "areaName": "دفتر مرکز تهران",
                        "branchName": "شعبه بازارکفاش ها",
                        "currentUserName": "مهدی راستی",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceId": 0,
                        "deviceModelTitle": "Eastcom 2050 Xe USB",
                        "deviceName": "شعبه بازار کفاش ها",
                        "deviceTerminal": "385677",
                        "endDate": null,
                        "insertedDate": 14030911115922,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/11",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "1403/09/06",
                        "projectTitle": "test1",
                        "reportHasFile": 0,
                        "requestDeadLine": 14030918000000,
                        "requestId": 374058,
                        "startDate": 14030906000000
                    },
                    {
                        "SLAStyle": 150,
                        "areaName": "دفتر قزوین",
                        "branchName": "شعبه بابایی قزوین",
                        "currentUserName": "مهدی عباسی ها",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceId": 0,
                        "deviceModelTitle": "Eastcom 2050 Xe USB",
                        "deviceName": "شعبه بابایی قزوین",
                        "deviceTerminal": "385618",
                        "endDate": null,
                        "insertedDate": 14030911115922,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/11",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "1403/09/06",
                        "projectTitle": "test1",
                        "reportHasFile": 0,
                        "requestDeadLine": 14030918000000,
                        "requestId": 374057,
                        "startDate": 14030906000000
                    },
                    {
                        "SLAStyle": 150,
                        "areaName": "دفتر جنوب تهران",
                        "branchName": "شعبه نازی آباد",
                        "currentUserName": "احد آرین دوست",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceId": 0,
                        "deviceModelTitle": "Eastcom 2050 Xe USB",
                        "deviceName": "شعبه نازی آباد",
                        "deviceTerminal": "384978",
                        "endDate": null,
                        "insertedDate": 14030911115922,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/11",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "1403/09/06",
                        "projectTitle": "test1",
                        "reportHasFile": 0,
                        "requestDeadLine": 14030918000000,
                        "requestId": 374056,
                        "startDate": 14030906000000
                    }],
                "TotalCount": 27
            }
        }
        const response = await api.post('/RequestProjectController/LoadAllProjectRequestList', {
            "skip": skip,
            "take": take,
            "sort": [{
                "field": "id",
                "dir": "desc"
            }],
            "filter": {
                "logic": "and",
                "filters": optionFilters
            }
        }, {
            headers: {
                Authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'UserAgent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting loadAllProjectRequestList request:', error);
        
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                logout();
                navigation.navigate('Login');
                return { success: false, error: 'Unauthorized access' };
            }
            if (error.response.data?.Message === "Authorization has been denied for this request.") {
                logout();
                navigation.navigate('Login');
                return { success: false, error: 'Authorization denied' };
            }
        }
        
        return { success: false, error: 'Failed to submit loadAllProjectRequestList request' };
    }
};


