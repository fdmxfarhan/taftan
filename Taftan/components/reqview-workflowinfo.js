import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import LastConfPopup from './rec-popup-lastconf';
import WorkFlowPopup from './rec-popup-workflow';
import AreaDetailPopup from './rec-popup-area-detail';

const ReqWorkFlowInfo = ({ toggleWorkflow, workflow, reqInfo, requestDetail, reqHistoryList, areaDetail }) => {
    var [workflowModalEN, setworkflowModalEN] = useState(false);
    var [areaDetailModalEN, setareaDetailModalEN] = useState(false);
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    return (
        <View style={styles.container}>
            <WorkFlowPopup reqHistoryList={reqHistoryList} modalEnable={workflowModalEN} setmodalEnable={setworkflowModalEN} reqInfo={reqInfo} />
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
                    value={reqInfo.persianLastState}
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
                        value={reqInfo.areaName}
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
                    value={reqInfo.persianInsertedDate}
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
                    value={reqInfo.expertName}
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

const styles = StyleSheet.create({
    content: {
        backgroundColor: colors.white,
        paddingVertical: 15,
    },
    titleView: {
        color: colors.dark,
        paddingHorizontal: '10%',
        marginTop: 20,
        position: 'relative',
        borderBottomColor: colors.lightblue,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    title: {
        fontFamily: 'iransansbold',
        fontSize: 16,
        color: colors.dark,
    },
    chevron: {
        position: 'absolute',
        top: 0,
        left: 30,
        fontSize: 18,
    },
    label: {
        color: colors.text,
        fontSize: 13,
        marginTop: 10,
        marginBottom: 5,
        width: '85%',
        margin: 'auto',
        fontFamily: 'iransansbold',
    },
    textInput: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '85%',
        margin: 'auto',
        fontFamily: 'iransans',
        fontSize: 13,
        backgroundColor: colors.white,
        borderRadius: 8,
        textAlign: 'right',
        direction: 'rtl',
        paddingVertical: 4,
        paddingHorizontal: 15,
        color: colors.text,
    },
    textArea: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '85%',
        margin: 'auto',
        fontFamily: 'iransans',
        fontSize: 13,
        backgroundColor: colors.white,
        borderRadius: 8,
        textAlign: 'right',
        direction: 'rtl',
        paddingVertical: 4,
        paddingHorizontal: 15,
    },
    buttonsView: {
        flexDirection: 'row-reverse',
        width: '90%',
        margin: 'auto',
    },
    submitButton: {
        backgroundColor: colors.blue,
        paddingHorizontal: 20,
        paddingVertical: 13,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 5,
        textAlign: 'center',
        flexDirection: 'row-reverse',
        direction: 'rtl',
    },
    buttonIcon: {
        color: colors.white,
        textAlign: 'center',
        paddingLeft: 10,
        fontSize: 16,
    },
    buttonText: {
        color: colors.white,
        fontSize: 13,
    },
    buttonScrollView: {
        direction: 'rtl',
        textAlign: 'right',
    },
    inputWithActionView: {
        flexDirection: 'row-reverse'
    },
    inputWithActionInput: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '73%',
        marginRight: '7.5%',
        fontFamily: 'iransans',
        fontSize: 13,
        backgroundColor: colors.white,
        borderRadius: 8,
        textAlign: 'right',
        direction: 'rtl',
        paddingVertical: 4,
        paddingHorizontal: 15,
        color: colors.text,
    },
    inputWithActionButton: {
        width: '10%',
        marginRight: '2%',
        backgroundColor: colors.blue,
        borderRadius: 8,
    },
    inputWithActionIcon: {
        textAlign: 'center',
        marginVertical: 'auto',
        color: colors.white,
        fontSize: 20,
    },
});

export default ReqWorkFlowInfo;