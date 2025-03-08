import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const getDeviceListForInsertRequest = async (customerId, branchId) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: [
                {
                    "deviceId": 11549,
                    "branchId": 42123,
                    "areaId": 35,
                    "deviceTypeId": 29,
                    "areaName": "دفتر سمنان",
                    "ConstraintId": 0,
                    "customerId": 20038,
                    "deviceSerial": "5404672365",
                    "branchName": "شعبه میدان سعدی سمنان",
                    "deviceName": "شعبه میدان سعدی سمنان 1",
                    "modelTitle": "Wincor 2050 Xe USB",
                    "UserName": "hai",
                    "deviceTerminal": "3650"
                },
                {
                    "deviceId": 11893,
                    "branchId": 42102,
                    "areaId": 35,
                    "deviceTypeId": 29,
                    "areaName": "دفتر سمنان",
                    "ConstraintId": 0,
                    "customerId": 20038,
                    "deviceSerial": "56BQ203920",
                    "branchName": "شعبه ایوانکی",
                    "deviceName": "شعبه ایوانکی",
                    "modelTitle": "Eastcom 2050 Xe USB",
                    "UserName": "hai",
                    "deviceTerminal": "4398"
                },
                {
                    "deviceId": 11894,
                    "branchId": 42100,
                    "areaId": 35,
                    "deviceTypeId": 29,
                    "areaName": "دفتر سمنان",
                    "ConstraintId": 0,
                    "customerId": 20038,
                    "deviceSerial": "56BQ203921",
                    "branchName": "خزانه داری سمنان",
                    "deviceName": "باجه سو‍پر مارکت باباعلی",
                    "modelTitle": "Eastcom 2050 Xe USB",
                    "UserName": "hai",
                    "deviceTerminal": "4396"
                },
                {
                    "deviceId": 12371,
                    "branchId": 42124,
                    "areaId": 35,
                    "deviceTypeId": 29,
                    "areaName": "دفتر سمنان",
                    "ConstraintId": 0,
                    "customerId": 20038,
                    "deviceSerial": "5300433452",
                    "branchName": "شعبه میدان شهید بهشتی سمنان",
                    "deviceName": "شعبه میدان شهید بهشتی سمنان 2",
                    "modelTitle": "Wincor 2050 Xe USB",
                    "UserName": "hai",
                    "deviceTerminal": "4127"
                },
                {
                    "deviceId": 12425,
                    "branchId": 42100,
                    "areaId": 35,
                    "deviceTypeId": 29,
                    "areaName": "دفتر سمنان",
                    "ConstraintId": 0,
                    "customerId": 20038,
                    "deviceSerial": "5300433975",
                    "branchName": "خزانه داری سمنان",
                    "deviceName": "باجه مخابرات هفتم تیر(سمنان)",
                    "modelTitle": "Wincor 1500 Xe USB",
                    "UserName": "hai",
                    "deviceTerminal": "3328"
                }
            ]
        };
        const response = await api.get(`/RequestDamageController/getDeviceListForInsertRequest/${customerId}/${branchId}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /RequestDamageController/getDeviceListForInsertRequest request:', error);
        return { success: false, error: 'Failed to submit /RequestDamageController/getDeviceListForInsertRequest request' };
    }
};


