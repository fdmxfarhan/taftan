import api from '../config/api';
import { use_local_data } from '../config/consts';

export const loadReportDetail = async (requestId, reportId, requestActionId) => {
    var response = null;
    try {
        if (use_local_data) return {
            success: true, data: {
                "requestReportInfo": {
                    "requestId": 1041455,
                    "customerName": "ملت",
                    "insertedDateTime_long": 14030918150925,
                    "insertedDateTime": "1403/09/18 15:09:25",
                    "areaName": "دفتر غرب تهران",
                    "areaId": 26,
                    "serviceGroupName": "رفع خرابی",
                    "serviceGroupId": 1,
                    "deviceTypeId": 29,
                    "deviceId": 12618,
                    "deviceBrandId": 3,
                    "deviceModelId": 17,
                    "deviceName": "شعبه مرکزی اصفهان",
                    "deviceSerial": "5300459701",
                    "deviceTerminal": "3799",
                    "branchName": "شعبه اصفهان",
                    "branchCode": "9173",
                    "branchId": 40171,
                    "deviceModelName": "Wincor 2050 Xe USB",
                    "expertName": "حسین صبوری",
                    "userAssignList": [
                        {
                            "id": 40254,
                            "requestId": 0,
                            "currentUserName": "امیر حشمتی",
                            "expertType_String": " کمکی",
                            "expertType": 0
                        },
                        {
                            "id": 40249,
                            "requestId": 0,
                            "currentUserName": "حسین صبوری",
                            "expertType_String": "اصلی",
                            "expertType": 0
                        }
                    ],
                    "openRequestCount": 0
                },
                "reportInfo": {
                    "id": 0,
                    "requestId": 1041455,
                    "startDate_long": 140310301145,
                    "endDate_long": 140310301446,
                    "SecondReportCausesId": 0,
                    "SecondReportCausesTitle": "",
                    "startDate": "1403/10/30",
                    "endDate": "1403/10/30",
                    "startTime": "11:45",
                    "endTime": "14:46",
                    "QuestionAnswers": [
                        {
                            "id": 14611,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 127276,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3920Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 183663,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 196054,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 205163,
                            "questionnaireId": 385,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3850Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 210827,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 276519,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 68309,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 111906,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 340955,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 45,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 16301,
                            "questionnaireId": 436,
                            "questionId": 51,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4360Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 15,
                            "categoryTitle": null
                        },
                        {
                            "id": 289104,
                            "questionnaireId": 394,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3940Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 379324,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 331257,
                            "questionnaireId": 397,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3972Des",
                                    "title": "فضای آزاد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 442160,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 327515,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 399852,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 455840,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 489313,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 467983,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4021Des",
                                    "title": "Active/غیرفعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 505866,
                            "questionnaireId": 518,
                            "questionId": 84,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5180Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 13,
                            "categoryTitle": null
                        },
                        {
                            "id": 505571,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3771Des",
                                    "title": "نامطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "ندارد",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 527660,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 557921,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 582255,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3920Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 587346,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3861Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 630573,
                            "questionnaireId": 376,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3760Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 691050,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 608668,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 643697,
                            "questionnaireId": 391,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3910Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 662329,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 703871,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 744119,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 816712,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4061Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 806340,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "3",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 852591,
                            "questionnaireId": 448,
                            "questionId": 52,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4481Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 16,
                            "categoryTitle": null
                        },
                        {
                            "id": 931269,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 921431,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3860Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 919673,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4090Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 935711,
                            "questionnaireId": 515,
                            "questionId": 82,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5153Des",
                                    "title": "100,000",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 13,
                            "categoryTitle": null
                        },
                        {
                            "id": 925723,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 962967,
                            "questionnaireId": 517,
                            "questionId": 83,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5170Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 13,
                            "categoryTitle": null
                        },
                        {
                            "id": 1010312,
                            "questionnaireId": 388,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3881Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 948013,
                            "questionnaireId": 435,
                            "questionId": 51,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4350Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 15,
                            "categoryTitle": null
                        },
                        {
                            "id": 998105,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4031Des",
                                    "title": "صدای مطلوب ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 1078743,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1046021,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1099533,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1081629,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1048374,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 1042542,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4091Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 1086007,
                            "questionnaireId": 408,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4081Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 1192388,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 1140627,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "2",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 1164489,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4032Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 1111813,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "2.5",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 1201626,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4020Des",
                                    "title": "Active/فعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 1274690,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3920Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 1257496,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3920Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 1345743,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 1361531,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1372167,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1434193,
                            "questionnaireId": 524,
                            "questionId": 90,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5241Des",
                                    "title": "دارد ـ تست ناموفق Contactless Reader در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 1441232,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3860Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 1451498,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1564864,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1581725,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1577941,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 1515203,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1524729,
                            "questionnaireId": 373,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3730Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1508243,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4061Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 1555748,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4091Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 1535209,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 1572957,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4020Des",
                                    "title": "Active/فعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 1543102,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 1646484,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3860Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 1623389,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4091Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 1694579,
                            "questionnaireId": 400,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4000Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 1638026,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3921Des",
                                    "title": "نامطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "کمرنگ بودن کلیدها",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 1676167,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 1705779,
                            "questionnaireId": 405,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4050Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 1771996,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "2.8",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 1727483,
                            "questionnaireId": 526,
                            "questionId": 91,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5262Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 1782129,
                            "questionnaireId": 379,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3790Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1779459,
                            "questionnaireId": 447,
                            "questionId": 52,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4471Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 16,
                            "categoryTitle": null
                        },
                        {
                            "id": 1793207,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1818686,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3861Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 1853177,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1858302,
                            "questionnaireId": 480,
                            "questionId": 68,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4807Des",
                                    "title": "هیچ کدام",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 14,
                            "categoryTitle": null
                        },
                        {
                            "id": 1855668,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1818418,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 1837787,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 1837111,
                            "questionnaireId": 447,
                            "questionId": 52,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4471Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 16,
                            "categoryTitle": null
                        },
                        {
                            "id": 1942520,
                            "questionnaireId": 443,
                            "questionId": 51,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4430Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 15,
                            "categoryTitle": null
                        },
                        {
                            "id": 1912775,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 1933999,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 1953084,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 1961298,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 1930890,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4061Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 1905990,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4091Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 1937437,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 2060580,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 2074157,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3921Des",
                                    "title": "نامطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 2046650,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 2021813,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4022Des",
                                    "title": "Passive",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 2081618,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4020Des",
                                    "title": "Active/فعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 2166681,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 2190534,
                            "questionnaireId": 476,
                            "questionId": 61,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4761Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 18,
                            "categoryTitle": null
                        },
                        {
                            "id": 2213751,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 2134500,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3920Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 2175178,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 2217867,
                            "questionnaireId": 518,
                            "questionId": 84,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5180Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 13,
                            "categoryTitle": null
                        },
                        {
                            "id": 2223969,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "2",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 2273976,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 2245865,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 2261809,
                            "questionnaireId": 513,
                            "questionId": 81,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5133Des",
                                    "title": "100,000",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 13,
                            "categoryTitle": null
                        },
                        {
                            "id": 2277350,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 2256347,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3920Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 2393229,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 2378742,
                            "questionnaireId": 385,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3850Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 2395686,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 2436343,
                            "questionnaireId": 379,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3790Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 2425277,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3831Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 2466695,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 2487212,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 2498906,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 2550504,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3981Des",
                                    "title": "دارد - تست ناموفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 2563819,
                            "questionnaireId": 411,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4111Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 2590596,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 2678138,
                            "questionnaireId": 509,
                            "questionId": 79,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5095Des",
                                    "title": "سایر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "1/000/000",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 13,
                            "categoryTitle": null
                        },
                        {
                            "id": 2638571,
                            "questionnaireId": 480,
                            "questionId": 68,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4800Des",
                                    "title": "Device Manual",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4802Des",
                                    "title": "Receipt Printer Roll",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 14,
                            "categoryTitle": null
                        },
                        {
                            "id": 2652570,
                            "questionnaireId": 511,
                            "questionId": 80,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5114Des",
                                    "title": "500,000",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 13,
                            "categoryTitle": null
                        },
                        {
                            "id": 2666746,
                            "questionnaireId": 527,
                            "questionId": 92,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5270Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 2711293,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 2790794,
                            "questionnaireId": 481,
                            "questionId": 68,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4810Des",
                                    "title": "Device Manual",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4812Des",
                                    "title": "Receipt Printer Roll",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 14,
                            "categoryTitle": null
                        },
                        {
                            "id": 331130,
                            "questionnaireId": 517,
                            "questionId": 83,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5170Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 13,
                            "categoryTitle": null
                        },
                        {
                            "id": 84323,
                            "questionnaireId": 521,
                            "questionId": 87,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5210Des",
                                    "title": "دارد ـ تست تراکنش و کنترل عکس موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 2753980,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5191Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 2802867,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 374089,
                            "questionnaireId": 511,
                            "questionId": 80,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5110Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 13,
                            "categoryTitle": null
                        },
                        {
                            "id": 2764050,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 280604,
                            "questionnaireId": 515,
                            "questionId": 82,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5150Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 13,
                            "categoryTitle": null
                        },
                        {
                            "id": 2789554,
                            "questionnaireId": 522,
                            "questionId": 89,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5222Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 235290,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 2875611,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4091Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 2861293,
                            "questionnaireId": 400,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4000Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 2811484,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3831Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 2907006,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4020Des",
                                    "title": "Active/فعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 2967485,
                            "questionnaireId": 388,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3880Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 2948311,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 2982039,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4091Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 2953599,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3711Des",
                                    "title": " نا مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 2995278,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3030505,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 3037424,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 3000705,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3082369,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3920Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 3076035,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 3070771,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 3097624,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 3036484,
                            "questionnaireId": 394,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3940Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 3158808,
                            "questionnaireId": 509,
                            "questionId": 79,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5090Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 13,
                            "categoryTitle": null
                        },
                        {
                            "id": 3170683,
                            "questionnaireId": 463,
                            "questionId": 53,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4631Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 17,
                            "categoryTitle": null
                        },
                        {
                            "id": 3166515,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3208950,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4090Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 3236603,
                            "questionnaireId": 513,
                            "questionId": 81,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5130Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 13,
                            "categoryTitle": null
                        },
                        {
                            "id": 3278323,
                            "questionnaireId": 405,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4050Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3278396,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 3282851,
                            "questionnaireId": 524,
                            "questionId": 90,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5241Des",
                                    "title": "دارد ـ تست ناموفق Contactless Reader در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3243939,
                            "questionnaireId": 470,
                            "questionId": 59,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4701Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 18,
                            "categoryTitle": null
                        },
                        {
                            "id": 3310519,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 3337850,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 3330773,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3860Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 3372958,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 3373425,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 3413247,
                            "questionnaireId": 373,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3730Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 3406420,
                            "questionnaireId": 528,
                            "questionId": 93,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5280Des",
                                    "title": "LAN",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 24,
                            "categoryTitle": null
                        },
                        {
                            "id": 3413276,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 3460476,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 3465078,
                            "questionnaireId": 455,
                            "questionId": 52,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4551Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 16,
                            "categoryTitle": null
                        },
                        {
                            "id": 3459226,
                            "questionnaireId": 521,
                            "questionId": 87,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5210Des",
                                    "title": "دارد ـ تست تراکنش و کنترل عکس موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3506115,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3920Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 3486603,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 3560100,
                            "questionnaireId": 391,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3910Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 3526748,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4091Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 3592344,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 3569688,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 3611479,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 3538012,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3982Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3655009,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3692151,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 3728369,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3726396,
                            "questionnaireId": 473,
                            "questionId": 60,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4731Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 18,
                            "categoryTitle": null
                        },
                        {
                            "id": 3742706,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3804663,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3691Des",
                                    "title": "نامطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 3722470,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 3738656,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4021Des",
                                    "title": "Active/غیرفعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3745165,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 3763090,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 3789255,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3763154,
                            "questionnaireId": 528,
                            "questionId": 93,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5282Des",
                                    "title": "سیم کارت",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 24,
                            "categoryTitle": null
                        },
                        {
                            "id": 3928502,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4021Des",
                                    "title": "Active/غیرفعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3876234,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5191Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 3845231,
                            "questionnaireId": 397,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3970Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 3861363,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4020Des",
                                    "title": "Active/فعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3891059,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4012Des",
                                    "title": "BNC",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3898942,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 3907706,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3861Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4004912,
                            "questionnaireId": 376,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3760Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 3947631,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "نور محیط زیاد کیفیت نامطلوب",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "نور محیط زیاد کیفیت نامطلوب",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4030533,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4031Des",
                                    "title": "صدای مطلوب ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4027754,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4061Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4021112,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4025748,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "رفع ایراد شد.",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "رفع ایراد شد.",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4069190,
                            "questionnaireId": 459,
                            "questionId": 53,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4591Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 17,
                            "categoryTitle": null
                        },
                        {
                            "id": 4067697,
                            "questionnaireId": 459,
                            "questionId": 53,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4591Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 17,
                            "categoryTitle": null
                        },
                        {
                            "id": 4110500,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3982Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4126308,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4058605,
                            "questionnaireId": 382,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3820Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4093328,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4089228,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4094241,
                            "questionnaireId": 522,
                            "questionId": 89,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5220Des",
                                    "title": "دارد ـ تست موفق Chip Card Reader در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4123427,
                            "questionnaireId": 408,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4081Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4126414,
                            "questionnaireId": 467,
                            "questionId": 58,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4671Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 18,
                            "categoryTitle": null
                        },
                        {
                            "id": 4165094,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 4173796,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 4207793,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4216290,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4227149,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4260542,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4256966,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4020Des",
                                    "title": "Active/فعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4301795,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4328169,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4327971,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4374502,
                            "questionnaireId": 526,
                            "questionId": 91,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5261Des",
                                    "title": "دارد ـ تست ناموفق Finger Print در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4418376,
                            "questionnaireId": 382,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3820Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4428401,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4350090,
                            "questionnaireId": 435,
                            "questionId": 51,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4350Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 15,
                            "categoryTitle": null
                        },
                        {
                            "id": 4405179,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4431888,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4430391,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3860Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4424820,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4434892,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3861Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4444645,
                            "questionnaireId": 527,
                            "questionId": 92,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5271Des",
                                    "title": "نامطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4538648,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4470333,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4494944,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3711Des",
                                    "title": " نا مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "دورتادور دستگاه وسایل سوپر مارکت می باشد.",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4526204,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4479475,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4609005,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4583875,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3861Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4576566,
                            "questionnaireId": 411,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4111Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4616319,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4638649,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4700207,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4090Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4681689,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "4",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4722730,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762432,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4020Des",
                                    "title": "Active/فعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762436,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762440,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762444,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3920Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766128,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766132,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766136,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3711Des",
                                    "title": "نا مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766140,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766144,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762429,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762433,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762437,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762441,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3831Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762445,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766129,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766133,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766137,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766141,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3861Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766145,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4091Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794029,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762430,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794030,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762434,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762438,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762442,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3860Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762446,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4091Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766130,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "نور مستقیم افتاب",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766134,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766138,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3771Des",
                                    "title": "نامطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "سایبان ندارد",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766142,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766146,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "1.9",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794031,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809720,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809721,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762431,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4012Des",
                                    "title": "BNC",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809722,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4012Des",
                                    "title": "BNC",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762435,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4780242,
                            "questionnaireId": 495,
                            "questionId": 71,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4951Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 22,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762439,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762443,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4762447,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "3",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4780244,
                            "questionnaireId": 501,
                            "questionId": 73,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5010Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "قوطی فلزی-پیچ-رولپلاک و...",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 22,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766131,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4022Des",
                                    "title": "Passive",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805214,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4020Des",
                                    "title": "Active/فعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766135,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805218,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805222,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805226,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3921Des",
                                    "title": "نامطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "کم رنگ",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794035,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766139,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4766143,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3921Des",
                                    "title": "نامطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "کمرنگ",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4780241,
                            "questionnaireId": 492,
                            "questionId": 70,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4921Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 22,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805211,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805215,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805219,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794039,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805223,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794043,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805227,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794032,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4020Des",
                                    "title": "Active/فعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794036,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794040,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3801Des",
                                    "title": "غیراستاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794044,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3920Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809723,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4020Des",
                                    "title": "Active/فعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817457,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 4780243,
                            "questionnaireId": 498,
                            "questionId": 72,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4981Des",
                                    "title": "خیر",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 22,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805213,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4011Des",
                                    "title": "تراکنش ناموفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "به علت سوختن و اسیب دیدن طلق عکس واضح نمی باشد",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805217,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805221,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805225,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805229,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "4 ",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794034,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794038,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794042,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3861Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794046,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4091Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805212,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805216,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3651Des",
                                    "title": "نامطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805220,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3741Des",
                                    "title": "نامطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809725,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805224,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3861Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4805228,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4091Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809729,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809733,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3861Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809737,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4091Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815073,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4020Des",
                                    "title": "Active/فعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794033,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794037,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794041,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817459,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4012Des",
                                    "title": "BNC",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817463,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794045,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809724,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809728,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817467,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809732,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809736,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815072,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817458,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817462,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817466,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815076,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810582,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815071,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809727,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809731,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809735,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3921Des",
                                    "title": "نامطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "کمرنگ",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815075,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817461,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817465,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815077,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810581,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810583,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824532,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824533,
                            "questionnaireId": 398,
                            "questionId": 16,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3980Des",
                                    "title": "دارد - تست موفق بارکد در تراکنش",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815070,
                            "questionnaireId": 519,
                            "questionId": 85,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "5190Des",
                                    "title": "بلی",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 23,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815080,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815079,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4794047,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "1/7",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809726,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817470,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3860Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817469,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3831Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824534,
                            "questionnaireId": 401,
                            "questionId": 17,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4010Des",
                                    "title": "تراکنش موفق",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                },
                                {
                                    "id": "4013Des",
                                    "title": "USB",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815081,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810585,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817471,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809730,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810586,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810587,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815083,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3860Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815084,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809734,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815085,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3920Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4809738,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815087,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4090Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815074,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810589,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3711Des",
                                    "title": "نا مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810591,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3770Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817460,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4020Des",
                                    "title": "Active/فعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817473,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817464,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810593,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815078,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817468,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810584,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4020Des",
                                    "title": "Active/فعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815082,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815086,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810588,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817472,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3920Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810592,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810596,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3921Des",
                                    "title": "نامطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "رنگ",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817475,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "3",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810595,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810599,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "4.5",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824538,
                            "questionnaireId": 367,
                            "questionId": 5,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3670Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824542,
                            "questionnaireId": 377,
                            "questionId": 9,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3771Des",
                                    "title": "نامطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824546,
                            "questionnaireId": 389,
                            "questionId": 13,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3890Des",
                                    "title": "سالم",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824550,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "3",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810597,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824536,
                            "questionnaireId": 403,
                            "questionId": 19,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4030Des",
                                    "title": "صدای مطلوب دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824540,
                            "questionnaireId": 371,
                            "questionId": 7,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3710Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4815088,
                            "questionnaireId": 406,
                            "questionId": 20,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4060Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "2",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810590,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4817474,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4090Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810594,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3861Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4810598,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4091Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824537,
                            "questionnaireId": 365,
                            "questionId": 3,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3650Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824541,
                            "questionnaireId": 374,
                            "questionId": 8,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3740Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824545,
                            "questionnaireId": 386,
                            "questionId": 12,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3860Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824549,
                            "questionnaireId": 409,
                            "questionId": 21,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4091Des",
                                    "title": "ندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 8,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824544,
                            "questionnaireId": 383,
                            "questionId": 11,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3830Des",
                                    "title": "دارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824548,
                            "questionnaireId": 395,
                            "questionId": 15,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3950Des",
                                    "title": "داخل ساختمان",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 7,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824535,
                            "questionnaireId": 402,
                            "questionId": 18,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "4020Des",
                                    "title": "Active/فعال",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 3,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824539,
                            "questionnaireId": 369,
                            "questionId": 6,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3690Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 4,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824543,
                            "questionnaireId": 380,
                            "questionId": 10,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3800Des",
                                    "title": "استاندارد",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 5,
                            "categoryTitle": null
                        },
                        {
                            "id": 4824547,
                            "questionnaireId": 392,
                            "questionId": 14,
                            "questionTitle": null,
                            "questionType": 1,
                            "options": [
                                {
                                    "id": "3920Des",
                                    "title": "مطلوب",
                                    "isDescriptionMandatory": false,
                                    "isDescriptionShow": true,
                                    "isChecked": true,
                                    "description": "",
                                    "TypeId": 1
                                }
                            ],
                            "categoryId": 6,
                            "categoryTitle": null
                        }
                    ],
                    "imageFileName": null,
                    "fileName": null,
                    "reportDescription": null,
                    "reportExpertDescription": null,
                    "isSecondReport": 0,
                    "showSaveButton": true
                },
                "damageReportInfo": {
                    "reportRecognitionList": [],
                    "reportJobTitleList": [],
                    "reportDBOList": [],
                    "reportWarrantyList": [],
                    "deviceConfigHistory": [],
                    "deviceConfig": [
                        {
                            "id": 4591,
                            "deviceId": 12618,
                            "serial": "فاقد",
                            "deviceModuleModel": "Cash Out Cassette CMD-V4",
                            "deviceModuleModelId": 83,
                            "deviceHWTitle": "Dispenser - Cassette",
                            "deviceHWId": 13,
                            "code": "20101050418"
                        },
                        {
                            "id": 33611,
                            "deviceId": 12618,
                            "serial": "0086328",
                            "deviceModuleModel": "Cash Out Cassette CMD-V4",
                            "deviceModuleModelId": 83,
                            "deviceHWTitle": "Dispenser - Cassette",
                            "deviceHWId": 13,
                            "code": "20101050418"
                        },
                        {
                            "id": 37524,
                            "deviceId": 12618,
                            "serial": "فاقد سریال",
                            "deviceModuleModel": "Journal Paper Spool",
                            "deviceModuleModelId": 383,
                            "deviceHWTitle": "Small Part",
                            "deviceHWId": 37,
                            "code": "30101051000006"
                        },
                        {
                            "id": 283183,
                            "deviceId": 12618,
                            "serial": "5164096012",
                            "deviceModuleModel": "V-Module 3,4",
                            "deviceModuleModelId": 100,
                            "deviceHWTitle": "Dispenser - Main Module",
                            "deviceHWId": 15,
                            "code": "20101050302"
                        },
                        {
                            "id": 308065,
                            "deviceId": 12618,
                            "serial": "96560017693",
                            "deviceModuleModel": "Cash Out Cassette CMD-V4",
                            "deviceModuleModelId": 83,
                            "deviceHWTitle": "Dispenser - Cassette",
                            "deviceHWId": 13,
                            "code": "20101050418"
                        },
                        {
                            "id": 458241,
                            "deviceId": 12618,
                            "serial": "292279",
                            "deviceModuleModel": "V2XU-Card Reader",
                            "deviceModuleModelId": 67,
                            "deviceHWTitle": "Card Reader",
                            "deviceHWId": 10,
                            "code": "20101050701"
                        },
                        {
                            "id": 458861,
                            "deviceId": 12618,
                            "serial": "A201039572",
                            "deviceModuleModel": "CMD Stacker Module With Single Reject",
                            "deviceModuleModelId": 97,
                            "deviceHWTitle": "Dispenser - Main Module",
                            "deviceHWId": 15,
                            "code": "20101030101"
                        },
                        {
                            "id": 475021,
                            "deviceId": 12618,
                            "serial": "5671902218",
                            "deviceModuleModel": "Receipt Printer TP07",
                            "deviceModuleModelId": 291,
                            "deviceHWTitle": "Receipt Printer",
                            "deviceHWId": 34,
                            "code": "20101050901"
                        },
                        {
                            "id": 475576,
                            "deviceId": 12618,
                            "serial": "A206102653",
                            "deviceModuleModel": "V-Module 1,2",
                            "deviceModuleModelId": 101,
                            "deviceHWTitle": "Dispenser - Main Module",
                            "deviceHWId": 15,
                            "code": "20101050301"
                        }
                    ],
                    "isWarranty": null,
                    "softwareWarrantyType": null,
                    "serviceWarrantyType": null,
                    "changeModuleWarrantyType": null,
                    "serviceName": "خرابی چاپگر رسید مشتری"
                },
                "siteReportInfo": null,
                "projectReportInfo": null,
                "installReportInfo": null,
                "pmReportInfo": null
            }
        };
        response = await api.get(`/ReportController/loadReportDetail/${requestId}/${reportId == null ? 0 : reportId}?requestActionId=${requestActionId}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submiting /ReportController/loadReportDetail request:', error);
        return { success: false };
    }
};


