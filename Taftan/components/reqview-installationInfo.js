import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import styles from '../styles/reqView';

const ReqInstallationView = ({ toggleinstallInfo, installInfo, item, requestDetail }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleView} onPress={toggleinstallInfo}>
                <Text style={styles.title}>اطلاعات سرویس نصب</Text>
                <Ionicons style={styles.chevron} name={installInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
            </TouchableOpacity>
            {installInfo && (<View style={styles.content}>
                <Text style={styles.installLabel}>دفتر مبدأ: </Text>
                <Text style={styles.label}>نام دفتر: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'نام دفتر'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.installInfo.sourceAreaName}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>نام: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'نام'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.installInfo.sourceTitle}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>شماره تماس: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'شماره تماس'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.installInfo.sourcePhone}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>توضیحات: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'توضیحات'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.installInfo.sourceDescription}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>آدرس مبدا: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'آدرس مبدا'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.installInfo.sourceAddress}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.installLabel}>دفتر مقصد: </Text>
                <Text style={styles.label}>نام دفتر: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'نام دفتر'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.installInfo.destinationaAreaName}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>نام: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'نام'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.installInfo.destinationTitle}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>شماره تماس: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'شماره تماس'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.installInfo.destinationPhone}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>توضیحات: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'توضیحات'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.installInfo.destinationDescription}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>آدرس مقصد: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'آدرس مقصد'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.installInfo.destinationAddress}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.installLabel}>مبدا درخواست: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'مبدا درخواست'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.installInfo.sourceRequest}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
            </View>)}
        </View>
    );
};


export default ReqInstallationView;