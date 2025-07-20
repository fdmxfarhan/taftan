import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const GetCustomersTitleList = async (navigation) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: [
                {
                    "id": 20082,
                    "title": "888",
                    "isActive": true
                },
                {
                    "id": 20081,
                    "title": "yyyyy",
                    "isActive": true
                },
                {
                    "id": 20073,
                    "title": "آدونیس",
                    "isActive": true
                },
                {
                    "id": 20054,
                    "title": "ایران زمین",
                    "isActive": true
                },
                {
                    "id": 20079,
                    "title": "به پرداخت",
                    "isActive": true
                },
                {
                    "id": 20037,
                    "title": "پارسا",
                    "isActive": true
                },
                {
                    "id": 20055,
                    "title": "پارسیان",
                    "isActive": true
                },
                {
                    "id": 20029,
                    "title": "پاسارگاد",
                    "isActive": true
                },
                {
                    "id": 20080,
                    "title": "پاسارگاد (باجه)",
                    "isActive": true
                },
                {
                    "id": 20075,
                    "title": "پست بانک",
                    "isActive": true
                },
                {
                    "id": 20042,
                    "title": "توسعه تعاون",
                    "isActive": true
                },
                {
                    "id": 20076,
                    "title": "دی",
                    "isActive": true
                },
                {
                    "id": 20030,
                    "title": "رفاه",
                    "isActive": true
                },
                {
                    "id": 20036,
                    "title": "سامان",
                    "isActive": true
                },
                {
                    "id": 20047,
                    "title": "سپه",
                    "isActive": true
                },
                {
                    "id": 20066,
                    "title": "سینا",
                    "isActive": true
                },
                {
                    "id": 20071,
                    "title": "شخص حقیقی",
                    "isActive": true
                },
                {
                    "id": 20078,
                    "title": "شرکت یاس",
                    "isActive": true
                },
                {
                    "id": 20038,
                    "title": "ملت",
                    "isActive": true
                },
                {
                    "id": 20069,
                    "title": "موسسه اعتباری نور",
                    "isActive": true
                },
                {
                    "id": 20031,
                    "title": "کارآفرین",
                    "isActive": true
                },
                {
                    "id": 20077,
                    "title": "کاسپین",
                    "isActive": true
                }
            ]
        };
        const response = await api.get(`/Customer/GetCustomersTitleList?isActive=true`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'UserAgent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /Customer/GetCustomersTitleList request:', error);
        
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
        
        return { success: false, error: 'Failed to submit /Customer/GetCustomersTitleList request' };
    }
};


