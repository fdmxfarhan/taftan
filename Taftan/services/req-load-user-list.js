import api from '../config/api';
import { use_local_data } from '../config/consts';

export const getUserList = async (areaId, requestId) => {
    try {
        if (use_local_data) return {
            success: true, data: [
                {
                    "Id": 40165,
                    "Fname": "امیررضا",
                    "Lname": "شربیانی"
                },
                {
                    "Id": 40249,
                    "Fname": "حسین",
                    "Lname": "صبوری"
                },
                {
                    "Id": 40254,
                    "Fname": "امیر",
                    "Lname": "حشمتی"
                },
                {
                    "Id": 50686,
                    "Fname": "فرامرز",
                    "Lname": "عبداله پور"
                },
                {
                    "Id": 50808,
                    "Fname": "ابراهیم",
                    "Lname": "احسانی"
                },
                {
                    "Id": 50844,
                    "Fname": "میلاد",
                    "Lname": "حسین زاده"
                },
                {
                    "Id": 50872,
                    "Fname": "سیدرسول",
                    "Lname": "سیدترابی"
                },
                {
                    "Id": 60929,
                    "Fname": "مجتبی",
                    "Lname": "میرزائیان"
                }
            ]
        };

        const response = await api.get(`/User/LoadUserListByAreaIdAndRequestId?AreaId=${areaId}&RequestId=${requestId}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting LoadUserListByAreaIdAndRequestId request:', error);
        return { success: false, error: 'Failed to submit LoadUserListByAreaIdAndRequestId request' };
    }
};


