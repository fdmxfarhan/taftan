// components/NavBar.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ToastAndroid, Image, Platform, Modal, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import { loadDeviceConfigList } from '../services/device-load-config-list';
import DropDownObj from './dropdown-obj';
import CheckBox from './checkbox';
import styles from '../styles/reqView';
import DocumentPicker from 'react-native-document-picker';
import { uploadFile } from '../services/upload';
import { CircularProgress } from 'react-native-circular-progress';

const ReportUploadView = ({ 
    setIsValid, 
    reportDescription, 
    setreportDescription, 
    reportExpertDescription, 
    setreportExpertDescription,
    setuploadfilename,
    setuploadimagefilename }) => {
    const [selectedReportImage, setSelectedReportImage] = useState(null);
    const [selectedAttachmentImage, setSelectedAttachmentImage] = useState(null);
    const [fullScreenImage, setFullScreenImage] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [reportUploadProgress, setReportUploadProgress] = useState(0);
    const [attachmentUploadProgress, setAttachmentUploadProgress] = useState(0);
    const [isReportUploading, setIsReportUploading] = useState(false);
    const [isAttachmentUploading, setIsAttachmentUploading] = useState(false);

    useEffect(() => {
        // Check if all required fields are filled
        const isFormValid = reportDescription.trim() !== '' && 
                          reportExpertDescription.trim() !== '' && 
                          selectedReportImage !== null;
        setIsValid(isFormValid);
    }, [reportDescription, reportExpertDescription, selectedReportImage]);

    const handleReportFilePicker = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setSelectedReportImage(res[0].uri);
            setIsValid(true);
            setIsReportUploading(true);
            setReportUploadProgress(0);
            
            // Prepare the file object for upload
            const file = {
                uri: res[0].uri,
                type: res[0].type || 'image/jpeg',
                name: res[0].name
            };
            const endpoint = '/ReportController/UploadFile';
            const onUploadProgress = (progressEvent) => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setReportUploadProgress(percentCompleted);
                console.log(`Upload progress: ${percentCompleted}%`);
            };
            const uploadResponse = await uploadFile(endpoint, file, onUploadProgress);
            console.log('Upload successful:', uploadResponse);
            setuploadfilename(uploadResponse);
            setIsReportUploading(false);
            ToastAndroid.show('فایل با موفقیت آپلود شد.', ToastAndroid.SHORT);
        } catch (err) {
            setIsReportUploading(false);
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled file picker');
            } else {
                ToastAndroid.show('خطایی رخ داده است.', ToastAndroid.SHORT);
                console.error('Error picking file:', err);
            }
        }
    };
    const handleAttachmentFilePicker = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setSelectedAttachmentImage(res[0].uri);
            setIsAttachmentUploading(true);
            setAttachmentUploadProgress(0);

            // Prepare the file object for upload
            const file = {
                uri: res[0].uri,
                type: res[0].type || 'image/jpeg',
                name: res[0].name
            };
            const endpoint = '/ReportController/UploadFile';
            const onUploadProgress = (progressEvent) => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setAttachmentUploadProgress(percentCompleted);
                console.log(`Upload progress: ${percentCompleted}%`);
            };
            const uploadResponse = await uploadFile(endpoint, file, onUploadProgress);
            console.log('Upload successful:', uploadResponse);
            setuploadimagefilename(uploadResponse);
            setIsAttachmentUploading(false);
            ToastAndroid.show('فایل با موفقیت آپلود شد.', ToastAndroid.SHORT);
        } catch (err) {
            setIsAttachmentUploading(false);
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled file picker');
            } else {
                ToastAndroid.show('خطایی رخ داده است.', ToastAndroid.SHORT);
                console.error('Error picking file:', err);
            }
        }
    };

    const handleImagePress = (imageUri) => {
        setFullScreenImage(imageUri);
        setIsModalVisible(true);
    };

    return (
        <ScrollView style={styleslocal.contents}>
            <Text style={styleslocal.sectionTitle}>توضیحات:</Text>

            <Text style={styles.label}>توضیحات کارشناس: <Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput
                style={[styles.description, { height: 100 }]}
                multiline={true}
                placeholder="توضیحات کارشناس"
                keyboardType={'default'}
                value={reportDescription}
                onChange={text => setreportDescription(text.nativeEvent.text)}
            />
            <Text style={styles.label}>توضیحات نماینده مشتری: <Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput
                style={[styles.description, { height: 100 }]}
                multiline={true}
                placeholder="توضیحات نماینده مشتری"
                keyboardType={'default'}
                value={reportExpertDescription}
                onChange={text => setreportExpertDescription(text.nativeEvent.text)}
            />
            <Text style={styleslocal.sectionTitle}>آپلود مدارک:</Text>
            <View style={styles.buttonsView}>
                <ScrollView horizontal={true} inverted={true} style={styles.buttonScrollView}>
                    <TouchableOpacity style={styles.submitButton} onPress={() => { handleReportFilePicker(); }}>
                        <Ionicons style={styles.buttonIcon} name="attach" />
                        <Text style={styles.buttonText}>تصویر گزارش کار <Text style={{ color: 'red', paddingRight: 10 }}>*</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitButton} onPress={() => { handleAttachmentFilePicker(); }}>
                        <Ionicons style={styles.buttonIcon} name="attach" />
                        <Text style={styles.buttonText}>فایل ضمیمه</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styleslocal.imagesView}>
                {selectedReportImage != null && (
                    <View>
                        <TouchableOpacity onPress={() => handleImagePress(selectedReportImage)}>
                            <Image source={{ uri: selectedReportImage }} style={styleslocal.image} />
                        </TouchableOpacity>
                        {isReportUploading && (
                            <View style={styleslocal.progressContainer}>
                                <CircularProgress
                                    size={50}
                                    width={5}
                                    fill={reportUploadProgress}
                                    tintColor={colors.emerald}
                                    backgroundColor={colors.lightGray}
                                >
                                    {() => (
                                        <Text style={styleslocal.progressText}>{reportUploadProgress}%</Text>
                                    )}
                                </CircularProgress>
                            </View>
                        )}
                    </View>
                )}
                {selectedAttachmentImage != null && (
                    <View>
                        <TouchableOpacity onPress={() => handleImagePress(selectedAttachmentImage)}>
                            <Image source={{ uri: selectedAttachmentImage }} style={styleslocal.image} />
                        </TouchableOpacity>
                        {isAttachmentUploading && (
                            <View style={styleslocal.progressContainer}>
                                <CircularProgress
                                    size={50}
                                    width={5}
                                    fill={attachmentUploadProgress}
                                    tintColor={colors.emerald}
                                    backgroundColor={colors.lightGray}
                                >
                                    {() => (
                                        <Text style={styleslocal.progressText}>{attachmentUploadProgress}%</Text>
                                    )}
                                </CircularProgress>
                            </View>
                        )}
                    </View>
                )}
            </View>

            <Modal
                visible={isModalVisible}
                transparent={true}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <TouchableOpacity 
                    style={styleslocal.modalContainer}
                    activeOpacity={1}
                    onPress={() => setIsModalVisible(false)}
                >
                    <Image 
                        source={{ uri: fullScreenImage }} 
                        style={styleslocal.fullScreenImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </Modal>
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
        marginHorizontal: 10,
    },
    imagesView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullScreenImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    progressContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -25 }, { translateY: -25 }],
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 25,
        padding: 5,
    },
    progressText: {
        fontSize: 12,
        fontFamily: 'iransans',
        color: colors.black,
    },
});

export default ReportUploadView;