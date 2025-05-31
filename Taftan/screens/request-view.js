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
import { getRequestDetail } from '../services/req-detail';
import LoadingView from '../components/loading';
import RequestActions from '../components/req-actions';
import { getUserList } from '../services/req-load-user-list';
import ReqInfoView from '../components/reqview-reqinfo';
import ReqDamageView from '../components/reqview-damageInfo';
import ReqDeviceInfo from '../components/reqview-deviceInfo';
import ReqWorkFlowInfo from '../components/reqview-workflowinfo';
import ReqSLAInfo from '../components/reqview-SLAinfo';
import ReqServiceStateInfo from '../components/reqview-servicestateinfo';
import ReqActionInfo from '../components/reqview-actionsinfo';
import ReqExpertsInfo from '../components/reqview-expertsinfo';
import { loadRequestExpertList } from '../services/req-load-request-expert-list';
import { getRefrenceCauseList } from '../services/refrence-cause-list';
import { getWorkCausesListTitle } from '../services/req-work-cause-list-title';
import { loadDeviceRequestList } from '../services/device-load-request-list';
import { loadRequestHistoryList } from '../services/req-load-request-history-list';
import { loadRequestReportActionList } from '../services/report-load-action-list';
import { GetActionTypeList } from '../services/action-get-type-list';
import { GetBranchDetail } from '../services/branch-get-detail';
import { GetDeviceDetail } from '../services/device-detail';
import { GetAreaDetail } from '../services/area-detail';
import { LoadAllowedRequestAction } from '../services/req-allowed-actions';
import ReqInstallationView from '../components/reqview-installationInfo';
import ReqSiteView from '../components/reqview-siteInfo';
import ReqProjectView from '../components/reqview-projectInfo';
import ReqPeriodicView from '../components/reqview-periodicInfo';
import { getAuthData } from '../services/auth';

const DamageReqView = (props) => {
    var { item } = props.route.params;
    var reqInfo = props.route.params.item;
    var [requestDetail, setRequestDetail] = useState(null);
    var [isLoading, setIsLoading] = useState(true);
    var [isLoadingSave, setIsLoadingSave] = useState(false);
    var [reqinfoEN, setReqinfoEN] = useState(false);
    var [damageInfo, setDamageInfo] = useState(false);
    var [installationInfo, setinstallationInfo] = useState(false);
    var [projectInfo, setprojectInfo] = useState(false);
    var [periodicInfo, setperiodicInfo] = useState(false);
    var [siteInfo, setsiteInfo] = useState(false);
    var [deviceInfo, setDeviceInfo] = useState(false);
    var [workflow, setWorkflow] = useState(false);
    var [slaInfo, setslaInfo] = useState(false);
    var [serviceStateInfo, setserviceStateInfo] = useState(false);
    var [actionsInfo, setactionsInfo] = useState(false);
    var [supervisorInfo, setsupervisorInfo] = useState(false);
    var [userList, setUserList] = useState([]);
    var [refrenceCauseList, setrefrenceCauseList] = useState([]);
    var [workCausesListTitle, setWorkCausesListTitle] = useState([]);
    var [lastRequestList, setLastRequestList] = useState([]);
    var [reqHistoryList, setreqHistoryList] = useState([]);
    var [reqActionList, setreqActionList] = useState([]);
    var [reqExpertList, setreqExpertList] = useState([]);
    var [workCauseList, setworkCauseList] = useState([]);
    var [actionTypeList, setactionTypeList] = useState([]);
    var [branchInfo, setbranchInfo] = useState([]);
    var [deviceDetail, setdeviceDetail] = useState([]);
    var [areaDetail, setareaDetail] = useState({});
    var [allowdActionList, setallowdActionList] = useState([]);
    var [userToken, setuserToken] = useState(null);
    
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
    const togglesiteInfo = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setsiteInfo(!siteInfo);
    };
    const toggleinstallInfo = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setinstallationInfo(!installationInfo);
    };
    const toggleprojectInfo = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setprojectInfo(!projectInfo);
    };
    const toggleperiodicInfo = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setperiodicInfo(!periodicInfo);
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
    const updateActionList = async (setreqActionList) => {
        result = await loadRequestReportActionList(item.requestId);
        if (result.success) {
            setreqActionList(result.data.Data);
        } else ToastAndroid.show('لیست اقدامات درخواست بارگیری نشد.', ToastAndroid.SHORT);
    }
    const sendRequest = async () => {
        // const authData = await getAuthData();
        // userToken = authData.token;
        // setuserToken(userToken);

        var result = await getRequestDetail(reqInfo.requestId, props.navigation);
        if (result.success) {
            if (result.data != 'داده پیدا نشد') {
                requestDetail = result.data;
                setRequestDetail(requestDetail);
            }
            else {
                ToastAndroid.show('داده پیدا نشد!', ToastAndroid.SHORT);
                props.navigation.goBack();
                return;
            }
        } else ToastAndroid.show('جزئیات درخواست دریافت نشد', ToastAndroid.SHORT);

        result = await loadRequestExpertList(reqInfo.requestId);
        if (result.success) {
            setreqExpertList(result.data.Data);
        } else ToastAndroid.show(result.error, ToastAndroid.SHORT);

        result = await getUserList(requestDetail.requestInfo.areaId, requestDetail.requestInfo.requestId);
        if (result.success) {
            setUserList(result.data);
        } else ToastAndroid.show('لیست کاربران دریافت نشد', ToastAndroid.SHORT);

        result = await getRefrenceCauseList();
        if (result.success) {
            setrefrenceCauseList(result.data);
        } else ToastAndroid.show('لیست علت خرابی دریافت نشد', ToastAndroid.SHORT);

        result = await getWorkCausesListTitle();
        if (result.success) {
            workCausesListTitle = result.data;
            setWorkCausesListTitle(workCausesListTitle);
            workCauseList = [];
            for (var i = 0; i < workCausesListTitle.length; i++) workCauseList.push({ label: workCausesListTitle[i].description, value: workCausesListTitle[i].id });
            setworkCauseList(workCauseList);
        } else ToastAndroid.show('لیست وضعیت سرویس بارگیری نشد.', ToastAndroid.SHORT);

        result = await loadDeviceRequestList(requestDetail.requestInfo.deviceId);
        if (result.success) {
            setLastRequestList(result.data.Data);
        } else ToastAndroid.show('لیست درخواست‌های دستگاه بارگیری نشد.', ToastAndroid.SHORT);

        result = await loadRequestHistoryList(reqInfo.requestId);
        if (result.success) {
            setreqHistoryList(result.data.Data);
        } else ToastAndroid.show('تاریخچه درخواست های دستگاه بارگیری نشد.', ToastAndroid.SHORT);

        result = await loadRequestReportActionList(reqInfo.requestId);
        if (result.success) {
            setreqActionList(result.data.Data);
        } else ToastAndroid.show('لیست اقدامات درخواست بارگیری نشد.', ToastAndroid.SHORT);

        result = await GetActionTypeList();
        if (result.success) {
            actionTypeList = []
            for (var i = 0; i < result.data.length; i++) actionTypeList.push({ label: result.data[i].title, value: result.data[i].id });
            setactionTypeList(actionTypeList);
        } else ToastAndroid.show('لیست اقدامات درخواست بارگیری نشد.', ToastAndroid.SHORT);

        result = await GetBranchDetail(requestDetail.requestInfo.branchId);
        if (result.success) {
            setbranchInfo(result.data);
        } else ToastAndroid.show('اطلاعات شعبه بارگیری نشد.', ToastAndroid.SHORT);

        result = await GetDeviceDetail(requestDetail.requestInfo.deviceId, props.navigation);
        if (result.success) {
            setdeviceDetail(result.data);
        } else ToastAndroid.show('اطلاعات دستگاه بارگیری نشد.', ToastAndroid.SHORT);

        result = await GetAreaDetail(requestDetail.requestInfo.areaId);
        if (result.success) {
            setareaDetail(result.data);
        } else ToastAndroid.show('اطلاعات دفتر بارگیری نشد.', ToastAndroid.SHORT);

        result = await LoadAllowedRequestAction(reqInfo.requestId, props.navigation);
        if (result.success) {
            setallowdActionList(result.data);
        } else ToastAndroid.show('لیست دسترسی‌ها بارگیری نشد.', ToastAndroid.SHORT);

        setIsLoading(false);
    }
    useEffect(() => {
        sendRequest();
    }, [])
    return (
        <View style={styles.container}>
            <LoadingView isLoading={isLoading} text={'در حال بارگیری...'} />
            <NavBar rightCallback={saveEverything} leftCallback={handleSearchPress} title="جزئیات درخواست" leftIcon="arrow-back" rightIcon="save-outline" />

            <ScrollView style={styles.contents} nestedScrollEnabled={false} keyboardShouldPersistTaps="handled">
                <ReqInfoView toggleReqinfoEN={toggleReqinfoEN} reqinfoEN={reqinfoEN} requestDetail={requestDetail} branchInfo={branchInfo} />
                {requestDetail && (requestDetail.requestInfo.serviceGroup == 1 || requestDetail.requestInfo.serviceGroup == 8) && (
                    <ReqDamageView toggleDamageInfo={toggleDamageInfo} damageInfo={damageInfo} requestDetail={requestDetail} />
                )}
                {requestDetail && (requestDetail.requestInfo.serviceGroup == 3) && (
                    <ReqInstallationView toggleinstallInfo={toggleinstallInfo} installInfo={installationInfo} requestDetail={requestDetail} />
                )}
                {requestDetail && (
                    requestDetail.requestInfo.serviceGroup == 6 || 
                    requestDetail.requestInfo.serviceGroup == 9 || 
                    requestDetail.requestInfo.serviceGroup == 10 || 
                    requestDetail.requestInfo.serviceGroup == 11) && (
                    <ReqSiteView togglesiteInfo={togglesiteInfo} siteInfo={siteInfo} requestDetail={requestDetail} />
                )}
                {requestDetail && (requestDetail.requestInfo.serviceGroup == 7) && (
                    <ReqProjectView toggleprojectInfo={toggleprojectInfo} projectInfo={projectInfo} requestDetail={requestDetail} />
                )}
                {requestDetail && (requestDetail.requestInfo.serviceGroup == 2) && (
                    <ReqPeriodicView toggleperiodicInfo={toggleperiodicInfo} periodicInfo={periodicInfo} requestDetail={requestDetail} />
                )}
                <ReqDeviceInfo toggleDeviceInfo={toggleDeviceInfo} deviceInfo={deviceInfo} requestDetail={requestDetail} lastRequestList={lastRequestList} deviceDetail={deviceDetail} navigation={props.navigation} />
                <ReqWorkFlowInfo toggleWorkflow={toggleWorkflow} workflow={workflow} requestDetail={requestDetail} reqHistoryList={reqHistoryList} areaDetail={areaDetail} />
                <ReqSLAInfo toggleslaInfo={toggleslaInfo} slaInfo={slaInfo} requestDetail={requestDetail} />
                <ReqServiceStateInfo toggleserviceStateInfo={toggleserviceStateInfo} serviceStateInfo={serviceStateInfo} requestDetail={requestDetail}/>
                <ReqActionInfo toggleactionsInfo={toggleactionsInfo} actionsInfo={actionsInfo} requestDetail={requestDetail} actionsHistory={reqActionList} setactionsHistory={setreqActionList} navigation={props.navigation} />
                <ReqExpertsInfo togglesupervisorInfo={togglesupervisorInfo} supervisorInfo={supervisorInfo} requestDetail={requestDetail} reqExpertList={reqExpertList} />
            </ScrollView>

            <RequestActions notWorking={notWorking} item={item} userList={userList} refrenceCauseList={refrenceCauseList} workCauseList={workCauseList} setworkCauseList={setworkCauseList} actionTypeList={actionTypeList} setactionTypeList={setactionTypeList} allowdActionList={allowdActionList} updateActionList={updateActionList} setreqActionList={setreqActionList} navigation={props.navigation} reloadPage={sendRequest} requestDetail={requestDetail} reqExpertList={reqExpertList} />
            <LoadingView isLoading={isLoadingSave} text={'در حال ذخیره اطلاعات...'} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: colors.white,
        paddingBottom: 5,
    },
    contents: {
        width: '100%',
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        paddingVertical: 15,
    },
});

export default DamageReqView;