// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import { loadDeviceConfigList } from '../services/device-load-config-list';
import DropDownObj from './dropdown-obj';
import CheckBox from './checkbox';
import styles from '../styles/reqView';
import DocumentPicker from 'react-native-document-picker';
import { uploadFile } from '../services/upload';

const ReportUploadView = ({ }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleFilePicker = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            console.log(res[0]);
            setSelectedImage(res[0].uri);

            // Prepare the file object for upload
            const file = {
                uri: res[0].uri,
                type: res[0].type || 'image/jpeg', // Default to JPEG if type is not available
            };
            const endpoint = '/ReportController/UploadFile';
            const onUploadProgress = (progressEvent) => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                console.log(`Upload progress: ${percentCompleted}%`);
            };
            const uploadResponse = await uploadFile(endpoint, file, onUploadProgress);
            console.log('Upload successful:', uploadResponse);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled file picker');
            } else {
                ToastAndroid.show('خطایی رخ داده است.', ToastAndroid.SHORT);
                console.error('Error picking file:', err);
            }
        }
    };
    return (
        <ScrollView style={styleslocal.contents}>
            <Text style={styleslocal.sectionTitle}>توضیحات:</Text>

            <Text style={styles.label}>توضیحات کارشناس: </Text>
            <TextInput
                style={[styles.description, { height: 100 }]}
                multiline={true}
                placeholder="توضیحات کارشناس"
                keyboardType={'default'}
            // value={descriptionAction}
            // onChange={text => setdescriptionAction(text.nativeEvent.text)}
            />
            <Text style={styles.label}>توضیحات نماینده مشتری: </Text>
            <TextInput
                style={[styles.description, { height: 100 }]}
                multiline={true}
                placeholder="توضیحات نماینده مشتری"
                keyboardType={'default'}
            // value={descriptionAction}
            // onChange={text => setdescriptionAction(text.nativeEvent.text)}
            />
            <Text style={styleslocal.sectionTitle}>آپلود مدارک:</Text>
            <View style={styles.buttonsView}>
                <ScrollView horizontal={true} inverted={true} style={styles.buttonScrollView}>
                    <TouchableOpacity style={styles.submitButton} onPress={() => { handleFilePicker(); }}>
                        <Ionicons style={styles.buttonIcon} name="attach" />
                        <Text style={styles.buttonText}>تصویر گزارش کار</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitButton} onPress={() => { handleFilePicker(); }}>
                        <Ionicons style={styles.buttonIcon} name="attach" />
                        <Text style={styles.buttonText}>فایل ضمیمه</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            {selectedImage != null && (
                <Image source={{ uri: selectedImage }} style={styleslocal.image} />
            )}
            <View style={{ height: 150, }} />
        </ScrollView>
    );
};

const styleslocal = StyleSheet.create({
    contents: {
        width: '100%',
        backgroundColor: colors.white,
    },
    sectionTitle: {
        fontFamily: 'iransansbold',
        fontSize: 12,
        width: '85%',
        marginHorizontal: 'auto',
        marginTop: 10,
        color: colors.black,
    },
    checkboxView: {
        flexDirection: 'row-reverse',
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: 10,
    },
    checkboxIcon: {
        marginLeft: 10,
        paddingTop: 3,
        fontSize: 18,
    },
    checkboxText: {
        fontFamily: 'iransans',
        fontSize: 13,
    },
    nextTabButton: {
        backgroundColor: colors.blue,
        width: '90%',
        marginBottom: 10,
        marginHorizontal: 'auto',
        borderRadius: 7,
        paddingVertical: 10,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
    },
    nextTabButtonText: {
        color: colors.white,
        fontFamily: 'iransansbold',
        fontSize: 14,
        textAlign: 'center',
    },
    nextTabButtonIcon: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingRight: 10,
    },
    checkbox: {
        // width: '60%',
        marginTop: 5,
    },
    submitButton: {
        width: '85%',
        marginHorizontal: '7.5%',
        marginTop: 15,
        paddingVertical: 5,
        backgroundColor: colors.emerald,
        borderRadius: 5,
    },
    submitButtonText: {
        fontFamily: 'iransans',
        fontSize: 14,
        textAlign: 'center',
        color: colors.white,
    },
    uploadButton: {

    },
    uploadButtonText: {

    },
    uploadButtonIcon: {

    },
    image: {
        width: 150,
        height: 200,
        borderRadius: 10,
        marginTop: 20,
        marginHorizontal: 30,
    },
});

export default ReportUploadView;