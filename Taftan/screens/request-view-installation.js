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
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
import { FlatList } from 'react-native-gesture-handler';
import Popup from '../components/popup';
import { getRequestDetail } from '../services/req-detail';
import LoadingView from '../components/loading';
import RequestActions from '../components/req-actions';
import DropDownPicker from 'react-native-dropdown-picker';
import PersianDatePicker from '../components/persian-date-picker';
import NewActionPopup from '../components/rec-popup-newaction';
import LastConfPopup from '../components/rec-popup-lastconf';
import AssignPopup from '../components/rec-popup-assign';
import { getRequestExpertlist } from '../services/req-load-request-expert-list';
import { getUserList } from '../services/req-load-user-list';
import ReqInfoView from '../components/reqview-reqinfo';
import ReqDamageView from '../components/reqview-damageInfo';
import ReqDeviceInfo from '../components/reqview-deviceInfo';
import ReqWorkFlowInfo from '../components/reqview-workflowinfo';
import ReqSLAInfo from '../components/reqview-SLAinfo';
import ReqServiceStateInfo from '../components/reqview-servicestateinfo';
import ReqActionInfo from '../components/reqview-actionsinfo';
import ReqExpertsInfo from '../components/reqview-expertsinfo';

const InstallationReqView = (props) => {
    var { item } = props.route.params;
    var [requestDetail, setRequestDetail] = useState(null);
    var [isLoading, setIsLoading] = useState(true);
    var [isLoadingSave, setIsLoadingSave] = useState(false);
    var [reqinfoEN, setReqinfoEN] = useState(false);
    var [damageInfo, setDamageInfo] = useState(false);
    var [deviceInfo, setDeviceInfo] = useState(false);
    var [workflow, setWorkflow] = useState(false);
    var [slaInfo, setslaInfo] = useState(false);
    var [serviceStateInfo, setserviceStateInfo] = useState(false);
    var [actionsInfo, setactionsInfo] = useState(false);
    var [supervisorInfo, setsupervisorInfo] = useState(false);
    var [actionPopupEN, setActionPopupEN] = useState(false);
    var [assignPopupEN, setAssignPopupEN] = useState(false);
    var [userList, setUserList] = useState([]);
    
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
        setIsLoadingSave(true);
        setTimeout(() => {
            setIsLoadingSave(false); // Stops loading after 3 seconds
            ToastAndroid.show('اطلاعات ذخیره شد.', ToastAndroid.SHORT);
        }, 3000);
    };
    const handleSearchPress = () => {
        props.navigation.goBack();
    };
    const notWorking = () => {
        ToastAndroid.show('این آپشن هنوز کار نمیکنه!!.', ToastAndroid.SHORT);
    };
    useEffect(() => {
        const sendRequest = async () => {
            var result = await getRequestDetail(item.requestId);
            if(result.success){
                requestDetail = result.data;
                setRequestDetail(requestDetail);
                setIsLoading(false);
            }else ToastAndroid.show('عدم اتصال به سرویس', ToastAndroid.SHORT);
            
            result = await getRequestExpertlist(item.requestId);
            if(result.success){
                // setreqExpertList(result.data.Data)
            }else ToastAndroid.show('لیست کارشناسان دریافت نشد', ToastAndroid.SHORT);
            
            result = await getUserList(requestDetail.requestInfo.areaId, requestDetail.requestInfo.requestId);
            if(result.success){
                userList = result.data
                for (let i = 0; i < userList.length; i++) userList[i].id = i;
                setUserList(userList);
            }else ToastAndroid.show('عدم اتصال به سرویس', ToastAndroid.SHORT);
        }
        sendRequest();
    }, [])
    return (
        <View style={styles.container}>
            <LoadingView isLoading={isLoading} text={'در حال بارگیری...'} />
            <NavBar rightCallback={saveEverything} leftCallback={handleSearchPress} title="درخواست‌های خرابی" leftIcon="arrow-back" rightIcon="save-outline" />
            <NewActionPopup actionPopupEN={actionPopupEN} setActionPopupEN={setActionPopupEN} requestItem={item} />
            <AssignPopup assignPopupEN={assignPopupEN} setAssignPopupEN={setAssignPopupEN} reqInfo={requestDetail} userList={userList} />
            
            <ScrollView style={styles.contents} keyboardShouldPersistTaps="handled" scrollEnabled={true}>
                <ReqInfoView toggleReqinfoEN={toggleReqinfoEN} reqinfoEN={reqinfoEN} item={item} requestDetail={requestDetail}/> 
                {/* <ReqDamageView toggleDamageInfo={toggleDamageInfo} damageInfo={damageInfo} item={item} requestDetail={requestDetail}/>  */}
                {/* <ReqDeviceInfo toggleDeviceInfo={toggleDeviceInfo} deviceInfo={deviceInfo} item={item} requestDetail={requestDetail}/>  */}
                <ReqWorkFlowInfo toggleWorkflow={toggleWorkflow} workflow={workflow} item={item} requestDetail={requestDetail}/> 
                <ReqSLAInfo toggleslaInfo={toggleslaInfo} slaInfo={slaInfo} item={item} requestDetail={requestDetail}/> 
                <ReqServiceStateInfo toggleserviceStateInfo={toggleserviceStateInfo} serviceStateInfo={serviceStateInfo} item={item} requestDetail={requestDetail}/> 
                <ReqActionInfo toggleactionsInfo={toggleactionsInfo} actionsInfo={actionsInfo} item={item} requestDetail={requestDetail}/> 
                <ReqExpertsInfo togglesupervisorInfo={togglesupervisorInfo} supervisorInfo={supervisorInfo} item={item} requestDetail={requestDetail}/> 
            </ScrollView>

            <RequestActions notWorking={notWorking} addActionHandler={() => setActionPopupEN(true)} onAssignClick={() => setAssignPopupEN(true)} />
            <LoadingView isLoading={isLoadingSave} text={'در حال ذخیره اطلاعات...'}/>
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
});

export default InstallationReqView;