import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, ToastAndroid, Linking, LayoutAnimation, TextInput } from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
import LoadingView from '../components/loading';
import NotConnected from '../components/no-connection';
import ReqGridController from '../components/req-grid-controller';
import SearchView from '../components/search';
import { getDeviceList } from '../services/device-get-list';
import { GetDeviceDetail } from '../services/device-detail';
import { getDeviceListFilter } from '../services/device-get-list-filter';

const DeviceListView = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [serviceConnected, setServiceConnected] = useState(true);
    const [skipValue, setskipValue] = useState(1);
    const [rowsValue, setrowsValue] = useState(50);
    const [searchEN, setsearchEN] = useState(false);
    const [devicelist, setdevicelist] = useState([]);
    var [filtersEN, setFiltersEN] = useState(false);
    var [filters, setFilters] = useState({
        customerName: '',
        deviceBranchName: '',
        branchCode: '',
        deviceSerial: '',
        deviceTerminal: '',
        deviceName: '',
        deviceTypeTitle: '',
        deviceModelTitle: '',
        areaName: '',
        provinceName: '',
        cityName: '',
        deviceStatus: '',
    });

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        setsearchEN(true);
    };
    const sendRequest = async (skip, take) => {
        setIsLoading(true);
        var result = await getDeviceList(skip, take);
        if (result.success) {
            setdevicelist(result.data.Data);
            setIsLoading(false);
            setServiceConnected(true);
        }
        else {
            ToastAndroid.show('عدم اتصال به سرویس.', ToastAndroid.SHORT);
            setIsLoading(false);
            setServiceConnected(false);
        }
    }
    const toggleFiltersEN = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setFiltersEN(!filtersEN);
    };
    useEffect(() => {
        sendRequest(skipValue, rowsValue);
    }, []);
    const handleItemPress = (item) => {
        props.navigation.navigate('DeviceDetailView', { item });
    };
    const handleCall = async (item) => {
        var result = await GetDeviceDetail(item.id);
        if (result.success) {
            var deviceDetail = result.data;
            const url = `tel:${deviceDetail.installationPhone}`;
            Linking.canOpenURL(url)
                .then((supported) => {
                    if (!supported) ToastAndroid.show('تماس تلفنی پشتیبانی نمیشود.', ToastAndroid.SHORT);
                    else return Linking.openURL(url);
                })
                .catch((err) => console.error('Error opening phone dialer', err));
        } else ToastAndroid.show('اطلاعات دستگاه یافت نشد.', ToastAndroid.SHORT);
    }
    const clearFilters = () => {
        setFilters({
            customerName: '',
            deviceBranchName: '',
            branchCode: '',
            deviceSerial: '',
            deviceTerminal: '',
            deviceName: '',
            deviceTypeTitle: '',
            deviceModelTitle: '',
            areaName: '',
            provinceName: '',
            cityName: '',
            deviceStatus: '',
        });
        sendRequest(skipValue, rowsValue);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setFiltersEN(!filtersEN);
    };
    const submitFilters = async () => {
        var optionFilters = [];
        if (filters.customerName != '') optionFilters.push({ field: 'customerName', operator: 'contains', value: filters.customerName });
        if (filters.deviceBranchName != '') optionFilters.push({ field: 'deviceBranchName', operator: 'contains', value: filters.deviceBranchName });
        if (filters.branchCode != '') optionFilters.push({ field: 'branchCode', operator: 'contains', value: filters.branchCode });
        if (filters.deviceSerial != '') optionFilters.push({ field: 'deviceSerial', operator: 'contains', value: filters.deviceSerial });
        if (filters.deviceTerminal != '') optionFilters.push({ field: 'deviceTerminal', operator: 'contains', value: filters.deviceTerminal });
        if (filters.deviceName != '') optionFilters.push({ field: 'deviceName', operator: 'contains', value: filters.deviceName });
        if (filters.deviceTypeTitle != '') optionFilters.push({ field: 'deviceTypeTitle', operator: 'contains', value: filters.deviceTypeTitle });
        if (filters.deviceModelTitle != '') optionFilters.push({ field: 'deviceModelTitle', operator: 'contains', value: filters.deviceModelTitle });
        if (filters.areaName != '') optionFilters.push({ field: 'areaName', operator: 'contains', value: filters.areaName });
        if (filters.provinceName != '') optionFilters.push({ field: 'provinceName', operator: 'contains', value: filters.provinceName });
        if (filters.cityName != '') optionFilters.push({ field: 'cityName', operator: 'contains', value: filters.cityName });
        if (filters.deviceStatus != '') optionFilters.push({ field: 'deviceStatus', operator: 'eq', value: filters.deviceStatus });
        var options = {
            skip: skipValue,
            take: rowsValue,
            sort: [{ field: "id", dir: "desc" }],
            filter: {
                logic: "and",
                filters: optionFilters,
            }
        };
        console.log(optionFilters)
        setIsLoading(true);
        var result = await getDeviceListFilter(options);
        if (result.success) {
            setdevicelist(result.data.Data);
            setIsLoading(false);
            setServiceConnected(true);
            toggleFiltersEN();
        }
        else {
            ToastAndroid.show('عدم اتصال به سرویس.', ToastAndroid.SHORT);
            setIsLoading(false);
            setServiceConnected(false);
        }
    }
    const renderItem = ({ item }) => (
        <View style={styles.itemContainerView}>
            <TouchableOpacity key={item.id} onPress={() => handleItemPress(item)} style={styles.itemContainer}>
                <Text style={styles.deviceName}>{item.customerName} (<Text>{item.deviceName}</Text>)</Text>
                <Text style={styles.damageTitle}>دفتر: {item.areaName}</Text>
                <Text style={styles.damageTitle}>مدل: {item.deviceModelTitle}</Text>
                <Text style={styles.textTitle}>سریال: {item.deviceSerial}</Text>
                <View style={styles.stateView}>
                    <Text style={styles.state}>{item.deviceTypeTitle}</Text>
                </View>
                <Text style={styles.date}>ترمینال: {item.deviceTerminal}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.callButton} onPress={() => handleCall(item)}>
                <Ionicons name={'call'} style={styles.callIcon} />
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={styles.container}>
            <NavBar rightCallback={toggleMenu} leftCallback={handleSearchPress} title="لیست دستگاه‌ها" leftIcon="search" rightIcon="menu" />
            <SearchView popupEN={searchEN} setPopupEN={setsearchEN} />
            <ReqGridController
                currentPage={skipValue}
                skipValue={skipValue}
                setskipValue={setskipValue}
                numOfRowsValue={rowsValue}
                setnumOfRowsValue={setrowsValue}
                setData={(skip, rows) => {
                    setskipValue(skip);
                    setrowsValue(rows);
                    sendRequest(skip, rows);
                }}
                toggleFiltersEN={toggleFiltersEN} />
            {filtersEN && <View style={styles.filterView}>
                <View style={styles.filterRow}>
                    <Text style={styles.label}>مشتری:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'مشتری'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.customerName}
                        onChange={(text) => { filters.customerName = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}

                    />
                    <Text style={styles.label}>واحد سازمانی:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'واحد سازمانی'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.deviceBranchName}
                        onChange={(text) => { filters.deviceBranchName = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}
                    />
                </View>
                <View style={styles.filterRow}>
                    <Text style={styles.label}>کد واحد سازمانی:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'کد واحد سازمانی'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.branchCode}
                        onChange={(text) => { filters.branchCode = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}

                    />
                    <Text style={styles.label}>سریال دستگاه:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'سریال دستگاه'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.deviceSerial}
                        onChange={(text) => { filters.deviceSerial = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}
                    />
                </View>
                <View style={styles.filterRow}>
                    <Text style={styles.label}>ترمینال:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'ترمینال'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.deviceTerminal}
                        onChange={(text) => { filters.deviceTerminal = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}

                    />
                    <Text style={styles.label}>نام دستگاه:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'نام دستگاه'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.deviceName}
                        onChange={(text) => { filters.deviceName = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}
                    />
                </View>
                <View style={styles.filterRow}>
                    <Text style={styles.label}>گروه تجهیز:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'گروه تجهیز'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.deviceTypeTitle}
                        onChange={(text) => { filters.deviceTypeTitle = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}

                    />
                    <Text style={styles.label}>مدل:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'مدل'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.deviceModelTitle}
                        onChange={(text) => { filters.deviceModelTitle = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}
                    />
                </View>
                <View style={styles.filterRow}>
                    <Text style={styles.label}>دفتر:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'دفتر'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.areaName}
                        onChange={(text) => { filters.areaName = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}

                    />
                    <Text style={styles.label}>نام استان:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'نام استان'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.provinceName}
                        onChange={(text) => { filters.provinceName = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}
                    />
                </View>
                <View style={styles.filterRow}>
                    <Text style={styles.label}>نام شهر:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'نام شهر'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.cityName}
                        onChange={(text) => { filters.cityName = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}

                    />
                    <Text style={styles.label}>وضعیت:</Text>
                    {/* <TextInput
                        style={[styles.textInput4]}
                        placeholder={'نام استان'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.provinceName}
                        onChange={(text) => { filters.provinceName = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}
                    /> */}
                </View>
                <View style={styles.buttonsView}>
                    <TouchableOpacity style={[styles.filterBtn, { backgroundColor: colors.blue }]} onPress={submitFilters}>
                        <Ionicons style={styles.filterBtnIcon} name={'funnel-outline'} />
                        <Text style={styles.filterBtnText}>اعمال فیلترها</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filterBtn, { backgroundColor: colors.red }]} onPress={clearFilters}>
                        <Ionicons style={styles.filterBtnIcon} name={'trash'} />
                        <Text style={styles.filterBtnText}>پاکسازی فیلترها</Text>
                    </TouchableOpacity>
                </View>
            </View>}
            <NotConnected serviceConnected={serviceConnected} refresh={sendRequest} />
            <FlatList data={devicelist} renderItem={renderItem} keyExtractor={item => item.id} />
            <LoadingView isLoading={isLoading} text={'در حال بارگیری...'} />
            <SideMenu isVisible={menuVisible} onClose={toggleMenu} navigation={props.navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    itemContainerView: {
        position: 'relative',
        width: '100%',
    },
    itemContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 0,
        backgroundColor: colors.white,
        borderColor: colors.lightgray,
        borderWidth: 1,
        direction: 'rtl',
    },
    deviceName: {
        fontSize: 14,
        marginBottom: 2,
        fontFamily: 'iransansbold',
        direction: 'rtl',
        color: colors.darkBackground,
        textAlign: 'right',
    },
    damageTitle: {
        fontSize: 12,
        fontFamily: 'iransansbold',
        color: colors.gray,
        textAlign: 'right',
    },
    textTitle: {
        fontSize: 12,
        fontFamily: 'iransansbold',
        color: colors.darkblue,
        textAlign: 'right',
        marginTop: 5,
    },
    date: {
        position: 'absolute',
        bottom: 45,
        left: 15,
        fontFamily: 'iransans',
        fontSize: 12,
        paddingLeft: 5,
    },
    stateView: {
        position: 'absolute',
        top: 15,
        left: 15,
        flexDirection: 'row-reverse',
        alignContent: 'center',
        alignItems: 'center',
    },
    stateCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    pilotIcon: {
        color: colors.red3,
        fontSize: 15,
    },
    state: {
        color: colors.darkcyan,
        fontFamily: 'iransansbold',
        fontSize: 12,
        paddingLeft: 5,
    },
    callButton: {
        position: 'absolute',
        zIndex: 10,
        bottom: 10,
        left: 20,
        backgroundColor: colors.darkBackground,
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    callIcon: {
        color: colors.white,
    },
    filterView: {
        backgroundColor: colors.lightBackground,
        paddingVertical: 10,
    },
    filterRow: {
        flexDirection: 'row-reverse',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
    },
    label: {
        padding: 0,
        fontFamily: 'iransans',
        fontSize: 12,
        margin: 0,
        width: '15%',
        marginHorizontal: 5,
        textAlign: 'center',
        color: colors.text,
    },
    textInput4: {
        padding: 0,
        fontFamily: 'iransans',
        fontSize: 12,
        paddingVertical: 1,
        borderRadius: 7,
        margin: 0,
        width: '30%',
        marginHorizontal: 5,
        textAlign: 'right',
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        color: colors.black,
    },
    dateInputButton: {
        paddingVertical: 4,
        marginTop: 5,
        borderRadius: 7,
        width: '30%',
        marginHorizontal: 5,
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        flexDirection: 'row-reverse',
    },
    dateInputButtonText: {
        fontFamily: 'iransans',
        fontSize: 12,
        borderRadius: 7,
        margin: 0,
        textAlign: 'right',
        color: colors.black,
    },
    workflowFilter: {
        paddingVertical: 4,
        marginTop: 5,
        borderRadius: 7,
        width: '80%',
        marginHorizontal: 5,
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        flexDirection: 'row-reverse',
    },
    workflowFilterText: {
        fontFamily: 'iransans',
        fontSize: 12,
        borderRadius: 7,
        margin: 0,
        textAlign: 'right',
        color: colors.black,
    },
    filterBtn: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        width: '40%',
        marginHorizontal: '5%',
        borderRadius: 7,
        marginTop: 10,
    },
    filterBtnIcon: {
        color: colors.white,
        fontSize: 13,
        paddingTop: 8,
        paddingLeft: 10,
    },
    filterBtnText: {
        fontFamily: 'iransans',
        fontSize: 13,
        color: colors.white,
        paddingVertical: 5,
    },
    buttonsView: {
        flexDirection: 'row-reverse',
        paddingRight: 10,
        justifyContent: 'center',
    },
});

export default DeviceListView;