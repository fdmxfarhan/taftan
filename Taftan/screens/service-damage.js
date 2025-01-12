import React, { useEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    ToastAndroid,
    TextInput,
    LayoutAnimation
} from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
import { submitDamageRequest } from '../services/ser-damage';
import LoadingView from '../components/loading';
import NotConnected from '../components/no-connection';
import getSLAColor from '../config/getSLAColor';
import ReqGridController from '../components/req-grid-controller';
import SearchView from '../components/search';
import { submitDamageRequestFilter } from '../services/ser-damage-filter';
import PersianDatePicker from '../components/persian-date-picker';
import { twoDigit } from '../config/consts';
import StateFilterPopup from '../components/rec-popup-filter-state';

const ServiceDamage = (props) => {
    var [menuVisible, setMenuVisible] = useState(false);
    var [isLoading, setIsLoading] = useState(true);
    var [serviceConnected, setServiceConnected] = useState(true);
    var [skipValue, setskipValue] = useState(1);
    var [rowsValue, setrowsValue] = useState(10);
    var [searchEN, setsearchEN] = useState(false);
    var [filtersEN, setFiltersEN] = useState(false);
    var [filters, setFilters] = useState({ requestId: '', deviceName: '', insertedDate: '', endDate: '', deviceTerminal: '', deviceModelTitle: '', customerName: '', areaName: '', branchName: '', serviceName: '', currentUserName: '', customerInsertName: '', duplicateDamgeNumber: '', persianLastState: '', });
    var [workflowFilter, setWorkflowFilter] = useState([]);
    const [workflowPickerEN, setworkflowPickerEN] = useState(false);
    const [datePickerVisibleStart, setdatePickerVisibleStart] = useState(false);
    const [selectedDayStart, setselectedDayStart] = useState('1');
    const [selectedMonthStart, setselectedMonthStart] = useState('1');
    const [selectedYearStart, setselectedYearStart] = useState('1390');
    const [datePickerVisibleEnd, setdatePickerVisibleEnd] = useState(false);
    const [selectedDayEnd, setselectedDayEnd] = useState('1');
    const [selectedMonthEnd, setselectedMonthEnd] = useState('1');
    const [selectedYearEnd, setselectedYearEnd] = useState('1410');
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        setsearchEN(true);
    };
    const sendRequest = async (skip, take) => {
        setIsLoading(true);
        var result = await submitDamageRequest(skip, take);
        if (result.success) {
            setDamageRequests(result.data.Data);
            console.log(result.data.Data);
            setIsLoading(false);
            setServiceConnected(true);
        }
        else {
            ToastAndroid.show('عدم اتصال به سرویس.', ToastAndroid.SHORT);
            setIsLoading(false);
            setServiceConnected(false);
        }
    }
    useEffect(() => {
        sendRequest(skipValue, rowsValue);
    }, []);
    const [damageRequests, setDamageRequests] = useState([])
    const handleItemPress = (item) => {
        props.navigation.navigate('DamageReqView', { item });
    };
    const toggleFiltersEN = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setFiltersEN(!filtersEN);
    };
    const clearFilters = () => {
        setFilters({ requestId: '', deviceName: '', insertedDate: '', endDate: '', deviceTerminal: '', deviceModelTitle: '', customerName: '', areaName: '', branchName: '', serviceName: '', currentUserName: '', customerInsertName: '', duplicateDamgeNumber: '', persianLastState: '' });
        sendRequest(skipValue, rowsValue);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setFiltersEN(!filtersEN);
    };
    const submitFilters = async () => {
        var startDayCount = selectedYearStart * 365 + selectedMonthStart * 30 + selectedDayStart;
        var endDayCount = selectedYearEnd * 365 + selectedMonthEnd * 30 + selectedDayEnd;
        if (endDayCount < startDayCount) {
            ToastAndroid.show('بازه تاریخ انتخاب شده صحیح نمیباشد.', ToastAndroid.SHORT);
            return;
        }
        var wffilter = [];
        for (let i = 0; i < workflowFilter.length; i++) {
            wffilter.push({
                field: "lastState",
                operator: "contains",
                value: workflowFilter[i].title,
            });
        }

        var optionFilters = [];
        filters.insertedDate = `${selectedYearStart}/${twoDigit(selectedMonthStart)}/${twoDigit(selectedDayStart)}`;
        filters.endDate = `${selectedYearEnd}/${twoDigit(selectedMonthEnd)}/${twoDigit(selectedDayEnd)}`;
        if (filters.requestId != '') optionFilters.push({ field: 'requestId', operator: 'eq', value: filters.requestId });
        if (filters.deviceName != '') optionFilters.push({ field: 'deviceName', operator: 'contains', value: filters.deviceName });
        if (filters.insertedDate != '') optionFilters.push({ field: 'insertedDate', operator: 'gt', value: filters.insertedDate });
        if (filters.endDate != '') optionFilters.push({ field: 'insertedDate', operator: 'lt', value: filters.endDate });
        if (filters.deviceTerminal != '') optionFilters.push({ field: 'deviceTerminal', operator: 'contains', value: filters.deviceTerminal });
        if (filters.deviceModelTitle != '') optionFilters.push({ field: 'deviceModelTitle', operator: 'contains', value: filters.deviceModelTitle });
        if (filters.customerName != '') optionFilters.push({ field: 'customerName', operator: 'contains', value: filters.customerName });
        if (filters.areaName != '') optionFilters.push({ field: 'areaName', operator: 'contains', value: filters.areaName });
        if (filters.branchName != '') optionFilters.push({ field: 'branchName', operator: 'contains', value: filters.branchName });
        if (filters.serviceName != '') optionFilters.push({ field: 'serviceName', operator: 'contains', value: filters.serviceName });
        if (filters.currentUserName != '') optionFilters.push({ field: 'currentUserName', operator: 'contains', value: filters.currentUserName });
        if (filters.customerInsertName != '') optionFilters.push({ field: 'customerInsertName', operator: 'contains', value: filters.customerInsertName });
        if (wffilter.length > 0) optionFilters.push({ logic: "or", filters: wffilter });
        optionFilters.push({ field: "IsArchived", operator: "Eq", value: 0 })
        var options = {
            skip: skipValue,
            take: rowsValue,
            sort: [{ field: "id", dir: "desc" }],
            filter: {
                logic: "and",
                filters: optionFilters,
            }
        };
        setIsLoading(true);
        var result = await submitDamageRequestFilter(options);
        if (result.success) {
            setDamageRequests(result.data.Data);
            setIsLoading(false);
            setServiceConnected(true);
            setFiltersEN(!filtersEN);
        }
        else {
            ToastAndroid.show('عدم اتصال به سرویس.', ToastAndroid.SHORT);
            setIsLoading(false);
            setServiceConnected(false);
        }
    }
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemContainer}>
            <Text style={styles.deviceName}>{item.deviceName} (<Text>{item.customerName}</Text>)</Text>
            <Text style={styles.damageTitle}>{item.serviceName}</Text>
            <Text style={styles.textTitle}>{item.requestId}</Text>
            <View style={styles.stateView}>
                <Text style={styles.state}>{item.persianLastState}</Text>
                {item.isPilot == 0 ? (
                    <View style={[styles.stateCircle, { backgroundColor: getSLAColor(item.SLAStyle) }]} />
                ) : (
                    <Ionicons style={styles.pilotIcon} name={'build'} />
                )}
            </View>
            <Text style={styles.date}>{item.persianInsertedDate}</Text>
        </TouchableOpacity>
    );
    var getWorkFlowListArray = (workflowFilter) => {
        var out = '';
        for (var i = 0; i < workflowFilter.length; i++) out += workflowFilter[i].label + ' - ';
        return (out);
    }
    return (
        <View style={styles.container}>
            <NavBar rightCallback={toggleMenu} leftCallback={handleSearchPress} title="درخواست‌های خرابی" leftIcon="search" rightIcon="menu" />
            <SearchView popupEN={searchEN} setPopupEN={setsearchEN} />
            <ReqGridController
                currentPage={skipValue}
                skipValue={skipValue}
                setskipValue={setskipValue}
                setData={(skip, rows) => {
                    setskipValue(skip);
                    setrowsValue(rows);
                    sendRequest(skip, rows);
                }}
                filtersEN={filtersEN}
                setFiltersEN={setFiltersEN}
                toggleFiltersEN={toggleFiltersEN} />
            {filtersEN && <View style={styles.filterView}>
                <View style={styles.filterRow}>
                    <Text style={styles.label}>شماره کار:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'شماره کار'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.requestId}
                        onChange={(text) => { filters.requestId = text.nativeEvent.text; setFilters(filters); }}
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
                    <Text style={styles.label}>تاریخ: از</Text>
                    <TouchableOpacity style={styles.dateInputButton} onPress={() => setdatePickerVisibleStart(true)}>
                        <Text style={styles.dateInputButtonText}>{selectedYearStart}/{selectedMonthStart}/{selectedDayStart}</Text>
                    </TouchableOpacity>
                    <Text style={styles.label}>تا</Text>
                    <TouchableOpacity style={styles.dateInputButton} onPress={() => setdatePickerVisibleEnd(true)}>
                        <Text style={styles.dateInputButtonText}>{selectedYearEnd}/{selectedMonthEnd}/{selectedDayEnd}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.filterRow}>
                    <Text style={styles.label}>شماره ترمینال:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'شماره ترمینال'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.deviceTerminal}
                        onChange={(text) => { filters.deviceTerminal = text.nativeEvent.text; setFilters(filters); }}
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
                    <Text style={styles.label}>مشتری:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'مشتری'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.customerName}
                        onChange={(text) => { filters.customerName = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}
                    />
                    <Text style={styles.label}>دفتر:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'دفتر'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.areaName}
                        onChange={(text) => { filters.areaName = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}
                    />
                </View>
                <View style={styles.filterRow}>
                    <Text style={styles.label}>واحد سازمانی:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'واحد سازمانی'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.branchName}
                        onChange={(text) => { filters.branchName = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}
                    />
                    <Text style={styles.label}>عنوان خرابی:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'عنوان خرابی'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.serviceName}
                        onChange={(text) => { filters.serviceName = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}
                    />
                </View>
                <View style={styles.filterRow}>
                    <Text style={styles.label}>کاربر جاری:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'کاربر جاری'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.currentUserName}
                        onChange={(text) => { filters.currentUserName = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}
                    />
                    <Text style={styles.label}>کاربر ثبت کننده:</Text>
                    <TextInput
                        style={[styles.textInput4]}
                        placeholder={'کاربر ثبت کننده'}
                        placeholderTextColor={colors.text}
                        defaultValue={filters.customerInsertName}
                        onChange={(text) => { filters.customerInsertName = text.nativeEvent.text; setFilters(filters); }}
                        onSubmitEditing={submitFilters}
                    />
                </View>
                <View style={styles.filterRow}>
                    <Text style={styles.label}>گردش کار:</Text>
                    <TouchableOpacity style={styles.workflowFilter} onPress={() => setworkflowPickerEN(true)}>
                        <Text style={styles.workflowFilterText}>{getWorkFlowListArray(workflowFilter)}</Text>
                    </TouchableOpacity>
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
                <PersianDatePicker visible={datePickerVisibleStart} setDay={setselectedDayStart} setMonth={setselectedMonthStart} setYear={setselectedYearStart} onsubmit={() => setdatePickerVisibleStart(false)} />
                <PersianDatePicker visible={datePickerVisibleEnd} setDay={setselectedDayEnd} setMonth={setselectedMonthEnd} setYear={setselectedYearEnd} onsubmit={() => setdatePickerVisibleEnd(false)} />
                <StateFilterPopup modalEnable={workflowPickerEN} setmodalEnable={setworkflowPickerEN} setWorkflowFilter={setWorkflowFilter} />
            </View>}
            <NotConnected serviceConnected={serviceConnected} refresh={sendRequest} />
            <FlatList data={damageRequests} renderItem={renderItem} keyExtractor={item => item.requestId} />
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
    itemContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 0,
        backgroundColor: colors.white,
        // backgroundColor: colors.lightergray,
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
        bottom: 15,
        left: 15,
        fontFamily: 'iransans',
        fontSize: 12,
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
        fontFamily: 'iransans',
        fontSize: 11,
        paddingLeft: 10,
    },
    filterButton: {
        // backgroundColor: colors.blue,
        borderRadius: 7,
        marginRight: 6,
    },
    filterButtonIcon: {
        // color: colors.white,
        color: colors.text,
        fontSize: 16,
        paddingVertical: 7,
        paddingHorizontal: 10,
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

export default ServiceDamage;