import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const loadReportDetail = async (requestId, reportId, requestActionId, navigation) => {
    const authData = await getAuthData();
    var response = null;
    try {
        if (use_local_data) return {
            success: true,
            data: {
                "damageReportInfo": {
                    "changeModuleWarrantyType": null,
                    "deviceConfig": [],
                    "deviceConfigHistory": [],
                    "isWarranty": null,
                    "reportDBOList": [],
                    "reportJobTitleList": [],
                    "reportRecognitionList": [],
                    "reportWarrantyList": [],
                    "serviceName": "خرابی کارتخوان",
                    "serviceWarrantyType": null,
                    "softwareWarrantyType": null
                },
                "installReportInfo": null,
                "pmReportInfo": null,
                "projectReportInfo": null,
                "reportInfo": {
                    "QuestionAnswers": [],
                    "SecondReportCausesId": 0,
                    "SecondReportCausesTitle": "",
                    "endDate": "1403/01/01",
                    "endDate_long": 140301011000,
                    "endTime": "10:00",
                    "fileName": null,
                    "id": 0,
                    "imageFileName": null,
                    "isSecondReport": 1,
                    "reportDescription": null,
                    "reportExpertDescription": null,
                    "requestId": 364040,
                    "showSaveButton": true,
                    "startDate": "1403/01/01",
                    "startDate_long": 140301010000,
                    "startTime": "00:00"
                },
                "requestReportInfo": {
                    "areaId": 6,
                    "areaName": "مدیریت امور عملیات",
                    "branchCode": null,
                    "branchId": 36235,
                    "branchName": "پاسارگاد",
                    "customerName": "بانک ملت",
                    "deviceBrandKey": "c59ff5c8-866a-4617-8843-7e3d2a165096",
                    "deviceId": 19508,
                    "deviceModelKey": "e4560eef-320d-4e66-933c-f0107aa69a6b",
                    "deviceModelName": "NCR 5886",
                    "deviceName": "شعبه میدان مبارزان اردبیل",
                    "deviceSerial": "38508059",
                    "deviceTerminal": "1448",
                    "deviceTypeKey": "454c3f79-fea0-445e-b293-38610649db72",
                    "expertName": "لیلا شاپوری",
                    "insertedDateTime": "1396/11/06 09:03:39",
                    "insertedDateTime_long": 13961106090339,
                    "openRequestCount": 0,
                    "requestId": 364040,
                    "serviceGroupId": 1,
                    "serviceGroupName": "رفع خرابی",
                    "userAssignList": [[Object]]
                },
                "siteReportInfo": null
            }
        };
        response = await api.get(`/ReportController/loadReportDetail/${requestId}/${reportId == null ? 0 : reportId}?requestActionId=${requestActionId}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'UserAgent': 'Mobile',
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


const actionResult = {
    "actinResult": "موفق",
    "actionTypeId": 1,
    "actionTypeTitle": "مراجعه", 
    "description": "-",
    "endDateTime": 140301011000,
    "fileName": "",
    "id": 36,
    "reportId": null,
    "requestId": 364040,
    "startDateTime": 140301010000,
    "unsuccessfullActionReasonId": null,
    "unsuccessfullActionReasonTitle": null,
    "unsuccessfullActionSide": false
}