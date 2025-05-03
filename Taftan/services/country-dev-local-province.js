import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const LoadProvinceList = async () => {
    const authData = await getAuthData();
    var response = null;
    try {
        if (true || use_local_data) return {
            success: true, data: [
                {
                    "id": 1,
                    "provinceName": "آذربایجان شرقی",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 2,
                    "provinceName": "آذربایجان غربی",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 3,
                    "provinceName": "اردبیل",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 4,
                    "provinceName": "اصفهان",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 5,
                    "provinceName": "البرز",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 6,
                    "provinceName": "ایلام",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 7,
                    "provinceName": "بوشهر",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 8,
                    "provinceName": "تهران",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 9,
                    "provinceName": "چهارمحال و بختیاری",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 10,
                    "provinceName": "خراسان جنوبی",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 11,
                    "provinceName": "خراسان رضوی",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 12,
                    "provinceName": "خراسان شمالی",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 13,
                    "provinceName": "خوزستان",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 14,
                    "provinceName": "زنجان",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 15,
                    "provinceName": "سمنان",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 16,
                    "provinceName": "سیستان و بلوچستان",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 17,
                    "provinceName": "فارس",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 18,
                    "provinceName": "قزوین",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 19,
                    "provinceName": "قم",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 24,
                    "provinceName": "گلستان",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 25,
                    "provinceName": "گیلان",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 26,
                    "provinceName": "لرستان",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 27,
                    "provinceName": "مازندران",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 28,
                    "provinceName": "مرکزی",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 29,
                    "provinceName": "هرمزگان",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 30,
                    "provinceName": "همدان",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 20,
                    "provinceName": "کردستان",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 21,
                    "provinceName": "کرمان",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 22,
                    "provinceName": "کرمانشاه",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 23,
                    "provinceName": "کهگیلویه و بویراحمد",
                    "isActive": true,
                    "coordinateId": 1
                },
                {
                    "id": 31,
                    "provinceName": "یزد",
                    "isActive": true,
                    "coordinateId": 1
                }
            ]
        };
        response = await api.get(`/CountryDivisions/LoadProvinceList`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submiting /CountryDivisions/LoadProvinceList request:', error);
        return { success: false };
    }
};


