import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Linking, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import styles from '../styles/reqView';

const ReqProjectView = ({ toggleprojectInfo, projectInfo, requestDetail }) => {
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
            <TouchableOpacity style={styles.titleView} onPress={toggleprojectInfo}>
                <Text style={styles.title}>اطلاعات سرویس پروژه</Text>
                <Ionicons style={styles.chevron} name={projectInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
            </TouchableOpacity>
            {projectInfo && (<View style={styles.content}>
                <View style={styles.dualInputView}>
                    <View style={styles.dualInputPart}>
                        <Text style={styles.label}>تاریخ شروع: </Text>
                        <TextInput
                            style={[styles.textInput]}
                            placeholder={'تاریخ شروع'}
                            placeholderTextColor={colors.text}
                            // onSubmitEditing={()=>passwordInput.current.focus()}
                            multiline={true}
                            returnKeyType={'next'}
                            keyboardType={'default'}
                            value={requestDetail.projectInfo.persianStartDate}
                            editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                        />
                    </View>
                    <View style={styles.dualInputPart}>
                        <Text style={styles.label}>تاریخ پایان: </Text>
                        <TextInput
                            style={[styles.textInput]}
                            placeholder={'تاریخ پایان'}
                            placeholderTextColor={colors.text}
                            // onSubmitEditing={()=>passwordInput.current.focus()}
                            multiline={true}
                            returnKeyType={'next'}
                            keyboardType={'default'}
                            value={requestDetail.projectInfo.persianEndDate}
                            editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                        />
                    </View>
                </View>
                <Text style={styles.label}>تعداد دستگاه: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'تعداد دستگاه'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.projectInfo.deviceCount}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <View style={styles.dualInputView}>
                    <View style={styles.dualInputPart}>
                        <Text style={styles.label}>مدیر پروژه: </Text>
                        <TextInput
                            style={[styles.textInput]}
                            placeholder={'مدیر پروژه'}
                            placeholderTextColor={colors.text}
                            // onSubmitEditing={()=>passwordInput.current.focus()}
                            multiline={true}
                            returnKeyType={'next'}
                            keyboardType={'default'}
                            value={requestDetail.projectInfo.projectManager}
                            editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                        />
                    </View>
                    <View style={styles.dualInputPart}>
                        <Text style={styles.label}>شعبه درخواست کننده: </Text>
                        <TextInput
                            style={[styles.textInput]}
                            placeholder={'شعبه درخواست کننده'}
                            placeholderTextColor={colors.text}
                            // onSubmitEditing={()=>passwordInput.current.focus()}
                            multiline={true}
                            returnKeyType={'next'}
                            keyboardType={'default'}
                            value={requestDetail.projectInfo.branchName}
                            editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                        />
                    </View>
                </View>
                <Text style={styles.label}>توضیحات: </Text>
                <TextInput
                    style={[styles.description]}
                    placeholder={'توضیحات'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.projectInfo.description}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <View style={styles.buttonsView}>
                    <ScrollView horizontal={true} inverted={true} style={styles.buttonScrollView}>
                        <TouchableOpacity style={styles.submitButton} onPress={() => openURL('http://10.100.52.11:8087' + requestDetail.projectInfo.routine)}>
                            <Ionicons style={styles.buttonIcon} name="download" />
                            <Text style={styles.buttonText}>روال</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitButton} onPress={() => openURL('http://10.100.52.11:8087' + requestDetail.projectInfo.instructions)}>
                            <Ionicons style={styles.buttonIcon} name="download" />
                            <Text style={styles.buttonText}>دستور العمل</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>)}
        </View>
    );
};


export default ReqProjectView;