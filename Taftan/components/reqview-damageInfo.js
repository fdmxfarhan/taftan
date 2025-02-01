import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import styles from '../styles/reqView';

const ReqDamageView = ({ toggleDamageInfo, damageInfo, item, requestDetail }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleView} onPress={toggleDamageInfo}>
                <Text style={styles.title}>اطلاعات سرویس خرابی</Text>
                <Ionicons style={styles.chevron} name={damageInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
            </TouchableOpacity>
            {damageInfo && (<View style={styles.content}>
                <Text style={styles.label}>نام فرد هماهنگ کننده: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'هماهنگ کننده'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={requestDetail.damageInfo.userApplicator}
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
                    value={requestDetail.damageInfo.phone}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
                <Text style={styles.label}>توضیحات: </Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="توضیحات"
                    multiline={true}
                    numberOfLines={5}
                    value={requestDetail.damageInfo.description}
                    keyboardType={'default'}
                    editable={false}
                // onChangeText={text => setDescription(text)}
                />
            </View>)}
        </View>
    );
};


export default ReqDamageView;