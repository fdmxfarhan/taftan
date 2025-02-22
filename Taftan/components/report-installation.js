// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import DropDownObj from './dropdown-obj';
import styles from '../styles/reqView';

const ReportInstallation = ({ reportDetail }) => {
    useEffect(() => {

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
                    <TextInput style={[styles.textInput, styles.requiredBorder, {backgroundColor: colors.white}]} placeholder="نام تجهیز" value={reportDetail.installReportInfo.deviceName} />
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>سریال:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, {backgroundColor: colors.white}]} placeholder="سریال" value={reportDetail.installReportInfo.deviceSerial} />
                </View>
            </View>
            <View style={[styles.dualInputView]}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>ترمینال:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, {backgroundColor: colors.white}]} placeholder="ترمینال" value={reportDetail.installReportInfo.deviceTerminal} />
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>شماره اموال:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, {backgroundColor: colors.white}]} placeholder="شماره اموال" value={reportDetail.installReportInfo.deviceCodeNumber} />
                </View>
            </View>
            <View style={[styles.dualInputView]}>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>ترمینال:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, {backgroundColor: colors.white}]} placeholder="ترمینال" value={reportDetail.installReportInfo.deviceTerminal} />
                </View>
                <View style={styles.dualInputPart}>
                    <Text style={styles.label}>شماره اموال:</Text>
                    <TextInput style={[styles.textInput, styles.requiredBorder, {backgroundColor: colors.white}]} placeholder="شماره اموال" value={reportDetail.installReportInfo.deviceCodeNumber} />
                </View>
            </View>
            
            <View style={{ height: 150, }} />
        </ScrollView>
    );
};

const styleslocal = StyleSheet.create({

});

export default ReportInstallation;