import api from '../config/api-serial';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

export const LoadModuleListBrandTypeGroupKey = async (options) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: [
                {
                    "Id": 40101,
                    "UnitId": 0,
                    "IsActive": true,
                    "Title": "تست تفتان / EPP",
                    "UnitTitle": null,
                    "Code": "123456",
                    "ModuleKey": "d24abc78-6c66-4839-aeee-17024b0e3546",
                    "HaveQcProcess": false,
                    "UsingDocument": false,
                    "HaveSerial": true,
                    "Packing": false,
                    "RequireManagerOk": false,
                    "HasReferenceModule": false,
                    "ModuleId": 40157,
                    "BrandId": 3,
                    "ModuleGroupId": 20,
                    "TypeId": 0,
                    "ModuleGroupKey": "2b7111d2-a8f4-43ae-bc5c-4c81fb4e2107",
                    "BrandKey": "ac1d5d6d-5921-4a90-b04b-749330021157",
                    "TypeKey": "454c3f79-fea0-445e-b293-38610649db72",
                    "AllowCount": 20
                },
                {
                    "Id": 40131,
                    "UnitId": 0,
                    "IsActive": true,
                    "Title": "tets4444 / 2In1 Module",
                    "UnitTitle": null,
                    "Code": "44",
                    "ModuleKey": "503fe2c0-220c-4265-9cb2-44837d72423d",
                    "HaveQcProcess": true,
                    "UsingDocument": false,
                    "HaveSerial": true,
                    "Packing": false,
                    "RequireManagerOk": false,
                    "HasReferenceModule": true,
                    "ModuleId": 40189,
                    "BrandId": 3,
                    "ModuleGroupId": 1,
                    "TypeId": 0,
                    "ModuleGroupKey": "ebc8d678-fe1c-41d5-8cb2-eca55fc5cf36",
                    "BrandKey": "ac1d5d6d-5921-4a90-b04b-749330021157",
                    "TypeKey": "454c3f79-fea0-445e-b293-38610649db72",
                    "AllowCount": 1
                },
                {
                    "Id": 40110,
                    "UnitId": 0,
                    "IsActive": true,
                    "Title": "تست ارجاع به دپارتمان / 2In1 Module",
                    "UnitTitle": null,
                    "Code": "202406161613",
                    "ModuleKey": "b935acc5-e00f-4571-a219-7b810dd2e4c8",
                    "HaveQcProcess": false,
                    "UsingDocument": false,
                    "HaveSerial": true,
                    "Packing": false,
                    "RequireManagerOk": false,
                    "HasReferenceModule": false,
                    "ModuleId": 40168,
                    "BrandId": 3,
                    "ModuleGroupId": 1,
                    "TypeId": 0,
                    "ModuleGroupKey": "ebc8d678-fe1c-41d5-8cb2-eca55fc5cf36",
                    "BrandKey": "ac1d5d6d-5921-4a90-b04b-749330021157",
                    "TypeKey": "454c3f79-fea0-445e-b293-38610649db72",
                    "AllowCount": 1
                },
                {
                    "Id": 40105,
                    "UnitId": 0,
                    "IsActive": true,
                    "Title": "test1509 / 2In1 Module",
                    "UnitTitle": null,
                    "Code": "1509",
                    "ModuleKey": "de4efee6-275e-423d-a661-eb69808c9161",
                    "HaveQcProcess": false,
                    "UsingDocument": false,
                    "HaveSerial": false,
                    "Packing": false,
                    "RequireManagerOk": false,
                    "HasReferenceModule": false,
                    "ModuleId": 40159,
                    "BrandId": 3,
                    "ModuleGroupId": 1,
                    "TypeId": 0,
                    "ModuleGroupKey": "ebc8d678-fe1c-41d5-8cb2-eca55fc5cf36",
                    "BrandKey": "ac1d5d6d-5921-4a90-b04b-749330021157",
                    "TypeKey": "454c3f79-fea0-445e-b293-38610649db72",
                    "AllowCount": 1
                },
                {
                    "Id": 40104,
                    "UnitId": 0,
                    "IsActive": true,
                    "Title": "test1509 / EPP",
                    "UnitTitle": null,
                    "Code": "1509",
                    "ModuleKey": "de4efee6-275e-423d-a661-eb69808c9161",
                    "HaveQcProcess": false,
                    "UsingDocument": false,
                    "HaveSerial": false,
                    "Packing": false,
                    "RequireManagerOk": false,
                    "HasReferenceModule": false,
                    "ModuleId": 40159,
                    "BrandId": 3,
                    "ModuleGroupId": 20,
                    "TypeId": 0,
                    "ModuleGroupKey": "2b7111d2-a8f4-43ae-bc5c-4c81fb4e2107",
                    "BrandKey": "ac1d5d6d-5921-4a90-b04b-749330021157",
                    "TypeKey": "454c3f79-fea0-445e-b293-38610649db72",
                    "AllowCount": 20
                },
                {
                    "Id": 40084,
                    "UnitId": 0,
                    "IsActive": true,
                    "Title": "printer / 2In1 Module",
                    "UnitTitle": null,
                    "Code": "20101052602",
                    "ModuleKey": "5ca9648d-0d7d-4238-b3c7-fedd022b87f4",
                    "HaveQcProcess": false,
                    "UsingDocument": false,
                    "HaveSerial": true,
                    "Packing": false,
                    "RequireManagerOk": false,
                    "HasReferenceModule": false,
                    "ModuleId": 40122,
                    "BrandId": 3,
                    "ModuleGroupId": 1,
                    "TypeId": 0,
                    "ModuleGroupKey": "ebc8d678-fe1c-41d5-8cb2-eca55fc5cf36",
                    "BrandKey": "ac1d5d6d-5921-4a90-b04b-749330021157",
                    "TypeKey": "454c3f79-fea0-445e-b293-38610649db72",
                    "AllowCount": 1
                }
            ]
        };
        const response = await api.post(`/DeviceConfig/LoadModuleListBrandTypeGroupKey`, options, {
            headers: {
                authorization: authData.token,
                Accessid: authData.Constraintid,
                Constraintid: authData.Constraintid,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /DeviceConfig/LoadModuleListBrandTypeGroupKey request:', error.response);
        return { success: false, error: 'Failed to submit GetModuleGroupTitleList request' };
    }
};
