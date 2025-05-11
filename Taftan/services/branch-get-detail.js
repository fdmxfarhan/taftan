import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const GetBranchDetail = async (requestId) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: {
                "id": 40171.0,
                "ParentId": 54710.0,
                "CustomerId": 20038.0,
                "CustomerName": "ملت",
                "Title": "شعبه اصفهان",
                "ParentTitle": " مدیریت شعب استان اصفهان",
                "BranchCode": "9173",
                "ZoneId": 0.0,
                "ZoneName": "",
                "ProvinceId": 4.0,
                "ProvinceName": "اصفهان",
                "CityId": 10486.0,
                "CityName": "اصفهان",
                "Address": "اصفهان-میدان امام حسین",
                "Latitude": 0.0,
                "Longitude": 0.0,
                "Phone": null,
                "IsActive": true
            }
        };
        const response = await api.get(`/Branch/GetBranchDetail/${requestId}`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                "User-Agent": "Mobile",
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting GetBranchDetail request:', error);
        return { success: false, error: 'Failed to submit GetBranchDetail request' };
    }
};


