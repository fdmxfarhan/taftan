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

const AddRequest = (props) => {
    var [isLoading, setIsLoading] = useState(true);
    var [todayDate, setTodayDate] = useState("");
    var [userApplicator, setuserApplicator] = useState("نام فرد هماهنگ کننده");
    var [phone, setphone] = useState('09123456789');
    var [description, setdescription] = useState(0);
    var [branchId, setbranchId] = useState('نام واحد سازمانی');
    var [customerId, setcustomerId] = useState('انتخاب مشتری');
    var [serviceId, setserviceId] = useState(0);
    var [areaId, setareaId] = useState('دفتر عملیاتی');
    var [customerInsertId, setcustomerInsertId] = useState(0);
    var [serviceGroupId, setserviceGroupId] = useState(0);
    var [deviceId, setdeviceId] = useState('دستگاه');

    var [scrollEnable, setscrollEnable] = useState(true);

    var [CustomersTitleList, setCustomersTitleList] = useState([]);
    var [BranchList, setBranchList] = useState([]);
    var [DeviceList, setDeviceList] = useState([]);
    var [AreaList, setAreaList] = useState([]);
    var [newRequestData, setNewRequestData] = useState({
        "id": 0,
        "deviceId": 20791,
        "serviceGroupId": 8,
        "requestId": 0,
        "customerInsertId": 0,
        "isPilot": 0,
        "areaId": 24,
        "serviceId": 73,
        "customerId": 20038,
        "branchId": 40569,
        "description": "asdf",
        "phone": 1231231231,
        "userApplicator": "علی"
    })

    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    const updateBranch = async () => {
        var result = await GetBranchListByCustomerId(customerId)
        setBranchList(result.data);
    }
    const updateBranchDetail = async () => {
        var result = await getDeviceListForInsertRequest(customerId, branchId)
        setDeviceList(result.data);
    }
    useEffect(() => {
        const sendRequest = async () => {
            var result = await GetCurrentDate();
            setTodayDate(result.data);
            result = await GetCustomersTitleList();
            setCustomersTitleList(result.data)
            result = await loadAreaForSLList();
            setAreaList(result.data)

            setIsLoading(false);
        }
        sendRequest();
    }, [])
    return (
        <View style={styles.container}>
            <LoadingView isLoading={isLoading} text={'در حال بارگیری...'} />
            <NavBar rightCallback={() => { }} leftCallback={() => { }} title="ثبت درخواست جدید" leftIcon="arrow-back" rightIcon="home" />
            <View style={styles.contents}>
                <Text style={styles.label}>تاریخ: </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="تاریخ"
                    keyboardType={'default'}
                    value={todayDate}
                    onChange={text => setTodayDate(text.nativeEvent.text)}
                />
                <Text style={styles.label}>نام مشتری: </Text>
                <DropDownObj
                    list={CustomersTitleList}
                    getLabel={(item) => item.title}
                    getValue={(item) => item.id}
                    setValue={(id) => {
                        customerId = id;
                        setcustomerId(id);
                        updateBranch();
                    }}
                    value={customerId}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownText}
                    onSubmit={(val) => { }} />
                <Text style={styles.label}>نام واحد سازمانی: </Text>
                <DropDownObj
                    list={BranchList}
                    getLabel={(item) => item.Title + ' - ' + item.BranchCode}
                    getValue={(item) => item.id}
                    setValue={(id) => {
                        branchId = id;
                        setbranchId(id);
                        updateBranchDetail();
                    }}
                    value={branchId}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownText}
                    onSubmit={(val) => { }} />
                <Text style={styles.label}>دستگاه: </Text>
                <DropDownObj
                    list={DeviceList}
                    getLabel={(item) => item.branchName}
                    getValue={(item) => item.deviceId}
                    setValue={(id) => {
                        deviceId = id;
                        setdeviceId(id);
                        updateBranchDetail();
                    }}
                    value={deviceId}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownText}
                    onSubmit={(val) => { }} />
                <Text style={styles.label}>دفتر عملیاتی: </Text>
                <DropDownObj
                    list={AreaList}
                    getLabel={(item) => item.title}
                    getValue={(item) => item.id}
                    setValue={(id) => {
                        areaId = id;
                        setareaId(id);
                    }}
                    value={areaId}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownText}
                    onSubmit={(val) => { }} />
                <Text style={styles.label}>انتخاب گروه سرویس: </Text>
                <DropDownObj
                    list={['رفع خرابی', 'خدمات ویژه']}
                    getLabel={(item) => item}
                    getValue={(item) => item}
                    setValue={(id) => {
                        serviceGroupId = id;
                        setserviceGroupId(id);
                    }}
                    value={serviceGroupId}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownText}
                    onSubmit={(val) => { }} />
                <Text style={styles.label}>انتخاب زیر سرویس: </Text>
                <DropDownObj
                    list={['رفع خرابی', 'خدمات ویژه']}
                    getLabel={(item) => item}
                    getValue={(item) => item}
                    setValue={(id) => {
                        serviceId = id;
                        setserviceId(id);
                    }}
                    value={serviceId}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.dropdownText}
                    onSubmit={(val) => { }} />
                <Text style={styles.label}>نام فرد هماهنگ کننده: </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="نام فرد هماهنگ کننده"
                    keyboardType={'default'}
                    value={userApplicator}
                    onChange={text => setuserApplicator(text.nativeEvent.text)}
                />
                <Text style={styles.label}>شماره تماس: </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="شماره تماس"
                    keyboardType={'default'}
                    value={phone}
                    onChange={text => setphone(text.nativeEvent.text)}
                />
                <Text style={styles.label}>توضیحات: </Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="توضیحات"
                    keyboardType={'default'}
                    value={description}
                    onChange={text => setdescription(text.nativeEvent.text)}
                />
                <TouchableOpacity style={styles.submitButton} >
                    <Text style={styles.submitButtonText}>ثبت درخواست</Text>
                </TouchableOpacity>


            </View>
        </View>
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
        alignItems: 'flex-start',
        alignContent: 'flex-start',
    },
    content: {
        backgroundColor: colors.white,
        paddingVertical: 15,
    },
    label: {
        color: colors.text,
        fontSize: 11,
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
        marginTop: 30,
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

});

export default AddRequest;