import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import BranchInfoPopup from './rec-popup-branch-info';

const ReqInfoView = ({ toggleReqinfoEN, reqinfoEN, item, requestDetail, branchInfo }) => {
    var [branchInfoModalEnable, setbranchInfoModalEnable] = useState(false);
    return (
        <View style={styles.container}>
            <BranchInfoPopup modalEnable={branchInfoModalEnable} setmodalEnable={setbranchInfoModalEnable} branchInfo={branchInfo} />
            <TouchableOpacity style={styles.titleView} onPress={toggleReqinfoEN}>
                <Text style={styles.title}>اطلاعات درخواست</Text>
                <Ionicons style={styles.chevron} name={reqinfoEN == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
            </TouchableOpacity>
            {reqinfoEN && (<View style={styles.content}>
                <Text style={styles.label}>شماره کار: </Text>
                <TextInput
                    multiline={true}
                    style={[styles.textInput]}
                    placeholder={'شماره کار'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={item.requestId.toString()}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>مشتری: </Text>
                <TextInput
                    multiline={true}
                    style={[styles.textInput]}
                    placeholder={'مشتری'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={item.customerName}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>کاربر درخواست کننده: </Text>
                <TextInput
                    multiline={true}
                    style={[styles.textInput]}
                    placeholder={'کاربر درخواست کننده'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={item.customerInsertName}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>تاریخ شروع: </Text>
                <TextInput
                    multiline={true}
                    style={[styles.textInput]}
                    placeholder={'تاریخ شروع'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.requestInfo.persianStartDate}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>مهلت انجام کار: </Text>
                <TextInput
                    multiline={true}
                    style={[styles.textInput]}
                    placeholder={'مهلت انجام کار'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={(item.requestDeadLine / 3600) + ' ساعت'}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>تکرار خرابی: </Text>
                <TextInput
                    multiline={true}
                    style={[styles.textInput]}
                    placeholder={'تکرار خرابی'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'number-pad'}
                    value={'-'}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>سرویس: </Text>
                <TextInput
                    multiline={true}
                    style={[styles.textInput]}
                    placeholder={'سرویس'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={item.serviceName}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>شعبه: </Text>
                <View style={styles.inputWithActionView}>
                    <TextInput
                        multiline={true}
                        style={[styles.inputWithActionInput]}
                        placeholder={'شعبه'}
                        placeholderTextColor={colors.text}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={item.branchName}
                        editable={false}
                    />
                    <TouchableOpacity style={styles.inputWithActionButton} onPress={() => setbranchInfoModalEnable(true)} >
                        <Ionicons name={'information-circle'} style={styles.inputWithActionIcon} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>تاریخ ثبت: </Text>
                <TextInput
                    multiline={true}
                    style={[styles.textInput]}
                    placeholder={'تاریخ ثبت'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={item.persianInsertedDate}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>تاریخ پایان: </Text>
                <TextInput
                    multiline={true}
                    style={[styles.textInput]}
                    placeholder={'تاریخ پایان'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.requestInfo.persianEndDate}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>علت تاخیر: </Text>
                <TextInput
                    multiline={true}
                    style={[styles.textInput]}
                    placeholder={'علت تاخیر'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    editable={false}
                    value={'-'}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
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

export default ReqInfoView;