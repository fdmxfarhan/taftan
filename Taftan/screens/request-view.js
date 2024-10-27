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
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
const {saveData, readData} = require('../config/save');
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
import { FlatList } from 'react-native-gesture-handler';

const RequestView = (props) => {   
    const { item } = props.route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [reqinfoEN, setReqinfoEN] = useState(false);
    const [damageInfo, setDamageInfo] = useState(false);
    const [deviceInfo, setDeviceInfo] = useState(false);
    const [workflow, setWorkflow] = useState(false);
    const [slaInfo, setslaInfo] = useState(false);
    const [serviceStateInfo, setserviceStateInfo] = useState(false);
    const [actionsInfo, setactionsInfo] = useState(false);
    const [supervisorInfo, setsupervisorInfo] = useState(false);

    const [stateHistory, setstateHistory] = useState([
        {id: '1', state: 'مشاهده مدیر', date: '1403/7/28', time: '12:43', description: 'این درخواست توسط مدیر مشاهده شد.'},
        {id: '2', state: 'مشاهده مدیر', date: '1403/7/28', time: '12:43', description: 'این درخواست توسط مدیر مشاهده شد.'},
        {id: '3', state: 'مشاهده مدیر', date: '1403/7/28', time: '12:43', description: 'این درخواست توسط مدیر مشاهده شد.'},
        {id: '4', state: 'مشاهده مدیر', date: '1403/7/28', time: '12:43', description: 'این درخواست توسط مدیر مشاهده شد.'},
    ])
    const [actionsHistory, setactionsHistory] = useState([
        {id: '1', actionDate: '1403/7/27', fromTime: '12:00', toTime: '15:30', actionType: 'بررسی دستگاه', result: 'موفق', reasonOfFailure: '', customer: '', description: '', workflow: 'اقدام شده', showAll: false},
        {id: '2', actionDate: '1403/7/27', fromTime: '12:00', toTime: '15:30', actionType: 'بررسی دستگاه', result: 'موفق', reasonOfFailure: '', customer: '', description: '', workflow: 'اقدام شده', showAll: false},
        {id: '3', actionDate: '1403/7/27', fromTime: '12:00', toTime: '15:30', actionType: 'بررسی دستگاه', result: 'موفق', reasonOfFailure: '', customer: '', description: '', workflow: 'اقدام شده', showAll: false},
        {id: '4', actionDate: '1403/7/27', fromTime: '12:00', toTime: '15:30', actionType: 'بررسی دستگاه', result: 'موفق', reasonOfFailure: '', customer: '', description: '', workflow: 'اقدام شده', showAll: false},
    ])
    const [supervisors, setSupervisors] = useState([
        {id: '1', name: 'فاطمه حمزه', type: 'اصلی'},
        {id: '2', name: 'فاطمه حمزه', type: 'اصلی'},
        {id: '3', name: 'فاطمه حمزه', type: 'اصلی'},
        {id: '4', name: 'فاطمه حمزه', type: 'اصلی'},
    ])
    
    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const toggleReqinfoEN = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setReqinfoEN(!reqinfoEN);
    };
    const toggleDamageInfo = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setDamageInfo(!damageInfo);
    };
    const toggleDeviceInfo = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setDeviceInfo(!deviceInfo);
    };
    const toggleWorkflow = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setWorkflow(!workflow);
    };
    const toggleslaInfo = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setslaInfo(!slaInfo);
    };
    const toggleserviceStateInfo = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setserviceStateInfo(!serviceStateInfo);
    };
    const toggleactionsInfo = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setactionsInfo(!actionsInfo);
    };
    const togglesupervisorInfo = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setsupervisorInfo(!supervisorInfo);
    };
    const saveEverything = () => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false); // Stops loading after 3 seconds
          ToastAndroid.show('اطلاعات ذخیره شد.', ToastAndroid.SHORT);
        }, 3000);
    };
    const handleSearchPress = () => {
        props.navigation.goBack();
    };
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    }

    return(
        <View style={styles.container}>
            <NavBar
                rightCallback={saveEverything} 
                leftCallback={handleSearchPress} 
                title="درخواست‌های خرابی" 
                leftIcon="arrow-back"
                rightIcon="save-outline"
            />
            <ScrollView style={styles.contents} keyboardShouldPersistTaps="handled" scrollEnabled={true}>
                <TouchableOpacity style={styles.titleView} onPress={toggleReqinfoEN}>
                    <Text style={styles.title}>اطلاعات درخواست</Text>
                    <Ionicons style={styles.chevron} name={reqinfoEN == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
                </TouchableOpacity>
                {reqinfoEN && (<View style={styles.content}>
                    <Text style={styles.label}>شماره کار: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'شماره کار'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={item.workNum}
                        editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>مشتری: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'مشتری'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={item.customer}
                        editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>کاربر درخواست کننده: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'کاربر درخواست کننده'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={item.submitedBy}
                        editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>تاریخ شروع: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'تاریخ شروع'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={`${item.date.year}/${item.date.month}/${item.date.day}`}
                        editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>مهلت انجام کار: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'مهلت انجام کار'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={item.sla + ' ساعت'}
                        editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>تکرار خرابی: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'تکرار خرابی'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'number-pad'}
                        value={item.repeat.toString()}
                        editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>سرویس: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'سرویس'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={item.damageTitle}
                        editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>شعبه: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'شعبه'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={item.branch}
                        editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>تاریخ ثبت: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'تاریخ ثبت'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={`${item.date.year}/${item.date.month}/${item.date.day}`}
                        editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>تاریخ پایان: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'تاریخ پایان'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={`${item.date.year}/${item.date.month}/${item.date.day}`}
                        editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>علت تاخیر: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'علت تاخیر'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        editable={false}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                </View>)}
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
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
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
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
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
                        // value={''
                        keyboardType={'default'}
                        // onChangeText={text => setDescription(text)}
                    />
                </View>)}
                <TouchableOpacity style={styles.titleView} onPress={toggleDeviceInfo}>
                    <Text style={styles.title}>دستگاه</Text>
                    <Ionicons style={styles.chevron} name={deviceInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
                </TouchableOpacity>
                {deviceInfo && (<View style={styles.content}>
                    <Text style={styles.label}>نام دستگاه: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'نام دستگاه'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>سریال دستگاه: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'سریال دستگاه'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>مدل دستگاه: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'مدل دستگاه'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>شماره ترمینال: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'شماره ترمینال'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <View style={styles.buttonsView}>
                        <ScrollView horizontal={true} inverted={true} style={styles.buttonScrollView}>
                            <TouchableOpacity style={styles.submitButton} onPress={notWorking}>
                                <Ionicons style={styles.buttonIcon} name="desktop-outline" />
                                <Text style={styles.buttonText}>آخرین درخواست‌های دستگاه</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.submitButton} onPress={notWorking}>
                                <Ionicons style={styles.buttonIcon} name="bookmark-outline" />
                                <Text style={styles.buttonText}>آخرین پیکر بندی دستگاه</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>)}
                <TouchableOpacity style={styles.titleView} onPress={toggleWorkflow}>
                    <Text style={styles.title}>گردش کار</Text>
                    <Ionicons style={styles.chevron} name={workflow == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
                </TouchableOpacity>
                {workflow && (<View style={styles.content}>
                    <Text style={styles.label}>گردش کار: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'گردش کار'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>دفتر: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'دفتر'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>زمان: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'زمان'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>کارشناس: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'کارشناس'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>اقدام: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'اقدام'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>شرح: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'شرح'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <View style={styles.buttonsView}>
                        <ScrollView horizontal={true} inverted={true} style={styles.buttonScrollView}>
                            <TouchableOpacity style={styles.submitButton} onPress={notWorking}>
                                <Ionicons style={styles.buttonIcon} name="refresh" />
                                <Text style={styles.buttonText}>گردش کار</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>)}
                <TouchableOpacity style={styles.titleView} onPress={toggleslaInfo}>
                    <Text style={styles.title}>مهلت درخواست</Text>
                    <Ionicons style={styles.chevron} name={slaInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
                </TouchableOpacity>
                {slaInfo && (<View style={styles.content}>
                    <Text style={styles.label}>شماره قرارداد: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'شماره قرارداد'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>زمان سپری شده: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'زمان سپری شده'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                    <Text style={styles.label}>مهلت زمان انجام درخواست: </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={'مهلت زمان انجام درخواست'}
                        placeholderTextColor={colors.text}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        returnKeyType={'next'}
                        keyboardType={'default'}
                        value={''}
                        // onChange={(text) => {
                        //     console.log('hello')
                        // }}
                    />
                </View>)}
                <TouchableOpacity style={styles.titleView} onPress={toggleserviceStateInfo}>
                    <Text style={styles.title}>وضعیت سرویس</Text>
                    <Ionicons style={styles.chevron} name={serviceStateInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
                </TouchableOpacity>
                {serviceStateInfo && (<View style={styles.content}>
                    {stateHistory.map((item, index) => (
                        <View key={index} style={styles.stateItemView}>
                            <Text style={styles.stateItemTitle}>{item.state}</Text>
                            <View style={styles.stateDateView}>
                                <Ionicons style={styles.dateIcon} name="calendar-outline" size={30} color={colors.text} />
                                <Text style={styles.stateDateText}>{item.date}</Text>
                                <Ionicons style={styles.clockIcon} name="time-outline" size={30} color={colors.text} />
                                <Text style={styles.stateClockText}>{item.time}</Text>
                            </View>
                            <Text style={styles.stateDescText}>{item.description}</Text>
                        </View>
                    ))}
                </View>)}
                <TouchableOpacity style={styles.titleView} onPress={toggleactionsInfo}>
                    <Text style={styles.title}>اقدامات</Text>
                    <Ionicons style={styles.chevron} name={actionsInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
                </TouchableOpacity>
                {actionsInfo && (<View style={styles.content}>
                    {actionsHistory.map((item, index) => (
                        <View key={index} >
                            <TouchableOpacity style={styles.actionHistoryItem} onPress={() => {
                                const updatedActions = actionsHistory.map((action, i) =>
                                    i === index ? { ...action, showAll: !action.showAll } : action
                                );
                                // Update the state with the new array
                                setactionsHistory(updatedActions);
                            }}>
                                <View style={styles.actionHistoryRight}>
                                    <Text style={styles.actionHistoryTitle}>{item.actionType}</Text>
                                    <Text style={styles.actionHistoryTitle2}>{item.workflow}</Text>
                                </View>
                                <View style={styles.actionHistoryLeft}>
                                    <Text style={styles.actionResult}>{item.result}</Text>
                                    <Text style={styles.actionDateText}>{item.actionDate}</Text>
                                </View>
                            </TouchableOpacity>
                            {item.showAll && (
                                <View style={styles.actionMoreInfo}>
                                    <View style={styles.actionMoreInfoItem}>
                                        <Text style={styles.actionMoreInfoTitle}>تاریخ اقدام:</Text>
                                        <Text style={styles.actionMoreInfoText}>{item.actionDate}</Text>
                                    </View>
                                    <View style={styles.actionMoreInfoItem}>
                                        <Text style={styles.actionMoreInfoTitle}>از ساعت:</Text>
                                        <Text style={styles.actionMoreInfoText}>{item.fromTime}</Text>
                                    </View>
                                    <View style={styles.actionMoreInfoItem}>
                                        <Text style={styles.actionMoreInfoTitle}>تا ساعت:</Text>
                                        <Text style={styles.actionMoreInfoText}>{item.toTime}</Text>
                                    </View>
                                    <View style={styles.actionMoreInfoItem}>
                                        <Text style={styles.actionMoreInfoTitle}>نوع اقدام:</Text>
                                        <Text style={styles.actionMoreInfoText}>{item.actionType}</Text>
                                    </View>
                                    <View style={styles.actionMoreInfoItem}>
                                        <Text style={styles.actionMoreInfoTitle}>نتیجه اقدام:</Text>
                                        <Text style={styles.actionMoreInfoText}>{item.result}</Text>
                                    </View>
                                    <View style={styles.actionMoreInfoItem}>
                                        <Text style={styles.actionMoreInfoTitle}>علت اقدام ناموفق:</Text>
                                        <Text style={styles.actionMoreInfoText}>{item.reasonOfFailure}</Text>
                                    </View>
                                    <View style={styles.actionMoreInfoItem}>
                                        <Text style={styles.actionMoreInfoTitle}>مشتری:</Text>
                                        <Text style={styles.actionMoreInfoText}>{item.customer}</Text>
                                    </View>
                                    <View style={styles.actionMoreInfoItem}>
                                        <Text style={styles.actionMoreInfoTitle}>توضیحات:</Text>
                                        <Text style={styles.actionMoreInfoText}>{item.description}</Text>
                                    </View>
                                    <View style={styles.actionMoreInfoItem}>
                                        <Text style={styles.actionMoreInfoTitle}>گردش کار:</Text>
                                        <Text style={styles.actionMoreInfoText}>{item.workflow}</Text>
                                    </View>
                                </View>
                            )}
                        </View>
                    ))}
                </View>)}
                <TouchableOpacity style={styles.titleView} onPress={togglesupervisorInfo}>
                    <Text style={styles.title}>کارشناس</Text>
                    <Ionicons style={styles.chevron} name={supervisorInfo == true ? "caret-up" : "caret-down"} size={30} color={colors.dark} />
                </TouchableOpacity>
                {supervisorInfo && (<View style={styles.content}>
                    {supervisors.map((item, index) => (
                        <View key={index} style={styles.supervisorItem}>
                            <Text style={styles.supervisorName}>{item.name}</Text>
                            <Text style={styles.supervisorType}>{item.type}</Text>
                        </View>
                    ))}
                </View>)}
            </ScrollView>
            <View style={styles.buttonsView}>
                <ScrollView horizontal={true} inverted={true} style={styles.buttonScrollView}>
                    <TouchableOpacity style={styles.submitButton} onPress={notWorking}>
                        <Ionicons style={styles.buttonIcon} name="shuffle" />
                        <Text style={styles.buttonText}>بازگشت کار</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitButton} onPress={notWorking}>
                        <Ionicons style={styles.buttonIcon} name="chatbubbles" />
                        <Text style={styles.buttonText}>ارجاع کار/تخصیص کارشناس</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitButton} onPress={notWorking}>
                        <Ionicons style={styles.buttonIcon} name="stats-chart" />
                        <Text style={styles.buttonText}>وضعیت سرویس</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            {isLoading && (
                <View style={styles.blackModal}>
                    <View style={styles.loadingView}>
                        <ActivityIndicator size="large" color="#00ff00" />
                        <Text style={styles.loadingText}>در حال ذخیره اطلاعات...</Text>
                    </View>
                </View>
            )}
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
    content: {
        // marginBottom: 20,
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
    buttonsView: {
        flexDirection: 'row-reverse',
        width: '90%',
        margin: 'auto',
    },
    submitButton: {
        backgroundColor: colors.blue,
        paddingHorizontal: 20,
        paddingVertical: 13,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 5,
        textAlign: 'center',
        flexDirection: 'row-reverse',
        direction: 'rtl',
    },
    buttonIcon: {
        color: colors.white,
        textAlign: 'center',
        paddingLeft: 10,
        fontSize: 16,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
    },
    buttonScrollView: {
        direction: 'rtl',
        textAlign: 'right',
    },
    stateItemView: {
        width: '90%',
        margin: 'auto',
        marginBottom: 10,
        backgroundColor: colors.skyblue,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    stateItemTitle: {
        fontFamily: 'iransans',
        fontSize: 16,
        fontWeight: 'bold',
        position: 'relative',
        color: colors.black
    },
    stateDateView: {
        flexDirection: 'row-reverse',
        position: 'absolute',
        left: 10,
        top: 10,
    },
    dateIcon: {
        fontSize: 12,
        paddingTop: 3,
        paddingLeft: 5,
        paddingRight: 10,
        color: colors.gray,
    },
    stateDateText: {
        fontFamily: 'iransans',
        fontSize: 12,
        color: colors.gray,
    },
    clockIcon: {
        fontSize: 12,
        paddingTop: 3,
        paddingLeft: 5,
        paddingRight: 10,
        color: colors.gray,
    },
    stateClockText: {
        fontFamily: 'iransans',
        fontSize: 12,
        color: colors.gray,
    },
    stateDescText: {
        fontFamily: 'iransans',
        fontSize: 14,
        color: colors.lightDark,
        paddingTop: 3,
    },
    blackModal: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: colors.modal,
        zIndex: 100,
        alignItems: 'center',
        alignContent: 'center',
    },
    loadingView: {
        marginTop: 350,
    },
    loadingText: {
        fontFamily: 'iransans',
        fontSize: 15,
        color: colors.white,
        textAlign: 'center',
    },
    actionHistoryItem: {
        backgroundColor: colors.skyblue,
        width: '90%',
        marginHorizontal: 'auto',
        borderRadius: 6,
        marginBottom: 10,
        flexDirection: 'row-reverse',
    },
    actionHistoryRight: {
        flex: 1,
        paddingHorizontal: 20,
    },
    actionHistoryTitle: {
        fontFamily: 'iransans',
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.black,
        paddingTop: 10,
    },
    actionHistoryTitle2: {
        fontFamily: 'iransans',
        fontSize: 14,
        paddingTop: 3,
    },
    actionHistoryLeft: {
        flex: 1,
        paddingHorizontal: 20,
    },
    actionDateText: {
        fontSize: 12,
    },
    actionResult: {
        textAlign: 'left',
        fontFamily: 'iransans',
        fontSize: 14,
        paddingTop: 10,
    },
    actionMoreInfo: {
        width: '80%',
        marginHorizontal: 'auto',
        paddingBottom: 20,
    },
    actionMoreInfoItem: {
        flexDirection: 'row-reverse',
        marginBottom: 7,
    },
    actionMoreInfoTitle: {
        flex: 1,
        fontFamily: 'iransansbold',
        fontSize: 15,
    },
    actionMoreInfoText: {
        flex: 1,
        textAlign: 'right',
        fontFamily: 'iransans',
        fontSize: 15,
    },
    supervisorItem: {
        flexDirection: 'row-reverse',
        width: '90%',
        marginHorizontal: 'auto',
        marginBottom: 8,
    },
    supervisorName: {
        flex: 1,
        textAlign: 'center',
        borderColor: colors.lightgray,
        borderWidth: 1,
        fontFamily: 'iransansbold',
        fontSize: 15,
        paddingVertical: 5,
        borderLeftWidth: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
    },
    supervisorType: {
        flex: 1,
        textAlign: 'center',
        borderColor: colors.lightgray,
        borderWidth: 1,
        fontFamily: 'iransans',
        fontSize: 15,
        paddingVertical: 5,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
});

export default RequestView;