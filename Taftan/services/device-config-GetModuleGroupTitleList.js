import api from '../config/api-serial';
import { use_local_data } from '../config/consts';

export const GetModuleGroupTitleList = async (authData) => {
    try {
        if (use_local_data) return {
            success: true, data: [
                {
                    "Id": 1,
                    "Title": "2In1 Module",
                    "Key": "ebc8d678-fe1c-41d5-8cb2-eca55fc5cf36"
                },
                {
                    "Id": 2,
                    "Title": "3In1 Module",
                    "Key": "e2afe96a-4150-4799-8213-31d5af87874d"
                },
                {
                    "Id": 3,
                    "Title": "Anti Fraud",
                    "Key": "c04092d9-7303-4bdc-a95f-414caf57b51e"
                },
                {
                    "Id": 4,
                    "Title": "Anti Skimming",
                    "Key": "f2ab932f-1395-47aa-886b-062123a35525"
                },
                {
                    "Id": 5,
                    "Title": "Audio Assy",
                    "Key": "64883390-8a61-47fb-be97-37b9beb9bf6e"
                },
                {
                    "Id": 6,
                    "Title": "Barcode Reader",
                    "Key": "379316af-9277-4ec5-befe-ed861b0aa89c"
                },
                {
                    "Id": 7,
                    "Title": "Body",
                    "Key": "7de615d1-a073-40b3-9b95-bf1bb71b3393"
                },
                {
                    "Id": 8,
                    "Title": "Cable",
                    "Key": "7506f40a-1101-46b9-ac3f-cc199c0b4fc8"
                },
                {
                    "Id": 9,
                    "Title": "Camera",
                    "Key": "8ee767bb-f416-448e-88c1-9cf0fcc3789c"
                },
                {
                    "Id": 10,
                    "Title": "Card Reader",
                    "Key": "09b6c97e-4c2d-4b85-abef-1cdd14f0acad"
                },
                {
                    "Id": 11,
                    "Title": "Customer SE",
                    "Key": "e8131a74-ed74-46c2-83a0-b51d6ecf040e"
                },
                {
                    "Id": 12,
                    "Title": "Dispenser - Board",
                    "Key": "28ded6bc-099a-4e00-aabb-54ffd2a3a22f"
                },
                {
                    "Id": 13,
                    "Title": "Dispenser - Cassette",
                    "Key": "3d95a0f9-30d3-46bd-85ee-9867798b18d0"
                },
                {
                    "Id": 14,
                    "Title": "Dispenser - Housing",
                    "Key": "fe3be333-4e5b-4e40-b1a7-37e6f12b61fa"
                },
                {
                    "Id": 15,
                    "Title": "Dispenser - Main Module",
                    "Key": "a410d365-dd21-496b-a9a5-1f2584790d67"
                },
                {
                    "Id": 16,
                    "Title": "Dispenser - Shutter",
                    "Key": "added72c-5b11-4ab4-9204-43e7facc18d5"
                },
                {
                    "Id": 17,
                    "Title": "Dispenser - Transporter",
                    "Key": "55b2ffd4-7ba6-4eb0-a535-d65ad987fa25"
                },
                {
                    "Id": 18,
                    "Title": "Dispenser - Type",
                    "Key": "1f484c66-56b2-4bec-81d8-4e594e64fef1"
                },
                {
                    "Id": 19,
                    "Title": "ECU",
                    "Key": "dbc8c3c3-d041-4afc-b3de-04ddafdbccca"
                },
                {
                    "Id": 20,
                    "Title": "EPP",
                    "Key": "2b7111d2-a8f4-43ae-bc5c-4c81fb4e2107"
                },
                {
                    "Id": 21,
                    "Title": "Heater",
                    "Key": "ef438b6e-fe92-4bd6-b9e9-0686ec701efc"
                },
                {
                    "Id": 22,
                    "Title": "Journal Printer",
                    "Key": "27b32e54-a7fc-485e-960e-b7bbee6edd30"
                },
                {
                    "Id": 23,
                    "Title": "Light",
                    "Key": "65bf4d73-22bd-427a-8142-d8830b78e9ac"
                },
                {
                    "Id": 24,
                    "Title": "MISC Board",
                    "Key": "55cdfeec-a92b-4778-a1f9-8de91e77604a"
                },
                {
                    "Id": 25,
                    "Title": "Monitor",
                    "Key": "3fcbac77-f603-4c25-8611-8c84f83cb4a6"
                },
                {
                    "Id": 26,
                    "Title": "NCR Depository",
                    "Key": "070261eb-4e00-4878-a457-f1c94a95f240"
                },
                {
                    "Id": 27,
                    "Title": "PC - CPU",
                    "Key": "57b80840-90d0-4e4a-8e01-d317a8f9a14d"
                },
                {
                    "Id": 28,
                    "Title": "PC - HDD",
                    "Key": "d12ce500-ad6d-4f65-b9f9-835e9a766984"
                },
                {
                    "Id": 29,
                    "Title": "PC - RAM",
                    "Key": "85505ab2-70ce-4efc-8970-9c899c49195c"
                },
                {
                    "Id": 30,
                    "Title": "PC - Accessories",
                    "Key": "1371b31d-37e3-449a-834c-50559e328f06"
                },
                {
                    "Id": 31,
                    "Title": "PC - Type",
                    "Key": "8276f7cc-a147-4b67-83a6-935e8acbc9f2"
                },
                {
                    "Id": 32,
                    "Title": "Power Distributor",
                    "Key": "bac7ae53-2ff9-498b-afb0-cb7a236fc061"
                },
                {
                    "Id": 33,
                    "Title": "Power Supply",
                    "Key": "941b5c96-fdfc-4d27-9d24-bd0dfff4d29f"
                },
                {
                    "Id": 34,
                    "Title": "Receipt Printer",
                    "Key": "d489175d-9e67-43e1-9c60-71a4e8ab52b7"
                },
                {
                    "Id": 36,
                    "Title": "RFID",
                    "Key": "cbadd874-0b4a-42d8-a87f-0f59887b34e0"
                },
                {
                    "Id": 37,
                    "Title": "Small Part",
                    "Key": "e9a486a2-1414-468f-87e1-960827e1ecdf"
                },
                {
                    "Id": 38,
                    "Title": "Softkey",
                    "Key": "63ad4b39-d79b-46ee-aa29-94feaf1bf1fd"
                },
                {
                    "Id": 39,
                    "Title": "SOP",
                    "Key": "7994b2ef-b93f-4739-af24-b5409f70f069"
                },
                {
                    "Id": 40,
                    "Title": "Special Electronic",
                    "Key": "69bafbd2-a7a3-46a5-95c3-56f1ce144209"
                },
                {
                    "Id": 41,
                    "Title": "USB HUB",
                    "Key": "37a34c1c-dadc-4785-8dd2-35fb066c6012"
                },
                {
                    "Id": 45,
                    "Title": "CABC Board",
                    "Key": "80f330ad-7261-4aef-8b1a-892d31114b7e"
                },
                {
                    "Id": 60,
                    "Title": "YHCM - Type",
                    "Key": "7fa3ce08-a755-4028-9f57-5c90fe51bb9c"
                },
                {
                    "Id": 61,
                    "Title": "YHCM - Transport",
                    "Key": "56924fc4-7f48-4e1b-a1fd-216f0eaa1d0d"
                },
                {
                    "Id": 62,
                    "Title": "YHCM - Shutter",
                    "Key": "da122b1c-6d55-4c6a-af03-6b58e4bde610"
                },
                {
                    "Id": 63,
                    "Title": "YHCM - Main Module",
                    "Key": "fe94b41f-2026-4109-8a17-7d192ec2917e"
                },
                {
                    "Id": 64,
                    "Title": "YHCM - Housing",
                    "Key": "8d78e119-5167-415d-bbaf-8c01ffca30e5"
                },
                {
                    "Id": 65,
                    "Title": "YHCM - Cassette",
                    "Key": "f023de61-a6fc-43e5-96f7-102833dfb12f"
                },
                {
                    "Id": 66,
                    "Title": "YHCM - Board",
                    "Key": "32ef000b-fffe-443f-9230-1717d2013216"
                },
                {
                    "Id": 90,
                    "Title": "Controller Board",
                    "Key": "8900b614-72af-4bee-89b6-2b825f4da75a"
                },
                {
                    "Id": 92,
                    "Title": "Cash in",
                    "Key": "e068cab7-df31-425f-b207-8a960bd90117"
                },
                {
                    "Id": 102,
                    "Title": "Fingerprint",
                    "Key": "c24d1411-5462-429e-8f93-8e5bde465953"
                },
                {
                    "Id": 105,
                    "Title": "UPS",
                    "Key": "7738616c-fdda-404c-add6-cf6c1addb4bb"
                },
                {
                    "Id": 107,
                    "Title": "4In1 Module",
                    "Key": "56a8b890-b273-4969-914a-6b5bbd10e648"
                },
                {
                    "Id": 111,
                    "Title": "Scanner - Main Module",
                    "Key": "6dc883a0-3d45-4985-937d-0bcf63fcb990"
                },
                {
                    "Id": 114,
                    "Title": "Scanner",
                    "Key": "f89c3d83-c700-4d58-9512-2f8014039ca0"
                },
                {
                    "Id": 115,
                    "Title": "Scanner\t",
                    "Key": "73e1f076-69f6-4277-af90-e00b0b24192e"
                },
                {
                    "Id": 116,
                    "Title": "Controller Board\t",
                    "Key": "faaf9ee5-a8b5-4e81-a5fb-759bd98acb26"
                },
                {
                    "Id": 119,
                    "Title": "1",
                    "Key": "182e2204-3ab2-4f6c-afcb-d7af84f119ca"
                },
                {
                    "Id": 122,
                    "Title": "ma",
                    "Key": "fa5f5bd6-eb9e-40b6-a9d4-d55b005bc46b"
                },
                {
                    "Id": 125,
                    "Title": "12",
                    "Key": "ef3dee9f-5ccd-44b1-9bef-bedae76fd51d"
                },
                {
                    "Id": 126,
                    "Title": "گروه قطعه ATM 2",
                    "Key": "8b232dd7-99f6-43cb-b887-07c789ad927c"
                }
            ]
        };
        const response = await api.get(`/ModuleGroup/GetModuleGroupTitleList/true`, {
            headers: {
                authorization: authData.token,
                Constraintid: authData.Constraintid,
                Accessid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };

    } catch (error) {
        console.log('Error submitting GetModuleGroupTitleList request:', error.response.data);
        return { success: false, error: 'Failed to submit GetModuleGroupTitleList request' };
    }
};
