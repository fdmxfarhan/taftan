import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import DropDownObj from './dropdown-obj';
import styles from '../styles/reqView';
import { LoadProvinceList } from '../services/country-dev-local-province';
import { LoadActiveCityList } from '../services/country-dev-city-list';
import { LoadActiveZoneList } from '../services/country-dev-zone-list';

const ReportInstallation = ({ reportDetail, provinceName, setprovinceName, cityName, setcityName, zoneName, setzoneName, installationReportInfo, setinstallationReportInfo }) => {
    var [provinceList, setprovinceList] = useState([]);
    var [activeCityList, setactiveCityList] = useState([]);
    var [activeZoneList, setactiveZoneList] = useState([]);
    
    var sendRequest = async () => {
        var result = await LoadProvinceList();
        if (result.success) {
            setprovinceList(result.data);
        } else ToastAndroid.show('لیست استان ها لود نشد', ToastAndroid.SHORT);
    }
    var updateCityList = async (item) => {
        var result = await LoadActiveCityList(item.id);
        if (result.success) {
            setactiveCityList(result.data);
        } else ToastAndroid.show('لیست شهرها لود نشد', ToastAndroid.SHORT);
    }
    var updateZoneList = async () => {
        var result = await LoadActiveZoneList(provinceName.id);
        if (result.success) {
            setactiveZoneList(result.data);
        } else ToastAndroid.show('لیست شهرها لود نشد', ToastAndroid.SHORT);
    }
    useEffect(() => {
        sendRequest();
        updateCityList(provinceName);
        updateZoneList();
    }, []);
    return (
        <ScrollView style={styleslocal.contents}>
            <Text style={styles.label}>آدرس مبداء:</Text>
            <TextInput style={styles.textInput} placeholder="آدرس مبداء" value={installationReportInfo.sourceAddress} />
            <Text style={styles.label}>آدرس مقصد:</Text>
            <TextInput style={styles.textInput} placeholder="آدرس مقصد" value={installationReportInfo.destinationAddress} />
            <View style={[styles.dualInputView]}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>نام تجهیز:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, { backgroundColor: colors.white, borderRightColor: installationReportInfo.deviceName == null || installationReportInfo.deviceName == ''? colors.red2 : colors.green }]} placeholder="نام تجهیز" value={installationReportInfo.deviceName} onChange={text=> {
                        setinstallationReportInfo({ ...installationReportInfo, deviceName: text.nativeEvent.text });
                    }} />
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>سریال:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, { backgroundColor: colors.white, borderRightColor: installationReportInfo.deviceSerial == null || installationReportInfo.deviceSerial == ''? colors.red2 : colors.green }]} placeholder="سریال" value={installationReportInfo.deviceSerial} onChange={text=> {
                        setinstallationReportInfo({ ...installationReportInfo, deviceSerial: text.nativeEvent.text });
                    }} />
                </View>
            </View>
            <View style={[styles.dualInputView]}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>ترمینال:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, { backgroundColor: colors.white, borderRightColor: installationReportInfo.deviceTerminal == null || installationReportInfo.deviceTerminal == ''? colors.red2 : colors.green }]} placeholder="ترمینال" value={installationReportInfo.deviceTerminal} onChange={text=> {
                        setinstallationReportInfo({ ...installationReportInfo, deviceTerminal: text.nativeEvent.text });
                    }} />
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>شماره اموال:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, { backgroundColor: colors.white, borderRightColor: installationReportInfo.deviceCodeNumber == null || installationReportInfo.deviceCodeNumber == ''? colors.red2 : colors.green }]} placeholder="شماره اموال" value={installationReportInfo.deviceCodeNumber} onChange={text=> {
                        setinstallationReportInfo({ ...installationReportInfo, deviceCodeNumber: text.nativeEvent.text });
                    }} />
                </View>
            </View>
            <View style={[styles.dualInputView]}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>طول جغرافیایی:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, { backgroundColor: colors.white, borderRightColor: installationReportInfo.longitude == null || installationReportInfo.longitude == ''? colors.red2 : colors.green }]} placeholder="طول جغرافیایی" value={installationReportInfo.longitude.toString()} onChange={text=> {
                        setinstallationReportInfo({ ...installationReportInfo, longitude: text.nativeEvent.text });
                    }} />
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>عرض جغرافیایی:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, { backgroundColor: colors.white, borderRightColor: installationReportInfo.latitude == null || installationReportInfo.latitude == '' ? colors.red2 : colors.green }]} placeholder="عرض جغرافیایی" value={installationReportInfo.latitude.toString()} onChange={text=> {
                        setinstallationReportInfo({ ...installationReportInfo, latitude: text.nativeEvent.text });
                    }} />
                </View>
            </View>
            <View style={[styles.dualInputView]}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>استان: </Text>
                    <DropDownObj list={provinceList}
                        getLabel={(item) => item.provinceName}
                        getValue={(item) => item.provinceName}
                        setValue={(item) => { setprovinceName(item); updateCityList(item); }}
                        value={provinceName.provinceName}
                        buttonStyle={[styles.dropdown, styles.requiredBorder, { backgroundColor: colors.white, borderRightColor: provinceName.provinceName == null || provinceName.provinceName == ''? colors.red2 : colors.green }]}
                        buttonTextStyle={styles.dropdownText}
                        onSubmit={(val) => { }}
                    />
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>شهر: </Text>
                    <DropDownObj list={activeCityList}
                        getLabel={(item) => item.cityName}
                        getValue={(item) => item.cityName}
                        setValue={(item) => { setcityName(item); }}
                        value={cityName.cityName}
                        buttonStyle={[styles.dropdown, styles.requiredBorder, { backgroundColor: colors.white, borderRightColor: cityName.cityName == null || cityName.cityName == ''? colors.red2 : colors.green }]}
                        buttonTextStyle={styles.dropdownText}
                        onSubmit={(val) => { }}
                    />
                </View>
            </View>
            <View style={[styles.dualInputView]}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>محله: </Text>
                    <DropDownObj list={activeZoneList}
                        getLabel={(item) => item.title}
                        getValue={(item) => item.title}
                        setValue={(item) => { setzoneName(item); updateCityList(); }}
                        value={zoneName.title}
                        buttonStyle={[styles.dropdown, styles.requiredBorder, { backgroundColor: colors.white, borderRightColor: zoneName.title == null || zoneName.title == ''? colors.red2 : colors.green }]}
                        buttonTextStyle={styles.dropdownText}
                        onSubmit={(val) => { }}
                    />
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>شماره تلفن:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, { backgroundColor: colors.white, borderRightColor: installationReportInfo.phoneNumber == null || installationReportInfo.phoneNumber == ''? colors.red2 : colors.green }]} placeholder="شماره تلفن" value={installationReportInfo.phoneNumber} onChange={text=> {
                        setinstallationReportInfo({ ...installationReportInfo, phoneNumber: text.nativeEvent.text });
                    }} />
                </View>
            </View>
            <Text style={styles.label}>آدرس: </Text>
            <TextInput style={styles.description}
                placeholder="آدرس"
                keyboardType={'default'}
                // value={description}
                // onChange={text => setdescription(text.nativeEvent.text)}
            />
            <View style={{ height: 150, }} />
        </ScrollView>
    );
};

const styleslocal = StyleSheet.create({

});

export default ReportInstallation;