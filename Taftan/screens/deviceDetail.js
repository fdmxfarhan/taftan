import React, { useEffect, useState } from 'react';
import {
    Image,
    PermissionsAndroid,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    useColorScheme,
    View,
    TextInput,
    LayoutAnimation,
    UIManager,
    ActivityIndicator,
    ToastAndroid,
} from 'react-native';
import colors from '../components/colors';
import NavBar from '../components/navbar';
import LoadingView from '../components/loading';
import { GetDeviceDetail } from '../services/device-detail';
import SideMenu from '../components/SideMenu';
import MapView from '../components/map-view';
import DropDownObj from '../components/dropdown-obj';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import { GetCustomersTitleList } from '../services/customer-get-titles-list';
import { GetBranchListByCustomerId } from '../services/get-branch-list-by-customer-id';
import { GetBranchDetail } from '../services/branch-get-detail';

const DeviceDetailView = (props) => {
    var deviceInfo = props.route.params.item;
    var [menuVisible, setMenuVisible] = useState(false);
    var [isLoading, setIsLoading] = useState(true);
    var [deviceDetail, setdeviceDetail] = useState([]);
    var [testVal, setTestVal] = useState('-');
    var [customersList, setcustomersList] = useState('-');
    var [branchList, setbranchList] = useState('-');
    var [customerName, setcustomerName] = useState('');
    var [deviceBranchName, setdeviceBranchName] = useState('');
    var [branchDetail, setbranchDetail] = useState({});
    var testList = [{ label: 'label1' }, { label: 'label2' }, { label: 'label3' }, { label: 'label4' }, { label: 'label5' }, { label: 'label6' }, { label: 'label7' }, { label: 'label8' }, { label: 'label9' }, { label: 'label10' },]

    const handleSearchPress = () => props.navigation.goBack();
    const toggleMenu = () => setMenuVisible(!menuVisible);
    const sendRequest = async () => {
        var result = await GetDeviceDetail(deviceInfo.id);
        if (result.success) {
            deviceDetail = result.data;
            setcustomerName(deviceDetail.customerName);
            setdeviceBranchName(`${deviceDetail.deviceBranchName} - ${deviceDetail.branchCode}`)
            setdeviceDetail(deviceDetail);
        } else ToastAndroid.show('اطلاعات دستگاه یافت نشد.', ToastAndroid.SHORT);
        result = await GetCustomersTitleList();
        if (result.success) {
            setcustomersList(result.data)
        } else ToastAndroid.show('لیست مشتریان یافت نشد.', ToastAndroid.SHORT);
        result = await GetBranchListByCustomerId(deviceDetail.customerId);
        if (result.success) {
            setbranchList(result.data)
        } else ToastAndroid.show('لیست مشتریان یافت نشد.', ToastAndroid.SHORT);
        result = await GetBranchDetail(deviceDetail.branchId);
        if (result.success) {
            setbranchDetail(result.data)
        } else ToastAndroid.show('لیست مشتریان یافت نشد.', ToastAndroid.SHORT);
        setIsLoading(false);
    }
    useEffect(() => {
        sendRequest();
    }, [])
    return (
        <View style={styles.container}>
            <LoadingView isLoading={isLoading} text={'در حال بارگیری...'} />
            <NavBar rightCallback={toggleMenu} leftCallback={handleSearchPress} title="ویرایش دستگاه" leftIcon="arrow-back" rightIcon="menu" />
            <SideMenu isVisible={menuVisible} onClose={toggleMenu} navigation={props.navigation} />
            <ScrollView style={styles.content} nestedScrollEnabled={false} keyboardShouldPersistTaps="handled">
                <MapView longitude={deviceDetail.strLongitude} latitude={deviceDetail.strLatitude} />
                <View style={styles.twoSideView}>
                    <View style={styles.part}>
                        <Text style={styles.label}>مشتری</Text>
                        <DropDownObj list={customersList} getLabel={(item) => item.title} setValue={(item) => setcustomerName(item.title)} value={customerName} buttonStyle={styles.dropdown} buttonTextStyle={styles.dropdownText} />
                    </View>
                    <View style={styles.part}>
                        <Text style={styles.label}>واحد سازمانی</Text>
                        <DropDownObj list={branchList} getLabel={(item) => `${item.Title} - ${item.BranchCode}`} setValue={(item) => { setdeviceBranchName(`${item.Title} - ${item.BranchCode}`); }} value={deviceBranchName} buttonStyle={styles.dropdown} buttonTextStyle={styles.dropdownText} />
                    </View>
                </View>
                <View style={styles.breakline} />
                <View style={styles.twoSideView}>
                    <View style={styles.part}>
                        <Text style={styles.label}>نام دستگاه</Text>
                        <TextInput style={styles.textinput} placeholder="نام دستگاه" value={deviceDetail.deviceName} onChange={(text) => { setTestVal(text.nativeEvent.text) }} />
                    </View>
                    <View style={styles.part}>
                        <Text style={styles.label}>ترمینال</Text>
                        <TextInput style={styles.textinput} placeholder="ترمینال" value={deviceDetail.deviceTerminal} onChange={(text) => { setTestVal(text.nativeEvent.text) }} />
                    </View>
                </View>
                <View style={styles.twoSideView}>
                    <View style={styles.part}>
                        <Text style={styles.label}>شماره سریال</Text>
                        <TextInput style={styles.textinput} placeholder="شماره سریال" value={deviceDetail.deviceSerial} onChange={(text) => { setTestVal(text.nativeEvent.text) }} />
                    </View>
                    <View style={styles.part}>
                        <Text style={styles.label}>شماره اموال</Text>
                        <TextInput style={styles.textinput} placeholder="شماره اموال" value={deviceDetail.deviceHWId} onChange={(text) => { setTestVal(text.nativeEvent.text) }} />
                    </View>
                </View>
                <View style={styles.twoSideView}>
                    <View style={styles.part}>
                        <Text style={styles.label}>برند</Text>
                        <DropDownObj list={testList} getLabel={(item) => item.label} setValue={(item) => { setTestVal(item.label); }} value={deviceDetail.deviceBrandName} buttonStyle={styles.dropdown} buttonTextStyle={styles.dropdownText} />
                    </View>
                    <View style={styles.part}>
                        <Text style={styles.label}>گروه تجهیز</Text>
                        <DropDownObj list={testList} getLabel={(item) => item.label} setValue={(item) => { setTestVal(item.label); }} value={deviceDetail.deviceType} buttonStyle={styles.dropdown} buttonTextStyle={styles.dropdownText} />
                    </View>
                </View>
                <View style={styles.twoSideView}>
                    <View style={styles.part}>
                        <Text style={styles.label}>مدل تجهیز</Text>
                        <DropDownObj list={testList} getLabel={(item) => item.label} setValue={(item) => { setTestVal(item.label); }} value={deviceDetail.deviceModelTitle} buttonStyle={styles.dropdown} buttonTextStyle={styles.dropdownText} />
                    </View>
                    <View style={styles.part}>
                        <Text style={styles.label}>وضعیت</Text>
                        <DropDownObj list={testList} getLabel={(item) => item.label} setValue={(item) => { setTestVal(item.label); }} value={testVal} buttonStyle={styles.dropdown} buttonTextStyle={styles.dropdownText} />
                    </View>
                </View>
                <View style={styles.breakline} />
                <View style={styles.twoSideView}>
                    <View style={styles.part}>
                        <Text style={styles.label}>استان</Text>
                        <DropDownObj list={testList} getLabel={(item) => item.label} setValue={(item) => { setTestVal(item.label); }} value={deviceDetail.provinceName} buttonStyle={styles.dropdown} buttonTextStyle={styles.dropdownText} />
                    </View>
                    <View style={styles.part}>
                        <Text style={styles.label}>شهر</Text>
                        <DropDownObj list={testList} getLabel={(item) => item.label} setValue={(item) => { setTestVal(item.label); }} value={deviceDetail.cityName} buttonStyle={styles.dropdown} buttonTextStyle={styles.dropdownText} />
                    </View>
                </View>
                <View style={styles.twoSideView}>
                    <View style={styles.part}>
                        <Text style={styles.label}>بخش</Text>
                        <DropDownObj list={testList} getLabel={(item) => item.label} setValue={(item) => { setTestVal(item.label); }} value={testVal} buttonStyle={styles.dropdown} buttonTextStyle={styles.dropdownText} />
                    </View>
                    <View style={styles.part}>
                        <Text style={styles.label}>شماره تلفن</Text>
                        <TextInput style={styles.textinput} placeholder="شماره تلفن" value={deviceDetail.installationPhone} onChange={(text) => { setTestVal(text.nativeEvent.text) }} />
                    </View>
                </View>
                <View style={styles.twoSideView}>
                    <View style={styles.part}>
                        <Text style={styles.label}>طول جغرافیایی</Text>
                        <TextInput style={styles.textinput} placeholder="طول جغرافیایی" value={deviceDetail.strLatitude} onChange={(text) => { setTestVal(text.nativeEvent.text) }} />
                    </View>
                    <View style={styles.part}>
                        <Text style={styles.label}>عرض جغرافیایی</Text>
                        <TextInput style={styles.textinput} placeholder="عرض جغرافیایی" value={deviceDetail.strLongitude} onChange={(text) => { setTestVal(text.nativeEvent.text) }} />
                    </View>
                </View>
                <View style={styles.singleColView}>
                    <Text style={styles.label}>آدرس</Text>
                    <TextInput style={styles.textinput} placeholder="آدرس" value={deviceDetail.installationAddress} onChange={(text) => { setTestVal(text.nativeEvent.text) }} />
                </View>
                <View style={styles.breakline} />
                <View style={styles.twoSideView}>
                    <View style={styles.part}>
                        <Text style={styles.label}>دفتر فنی</Text>
                        <DropDownObj list={testList} getLabel={(item) => item.label} setValue={(item) => { setTestVal(item.label); }} value={deviceDetail.areaName} buttonStyle={styles.dropdown} buttonTextStyle={styles.dropdownText} />
                    </View>
                </View>
                <View style={styles.breakline} />
                <View style={styles.twoSideView}>
                    <View style={styles.part}>
                        <Text style={styles.label}>نام قرارداد</Text>
                        <DropDownObj list={testList} getLabel={(item) => item.label} setValue={(item) => { setTestVal(item.label); }} value={deviceDetail.aciveContractTitle + ' '} buttonStyle={styles.dropdown} buttonTextStyle={styles.dropdownText} />
                    </View>
                    <View style={styles.part}>
                        <Text style={styles.label}>قرارداد رزرو</Text>
                        <DropDownObj list={testList} getLabel={(item) => item.label} setValue={(item) => { setTestVal(item.label); }} value={deviceDetail.contractReservedName + ' '} buttonStyle={styles.dropdown} buttonTextStyle={styles.dropdownText} />
                    </View>
                </View>
                <View style={styles.twoSideView}>
                    <View style={styles.part}>
                        <Text style={styles.label}>تاریخ تحویل به مشتری</Text>
                        <View style={styles.detailedInputView}>
                            <Text style={styles.dateVal}>{deviceDetail.persianDeliveryDate}</Text>
                            <TouchableOpacity style={styles.dateButton}>
                                <Ionicons style={styles.dateButtonIcon} name={'calendar-outline'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.part}>
                        <Text style={styles.label}>تاریخ راه اندازی</Text>
                        <View style={styles.detailedInputView}>
                            <Text style={styles.dateVal}>{deviceDetail.persianActivateDate}</Text>
                            <TouchableOpacity style={styles.dateButton}>
                                <Ionicons style={styles.dateButtonIcon} name={'calendar-outline'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.twoSideView}>
                    <View style={styles.part}>
                        <Text style={styles.label}>تاریخ نصب در سایت مشتری</Text>
                        <View style={styles.detailedInputView}>
                            <Text style={styles.dateVal}>{deviceDetail.persianInstallationDate}</Text>
                            <TouchableOpacity style={styles.dateButton}>
                                <Ionicons style={styles.dateButtonIcon} name={'calendar-outline'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.part}>
                        <Text style={styles.label}>تاریخ پایان گارانتی</Text>
                        <View style={styles.detailedInputView}>
                            <Text style={styles.dateVal}>{deviceDetail.persianWarrantyEndDate}</Text>
                            <TouchableOpacity style={styles.dateButton}>
                                <Ionicons style={styles.dateButtonIcon} name={'calendar-outline'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.breakline} />
                <View style={styles.twoSideView}>
                    <View style={styles.part}>
                        <Text style={styles.label}>لیتک اصلی</Text>
                        <TextInput style={styles.textinput} placeholder="لیتک اصلی" value={deviceDetail.orginalLinkTitle} onChange={(text) => { setTestVal(text.nativeEvent.text) }} />
                    </View>
                    <View style={styles.part}>
                        <Text style={styles.label}>لینک پشتیبان</Text>
                        <TextInput style={styles.textinput} placeholder="لینک پشتیبان" value={deviceDetail.supportLinkTitle} onChange={(text) => { setTestVal(text.nativeEvent.text) }} />
                    </View>
                </View>
                <View style={styles.singleColView}>
                    <Text style={styles.label}>توضیحات</Text>
                    <TextInput style={styles.textArea} multiline={true} numberOfLines={5} placeholder="توضیحات" value={deviceDetail.description} onChange={(text) => { setTestVal(text.nativeEvent.text) }} />
                </View>
            </ScrollView>
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
        flex: 1,
    },
    twoSideView: {
        flexDirection: 'row-reverse',
        marginBottom: 10,
    },
    singleColView: {
        width: '95%',
        marginHorizontal: 'auto',
        paddingBottom: 10,
    },
    part: {
        width: '46%',
        marginRight: '3%',
    },
    label: {
        fontFamily: 'iransans',
        fontSize: 12,
        color: colors.text,
    },
    content: {
        flex: 1,
        width: '100%',
    },
    dropdown: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 7,
        width: '100%',
        marginHorizontal: 0,
        alignContent: 'center',
        alignItems: 'center',
    },
    dropdownText: {
        paddingVertical: 5,
        textAlign: 'center',
        width: '100%',
        fontFamily: 'iransans',
        fontSize: 12,
    },
    textinput: {
        borderColor: colors.lightgray,
        borderWidth: 1,
        width: '100%',
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
        borderColor: colors.lightgray,
        borderWidth: 1,
        width: '100%',
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
    breakline: {
        backgroundColor: colors.lightgray,
        width: '100%',
        marginHorizontal: 'auto',
        height: 8,
        // borderRadius: 4,
        marginBottom: 20,
        marginTop: 10,
    },
    detailedInputView: {
        flexDirection: 'row-reverse',
    },
    dateVal: {
        fontFamily: 'iransans',
        fontSize: 12,
        width: '78%',
        backgroundColor: colors.white,
        borderColor: colors.lightgray,
        borderWidth: 1,
        minHeight: 35,
        borderRadius: 8,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingVertical: 6,
    },
    dateButton: {
        backgroundColor: colors.blue,
        paddingVertical: 7,
        paddingHorizontal: 9,
        borderRadius: 7,
        marginRight: 7,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateButtonIcon: {
        color: colors.white,
        fontSize: 15,
    },
});

export default DeviceDetailView;