import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const loadReportDetail = async (requestId, reportId, requestActionId, navigation) => {
    const authData = await getAuthData();
    var response = null;
    try {
        if (use_local_data) return {
            success: true, data: {
                "requestReportInfo": {
                    "requestId": 364040,
                    "customerName": "بانک ملت",
                    "insertedDateTime_long": 13961106090339,
                    "insertedDateTime": "1396/11/06 09:03:39",
                    "areaName": "مدیریت امور عملیات",
                    "areaId": 6,
                    "serviceGroupName": "رفع خرابی",
                    "serviceGroupId": 1,
                    "deviceTypeKey": "454c3f79-fea0-445e-b293-38610649db72",
                    "deviceId": 19508,
                    "deviceBrandKey": "c59ff5c8-866a-4617-8843-7e3d2a165096",
                    "deviceModelKey": "e4560eef-320d-4e66-933c-f0107aa69a6b",
                    "deviceName": "شعبه میدان مبارزان اردبیل",
                    "deviceSerial": "38508059",
                    "deviceTerminal": "1448",
                    "branchName": "پاسارگاد",
                    "branchCode": null,
                    "branchId": 36235,
                    "deviceModelName": "NCR 5886",
                    "expertName": "لیلا شاپوری",
                    "userAssignList": [
                        {
                            "userKey": "8ed21c2e-2733-4622-9e30-cc69ef8a3098",
                            "Id": 0,
                            "currentUserName": "لیلا شاپوری",
                            "expertType_String": "اصلی",
                            "expertType": 0
                        }
                    ],
                    "openRequestCount": 0
                },
                "reportInfo": {
                    "id": 0,
                    "requestId": 364040,
                    "startDate_long": 140301010000,
                    "endDate_long": 140301011000,
                    "SecondReportCausesId": 0,
                    "SecondReportCausesTitle": "",
                    "startDate": "1403/01/01",
                    "endDate": "1403/01/01",
                    "startTime": "00:00",
                    "endTime": "10:00",
                    "QuestionAnswers": [],
                    "imageFileName": null,
                    "fileName": null,
                    "reportDescription": null,
                    "reportExpertDescription": null,
                    "isSecondReport": 0,
                    "showSaveButton": true
                },
                "damageReportInfo": {
                    "reportRecognitionList": [],
                    "reportJobTitleList": [],
                    "reportDBOList": [],
                    "reportWarrantyList": [],
                    "deviceConfigHistory": [],
                    "deviceConfig": [],
                    "isWarranty": null,
                    "softwareWarrantyType": null,
                    "serviceWarrantyType": null,
                    "changeModuleWarrantyType": null,
                    "serviceName": "خرابی کارتخوان"
                },
                "siteReportInfo": null,
                "projectReportInfo": null,
                "installReportInfo": null,
                "pmReportInfo": null
            }
        };
        response = await api.get(`/ReportController/loadReportDetail/${requestId}/${reportId == null ? 0 : reportId}?requestActionId=${requestActionId}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submiting /ReportController/loadReportDetail request:', error);
        
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
        
        return { success: false, error: 'Failed to load report detail' };
    }
};


