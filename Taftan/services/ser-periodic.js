import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const submitPeriodicRequest = async (skip, take, navigation, optionFilters) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: {
                "Data": [
                    {
                        "SLAStyle": 150,
                        "areaName": "دفتر شمال تهران",
                        "branchName": "تست حنیف 1",
                        "currentUserName": "آرش سرخیل",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceModelTitle": "Eastcom 2050 Xe USB",
                        "deviceName": "device",
                        "deviceTerminal": "123",
                        "endDate": null,
                        "id": 374074,
                        "insertedDate": 14030917133216,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/17",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "?",
                        "pmTitle": "12",
                        "reportHasFile": 0,
                        "requestDeadLine": 14031030000000,
                        "requestId": 374074,
                        "startDate": 0
                    },
                    {
                        "SLAStyle": 0,
                        "areaName": "دفتر شمال تهران",
                        "branchName": "تست حنیف 1",
                        "currentUserName": "آرش سرخیل",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceModelTitle": "Eastcom 2050 Xe USB",
                        "deviceName": "device",
                        "deviceTerminal": "123",
                        "endDate": null,
                        "id": 374069,
                        "insertedDate": 14030917114311,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/17",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "?",
                        "pmTitle": "11",
                        "reportHasFile": 0,
                        "requestDeadLine": 14040101000000,
                        "requestId": 374069,
                        "startDate": 0
                    },
                    {
                        "SLAStyle": 0,
                        "areaName": "دفتر شمال تهران",
                        "branchName": "تست حنیف 1",
                        "currentUserName": "آرش سرخیل",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceModelTitle": "Eastcom 2050 Xe USB",
                        "deviceName": "device",
                        "deviceTerminal": "123",
                        "endDate": null,
                        "id": 374068,
                        "insertedDate": 14030917113952,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/17",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "?",
                        "pmTitle": "11",
                        "reportHasFile": 0,
                        "requestDeadLine": 14040101000000,
                        "requestId": 374068,
                        "startDate": 0
                    },
                    {
                        "SLAStyle": 0,
                        "areaName": "دفتر شمال تهران",
                        "branchName": "تست حنیف 1",
                        "currentUserName": "آرش سرخیل",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceModelTitle": "Eastcom 2050 Xe USB",
                        "deviceName": "device",
                        "deviceTerminal": "123",
                        "endDate": null,
                        "id": 374067,
                        "insertedDate": 14030917113613,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/17",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "?",
                        "pmTitle": "11",
                        "reportHasFile": 0,
                        "requestDeadLine": 14040101000000,
                        "requestId": 374067,
                        "startDate": 0
                    },
                    {
                        "SLAStyle": 0,
                        "areaName": "دفتر شمال تهران",
                        "branchName": "تست حنیف 1",
                        "currentUserName": "آرش سرخیل",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "پاسارگاد",
                        "deviceModelTitle": "Eastcom 2050 Xe USB",
                        "deviceName": "device",
                        "deviceTerminal": "123",
                        "endDate": null,
                        "id": 374066,
                        "insertedDate": 14030917112855,
                        "lastState": "UnPlanned",
                        "persianEndDate": "-",
                        "persianInsertedDate": "1403/09/17",
                        "persianLastState": "برنامه ریزی نشده",
                        "persianStartDate": "?",
                        "pmTitle": "11",
                        "reportHasFile": 0,
                        "requestDeadLine": 14040101000000,
                        "requestId": 374066,
                        "startDate": 0
                    },
                    {
                        "SLAStyle": 0,
                        "areaName": "مدیریت امور عملیات",
                        "branchName": "پاسارگاد",
                        "currentUserName": "لیلا شاپوری",
                        "customerInsertName": "لیلا شاپوری",
                        "customerName": "بانک ملت",
                        "deviceModelTitle": "Wincor 1500  Xe",
                        "deviceName": "باجه بیمارستان امام خمینی",
                        "deviceTerminal": "2458",
                        "endDate": 13961105140000,
                        "id": 364039,
                        "insertedDate": 13961105133406,
                        "lastState": "Acting",
                        "persianEndDate": "1396/11/05",
                        "persianInsertedDate": "1396/11/05",
                        "persianLastState": "در حال اقدام",
                        "persianStartDate": "1396/11/05",
                        "pmTitle": "11",
                        "reportHasFile": 1,
                        "requestDeadLine": 13961105193400,
                        "requestId": 364039,
                        "startDate": 13961105133406
                    }],
                "TotalCount": 6
            }
        }
        const response = await api.post('/RequestPMController/loadAllPMRequestList', {
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
        console.log('Error submitting loadAllPMRequestList request:', error);
        
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
        
        return { success: false, error: 'Failed to submit loadAllPMRequestList request' };
    }
};


