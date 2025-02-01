import React, { cloneElement, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import styles from '../styles/reqView';

const ReqSiteView = ({ togglesiteInfo, siteInfo, item, requestDetail }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleView} onPress={togglesiteInfo}>
                <Text style={styles.title}>اطلاعات سرویس سایت</Text>
                <Ionicons style={styles.chevron} name={siteInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
            </TouchableOpacity>
            {siteInfo && (<View style={styles.content}>
                <Text style={styles.label}>نام سایت: </Text>
                <TextInput
                    style={[styles.textInput]}
                    placeholder={'نام سایت'}
                    placeholderTextColor={colors.text}
                    // onSubmitEditing={()=>passwordInput.current.focus()}
                    multiline={true}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    // value={requestDetail.siteInfo.sourceAreaName}
                    editable={false}
                // onChange={(text) => {
                //     console.log('hello')
                // }}
                />
            </View>)}
        </View>
    );
};


export default ReqSiteView;