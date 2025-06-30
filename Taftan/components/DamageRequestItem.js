import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/requestList';
import colors from './colors';

const DamageRequestItem = ({ 
    item, 
    handleItemPress, 
    openRequestReport, 
    openMapDirection,
    openPhoneCall,
    setIsLoading,
    getSLAColor 
}) => {
    return (
        <TouchableOpacity onPress={() => handleItemPress(item)} style={[styles.itemContainer, {backgroundColor: item.persianLastState == 'در حال اقدام'? colors.orange2 : colors.white}]}>
            <Text style={styles.deviceName}>{item.deviceName} (<Text>{item.customerName}</Text>)</Text>
            <Text style={styles.damageTitle}>{item.areaName}</Text>
            <Text style={styles.damageTitle}>{item.serviceName}</Text>
            <Text style={styles.textTitle}>شماره کار: {item.requestId}</Text>
            <View style={styles.stateView}>
                <Text style={styles.state}>{item.persianLastState}</Text>
                {item.isPilot == 0 ? (
                    <View style={[styles.stateCircle, { backgroundColor: getSLAColor(item.SLAStyle) }]} />
                ) : (
                    <Ionicons style={styles.pilotIcon} name={'build'} />
                )}
            </View>
            <Text style={styles.date}>{item.persianInsertedDate}</Text>

            <View style={styles.callbuttonsView}>
                {item.reportHasFile == 1 ? (
                    <TouchableOpacity style={styles.callButton} onPress={() => { setIsLoading(true); openRequestReport(item); }}>
                        <Ionicons name={'document'} style={styles.callIcon} />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.callButton} >
                        <Ionicons name={'document'} style={[styles.callIcon, { color: colors.lightgray }]} />
                    </View>
                )}
                <TouchableOpacity style={styles.callButton} onPress={() => { setIsLoading(true); openMapDirection(item); }}>
                    <Ionicons name={'location'} style={styles.callIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton} onPress={() => { setIsLoading(true); openPhoneCall(item); }}>
                    <Ionicons name={'call'} style={styles.callIcon} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default DamageRequestItem; 