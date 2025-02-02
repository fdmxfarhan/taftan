import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import LastConfPopup from './rec-popup-lastconf';
import styles from '../styles/reqView';

const ReqServiceStateInfo = ({ toggleserviceStateInfo, serviceStateInfo, requestDetail }) => {
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleView} onPress={toggleserviceStateInfo}>
                <Text style={styles.title}>وضعیت سرویس</Text>
                <Ionicons style={styles.chevron} name={serviceStateInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
            </TouchableOpacity>
            {serviceStateInfo && (<View style={styles.content}>
                {requestDetail.requestInfo.requestStatusList.map((item, index) => (
                    <View key={index} style={styles.stateItemView}>
                        <Text style={styles.stateItemTitle}>{item.delayReason}</Text>
                        <View style={styles.stateDateView}>
                            <Ionicons style={styles.dateIcon} name="calendar-outline" size={30} color={colors.text} />
                            <Text style={styles.stateDateText}>{item.persianDate}</Text>
                            <Ionicons style={styles.clockIcon} name="time-outline" size={30} color={colors.text} />
                            <Text style={styles.stateClockText}>{item.persianTime}</Text>
                        </View>
                        <Text style={styles.stateDescText}>{item.description}</Text>
                    </View>
                ))}
            </View>)}
        </View>
    );
};

export default ReqServiceStateInfo;