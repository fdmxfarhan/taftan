import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import LastConfPopup from './rec-popup-lastconf';
import WorkFlowPopup from './rec-popup-workflow';
import AreaDetailPopup from './rec-popup-area-detail';
import styles from '../styles/reqView';

const ReqWorkFlowInfo = ({ toggleWorkflow, workflow, requestDetail, reqHistoryList, areaDetail }) => {
    var [workflowModalEN, setworkflowModalEN] = useState(false);
    var [areaDetailModalEN, setareaDetailModalEN] = useState(false);
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    return (
        <View style={styles.container}>
            <WorkFlowPopup reqHistoryList={reqHistoryList} modalEnable={workflowModalEN} setmodalEnable={setworkflowModalEN} />
            <AreaDetailPopup modalEnable={areaDetailModalEN} setmodalEnable={setareaDetailModalEN} areaDetail={areaDetail} />
            <TouchableOpacity style={styles.titleView} onPress={toggleWorkflow}>
                <Text style={styles.title}>گردش کار</Text>
                <Ionicons style={styles.chevron} name={workflow == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
            </TouchableOpacity>
            {workflow && (<View style={styles.content}>
                <Text style={styles.label}>گردش کار: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'گردش کار'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.requestInfo.lastState}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>دفتر: </Text>
                <View style={styles.inputWithActionView}>
                    <TextInput
                        style={[styles.inputWithActionInput]}
                        placeholder={'دفتر'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={requestDetail.requestInfo.areaName}
                        editable={false}
                    // onChange={(text) => {
                    //     console.log('hello')
                    // }}
                    />
                    <TouchableOpacity style={styles.inputWithActionButton} onPress={() => setareaDetailModalEN(true)} >
                        <Ionicons name={'information-circle'} style={styles.inputWithActionIcon} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.label}>زمان: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'زمان'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.requestInfo.persianInsertedDate}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>کارشناس: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'کارشناس'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.requestInfo.expertName}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>اقدام: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'اقدام'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.requestInfo.action}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>شرح: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'شرح'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.requestInfo.description}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <View style={styles.buttonsView}>
                    <ScrollView horizontal={true} inverted={true} style={styles.buttonScrollView}>
                        <TouchableOpacity style={styles.submitButton} onPress={() => setworkflowModalEN(true)}>
                            <Ionicons style={styles.buttonIcon} name="refresh" />
                            <Text style={styles.buttonText}>گردش کار</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>)}
        </View>
    );
};


export default ReqWorkFlowInfo;