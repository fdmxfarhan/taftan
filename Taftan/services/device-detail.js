import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const GetDeviceDetail = async (deviceId, navigation) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: {
                "id": 12618,
                "deviceModelId": 17,
                "deviceModelTitle": "Wincor 2050 Xe USB",
                "customerId": 20038,
                "cityId": 10486,
                "provinceId": 4,
                "zoneId": 0,
                "orginalLink": 0,
                "supportLink": 0,
                "deviceTypeId": 29,
                "branchId": 40171,
                "latitude": 0,
                "longitude": 0,
                "strLatitude": "32.65843",
                "strLongitude": "51.668992",
                "areaId": 41,
                "aciveContractId": 268,
                "aciveContractTitle": "پشتیبانی خودپرداز بانک ملت ـ 1402",
                "deviceBrandId": 3,
                "deviceHWId": 0,
                "reservedContractId": 4,
                "deviceSerial": "5300459701",
                "deviceTerminal": "3799",
                "deviceName": "شعبه مرکزی اصفهان",
                "deviceBrandName": "Wincor",
                "provinceName": "اصفهان",
                "deviceType": "ATM",
                "customerName": "ملت",
                "cityName": "اصفهان",
                "zoneName": null,
                "areaName": "دفتر اصفهان",
                "installationAddress": "اصفهان-میدان امام حسین(دروازه دولت)",
                "deviceStatus": 1,
                "installationPhone": "0",
                "description": "",
                "deviceCodeNumber": null,
                "orginalLinkTitle": null,
                "supportLinkTitle": null,
                "deviceBranchName": "شعبه اصفهان",
                "branchCode": "9173",
                "contractReservedName": null,
                "persianInstallationDate": "",
                "persianWarrantyStartDate": "",
                "persianActivateDate": "",
                "persianWarrantyEndDate": "",
                "persianDeliveryDate": "",
                "persianPmEndDate": "1402/07/10"
            }
        };
        const response = await api.get(`/Device/GetDeviceDetail/${deviceId}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /Device/GetDeviceDetail request:', error);
        
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
        
        return { success: false, error: 'Failed to GetDeviceDetail request' };
    }
};


