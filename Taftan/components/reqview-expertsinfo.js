import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import LastConfPopup from './rec-popup-lastconf';
import styles from '../styles/reqView';

const ReqExpertsInfo = ({ togglesupervisorInfo, supervisorInfo, item, requestDetail, reqExpertList }) => {
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleView} onPress={togglesupervisorInfo}>
                <Text style={styles.title}>کارشناس</Text>
                <Ionicons style={styles.chevron} name={supervisorInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
            </TouchableOpacity>
            {supervisorInfo && (<View style={styles.content}>
                {reqExpertList.map((item, index) => (
                    <View key={item.Id} style={styles.supervisorItem}>
                        <Text style={styles.supervisorName}>{item.currentUserName}</Text>
                        <Text style={styles.supervisorType}>{item.expertType_String}</Text>
                    </View>
                ))}
            </View>)}
        </View>
    );
};

export default ReqExpertsInfo;