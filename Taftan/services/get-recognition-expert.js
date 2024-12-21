import api from '../config/api';
import { use_local_data } from '../config/consts';

export const GetRecognitionExpertByDeviceTypeId = async (deviceTypeKey, serviceId) => {
    try {
        if (use_local_data) return {
            success: true,
            data: [
                {
                    "id": 149,
                    "title": "روشن نشدن PC",
                    "description": null
                },
                {
                    "id": 150,
                    "title": "ریست شدن PC",
                    "description": null
                },
                {
                    "id": 151,
                    "title": "هنگ کردن PC",
                    "description": null
                },
                {
                    "id": 152,
                    "title": "صدای غیر طبیعی (فن ها / هارد و..)",
                    "description": null
                },
                {
                    "id": 153,
                    "title": "اشکال در پورت های ورودی / خروجی",
                    "description": null
                },
                {
                    "id": 154,
                    "title": "اشکال نرم‌افزاری BIOS",
                    "description": null
                }
            ]
        };
        const response = await api.get(`/DeviceTypeRecognitionExpert/GetRecognitionExpertByDeviceTypeId/${deviceTypeKey}/${serviceId}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /DeviceTypeRecognitionExpert/GetRecognitionExpertByDeviceTypeId request:', error);
        return { success: false, error: 'Failed to submit /DeviceTypeRecognitionExpert/GetRecognitionExpertByDeviceTypeId request' };
    }
};


