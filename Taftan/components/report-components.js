// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import { loadDeviceConfigList } from '../services/device-load-config-list';
import DropDownObj from './dropdown-obj';
import CheckBox from './checkbox';
import styles from '../styles/reqView';
import { GetModuleGroupTitleList } from '../services/device-config-GetModuleGroupTitleList';
import { getAuthData } from '../services/auth';
import { GetAreaByRequest } from '../services/device-config-GetAreaByRequest';
import { LoadModuleListBrandTypeGroupKey } from '../services/device-config-LoadModuleListBrandTypeGroupKey';
import { GetModuleInUserStore } from '../services/device-config-GetModuleInUserStore';
import ScanPopup from './scan-popup';
import MultiSelectDropdown from './multi-select-dropdown';
import { loadDeviceTypeHenzaRecognitionExpertListByDeviceTypeId } from '../services/device-config-henzaRecognition';
const ReportcomponentsView = ({ reportDetail, moduleGroup, setModuleGroup, officeKey, setOfficeKey, moduleGroupKey, moduleListBrand, setmoduleListBrand, selectedNewModule, setselectedNewModule, selectedPreviousModule, setselectedPreviousModule, moduleInUserStoreList, setmoduleInUserStoreList, usedComponents, setusedComponents, moduleoldSerial, setModuleoldSerial, moduleNewSerial, setModuleNewSerial, componentChangesList, setcomponentChangesList, selectedDOAReason, setselectedDOAReason }) => {
    var [garantieConflict, setgarantieConflict] = useState(false);
    var [softwareProcess, setsoftwareProcess] = useState(false);
    var [serviceAndRepair, setserviceAndRepair] = useState(false);
    var [moduleExchange, setmoduleExchange] = useState(false);
    var [componentAction, setcomponentAction] = useState('تعویض');
    var [DOAorGarantieConflict, setDOAorGarantieConflict] = useState('هیچکدام');
    var [noRepairNeeded, setnoRepairNeeded] = useState(false);
    var [damageBeforeUse, setdamageBeforeUse] = useState(false);
    var [moduleGroupList, setmoduleGroupList] = useState([]);
    var [moduleGroupListFiltered, setmoduleGroupListFiltered] = useState([]);
    var [moduleListBrandFiltered, setmoduleListBrandFiltered] = useState([]);
    var [scanpopupEnableNew, setscanpopupEnableNew] = useState(false);
    var [scanpopupEnableOld, setscanpopupEnableOld] = useState(false);
    var [selectedDamageDescriptions, setSelectedDamageDescriptions] = useState([]);
    var [henzaRecontions, sethenzaRecontions] = useState([]);
    var [description, setdescription] = useState('');
    var [garantiDOAList, setgarantiDOAList] = useState([]);
    var [deviceConfigList, setdeviceConfigList] = useState([]);
    const updateModuleGroupTitleList = async () => {
        var result = await GetModuleGroupTitleList();
        if (result.success) {
            setmoduleGroupList(result.data);
            setmoduleGroupListFiltered(result.data);
        }
        else ToastAndroid.show('لیست گروه ماژول دریافت نشد.', ToastAndroid.SHORT);
    }
    const filterModuleGroupList = (moduleBrandItem) => {
        const filteredModules = moduleGroupList.filter(item => item.Id == moduleBrandItem.ModuleGroupId);
        setmoduleGroupListFiltered(filteredModules);
        if (filteredModules.length > 0) {
            setModuleGroup(filteredModules[0]);
        }
    }
    const updateOfficeKey = async () => {
        var result = await GetAreaByRequest(reportDetail.requestReportInfo.requestId);
        if (result.success) {
            setOfficeKey(result.data);
        }
        else ToastAndroid.show('کد دفتر دریافت نشد.', ToastAndroid.SHORT);
    }
    const updateModuleListBrandTypeGroupKey = async () => {
        var result = await LoadModuleListBrandTypeGroupKey({
            TypeKey: reportDetail.requestReportInfo.deviceTypeKey,
            BrandKey: reportDetail.requestReportInfo.deviceBrandKey,
            ModuleGroupkey: moduleGroupKey,
        });
        if (result.success) {
            setmoduleListBrand(result.data);
        }
        else ToastAndroid.show('کد دفتر دریافت نشد.', ToastAndroid.SHORT);
    }
    const updateModuleInUserStore = async () => {
        var result = await GetModuleInUserStore(moduleGroupKey, officeKey);
        if (result.success) {
            setmoduleInUserStoreList(result.data);
        }
        else ToastAndroid.show('کد دفتر دریافت نشد.', ToastAndroid.SHORT);
    }
    const filterModuleListBrand = (modulegroupItem) => {
        const filteredModules = moduleListBrand.filter(item => item.ModuleGroupId == modulegroupItem.Id);
        setmoduleListBrandFiltered(filteredModules);
    }
    const handleCodeScannedNew = (code) => {
        setModuleNewSerial(code);
        setscanpopupEnableNew(false);
    }
    const handleCodeScannedOld = (code) => {
        setModuleoldSerial(code);
        setscanpopupEnableOld(false);
    }
    const updateHenzaRecontions = async (moduleItem) => {
        var result = await loadDeviceTypeHenzaRecognitionExpertListByDeviceTypeId(moduleItem.TypeKey, moduleItem.ModuleGroupKey);
        if (result.success) {
            sethenzaRecontions(result.data);
        }
    }
    const addComponentChanges = async () => {
        var newcomponentChanges = {
            moduleGroup: moduleGroup,
            componentAction: componentAction,
            moduleNewSerial: moduleNewSerial,
            moduleOldSerial: moduleoldSerial,
            NewModule: selectedNewModule,
            PreviousModule: selectedPreviousModule,
            description: description,
            noRepairNeeded: noRepairNeeded,
            DOAorGarantieConflict: DOAorGarantieConflict,
            damageDescriptions: selectedDamageDescriptions,
            selectedDOAReason: selectedDOAReason == 'انتخاب کنید' ? null : selectedDOAReason,
        };
        setcomponentChangesList([...componentChangesList, newcomponentChanges]);
        setselectedDamageDescriptions([]);
        setselectedDOAReason('انتخاب کنید');
        setModuleNewSerial('');
        setModuleoldSerial('');
        setselectedNewModule(null);
        setselectedPreviousModule(null);
        setdescription('');
        setnoRepairNeeded(false);
        setDOAorGarantieConflict('هیچکدام');
        setmoduleListBrandFiltered(moduleListBrand);
        setmoduleGroupListFiltered(moduleGroupList);
    };
    useEffect(() => {
        setmoduleListBrandFiltered(moduleListBrand);
        if (reportDetail.requestReportInfo.serviceGroupId == 1 || reportDetail.requestReportInfo.serviceGroupId == 8) {
            setgarantiDOAList(['هیچکدام', 'DOA', 'نقض گارانتی']);
        } else {
            setgarantiDOAList(['هیچکدام', 'DOA']);
        }
        const sendRequest = async () => {
            console.log(reportDetail.requestReportInfo.deviceId);
            var result = await loadDeviceConfigList(reportDetail.requestReportInfo.deviceId);
            if (result.success) {
                setdeviceConfigList(result.data.Data);
            } else ToastAndroid.show('کانفیگ دستگاه دریافت نشد', ToastAndroid.SHORT);
        }
        if (reportDetail) sendRequest();
    }, [reportDetail, moduleListBrand]);
    return (
        <ScrollView style={styleslocal.contents}>
            <ScanPopup modalEnable={scanpopupEnableNew} setmodalEnable={setscanpopupEnableNew} onCodeScanned={handleCodeScannedNew} />
            <ScanPopup modalEnable={scanpopupEnableOld} setmodalEnable={setscanpopupEnableOld} onCodeScanned={handleCodeScannedOld} />
            <Text style={styleslocal.sectionTitle}>اطلاعات قطعات:</Text>
            <CheckBox text={'قطعات مصرفی'} value={usedComponents} onChange={() => {
                setusedComponents(!usedComponents);
                updateModuleGroupTitleList();
                updateOfficeKey();
                updateModuleListBrandTypeGroupKey();
                updateModuleInUserStore();
            }} checkboxstyle={styleslocal.checkboxView} enabled={true} />
            {usedComponents && (<View>
                <View style={[styles.dualInputView]}>
                    <View style={styles.dualInputPart}>
                        <Text style={styles.label}>گروه ماژول: </Text>
                        <DropDownObj
                            searchEN={true}
                            list={moduleGroupListFiltered}
                            getLabel={(item) => item.Title}
                            getValue={(item) => item.Title}
                            setValue={(item) => { setModuleGroup(item); filterModuleListBrand(item); }}
                            value={moduleGroup.Title}
                            buttonStyle={styles.dropdown}
                            buttonTextStyle={styles.dropdownText}
                            onSubmit={(val) => { }}
                        />
                    </View>
                    <View style={styles.dualInputPart}>
                        <Text style={styles.label}>عملیات: </Text>
                        <DropDownObj
                            list={['تعویض', 'اضافه', 'حذف']}
                            getLabel={(item) => item}
                            getValue={(item) => item}
                            setValue={(item) => { setcomponentAction(item) }}
                            value={componentAction}
                            buttonStyle={styles.dropdown}
                            buttonTextStyle={styles.dropdownText}
                            onSubmit={(val) => { }}
                        />
                    </View>
                </View>
                {(componentAction == 'تعویض' || componentAction == 'اضافه') && (<View>
                    <View style={[styles.dualInputView]}>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>مدل ماژول جدید: </Text>
                            <DropDownObj
                                list={moduleInUserStoreList}
                                getLabel={(item) => item.Title}
                                getValue={(item) => item.Title}
                                setValue={(item) => { setselectedNewModule(item); }}
                                value={selectedNewModule.Title}
                                buttonStyle={styles.dropdown}
                                buttonTextStyle={styles.dropdownText}
                                onSubmit={(val) => { }}
                                searchEN={true}
                            />
                        </View>
                        <View style={styles.dualInputPart}>
                            {selectedNewModule && selectedNewModule.HaveSerial && (
                                <View>
                                    <Text style={styles.label}>سریال ماژول جدید: </Text>
                                    <View style={styles.inputWithActionView}>
                                        <TextInput
                                            style={[styles.inputWithActionInput, { width: '66%' }]}
                                            placeholder={'سریال ماژول جدید'}
                                            placeholderTextColor={colors.text}
                                            multiline={true}
                                            returnKeyType={'next'}
                                            keyboardType={'default'}
                                            onChange={text => setModuleNewSerial(text.nativeEvent.text)}
                                            value={moduleNewSerial}
                                        />
                                        <TouchableOpacity style={[styles.inputWithActionButton, { width: '17%' }]} onPress={() => { setscanpopupEnableNew(true); }}>
                                            <Ionicons style={styles.inputWithActionIcon} name={'barcode'} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </View>
                    </View>
                </View>)}
                {(componentAction == 'تعویض' || componentAction == 'حذف') && (<View>
                    <View style={[styles.dualInputView]}>
                        <View style={styles.dualInputPart}>
                            <Text style={styles.label}>مدل ماژول قدیم: </Text>
                            <DropDownObj
                                list={moduleListBrandFiltered}
                                getLabel={(item) => item.Title}
                                getValue={(item) => item.Title}
                                setValue={(item) => { setselectedPreviousModule(item); filterModuleGroupList(item); updateHenzaRecontions(item); }}
                                value={selectedPreviousModule.Title}
                                buttonStyle={styles.dropdown}
                                buttonTextStyle={styles.dropdownText}
                                onSubmit={(val) => { }}
                                searchEN={true}
                            />
                        </View>
                        <View style={styles.dualInputPart}>
                            {selectedPreviousModule && selectedPreviousModule.HaveSerial && (
                                <View>
                                    <Text style={styles.label}>سریال ماژول قدیم: </Text>
                                    <View style={styles.inputWithActionView}>
                                        <TextInput
                                            style={[styles.inputWithActionInput, { width: '66%' }]}
                                            placeholder={'سریال ماژول قدیم'}
                                            placeholderTextColor={colors.text}
                                            value={moduleoldSerial}
                                            multiline={true}
                                            returnKeyType={'next'}
                                            keyboardType={'default'}
                                            onChange={text => setModuleoldSerial(text.nativeEvent.text)}
                                        />
                                        <TouchableOpacity style={[styles.inputWithActionButton, { width: '17%' }]} onPress={() => { setscanpopupEnableOld(true); }}>
                                            <Ionicons style={styles.inputWithActionIcon} name={'barcode'} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                            {selectedPreviousModule && !selectedPreviousModule.HaveSerial && (
                                <View>
                                    <Text style={styles.label}>تعداد ماژول قدیم: </Text>
                                    <TextInput
                                        style={[styles.textInput]}
                                        placeholder={'تعداد ماژول قدیم'}
                                        placeholderTextColor={colors.text}
                                        value={moduleoldSerial}
                                        multiline={true}
                                        returnKeyType={'next'}
                                        keyboardType={'numeric'}
                                        onChange={text => setModuleoldSerial(text.nativeEvent.text)}
                                    />
                                </View>
                            )}
                        </View>
                    </View>
                    <Text style={styles.label}>شرح خرابی: </Text>
                    <MultiSelectDropdown
                        list={henzaRecontions}
                        selectedValues={selectedDamageDescriptions}
                        setSelectedValues={setSelectedDamageDescriptions}
                        placeHolder={'شرح خرابی'}
                        buttonStyle={styles.dropdown}
                        buttonTextStyle={styles.dropdownText}
                        onSubmit={(val) => { }}
                        getLabel={(item) => item.henzaRecognitionExpertTitle}
                        getValue={(item) => item.id}
                    />

                </View>)}
                <CheckBox text={'نیاز به تعمیر ندارد'} value={noRepairNeeded} onChange={() => { setnoRepairNeeded(!noRepairNeeded) }} checkboxstyle={styleslocal.checkboxView} enabled={true} />
                <Text style={styles.label}>DOA / نقض گارانتی: </Text>
                <DropDownObj
                    list={garantiDOAList}
                    getLabel={(item) => item}
                    getValue={(item) => item}
                    setValue={(item) => { setDOAorGarantieConflict(item) }}
                    value={DOAorGarantieConflict}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownText}
                    onSubmit={(val) => { }}
                />
                {DOAorGarantieConflict == 'DOA' && (<View>
                    <Text style={styles.label}>علت DOA: </Text>
                    <DropDownObj
                        list={['ناموجود', 'عدم عملکرد صحیح', 'شکستگی', 'سایر']}
                        getLabel={(item) => item}
                        getValue={(item) => item}
                        setValue={(item) => { setselectedDOAReason(item) }}
                        value={selectedDOAReason}
                        buttonStyle={styles.dropdown}
                        buttonTextStyle={styles.dropdownText}
                        onSubmit={(val) => { }}
                    />
                </View>)}
                {DOAorGarantieConflict == 'نقض گارانتی' && (<View>
                    <Text style={styles.label}>علت نقض گارانتی: </Text>
                    <DropDownObj
                        list={[]}
                        getLabel={(item) => item}
                        getValue={(item) => item}
                        setValue={(item) => { }}
                        value={'انتخاب'}
                        buttonStyle={styles.dropdown}
                        buttonTextStyle={styles.dropdownText}
                        onSubmit={(val) => { }}
                    />
                </View>)}
                <Text style={styles.label}>توضیحات: </Text>
                <TextInput
                    style={styles.description}
                    placeholder="توضیحات"
                    keyboardType={'default'}
                    value={description}
                    onChange={text => setdescription(text.nativeEvent.text)}
                />
                <TouchableOpacity style={styleslocal.submitButton} onPress={addComponentChanges}>
                    <Text style={styleslocal.submitButtonText}>تایید و اضافه</Text>
                </TouchableOpacity>
            </View>)}
            <View style={{ height: 20, }} />
            <Text style={styles.sectionTitle}>تاریخچه تعویض قطعات:</Text>
            {componentChangesList.map((item, index) => (
                <View key={index} >
                    <View style={[styles.actionHistoryItem, { backgroundColor: colors.antiflashWhite, marginBottom: 10 }]}>
                        <View style={styles.actionHistoryRight}>
                            <Text style={styles.actionHistoryTitle}>ماژول قدیم: {item.PreviousModule.Title} ({item.moduleOldSerial})</Text>
                            <Text style={styles.actionHistoryTitle}>ماژول جدید: {item.NewModule.Title} ({item.moduleNewSerial})</Text>
                            <Text style={[styles.actionResult, { textAlign: 'right' }]}>{item.componentAction}</Text>
                        </View>
                    </View>
                </View>
            ))}
            <View style={{ height: 20, }} />
            <Text style={styles.sectionTitle}>پیکربندی دستگاه:</Text>
            {deviceConfigList.map((item, index) => (
                <View key={index}>
                    <Text style={styles.deviceName}>مدل ماژول: {item.ModuleTitle}</Text>
                    <Text style={styles.damageTitle}>کد انبار: {item.Code}</Text>
                    <Text style={styles.damageTitle}>ماژول: {item.deviceHWTitle}</Text>
                    <Text style={styles.date}>سریال: {item.serial}</Text>
                </View>
            ))}
            <View style={{ height: 150, }} />
        </ScrollView >
    );
};

const styleslocal = StyleSheet.create({
    contents: {
        width: '100%',
        backgroundColor: colors.white,
    },
    sectionTitle: {
        fontFamily: 'iransansbold',
        fontSize: 12,
        width: '85%',
        marginHorizontal: 'auto',
        marginTop: 10,
        color: colors.black,
    },
    checkboxView: {
        flexDirection: 'row-reverse',
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: 10,
    },
    checkboxIcon: {
        marginLeft: 10,
        paddingTop: 3,
        fontSize: 18,
    },
    checkboxText: {
        fontFamily: 'iransans',
        fontSize: 13,
    },
    nextTabButton: {
        backgroundColor: colors.blue,
        width: '90%',
        marginBottom: 10,
        marginHorizontal: 'auto',
        borderRadius: 7,
        paddingVertical: 10,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
    },
    nextTabButtonText: {
        color: colors.white,
        fontFamily: 'iransansbold',
        fontSize: 14,
        textAlign: 'center',
    },
    nextTabButtonIcon: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingRight: 10,
    },
    checkbox: {
        // width: '60%',
        marginTop: 5,
    },
    submitButton: {
        width: '85%',
        marginHorizontal: '7.5%',
        marginTop: 15,
        paddingVertical: 5,
        backgroundColor: colors.emerald,
        borderRadius: 5,
    },
    submitButtonText: {
        fontFamily: 'iransans',
        fontSize: 14,
        textAlign: 'center',
        color: colors.white,
    },
});

export default ReportcomponentsView;