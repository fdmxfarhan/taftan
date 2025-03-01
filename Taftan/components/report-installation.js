import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import DropDownObj from './dropdown-obj';
import styles from '../styles/reqView';
import { LoadProvinceList } from '../services/country-dev-local-province';
import { LoadActiveCityList } from '../services/country-dev-city-list';
import { LoadActiveZoneList } from '../services/country-dev-zone-list';

const ReportInstallation = ({ reportDetail, provinceName, setprovinceName, cityName, setcityName, zoneName, setzoneName }) => {
    var [provinceList, setprovinceList] = useState([]);
    var [activeCityList, setactiveCityList] = useState([]);
    var [activeZoneList, setactiveZoneList] = useState([]);

    var sendRequest = async () => {
        var result = await LoadProvinceList();
        if (result.success) {
            setprovinceList(result.data);
        } else ToastAndroid.show('لیست استان ها لود نشد', ToastAndroid.SHORT);
    }
    var updateCityList = async () => {
        var result = await LoadActiveCityList(provinceName.id);
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
        updateCityList();
        updateZoneList();
    }, []);
    return (
        <ScrollView style={styleslocal.contents}>
            <Text style={styles.label}>آدرس مبداء:</Text>
            <TextInput style={styles.textInput} placeholder="آدرس مبداء" value={reportDetail.installReportInfo.sourceAddress} />
            <Text style={styles.label}>آدرس مقصد:</Text>
            <TextInput style={styles.textInput} placeholder="آدرس مقصد" value={reportDetail.installReportInfo.destinationAddress} />
            <View style={[styles.dualInputView]}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>نام تجهیز:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, { backgroundColor: colors.white }]} placeholder="نام تجهیز" value={reportDetail.installReportInfo.deviceName} />
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>سریال:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, { backgroundColor: colors.white }]} placeholder="سریال" value={reportDetail.installReportInfo.deviceSerial} />
                </View>
            </View>
            <View style={[styles.dualInputView]}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>ترمینال:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, { backgroundColor: colors.white }]} placeholder="ترمینال" value={reportDetail.installReportInfo.deviceTerminal} />
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>شماره اموال:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, { backgroundColor: colors.white }]} placeholder="شماره اموال" value={reportDetail.installReportInfo.deviceCodeNumber} />
                </View>
            </View>
            <View style={[styles.dualInputView]}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>طول جغرافیایی:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, { backgroundColor: colors.white }]} placeholder="طول جغرافیایی" value={reportDetail.installReportInfo.longitude} />
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>عرض جغرافیایی:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, { backgroundColor: colors.white }]} placeholder="عرض جغرافیایی" value={reportDetail.installReportInfo.latitude} />
                </View>
            </View>
            <View style={[styles.dualInputView]}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>استان: </Text>
                    <DropDownObj list={provinceList}
                        getLabel={(item) => item.provinceName}
                        getValue={(item) => item.provinceName}
                        setValue={(item) => { setprovinceName(item); updateCityList(); }}
                        value={provinceName.provinceName}
                        buttonStyle={[styles.dropdown, styles.requiredBorder, { backgroundColor: colors.white }]}
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
                        buttonStyle={[styles.dropdown, styles.requiredBorder, { backgroundColor: colors.white }]}
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
                        buttonStyle={[styles.dropdown, styles.requiredBorder, { backgroundColor: colors.white }]}
                        buttonTextStyle={styles.dropdownText}
                        onSubmit={(val) => { }}
                    />
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>شماره تلفن:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, { backgroundColor: colors.white }]} placeholder="شماره تلفن" value={reportDetail.installReportInfo.latitude} />
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