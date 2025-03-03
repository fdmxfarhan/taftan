import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const submitSiteRequest = async (skip, take) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: {
                "Data": [{
                    "SLAStyle": 150,
                    "areaName": "دفتر نصب",
                    "branchName": "اداره توزیع و جمع آوری نقود",
                    "currentUserName": "لیلا شاپوری",
                    "customerInsertName": "لیلا شاپوری",
                    "customerName": "سامان",
                    "endDate": null,
                    "id": 16,
                    "insertedDate": 14021009115417,
                    "lastState": "Acting",
                    "modelTitle": "Eastcom 285",
                    "persianInsertedDate": "1402/10/09",
                    "persianLastState": "در حال اقدام",
                    "persianStartDate": "1402/10/09",
                    "reportHasFile": 0,
                    "requestDeadLine": 14021012170000,
                    "requestId": 374076,
                    "serviceName": "احیای سایت",
                    "siteName": "سایت 2",
                    "siteSerial": "SDF454545",
                    "siteTitle": "سایت 2",
                    "startDate": 14021009105157
                },
                {
                    "SLAStyle": 150,
                    "areaName": "دفتر نصب",
                    "branchName": "شعبه رباط کریم",
                    "currentUserName": "لیلا شاپوری",
                    "customerInsertName": "لیلا شاپوری",
                    "customerName": "موسسه اعتباری نور",
                    "endDate": null,
                    "id": 11,
                    "insertedDate": 14021009105157,
                    "lastState": "SendToOffice",
                    "modelTitle": "Eastcom 2050 Xe USB",
                    "persianInsertedDate": "1402/10/09",
                    "persianLastState": "ارجاع به دفتر",
                    "persianStartDate": "1402/10/09",
                    "reportHasFile": 0,
                    "requestDeadLine": 14021012170000,
                    "requestId": 374075,
                    "serviceName": "رفع خرابی سایت",
                    "siteName": "سایت 1",
                    "siteSerial": "SDF454545",
                    "siteTitle": "سایت 1",
                    "startDate": 14021009115417
                }],
                "TotalCount": 2
            }
        }
        const response = await api.post('/RequestSiteController/loadAllSiteRequestList',
            {
                "skip": skip,
                "take": take,
                "sort": [{
                    "field": "id",
                    "dir": "desc"
                }],
                "filter": {
                    "logic": "and",
                    "filters": [{
                        "field": "IsArchived",
                        "operator": "Eq",
                        "value": 0
                    }]
                }
            }, {
                headers: {
                    authorization: authData.token,
                }
            });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting loadAllSiteRequestList request:', error);
        return { success: false, error: 'Failed to submit loadAllSiteRequestList request' };
    }
};


