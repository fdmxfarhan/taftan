import api from '../config/api-serial';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const GetModuleGroupTitleList = async () => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: [
                {
                    "Id": 1,
                    "Key": "ebc8d678-fe1c-41d5-8cb2-eca55fc5cf36",
                    "Title": "2In1 Module"
                },
                {
                    "Id": 2,
                    "Key": "e2afe96a-4150-4799-8213-31d5af87874d",
                    "Title": "3In1 Module"
                },
                {
                    "Id": 3,
                    "Key": "c04092d9-7303-4bdc-a95f-414caf57b51e",
                    "Title": "Anti Fraud"
                },
                {
                    "Id": 4,
                    "Key": "f2ab932f-1395-47aa-886b-062123a35525",
                    "Title": "Anti Skimming"
                },
                {
                    "Id": 5,
                    "Key": "64883390-8a61-47fb-be97-37b9beb9bf6e",
                    "Title": "Audio Assy"
                },
                {
                    "Id": 6,
                    "Key": "379316af-9277-4ec5-befe-ed861b0aa89c",
                    "Title": "Barcode Reader"
                },
                {
                    "Id": 7,
                    "Key": "7de615d1-a073-40b3-9b95-bf1bb71b3393",
                    "Title": "Body"
                },
                {
                    "Id": 8,
                    "Key": "7506f40a-1101-46b9-ac3f-cc199c0b4fc8",
                    "Title": "Cable"
                },
                {
                    "Id": 9,
                    "Key": "8ee767bb-f416-448e-88c1-9cf0fcc3789c",
                    "Title": "Camera"
                },
                {
                    "Id": 10,
                    "Key": "09b6c97e-4c2d-4b85-abef-1cdd14f0acad",
                    "Title": "Card Reader"
                },
                {
                    "Id": 11,
                    "Key": "e8131a74-ed74-46c2-83a0-b51d6ecf040e",
                    "Title": "Customer SE"
                },
                {
                    "Id": 12,
                    "Key": "28ded6bc-099a-4e00-aabb-54ffd2a3a22f",
                    "Title": "Dispenser - Board"
                },
                {
                    "Id": 13,
                    "Key": "3d95a0f9-30d3-46bd-85ee-9867798b18d0",
                    "Title": "Dispenser - Cassette"
                },
                {
                    "Id": 14,
                    "Key": "fe3be333-4e5b-4e40-b1a7-37e6f12b61fa",
                    "Title": "Dispenser - Housing"
                },
                {
                    "Id": 15,
                    "Key": "a410d365-dd21-496b-a9a5-1f2584790d67",
                    "Title": "Dispenser - Main Module"
                },
                {
                    "Id": 16,
                    "Key": "added72c-5b11-4ab4-9204-43e7facc18d5",
                    "Title": "Dispenser - Shutter"
                },
                {
                    "Id": 17,
                    "Key": "55b2ffd4-7ba6-4eb0-a535-d65ad987fa25",
                    "Title": "Dispenser - Transporter"
                },
                {
                    "Id": 18,
                    "Key": "1f484c66-56b2-4bec-81d8-4e594e64fef1",
                    "Title": "Dispenser - Type"
                },
                {
                    "Id": 19,
                    "Key": "dbc8c3c3-d041-4afc-b3de-04ddafdbccca",
                    "Title": "ECU"
                },
                {
                    "Id": 20,
                    "Key": "2b7111d2-a8f4-43ae-bc5c-4c81fb4e2107",
                    "Title": "EPP"
                },
                {
                    "Id": 21,
                    "Key": "ef438b6e-fe92-4bd6-b9e9-0686ec701efc",
                    "Title": "Heater"
                },
                {
                    "Id": 22,
                    "Key": "27b32e54-a7fc-485e-960e-b7bbee6edd30",
                    "Title": "Journal Printer"
                },
                {
                    "Id": 23,
                    "Key": "65bf4d73-22bd-427a-8142-d8830b78e9ac",
                    "Title": "Light"
                },
                {
                    "Id": 24,
                    "Key": "55cdfeec-a92b-4778-a1f9-8de91e77604a",
                    "Title": "MISC Board"
                },
                {
                    "Id": 25,
                    "Key": "3fcbac77-f603-4c25-8611-8c84f83cb4a6",
                    "Title": "Monitor"
                },
                {
                    "Id": 26,
                    "Key": "070261eb-4e00-4878-a457-f1c94a95f240",
                    "Title": "NCR Depository"
                },
                {
                    "Id": 27,
                    "Key": "57b80840-90d0-4e4a-8e01-d317a8f9a14d",
                    "Title": "PC - CPU"
                },
                {
                    "Id": 28,
                    "Key": "d12ce500-ad6d-4f65-b9f9-835e9a766984",
                    "Title": "PC - HDD"
                },
                {
                    "Id": 29,
                    "Key": "85505ab2-70ce-4efc-8970-9c899c49195c",
                    "Title": "PC - RAM"
                },
                {
                    "Id": 30,
                    "Key": "1371b31d-37e3-449a-834c-50559e328f06",
                    "Title": "PC - Accessories"
                },
                {
                    "Id": 31,
                    "Key": "8276f7cc-a147-4b67-83a6-935e8acbc9f2",
                    "Title": "PC - Type"
                },
                {
                    "Id": 32,
                    "Key": "bac7ae53-2ff9-498b-afb0-cb7a236fc061",
                    "Title": "Power Distributor"
                },
                {
                    "Id": 33,
                    "Key": "941b5c96-fdfc-4d27-9d24-bd0dfff4d29f",
                    "Title": "Power Supply"
                },
                {
                    "Id": 34,
                    "Key": "d489175d-9e67-43e1-9c60-71a4e8ab52b7",
                    "Title": "Receipt Printer"
                },
                {
                    "Id": 36,
                    "Key": "cbadd874-0b4a-42d8-a87f-0f59887b34e0",
                    "Title": "RFID"
                },
                {
                    "Id": 37,
                    "Key": "e9a486a2-1414-468f-87e1-960827e1ecdf",
                    "Title": "Small Part"
                },
                {
                    "Id": 38,
                    "Key": "63ad4b39-d79b-46ee-aa29-94feaf1bf1fd",
                    "Title": "Softkey"
                },
                {
                    "Id": 39,
                    "Key": "7994b2ef-b93f-4739-af24-b5409f70f069",
                    "Title": "SOP"
                },
                {
                    "Id": 40,
                    "Key": "69bafbd2-a7a3-46a5-95c3-56f1ce144209",
                    "Title": "Special Electronic"
                },
                {
                    "Id": 41,
                    "Key": "37a34c1c-dadc-4785-8dd2-35fb066c6012",
                    "Title": "USB HUB"
                },
                {
                    "Id": 45,
                    "Key": "80f330ad-7261-4aef-8b1a-892d31114b7e",
                    "Title": "CABC Board"
                },
                {
                    "Id": 60,
                    "Key": "7fa3ce08-a755-4028-9f57-5c90fe51bb9c",
                    "Title": "YHCM - Type"
                },
                {
                    "Id": 61,
                    "Key": "56924fc4-7f48-4e1b-a1fd-216f0eaa1d0d",
                    "Title": "YHCM - Transport"
                },
                {
                    "Id": 62,
                    "Key": "da122b1c-6d55-4c6a-af03-6b58e4bde610",
                    "Title": "YHCM - Shutter"
                },
                {
                    "Id": 63,
                    "Key": "fe94b41f-2026-4109-8a17-7d192ec2917e",
                    "Title": "YHCM - Main Module"
                },
                {
                    "Id": 64,
                    "Key": "8d78e119-5167-415d-bbaf-8c01ffca30e5",
                    "Title": "YHCM - Housing"
                },
                {
                    "Id": 65,
                    "Key": "f023de61-a6fc-43e5-96f7-102833dfb12f",
                    "Title": "YHCM - Cassette"
                },
                {
                    "Id": 66,
                    "Key": "32ef000b-fffe-443f-9230-1717d2013216",
                    "Title": "YHCM - Board"
                },
                {
                    "Id": 90,
                    "Key": "8900b614-72af-4bee-89b6-2b825f4da75a",
                    "Title": "Controller Board"
                },
                {
                    "Id": 92,
                    "Key": "e068cab7-df31-425f-b207-8a960bd90117",
                    "Title": "Cash in"
                },
                {
                    "Id": 102,
                    "Key": "c24d1411-5462-429e-8f93-8e5bde465953",
                    "Title": "Fingerprint"
                },
                {
                    "Id": 105,
                    "Key": "7738616c-fdda-404c-add6-cf6c1addb4bb",
                    "Title": "UPS"
                },
                {
                    "Id": 107,
                    "Key": "56a8b890-b273-4969-914a-6b5bbd10e648",
                    "Title": "4In1 Module"
                },
                {
                    "Id": 111,
                    "Key": "6dc883a0-3d45-4985-937d-0bcf63fcb990",
                    "Title": "Scanner - Main Module"
                },
                {
                    "Id": 114,
                    "Key": "f89c3d83-c700-4d58-9512-2f8014039ca0",
                    "Title": "Scanner"
                },
                {
                    "Id": 115,
                    "Key": "73e1f076-69f6-4277-af90-e00b0b24192e",
                    "Title": "Scanner   "
                },
                {
                    "Id": 116,
                    "Key": "faaf9ee5-a8b5-4e81-a5fb-759bd98acb26",
                    "Title": "Controller Board   "
                },
                {
                    "Id": 119,
                    "Key": "182e2204-3ab2-4f6c-afcb-d7af84f119ca",
                    "Title": "1"
                },
                {
                    "Id": 122,
                    "Key": "fa5f5bd6-eb9e-40b6-a9d4-d55b005bc46b",
                    "Title": "ma"
                },
                {
                    "Id": 125,
                    "Key": "ef3dee9f-5ccd-44b1-9bef-bedae76fd51d",
                    "Title": "12"
                },
                {
                    "Id": 126,
                    "Key": "8b232dd7-99f6-43cb-b887-07c789ad927c",
                    "Title": "گروه قطعه ATM 2"
                }
            ]
        };
        const response = await api.get(`/ModuleGroup/GetModuleGroupTitleList/true`, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };

    } catch (error) {
        console.log('Error submitting GetModuleGroupTitleList request:', error.response.data);
        return { success: false, error: 'Failed to submit GetModuleGroupTitleList request' };
    }
};
