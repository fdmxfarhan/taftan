import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import BranchInfoPopup from './rec-popup-branch-info';
import styles from '../styles/reqView';

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
                <View style={styles.dualInputView}>
                    <View style={styles.dualInputPart}>
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
                    </View>
                    <View style={styles.dualInputPart}>
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
                    </View>
                </View>
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


                <View style={styles.dualInputView}>
                    <View style={styles.dualInputPart}>
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
                    </View>
                    <View style={styles.dualInputPart}>
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
                    </View>
                </View>
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
                <View style={styles.dualInputView}>
                    <View style={styles.dualInputPart}>
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
                    </View>
                    <View style={styles.dualInputPart}>
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
                    </View>
                </View>
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


export default ReqInfoView;