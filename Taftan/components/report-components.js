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
import SerialMismatchPopup from './serial-mismatch-popup';
import DuplicateItemPopup from './duplicate-item-popup';
import InsufficientStockPopup from './insufficient-stock-popup';
import MaxModulesExceededPopup from './max-modules-exceeded-popup';
import { GetWarrantyListByRequestId } from '../services/report-get-waranty-reasons';
import SerialMismatchPopupWithConfig from './serial-mismatch-popup-with-config';

const ReportcomponentsView = ({ reportDetail, moduleGroup, setModuleGroup, officeKey, setOfficeKey, moduleGroupKey, moduleListBrand, setmoduleListBrand, selectedNewModule, setselectedNewModule, selectedPreviousModule, setselectedPreviousModule, moduleInUserStoreList, setmoduleInUserStoreList, usedComponents, setusedComponents, moduleoldSerial, setModuleoldSerial, moduleNewSerial, setModuleNewSerial, componentChangesList, setcomponentChangesList, selectedDOAReason, setselectedDOAReason, setIsValid, navigation, selectedWarranties }) => {
    var [componentAction, setcomponentAction] = useState('تعویض');
    var [DOAorGarantieConflict, setDOAorGarantieConflict] = useState('هیچکدام');
    var [noRepairNeeded, setnoRepairNeeded] = useState(false);
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
    var [serialMismatchPopup, setSerialMismatchPopup] = useState(false);
    var [duplicateItemPopup, setDuplicateItemPopup] = useState(false);
    var [insufficientStockPopup, setInsufficientStockPopup] = useState(false);
    var [maxModulesExceededPopup, setMaxModulesExceededPopup] = useState(false);
    var [selectedWarrantyReasons, setSelectedWarrantyReasons] = useState([]);
    var [warrantyList, setwarrantyList] = useState([]);
    var [serialMismatchConfigPopup, setSerialMismatchConfigPopup] = useState(false);
    const updateModuleGroupTitleList = async () => {
        var result = await GetModuleGroupTitleList(navigation);
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
            officeKey = result.data;
            setOfficeKey(officeKey);
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
        var result = await GetModuleInUserStore(moduleGroupKey, officeKey, navigation);
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
        // Check for old serial mismatch
        if (componentAction == 'حذف') {
            if (selectedPreviousModule.Title === 'انتخاب کنید') {
                ToastAndroid.show('لطفا موارد خواسته شده را تکمیل نمایید', ToastAndroid.SHORT);
                return;
            }
            if (selectedPreviousModule && !selectedPreviousModule.HaveSerial) {
                const found = deviceConfigList.find(config => config.GroupModuleId == selectedPreviousModule.ModuleGroupId);

                if (found && found.count < moduleoldSerial) {
                    setMaxModulesExceededPopup(true);
                    return;
                }
            }
        }
        else if (componentAction == 'اضافه') {
            if (selectedNewModule.ModuleTitle === 'انتخاب کنید') {
                ToastAndroid.show('لطفا موارد خواسته شده را تکمیل نمایید', ToastAndroid.SHORT);
                return;
            }
        }
        else if (componentAction == 'تعویض') {
            if (selectedPreviousModule.Title === 'انتخاب کنید' || selectedNewModule.ModuleTitle === 'انتخاب کنید') {
                ToastAndroid.show('لطفا موارد خواسته شده را تکمیل نمایید', ToastAndroid.SHORT);
                return;
            }
        }
        if (selectedPreviousModule && selectedPreviousModule.HaveSerial) {
            const found = deviceConfigList.some(config => config.serial == moduleoldSerial);
            if (!found) {
                if (componentAction == 'حذف') {
                    setSerialMismatchPopup(true);
                    return;
                }
                else if (componentAction == 'تعویض') {
                    setSerialMismatchConfigPopup(true);
                    return;
                }
            }
        }
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
        setSelectedDamageDescriptions([]);
        setselectedDOAReason('انتخاب کنید');
        setModuleNewSerial('');
        setModuleoldSerial('');
        setselectedNewModule({ ModuleTitle: 'انتخاب کنید' });
        setselectedPreviousModule({ Title: 'انتخاب کنید' });
        setdescription('');
        setnoRepairNeeded(false);
        setDOAorGarantieConflict('هیچکدام');
        setmoduleListBrandFiltered(moduleListBrand);
        setmoduleGroupListFiltered(moduleGroupList);
        ToastAndroid.show('قطعات با موفقیت ثبت شد', ToastAndroid.SHORT);
        setIsValid(true);
    };
    const handleSerialMismatchConfirm = () => {
        var newcomponentChanges = {
            moduleGroup: moduleGroup,
            componentAction: 'حذف-مغایرت',
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
        setSelectedDamageDescriptions([]);
        setselectedDOAReason('انتخاب کنید');
        setModuleNewSerial('');
        setModuleoldSerial('');
        setselectedNewModule({ ModuleTitle: 'انتخاب کنید' });
        setselectedPreviousModule({ Title: 'انتخاب کنید' });
        setdescription('');
        setnoRepairNeeded(false);
        setDOAorGarantieConflict('هیچکدام');
        setmoduleListBrandFiltered(moduleListBrand);
        setmoduleGroupListFiltered(moduleGroupList);
        ToastAndroid.show('قطعات با موفقیت ثبت شد', ToastAndroid.SHORT);
        setIsValid(true);
    }
    const handleSerialMismatchConfigConfirm = () => {
        var newcomponentChanges = {
            moduleGroup: moduleGroup,
            componentAction: 'تعویض-مغایرت',
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
        var newcomponentChanges2 = {
            moduleGroup: moduleGroup,
            componentAction: 'حذف-مغایرت',
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
        setcomponentChangesList([...componentChangesList, newcomponentChanges, newcomponentChanges2]);
        setSelectedDamageDescriptions([]);
        setselectedDOAReason('انتخاب کنید');
        setModuleNewSerial('');
        setModuleoldSerial('');
        setselectedNewModule({ ModuleTitle: 'انتخاب کنید' });
        setselectedPreviousModule({ Title: 'انتخاب کنید' });
        setdescription('');
        setnoRepairNeeded(false);
        setDOAorGarantieConflict('هیچکدام');
        setmoduleListBrandFiltered(moduleListBrand);
        setmoduleGroupListFiltered(moduleGroupList);
        ToastAndroid.show('قطعات با موفقیت ثبت شد', ToastAndroid.SHORT);
        setIsValid(true);
    }
    const handleAddToConfig = () => {
        var newcomponentChanges = {
            moduleGroup: moduleGroup,
            componentAction: 'تعویض',
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
        setSelectedDamageDescriptions([]);
        setselectedDOAReason('انتخاب کنید');
        setModuleNewSerial('');
        setModuleoldSerial('');
        setselectedNewModule({ ModuleTitle: 'انتخاب کنید' });
        setselectedPreviousModule({ Title: 'انتخاب کنید' });
        setdescription('');
        setnoRepairNeeded(false);
        setDOAorGarantieConflict('هیچکدام');
        setmoduleListBrandFiltered(moduleListBrand);
        setmoduleGroupListFiltered(moduleGroupList);
        ToastAndroid.show('قطعات با موفقیت ثبت شد', ToastAndroid.SHORT);
        setIsValid(true);
    }
    useEffect(() => {
        updateModuleGroupTitleList();
        setmoduleListBrandFiltered(moduleListBrand);
        if (reportDetail && (reportDetail.requestReportInfo.serviceGroupId == 1 || reportDetail.requestReportInfo.serviceGroupId == 8)) {
            setgarantiDOAList(['هیچکدام', 'DOA', 'نقض گارانتی']);
        } else {
            setgarantiDOAList(['هیچکدام', 'DOA']);
        }
        const sendRequest = async () => {
            var result = await loadDeviceConfigList(reportDetail.requestReportInfo.deviceId);
            if (result.success) {
                setdeviceConfigList(result.data.Data);
            } else ToastAndroid.show('کانفیگ دستگاه دریافت نشد', ToastAndroid.SHORT);
        }
        if (reportDetail) {
            sendRequest();
            updateOfficeKey();
        }
    }, [reportDetail, moduleListBrand]);
    useEffect(() => {
        setIsValid(true);
        if (DOAorGarantieConflict === 'نقض گارانتی' && reportDetail && reportDetail.requestReportInfo) {
            setwarrantyList(selectedWarranties);
        }
    }, [selectedWarranties, reportDetail, DOAorGarantieConflict]);
    return (
        <ScrollView style={styleslocal.contents}>
            <ScanPopup modalEnable={scanpopupEnableNew} setmodalEnable={setscanpopupEnableNew} onCodeScanned={handleCodeScannedNew} />
            <ScanPopup modalEnable={scanpopupEnableOld} setmodalEnable={setscanpopupEnableOld} onCodeScanned={handleCodeScannedOld} />
            <SerialMismatchPopup popupEN={serialMismatchPopup} setPopupEN={setSerialMismatchPopup} onConfirm={handleSerialMismatchConfirm} />
            <SerialMismatchPopupWithConfig
                popupEN={serialMismatchConfigPopup}
                setPopupEN={setSerialMismatchConfigPopup}
                onConfirm={handleSerialMismatchConfigConfirm}
                onAddToConfig={handleAddToConfig}
            />
            <DuplicateItemPopup popupEN={duplicateItemPopup} setPopupEN={setDuplicateItemPopup} />
            <InsufficientStockPopup popupEN={insufficientStockPopup} setPopupEN={setInsufficientStockPopup} />
            <MaxModulesExceededPopup popupEN={maxModulesExceededPopup} setPopupEN={setMaxModulesExceededPopup} />

            <Text style={styleslocal.sectionTitle}>اطلاعات قطعات:</Text>
            <CheckBox text={'قطعات مصرفی'} value={usedComponents} onChange={() => {
                setusedComponents(!usedComponents);
                updateModuleGroupTitleList();
                updateOfficeKey();
                updateModuleListBrandTypeGroupKey();
                updateModuleInUserStore();
                if (!usedComponents) setIsValid(false);
                else setIsValid(true);
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
                                getLabel={(item) => item.ModuleTitle}
                                getValue={(item) => item.ModuleTitle}
                                setValue={(item) => { setselectedNewModule(item); }}
                                value={selectedNewModule.ModuleTitle}
                                buttonStyle={styles.dropdown}
                                buttonTextStyle={styles.dropdownText}
                                onSubmit={(val) => { }}
                                searchEN={true}
                            />
                        </View>
                        <View style={styles.dualInputPart}>
                            {selectedNewModule.ModuleTitle != 'انتخاب کنید' && selectedNewModule.HaveSerial && (
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
                            {selectedNewModule.ModuleTitle != 'انتخاب کنید' && !selectedNewModule.HaveSerial && (
                                <View>
                                    <Text style={styles.label}>تعداد ماژول جدید: </Text>
                                    <TextInput
                                        style={[styles.textInput]}
                                        placeholder={'تعداد ماژول جدید'}
                                        placeholderTextColor={colors.text}
                                        value={moduleNewSerial}
                                        multiline={true}
                                        returnKeyType={'next'}
                                        keyboardType={'numeric'}
                                        onChange={text => setModuleNewSerial(text.nativeEvent.text)}
                                    />
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
                            {selectedPreviousModule.Title != 'انتخاب کنید' && selectedPreviousModule.HaveSerial && (
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
                            {selectedPreviousModule.Title != 'انتخاب کنید' && !selectedPreviousModule.HaveSerial && (
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
                    <MultiSelectDropdown
                        list={warrantyList}
                        selectedValues={selectedWarrantyReasons}
                        setSelectedValues={setSelectedWarrantyReasons}
                        placeHolder="انتخاب کنید"
                        buttonStyle={styles.dropdown}
                        buttonTextStyle={styles.dropdownText}
                        getLabel={(item) => item.description}
                        getValue={(item) => item.Id}
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
                            {(item.componentAction == 'تعویض' || item.componentAction == 'حذف' || item.componentAction == 'حذف-مغایرت' || item.componentAction == 'تعویض-مغایرت') && (<Text style={styles.actionHistoryTitle}>ماژول قدیم: {item.PreviousModule.Title} ({item.moduleOldSerial})</Text>)}
                            {(item.componentAction == 'تعویض' || item.componentAction == 'اضافه' || item.componentAction == 'تعویض-مغایرت') && (<Text style={styles.actionHistoryTitle}>ماژول جدید: {item.NewModule.Title} ({item.moduleNewSerial})</Text>)}
                            <Text style={[styles.actionResult, { textAlign: 'right', color: colors.red2 }]}>{item.componentAction}</Text>
                        </View>
                        <TouchableOpacity
                            style={styleslocal.deleteButton}
                            onPress={() => {
                                const newList = [...componentChangesList];
                                newList.splice(index, 1);
                                setcomponentChangesList(newList);
                            }}
                        >
                            <Ionicons name="trash-outline" size={20} color={colors.red} />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
            <View style={{ height: 20, }} />
            <Text style={styles.sectionTitle}>پیکربندی دستگاه:</Text>
            {deviceConfigList.map((item, index) => (
                <View style={styleslocal.deviceConfigItem} key={index}>
                    <Text style={styleslocal.deviceName}>مدل ماژول: {item.ModuleTitle}</Text>
                    <Text style={styleslocal.damageTitle}>کد انبار: {item.Code}</Text>
                    <Text style={styleslocal.damageTitle}>گروه ماژول: {item.ModuleGroupTitle}</Text>
                    {item.haveSerial && (<Text style={styleslocal.date}>سریال: {item.serial}</Text>)}
                    {!item.haveSerial && (<Text style={styleslocal.date}>تعداد: {item.count}</Text>)}
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
    deviceConfigItem: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 0,
        backgroundColor: colors.lightergray,
        borderColor: colors.lightgray,
        borderWidth: 1,
        direction: 'rtl',
    },
    deviceName: {
        fontSize: 14,
        marginBottom: 2,
        fontFamily: 'iransansbold',
        direction: 'rtl',
        color: colors.darkBackground,
        textAlign: 'right',
    },
    damageTitle: {
        fontSize: 12,
        fontFamily: 'iransansbold',
        color: colors.gray,
        textAlign: 'right',
    },
    textTitle: {
        fontSize: 12,
        fontFamily: 'iransansbold',
        color: colors.darkblue,
        textAlign: 'right',
        marginTop: 5,
    },
    date: {
        position: 'absolute',
        bottom: 5,
        left: 15,
        fontFamily: 'iransans',
        fontSize: 12,
    },
    stateView: {
        position: 'absolute',
        top: 5,
        left: 15,
        flexDirection: 'row-reverse',
        alignContent: 'center',
        alignItems: 'center',
    },
    deleteButton: {
        position: 'absolute',
        left: 10,
        top: 10,
        padding: 5,
    },
});

export default ReportcomponentsView;