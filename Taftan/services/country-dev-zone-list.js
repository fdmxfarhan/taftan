import api from '../config/api';
import { use_local_data } from '../config/consts';

export const LoadActiveZoneList = async (cityId) => {
    var response = null;
    try {
        if (use_local_data) return {
            success: true, data: [
                {
                    "id": 36,
                    "title": "منطقه 1-آجودانیه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 15,
                    "title": "منطقه 1-ازگل",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 16,
                    "title": "منطقه 1-اقدسیه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 31,
                    "title": "منطقه 1-الهیه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 18,
                    "title": "منطقه 1-امامزاده قاسم",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 7,
                    "title": "منطقه 1-اوین",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 11,
                    "title": "منطقه 1-باغ فردوس",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 13,
                    "title": "منطقه 1-تجریش",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 19,
                    "title": "منطقه 1-جماران",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 20,
                    "title": "منطقه 1-چیذر",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 33,
                    "title": "منطقه 1-حصاربوعلی",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 32,
                    "title": "منطقه 1-حکمت",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 21,
                    "title": "منطقه 1-دارآباد",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 12,
                    "title": "منطقه 1-دربند",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 6,
                    "title": "منطقه 1-درکه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 22,
                    "title": "منطقه 1-دزاشیب",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 39,
                    "title": "منطقه 1-رستم آباد",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 10,
                    "title": "منطقه 1-زعفرانیه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 23,
                    "title": "منطقه 1-سوهانک",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 25,
                    "title": "منطقه 1-شهرک محلاتی",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 24,
                    "title": "منطقه 1-شهرک نفت",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 27,
                    "title": "منطقه 1-فرشته",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 26,
                    "title": "منطقه 1-فرمانیه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 14,
                    "title": "منطقه 1-قیطریه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 35,
                    "title": "منطقه 1-گلاب دره",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 9,
                    "title": "منطقه 1-محمودیه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 34,
                    "title": "منطقه 1-منظریه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 38,
                    "title": "منطقه 1-نخجوان",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 30,
                    "title": "منطقه 1-نیاوران",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 8,
                    "title": "منطقه 1-ولنجک",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 28,
                    "title": "منطقه 1-کاشانک",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 29,
                    "title": "منطقه 1-کامرانیه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 37,
                    "title": "منطقه 1-کوهسار",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 40,
                    "title": "منطقه 2-برق آلستوم",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 51,
                    "title": "منطقه 2-تهران ویلا",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 52,
                    "title": "منطقه 2-ستارخان",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 50,
                    "title": "منطقه 2-سعادت آباد",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 47,
                    "title": "منطقه 2-شهرآرا",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 49,
                    "title": "منطقه 2-شهرک غرب",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 48,
                    "title": "منطقه 2-شهرک مخابرات",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 46,
                    "title": "منطقه 2-صادقیه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 45,
                    "title": "منطقه 2-طرشت",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 44,
                    "title": "منطقه 2-فرحزاد",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 43,
                    "title": "منطقه 2-گیشا",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 42,
                    "title": "منطقه 2-مرزداران",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 41,
                    "title": "منطقه 2-همایون شهر",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 65,
                    "title": "منطقه 3-احتشامیه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 53,
                    "title": "منطقه 3-اختیاریه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 68,
                    "title": "منطقه 3-امانیه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 64,
                    "title": "منطقه 3-پاسداران",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 60,
                    "title": "منطقه 3-جردن",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 67,
                    "title": "منطقه 3-داوودیه",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 63,
                    "title": "منطقه 3-دروس",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 62,
                    "title": "منطقه 3-دولت",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 61,
                    "title": "منطقه 3-دیباجی",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 58,
                    "title": "منطقه 3-سیدخندان",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 57,
                    "title": "منطقه 3-ظفر",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 55,
                    "title": "منطقه 3-قلهک",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 56,
                    "title": "منطقه 3-میرداماد",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 59,
                    "title": "منطقه 3-ولیعصر",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 54,
                    "title": "منطقه 3-ونک",
                    "cityId": 0,
                    "isActive": true
                },
                {
                    "id": 66,
                    "title": "منطقه 3-کاوسیه",
                    "cityId": 0,
                    "isActive": true
                }
            ]
        };
        response = await api.get(`/CountryDivisions/LoadActiveZoneList/${cityId}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submiting /CountryDivisions/LoadActiveZoneList request:', error);
        return { success: false };
    }
};


