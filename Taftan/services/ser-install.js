import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const submitInstallRequest = async (skip, take, navigation, optionFilters) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: {
                "Data": [
                    {
                        "AreaName": "دفتر شمال تهران",
                        "ConstraintId": 27,
                        "SDAreaName": "دفتر شمال تهران/دفتر شمال تهران",
                        "SLAStyle": 150,
                        "UserName": "leila",
                        "branchName": "سرپرستی استان اردبیل",
                        "currentUserName": "آرش سرخیل",
                        "customerName": "پاسارگاد",
                        "deviceSerial": "321",
                        "endDate": null,
                        "id": 29,
                        "installationServiceName": "نصب فیزیکی",
                        "lastState": "SendToOffice",
                        "modelTitle": "Eastcom 2050 Xe USB",
                        "operationalAreaName": "دفتر شمال تهران",
                        "persianLastState": "ارجاع به دفتر",
                        "persianRequestDeadLine": "1403/10/24",
                        "persianStartDate": "1403/10/23",
                        "persianState": "درحال انجام",
                        "preInstallTitle": "123555",
                        "preInstallationId": 15,
                        "reportHasFile": 0,
                        "requestDeadLine": 14031024170000,
                        "requestId": 384099,
                        "serviceName": "اصلاح وضعیت نصب",
                        "startDate": 14031023162640,
                        "state": "Start"
                    },
                    {
                        "AreaName": "دفتر شمال تهران",
                        "ConstraintId": 27,
                        "SDAreaName": "دفتر شمال تهران/دفتر شمال تهران",
                        "SLAStyle": 150,
                        "UserName": "leila",
                        "branchName": "سرپرستی استان اردبیل",
                        "currentUserName": "آرش سرخیل",
                        "customerName": "پاسارگاد",
                        "deviceSerial": "321",
                        "endDate": null,
                        "id": 28,
                        "installationServiceName": "نصب فیزیکی",
                        "lastState": "SendToOffice",
                        "modelTitle": "Eastcom 2050 Xe USB",
                        "operationalAreaName": "دفتر شمال تهران",
                        "persianLastState": "ارجاع به دفتر",
                        "persianRequestDeadLine": "1403/10/24",
                        "persianStartDate": "1403/10/23",
                        "persianState": "درحال انجام",
                        "preInstallTitle": "123555",
                        "preInstallationId": 15,
                        "reportHasFile": 0,
                        "requestDeadLine": 14031024170000,
                        "requestId": 384098,
                        "serviceName": "اصلاح وضعیت نصب",
                        "startDate": 14031023162640,
                        "state": "Start"
                    },
                    {
                        "AreaName": "مدیریت امور عملیات",
                        "ConstraintId": 27,
                        "SDAreaName": "دفتر شمال تهران/مدیریت امور عملیات",
                        "SLAStyle": 150,
                        "UserName": "leila",
                        "branchName": "سرپرستی استان اردبیل",
                        "currentUserName": "بابک رضایتی",
                        "customerName": "پاسارگاد",
                        "deviceSerial": "321",
                        "endDate": null,
                        "id": 27,
                        "installationServiceName": "نصب فیزیکی",
                        "lastState": "SendToOffice",
                        "modelTitle": "Eastcom 2050 Xe USB",
                        "operationalAreaName": "دفتر شمال تهران",
                        "persianLastState": "ارجاع به دفتر",
                        "persianRequestDeadLine": "1403/10/24",
                        "persianStartDate": "1403/10/23",
                        "persianState": "درحال انجام",
                        "preInstallTitle": "fffffffffffffff23233",
                        "preInstallationId": 14,
                        "reportHasFile": 0,
                        "requestDeadLine": 14031024170000,
                        "requestId": 384097,
                        "serviceName": "اصلاح وضعیت نصب",
                        "startDate": 14031023112507,
                        "state": "Start"
                    },
                    {
                        "AreaName": "دفتر شمال تهران",
                        "ConstraintId": 27,
                        "SDAreaName": "دفتر شمال تهران/مدیریت امور عملیات",
                        "SLAStyle": 150,
                        "UserName": "leila",
                        "branchName": "سرپرستی استان اردبیل",
                        "currentUserName": "آرش سرخیل",
                        "customerName": "پاسارگاد",
                        "deviceSerial": "321",
                        "endDate": null,
                        "id": 26,
                        "installationServiceName": "نصب فیزیکی",
                        "lastState": "SendToOffice",
                        "modelTitle": "Eastcom 2050 Xe USB",
                        "operationalAreaName": "دفتر شمال تهران",
                        "persianLastState": "ارجاع به دفتر",
                        "persianRequestDeadLine": "1403/10/24",
                        "persianStartDate": "1403/10/23",
                        "persianState": "درحال انجام",
                        "preInstallTitle": "fffffffffffffff23233",
                        "preInstallationId": 14,
                        "reportHasFile": 0,
                        "requestDeadLine": 14031024170000,
                        "requestId": 384096,
                        "serviceName": "اصلاح وضعیت نصب",
                        "startDate": 14031023112451,
                        "state": "Start"
                    },
                    {
                        "AreaName": "مدیریت امور عملیات",
                        "ConstraintId": 27,
                        "SDAreaName": "دفتر شمال تهران/ندارد",
                        "SLAStyle": 150,
                        "UserName": "leila",
                        "branchName": "سرپرستی استان اردبیل",
                        "currentUserName": "بابک رضایتی",
                        "customerName": "پاسارگاد",
                        "deviceSerial": "321",
                        "endDate": null,
                        "id": 25,
                        "installationServiceName": "نصب فیزیکی",
                        "lastState": "SendToOffice",
                        "modelTitle": "Eastcom 2050 Xe USB",
                        "operationalAreaName": "دفتر شمال تهران",
                        "persianLastState": "ارجاع به دفتر",
                        "persianRequestDeadLine": "1403/10/24",
                        "persianStartDate": "1403/10/23",
                        "persianState": "درحال انجام",
                        "preInstallTitle": "fffffffffffffff",
                        "preInstallationId": 13,
                        "reportHasFile": 0,
                        "requestDeadLine": 14031024170000,
                        "requestId": 384095,
                        "serviceName": "اصلاح وضعیت نصب",
                        "startDate": 14031023104437,
                        "state": "Start"
                    }],
                "TotalCount": 168
            }
        }
        const response = await api.post('/InstallationRequest/LoadAllInstallationRequestList', {
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
        console.log('Error submitting LoadAllInstallationRequestList request:', error);
        
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
        
        return { success: false, error: 'Failed to submit LoadAllInstallationRequestList request' };
    }
};


