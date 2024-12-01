import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed

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
});

export default ReqDamageView;