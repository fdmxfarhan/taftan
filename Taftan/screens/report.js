import React, { useEffect, useState } from 'react';
import { Image, PermissionsAndroid, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, useColorScheme, View, TextInput, LayoutAnimation, UIManager, ActivityIndicator, ToastAndroid } from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import NavBar from '../components/navbar';
import LoadingView from '../components/loading';
import { GetCurrentDate } from '../services/config-get-date';
import { GetCustomersTitleList } from '../services/customer-get-titles-list';
import DropDownObj from '../components/dropdown-obj';
import { GetBranchListByCustomerId } from '../services/get-branch-list-by-customer-id';
import { getDeviceListForInsertRequest } from '../services/get-device-list-for-insert-req';
import { loadAreaForSLList } from '../services/load-area-for-SLList';
import { GetServiceTitleListByGrupId_DeviceType } from '../services/get-service-title-list';
import { GetRecognitionExpertByDeviceTypeId } from '../services/get-recognition-expert';
import ReportTabLink from '../components/report-tabLinks';
import { GetJobTitleByReportTypeId } from '../services/get-job-title-list';
import ReportInfo from '../components/report-info';
import ReportRecognition from '../components/report-recognize';
import ReportActions from '../components/report-Actions';

const Report = (props) => {
    var reqInfo = props.route.params.item;
    var requestDetail = props.route.params.requestDetail;
    var [isLoading, setIsLoading] = useState(true);
    var [damageReason, setdamageReason] = useState('نوع خرابی');
    var [recognitionExpert, setrecognitionExpert] = useState('تشخیص سطح دوم');
    var [description, setdescription] = useState(0);
    var [descriptionAction, setdescriptionAction] = useState(0);
    var [tabItem, setTabItem] = useState('Info');
    var [jobTitle, setjobTitle] = useState('نوع خرابی');
    var [garantieConflict, setgarantieConflict] = useState(true);


    var [damageReasonsList, setdamageReasonsList] = useState([]);
    var [recognitionExpertList, setrecognitionExpertList] = useState([]);
    var [JobTitleList, setJobTitleList] = useState([]);

    const handleSearchPress = () => {
        props.navigation.goBack();
    };
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    useEffect(() => {
        const sendRequest = async () => {
            var result = await GetServiceTitleListByGrupId_DeviceType(29, 1);
            setdamageReasonsList(result.data);
            result = await GetRecognitionExpertByDeviceTypeId(29, 64);
            setrecognitionExpertList(result.data);
            result = await GetJobTitleByReportTypeId(29);
            setJobTitleList(result.data);
            setIsLoading(false);
        }
        sendRequest();
    }, [])
    return (
        <View style={styles.container}>
            <LoadingView isLoading={isLoading} text={'در حال بارگیری...'} />
            <NavBar rightCallback={() => { props.navigation.navigate('Home') }} leftCallback={() => props.navigation.goBack()} title="گزارش کار" leftIcon="arrow-back" rightIcon="home" />
            <ReportTabLink tabItemVar={tabItem} setTabItemCallback={setTabItem} />
            {tabItem == 'Info' && (
                <View style={{flex: 1,}}>
                    <ReportInfo />
                    <View>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('Recognition')}>
                            <Text style={styles.nextTabButtonText}>بعدی</Text>
                            <Ionicons name={'arrow-back'} style={styles.nextTabButtonIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {tabItem == 'Recognition' && (
                <View style={{flex: 1,}}>
                    <ReportRecognition damageReasonsList={damageReasonsList} damageReason={damageReason} setdamageReason={setdamageReason} recognitionExpertList={recognitionExpertList} recognitionExpert={recognitionExpert} setrecognitionExpert={setrecognitionExpert} description={description} setdescription={setdescription}  />
                    <View>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('Actions')}>
                            <Text style={styles.nextTabButtonText}>بعدی</Text>
                            <Ionicons name={'arrow-back'} style={styles.nextTabButtonIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {tabItem == 'Actions' && (
                <View style={{flex: 1,}}>
                    <ReportActions JobTitleList={JobTitleList} setjobTitle={setjobTitle} jobTitle={jobTitle} descriptionAction={descriptionAction} setdescriptionAction={setdescriptionAction} />
                    <View>
                        <TouchableOpacity style={styles.nextTabButton} onPress={() => setTabItem('Components')}>
                            <Text style={styles.nextTabButtonText}>بعدی</Text>
                            <Ionicons name={'arrow-back'} style={styles.nextTabButtonIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {tabItem == 'Components' && (
                <ScrollView style={styles.contents}>
                    <Text style={styles.sectionTitle}>اطلاعات قطعات:</Text>
                    <TouchableOpacity style={styles.checkboxView} onPress={() => setgarantieConflict(!garantieConflict)}>
                        <Ionicons style={[styles.checkboxIcon, { color: garantieConflict ? colors.blue : colors.gray }]} name={garantieConflict ? 'checkbox' : 'checkbox-outline'} />
                        <Text style={styles.checkboxText}>سرویس شامل نقض گارانتی است</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.checkboxView} onPress={() => setgarantieConflict(!garantieConflict)}>
                        <Ionicons style={[styles.checkboxIcon, { color: garantieConflict ? colors.blue : colors.gray }]} name={garantieConflict ? 'checkbox' : 'checkbox-outline'} />
                        <Text style={styles.checkboxText}>عملیات نرم افزاری</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.checkboxView} onPress={() => setgarantieConflict(!garantieConflict)}>
                        <Ionicons style={[styles.checkboxIcon, { color: garantieConflict ? colors.blue : colors.gray }]} name={garantieConflict ? 'checkbox' : 'checkbox-outline'} />
                        <Text style={styles.checkboxText}>سرویس و تعمیر</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.checkboxView} onPress={() => setgarantieConflict(!garantieConflict)}>
                        <Ionicons style={[styles.checkboxIcon, { color: garantieConflict ? colors.blue : colors.gray }]} name={garantieConflict ? 'checkbox' : 'checkbox-outline'} />
                        <Text style={styles.checkboxText}>تعویض ماژول</Text>
                    </TouchableOpacity>
                </ScrollView>
            )}
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: colors.lightBackground,
        paddingBottom: 5,
    },
    contents: {
        width: '100%',
        backgroundColor: colors.lightBackground,
    },
    content: {
        backgroundColor: colors.white,
        paddingVertical: 15,
    },
    sectionTitle: {
        fontFamily: 'iransansbold',
        fontSize: 12,
        width: '85%',
        marginHorizontal: 'auto',
        marginTop: 10,
        color: colors.black,
    },
    label: {
        color: colors.text,
        fontSize: 11,
        marginTop: 5,
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
        paddingVertical: 2,
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
    dropdown: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 7,
        width: '85%',
        marginHorizontal: '7.5%',
        alignContent: 'center',
        alignItems: 'center',
    },
    dropdownText: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        textAlign: 'center',
        width: '100%',
        fontFamily: 'iransans',
        fontSize: 14,
    },
    dropdownContainer: {
        padding: 0,
    },
    submitButtonsView: {
        width: '100%',
        flexDirection: 'row-reverse',
        marginTop: 25,
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
});

export default Report;