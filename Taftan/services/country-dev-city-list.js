import api from '../config/api';
import { use_local_data } from '../config/consts';

export const LoadActiveCityList = async (provinceId) => {
    var response = null;
    try {
        if (use_local_data) return {
            success: true, data: [
                {
                    "id": 10526,
                    "cityName": "اسلامشهر",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 10527,
                    "cityName": "پاکدشت",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 10528,
                    "cityName": "تهران",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 10529,
                    "cityName": "دماوند",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 10530,
                    "cityName": "رباط کریم",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 10531,
                    "cityName": "ری",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 10532,
                    "cityName": "شمیرانات",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 10533,
                    "cityName": "شهریار",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 10534,
                    "cityName": "فیروزکوه",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 10535,
                    "cityName": "ورامین",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 10875,
                    "cityName": "پرند",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 10997,
                    "cityName": "اندیشه",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 10998,
                    "cityName": "ملارد",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 10999,
                    "cityName": "نسیم شهر",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11006,
                    "cityName": "شهرقدس",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11012,
                    "cityName": "اوشان",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11077,
                    "cityName": "گلستان",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11078,
                    "cityName": "فشافویه",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11125,
                    "cityName": "رودهن",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11128,
                    "cityName": "مارلیک",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11130,
                    "cityName": "بومهن",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11132,
                    "cityName": "آبسرد",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11133,
                    "cityName": "احمدآباد مستوفی",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11134,
                    "cityName": "پردیس",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11135,
                    "cityName": "پیشوا",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11136,
                    "cityName": "جاجرود",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11137,
                    "cityName": "چهاردانگه",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11138,
                    "cityName": "خاورشهر",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11139,
                    "cityName": "شریف آباد",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11140,
                    "cityName": "فشم",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11141,
                    "cityName": "قرچک",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11142,
                    "cityName": "کهریزک",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11143,
                    "cityName": "گیلاوند",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11144,
                    "cityName": "لواسان",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11173,
                    "cityName": "سرآسیاب",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11279,
                    "cityName": "رودبارقصران",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11280,
                    "cityName": "شمشک",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11281,
                    "cityName": "شاهدشهر",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11282,
                    "cityName": "نصیرشهر",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11283,
                    "cityName": "وحیدیه",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11284,
                    "cityName": "کیلان",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11285,
                    "cityName": "قلعه نو",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11286,
                    "cityName": "کن",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11287,
                    "cityName": "صالحیه",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11288,
                    "cityName": "صباشهر",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11289,
                    "cityName": "صفا دشت",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11290,
                    "cityName": "فردوسیه",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11291,
                    "cityName": "فرون آباد",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11292,
                    "cityName": "جلیل آباد",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11293,
                    "cityName": "جوادآباد",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11294,
                    "cityName": "حسن آباد",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11295,
                    "cityName": "باغستان",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11296,
                    "cityName": "آبعلی",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11297,
                    "cityName": "باقرشهر",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11298,
                    "cityName": "بوستان",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11299,
                    "cityName": "بهارستان",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11318,
                    "cityName": "وردآورد",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11319,
                    "cityName": "گرمدره",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11320,
                    "cityName": "کرشت",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11347,
                    "cityName": "دربندسر",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11348,
                    "cityName": "قیامدشت",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11359,
                    "cityName": "زمان آباد",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11379,
                    "cityName": "خاتون آباد",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11380,
                    "cityName": "خیرآباد",
                    "provinceId": 8,
                    "isActive": true
                },
                {
                    "id": 11401,
                    "cityName": "واوان",
                    "provinceId": 8,
                    "isActive": true
                }
            ]
        };
        response = await api.get(`/CountryDivisions/LoadActiveCityList/${provinceId}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submiting /CountryDivisions/LoadActiveCityList request:', error);
        return { success: false };
    }
};


