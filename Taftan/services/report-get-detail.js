import api from '../config/api';
import { use_local_data } from '../config/consts';

export const loadReportDetail = async (requestId, reportId, requestActionId) => {
    var response = null;
    try {
        if (use_local_data) return {
            success: true, data: {
                "requestReportInfo": {
                    "requestId": 1051473,
                    "customerName": "دی",
                    "insertedDateTime_long": 14031011155552,
                    "insertedDateTime": "1403/10/11 15:55:52",
                    "areaName": "دفتر غرب تهران",
                    "areaId": 26,
                    "serviceGroupName": "رفع خرابی",
                    "serviceGroupId": 1,
                    "deviceTypeId": 29,
                    "deviceId": 16377,
                    "deviceBrandId": 3,
                    "deviceModelId": 15,
                    "deviceName": "باجه تجاری مهرسان",
                    "deviceSerial": "5300507080",
                    "deviceTerminal": "1308",
                    "branchName": "شعبه مجازی",
                    "branchCode": "5555",
                    "branchId": 54172,
                    "deviceModelName": "Wincor 1500 Xe USB",
                    "expertName": "حسین صبوری",
                    "userAssignList": [
                        {
                            "id": 40249,
                            "requestId": 0,
                            "currentUserName": "حسین صبوری",
                            "expertType_String": "اصلی",
                            "expertType": 0
                        }
                    ],
                    "openRequestCount": 0
                },
                "reportInfo": {
                    "id": 1150239,
                    "requestId": 1051473,
                    "startDate_long": 140310111110,
                    "endDate_long": 140310111122,
                    "SecondReportCausesId": 0,
                    "SecondReportCausesTitle": "",
                    "startDate": "1403/10/11",
                    "endDate": "1403/10/11",
                    "startTime": "11:10",
                    "endTime": "11:22",
                    "QuestionAnswers": [],
                    "imageFileName": "http://10.55.5.13/AdminService/content//ReportFile/202412/20241231155758/Capture2.JPG",
                    "fileName": "http://10.55.5.13/AdminService/content//ReportFile/202412/20241231155805/net1.JPG",
                    "reportDescription": "88888899999999990000",
                    "reportExpertDescription": "99999999990000",
                    "isSecondReport": 0,
                    "showSaveButton": false
                },
                "damageReportInfo": {
                    "reportRecognitionList": [
                        {
                            "serviceName": "مشکلات امنیتی",
                            "id": 161,
                            "serviceGroupTitle": "رفع خرابی",
                            "serviceId": 14,
                            "title": "اشکال در Anti Skimming / Anti Fraud",
                            "isActive": false,
                            "serviceGroupId": 1,
                            "description": "65656565"
                        }
                    ],
                    "reportJobTitleList": [
                        {
                            "id": 1576901,
                            "title": "تعویض Optical Indicator",
                            "jobTitleId": 79,
                            "description": "656565",
                            "jobCode": "179"
                        }
                    ],
                    "reportDBOList": [],
                    "reportWarrantyList": [],
                    "deviceConfigHistory": [],
                    "deviceConfig": [
                        {
                            "id": 10063,
                            "deviceId": 16377,
                            "serial": "ha14b18036900",
                            "deviceModuleModel": "EPP EC2001",
                            "deviceModuleModelId": 149,
                            "deviceHWTitle": "EPP",
                            "deviceHWId": 20,
                            "code": "20101052602"
                        },
                        {
                            "id": 127421,
                            "deviceId": 16377,
                            "serial": "6107377976",
                            "deviceModuleModel": "ZAC (USB)",
                            "deviceModuleModelId": 74,
                            "deviceHWTitle": "Dispenser - Board",
                            "deviceHWId": 12,
                            "code": "20101030602"
                        },
                        {
                            "id": 223355,
                            "deviceId": 16377,
                            "serial": "فاقد سریال",
                            "deviceModuleModel": "DDR2 RAM 2GB",
                            "deviceModuleModelId": 224,
                            "deviceHWTitle": "PC - RAM",
                            "deviceHWId": 29,
                            "code": "30101050800102"
                        },
                        {
                            "id": 392574,
                            "deviceId": 16377,
                            "serial": "5671323889",
                            "deviceModuleModel": "Receipt Printer TP07",
                            "deviceModuleModelId": 291,
                            "deviceHWTitle": "Receipt Printer",
                            "deviceHWId": 34,
                            "code": "20101050901"
                        },
                        {
                            "id": 434253,
                            "deviceId": 16377,
                            "serial": "59ck018728",
                            "deviceModuleModel": "PC 3G 1500",
                            "deviceModuleModelId": 266,
                            "deviceHWTitle": "PC - Type",
                            "deviceHWId": 31,
                            "code": "20101050813"
                        },
                        {
                            "id": 434788,
                            "deviceId": 16377,
                            "serial": "3x8633",
                            "deviceModuleModel": "V2XU-Card Reader",
                            "deviceModuleModelId": 67,
                            "deviceHWTitle": "Card Reader",
                            "deviceHWId": 10,
                            "code": "20101050701"
                        },
                        {
                            "id": 458420,
                            "deviceId": 16377,
                            "serial": "5836585009",
                            "deviceModuleModel": "V-Module 1,2",
                            "deviceModuleModelId": 101,
                            "deviceHWTitle": "Dispenser - Main Module",
                            "deviceHWId": 15,
                            "code": "20101050301"
                        },
                        {
                            "id": 475597,
                            "deviceId": 16377,
                            "serial": "56CQ403316",
                            "deviceModuleModel": "CMD-V4 Housing 4x ",
                            "deviceModuleModelId": 90,
                            "deviceHWTitle": "Dispenser - Housing",
                            "deviceHWId": 14,
                            "code": "20101050502"
                        }
                    ],
                    "isWarranty": false,
                    "softwareWarrantyType": false,
                    "serviceWarrantyType": false,
                    "changeModuleWarrantyType": false,
                    "serviceName": "تهیه اطلاعات"
                },
                "siteReportInfo": null,
                "projectReportInfo": null,
                "installReportInfo": null,
                "pmReportInfo": null
            }
        };
        response = await api.get(`/ReportController/loadReportDetail/${requestId}/${reportId == null ? 0 : reportId}?requestActionId=${requestActionId}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submiting /ReportController/loadReportDetail request:', error);
        return { success: false };
    }
};


