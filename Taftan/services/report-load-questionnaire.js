import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const loadQuestionnaireWithQuestionList = async (requestId) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true,
            data: [
                {
                    "Id": 13,
                    "Title": "پرسش تست",
                    "ServiceGroupId": 1,
                    "ServiceGroupTitle": "نصب",
                    "DeviceTypeKey": "454c3f79-fea0-445e-b293-38610649db72",
                    "DeviceTypeTitle": "ATM",
                    "Questions": [
                        {
                            "categoryId": 7,
                            "categoryTitle": "محل نصب تجهیز",
                            "QuestionList": [
                                {
                                    "id": 0,
                                    "questionnaireId": 111,
                                    "title": "ارت",
                                    "questionType": 4,
                                    "options": [],
                                    "categoryId": 7,
                                    "categoryTitle": "محل نصب تجهیز",
                                    "isActive": false
                                }
                            ]
                        },
                        {
                            "categoryId": 11,
                            "categoryTitle": "نتیجه نهایی",
                            "QuestionList": [
                                {
                                    "id": 0,
                                    "questionnaireId": 112,
                                    "title": "با توجه به اطلاعات فوق، امکان حمل تجهیز وجود دارد؟",
                                    "questionType": 2,
                                    "options": [
                                        {
                                            "priority": 0,
                                            "title": "بله",
                                            "isDescriptionMandatory": false,
                                            "isDescriptionShow": false,
                                            "description": "",
                                            "TypeId": 0
                                        },
                                        {
                                            "priority": 1,
                                            "title": "خیر",
                                            "isDescriptionMandatory": false,
                                            "isDescriptionShow": false,
                                            "description": "",
                                            "TypeId": 0
                                        }
                                    ],
                                    "categoryId": 11,
                                    "categoryTitle": "نتیجه نهایی",
                                    "isActive": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "Id": 7,
                    "Title": "test12",
                    "ServiceGroupId": 1,
                    "ServiceGroupTitle": "نصب",
                    "DeviceTypeKey": "454c3f79-fea0-445e-b293-38610649db72",
                    "DeviceTypeTitle": "ATM",
                    "Questions": [
                        {
                            "categoryId": 11,
                            "categoryTitle": "نتیجه نهایی",
                            "QuestionList": [
                                {
                                    "id": 0,
                                    "questionnaireId": 8,
                                    "title": "با توجه به اطلاعات فوق، امکان نصب فیزیکی وجود دارد؟",
                                    "questionType": 2,
                                    "options": [
                                        {
                                            "priority": 0,
                                            "title": "بله",
                                            "isDescriptionMandatory": false,
                                            "isDescriptionShow": false,
                                            "description": "",
                                            "TypeId": 0
                                        },
                                        {
                                            "priority": 1,
                                            "title": "خیر",
                                            "isDescriptionMandatory": false,
                                            "isDescriptionShow": false,
                                            "description": "",
                                            "TypeId": 0
                                        }
                                    ],
                                    "categoryId": 11,
                                    "categoryTitle": "نتیجه نهایی",
                                    "isActive": false
                                },
                                {
                                    "id": 0,
                                    "questionnaireId": 9,
                                    "title": "با توجه به اطلاعات فوق، امکان حمل تجهیز وجود دارد؟",
                                    "questionType": 2,
                                    "options": [
                                        {
                                            "priority": 0,
                                            "title": "بله",
                                            "isDescriptionMandatory": false,
                                            "isDescriptionShow": false,
                                            "description": "",
                                            "TypeId": 0
                                        },
                                        {
                                            "priority": 1,
                                            "title": "خیر",
                                            "isDescriptionMandatory": false,
                                            "isDescriptionShow": false,
                                            "description": "",
                                            "TypeId": 0
                                        }
                                    ],
                                    "categoryId": 11,
                                    "categoryTitle": "نتیجه نهایی",
                                    "isActive": false
                                }
                            ]
                        },
                        {
                            "categoryId": 18,
                            "categoryTitle": "جابجایی (توسط پیمانکار)",
                            "QuestionList": [
                                {
                                    "id": 0,
                                    "questionnaireId": 10,
                                    "title": "کدامیک در مسیر جابه‌جایی وجود دارد؟",
                                    "questionType": 1,
                                    "options": [
                                        {
                                            "priority": 0,
                                            "title": "پله",
                                            "isDescriptionMandatory": true,
                                            "isDescriptionShow": true,
                                            "description": "تعداد پله (ها) را در این کادر وارد نمایید.",
                                            "TypeId": 2
                                        },
                                        {
                                            "priority": 1,
                                            "title": "طبقات",
                                            "isDescriptionMandatory": true,
                                            "isDescriptionShow": true,
                                            "description": "تعداد طبقات را در این کادر وارد نمایید.",
                                            "TypeId": 2
                                        },
                                        {
                                            "priority": 2,
                                            "title": "آسانسور",
                                            "isDescriptionMandatory": false,
                                            "isDescriptionShow": false,
                                            "description": "",
                                            "TypeId": 0
                                        },
                                        {
                                            "priority": 3,
                                            "title": "سطح شیب دار",
                                            "isDescriptionMandatory": false,
                                            "isDescriptionShow": true,
                                            "description": "در صورت نیاز توضیح دهید.",
                                            "TypeId": 1
                                        },
                                        {
                                            "priority": 4,
                                            "title": "هیچ کدام",
                                            "isDescriptionMandatory": false,
                                            "isDescriptionShow": false,
                                            "description": "",
                                            "TypeId": 0
                                        }
                                    ],
                                    "categoryId": 18,
                                    "categoryTitle": "جابجایی (توسط پیمانکار)",
                                    "isActive": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "Id": 3,
                    "Title": "test3",
                    "ServiceGroupId": 1,
                    "ServiceGroupTitle": "نصب",
                    "DeviceTypeKey": "454c3f79-fea0-445e-b293-38610649db72",
                    "DeviceTypeTitle": "ATM",
                    "Questions": [
                        {
                            "categoryId": 12,
                            "categoryTitle": "امکان سنجی نصب تجهیز",
                            "QuestionList": [
                                {
                                    "id": 0,
                                    "questionnaireId": 4,
                                    "title": "ارتفاع کلی دریچه:",
                                    "questionType": 4,
                                    "options": [],
                                    "categoryId": 12,
                                    "categoryTitle": "امکان سنجی نصب تجهیز",
                                    "isActive": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "Id": 2,
                    "Title": "test2",
                    "ServiceGroupId": 1,
                    "ServiceGroupTitle": "نصب",
                    "DeviceTypeKey": "454c3f79-fea0-445e-b293-38610649db72",
                    "DeviceTypeTitle": "ATM",
                    "Questions": [
                        {
                            "categoryId": 18,
                            "categoryTitle": "جابجایی (توسط پیمانکار)",
                            "QuestionList": [
                                {
                                    "id": 0,
                                    "questionnaireId": 2,
                                    "title": "کدامیک در مسیر جابه‌جایی وجود دارد؟",
                                    "questionType": 1,
                                    "options": [
                                        {
                                            "priority": 0,
                                            "title": "پله",
                                            "isDescriptionMandatory": true,
                                            "isDescriptionShow": true,
                                            "description": "تعداد پله (ها) را در این کادر وارد نمایید.",
                                            "TypeId": 2
                                        },
                                        {
                                            "priority": 1,
                                            "title": "طبقات",
                                            "isDescriptionMandatory": true,
                                            "isDescriptionShow": true,
                                            "description": "تعداد طبقات را در این کادر وارد نمایید.",
                                            "TypeId": 2
                                        },
                                        {
                                            "priority": 2,
                                            "title": "آسانسور",
                                            "isDescriptionMandatory": false,
                                            "isDescriptionShow": false,
                                            "description": "",
                                            "TypeId": 0
                                        },
                                        {
                                            "priority": 3,
                                            "title": "سطح شیب دار",
                                            "isDescriptionMandatory": false,
                                            "isDescriptionShow": true,
                                            "description": "در صورت نیاز توضیح دهید.",
                                            "TypeId": 1
                                        },
                                        {
                                            "priority": 4,
                                            "title": "هیچ کدام",
                                            "isDescriptionMandatory": false,
                                            "isDescriptionShow": false,
                                            "description": "",
                                            "TypeId": 0
                                        }
                                    ],
                                    "categoryId": 18,
                                    "categoryTitle": "جابجایی (توسط پیمانکار)",
                                    "isActive": false
                                }
                            ]
                        },
                        {
                            "categoryId": 11,
                            "categoryTitle": "نتیجه نهایی",
                            "QuestionList": [
                                {
                                    "id": 0,
                                    "questionnaireId": 3,
                                    "title": "با توجه به اطلاعات فوق، امکان حمل تجهیز وجود دارد؟",
                                    "questionType": 2,
                                    "options": [
                                        {
                                            "priority": 0,
                                            "title": "بله",
                                            "isDescriptionMandatory": false,
                                            "isDescriptionShow": false,
                                            "description": "",
                                            "TypeId": 0
                                        },
                                        {
                                            "priority": 1,
                                            "title": "خیر",
                                            "isDescriptionMandatory": false,
                                            "isDescriptionShow": false,
                                            "description": "",
                                            "TypeId": 0
                                        }
                                    ],
                                    "categoryId": 11,
                                    "categoryTitle": "نتیجه نهایی",
                                    "isActive": false
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        const response = await api.get(`/ReportController/GetQuestionnaireWithQuestionListByRequestId`, {
            params: {
                requestId: requestId
            },
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
                'User-Agent': 'Mobile',
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error loading questionnaire data:', error);
        return { success: false, error: 'Failed to load questionnaire data' };
    }
}; 