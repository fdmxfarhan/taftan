import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import styles from '../styles/reqView';

const ReqPeriodicView = ({ toggleperiodicInfo, periodicInfo, item, requestDetail }) => {
    const openURL = async (url) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            ToastAndroid.show(`لینک پشتیبانی نمیشود`, ToastAndroid.SHORT);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleView} onPress={toggleperiodicInfo}>
                <Text style={styles.title}>اطلاعات سرویس دوره ای</Text>
                <Ionicons style={styles.chevron} name={periodicInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
            </TouchableOpacity>
            {periodicInfo && (<View style={styles.content}>
                <Text style={styles.label}>ملاحظات: </Text>
                <TextInput
                    style={[styles.description]}
                    placeholder={'ملاحظات'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.pmInfo.description}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <View style={styles.buttonsView}>
                    <ScrollView horizontal={true} inverted={true} style={styles.buttonScrollView}>
                        <TouchableOpacity style={styles.submitButton} onPress={() => openURL('http://10.100.52.11:8087' + requestDetail.pmInfo.routine)}>
                            <Ionicons style={styles.buttonIcon} name="download" />
                            <Text style={styles.buttonText}>روال</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitButton} onPress={() => openURL('http://10.100.52.11:8087' + requestDetail.pmInfo.instructions)}>
                            <Ionicons style={styles.buttonIcon} name="download" />
                            <Text style={styles.buttonText}>دستور العمل</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>)}
        </View>
    );
};


export default ReqPeriodicView;