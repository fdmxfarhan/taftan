import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/requestList';
import colors from './colors';

const InstallationRequestItem = ({ 
    item, 
    index, 
    installRequests, 
    handleItemPress, 
    openRequestReport, 
    openMapDirection,
    openPhoneCall,
    setIsLoading,
    getSLAColor,
    onPickRequest
}) => {
    return (
        <View>
            {index == 0 ? (
                <Text style={styles.sectionSplitter}>{item.preInstallTitle}</Text>
            ) : installRequests[index].preInstallationId != installRequests[index - 1].preInstallationId ? (
                <Text style={styles.sectionSplitter}>{item.preInstallTitle}</Text>
            ) : (
                <View></View>
            )}
            <TouchableOpacity onPress={() => handleItemPress(item)} style={[styles.itemContainer, { backgroundColor: (item.lastState == 'Acting' && item.lastLable === 'Pick') ? colors.orange2 : colors.white }]}>
                <Text style={styles.deviceName}>
                    {item.operationalAreaName} (<Text>{item.customerName}</Text>)
                </Text>
                <Text style={styles.damageTitle}>سرویس: {item.serviceName}</Text>
                <Text style={styles.damageTitle}>عنوان: {item.installationServiceName}</Text>
                <Text style={styles.textTitle}>شماره کار: {item.requestId}</Text>

                <View style={styles.stateView}>
                    <Text style={styles.state}>{item.persianLastState}</Text>
                    <View style={[styles.stateCircle, { backgroundColor: getSLAColor(item.SLAStyle) }]} />
                </View>
                <Text style={styles.date}>{item.persianStartDate}</Text>
                <View style={styles.callbuttonsView}>
                    <TouchableOpacity style={styles.callButton} onPress={() => openRequestReport(item)}>
                        <Ionicons name={'document'} style={styles.callIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callButton} onPress={() => openMapDirection(item)}>
                        <Ionicons name={'location'} style={styles.callIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callButton} onPress={() => openPhoneCall(item)}>
                        <Ionicons name={'call'} style={styles.callIcon} />
                    </TouchableOpacity>
                    {item.lastState == 'Acting' && (
                    <TouchableOpacity
                        style={styles.callButton}
                        onPress={() => {
                            setIsLoading(true);
                            onPickRequest(item, item.lastLable === 'Pick' ? 'unPick' : 'Pick');
                        }}>
                        <Ionicons
                            name={item.lastLable === 'Pick' ? 'pause-circle' : 'play-circle'}
                            style={styles.callIcon}
                        />
                    </TouchableOpacity>
                )}
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default InstallationRequestItem; 