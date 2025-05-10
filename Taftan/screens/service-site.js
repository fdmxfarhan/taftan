import React, { useEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
import LoadingView from '../components/loading';
import { submitSiteRequest } from '../services/ser-site';
import NotConnected from '../components/no-connection';
import getSLAColor from '../config/getSLAColor';
import ReqGridController from '../components/req-grid-controller';
import styles from '../styles/requestList';
import SiteRequestItem from '../components/SiteRequestItem';

const ServiceSite = (props) => {    
    const [menuVisible, setMenuVisible] = useState(false);
    const [siteRequests, setSiteRequests] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [serviceConnected, setServiceConnected] = useState(true);
    const [skipValue, setskipValue] = useState(1);
    const [rowsValue, setrowsValue] = useState(10);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        console.log('Search clicked');
    };

    const sendRequest = async (skip, take) => {
        setIsLoading(true);
        var result = await submitSiteRequest(skip, take, props.navigation);
        if(result.success){
            setSiteRequests(result.data.Data);
            setIsLoading(false);
            setServiceConnected(true);
        }
        else{
            ToastAndroid.show('عدم اتصال به سرویس.', ToastAndroid.LONG);
            setIsLoading(false);
            setServiceConnected(false);
        }
    }
    useEffect(() => {
        sendRequest(skipValue, rowsValue);
    }, []);

    const handleItemPress = (item) => {
        props.navigation.navigate('DamageReqView', { item });
        // props.navigation.navigate('RequestView', { item }); // Navigate to 'Request' screen, passing the item as a prop
    };

    const renderItem = ({ item }) => (
        <SiteRequestItem
            item={item}
            handleItemPress={handleItemPress}
            openRequestReport={() => { }}
            getSLAColor={getSLAColor}
        />
    );

    return (
        <View style={styles.container}>
            <NavBar
                rightCallback={toggleMenu} 
                leftCallback={handleSearchPress} 
                title="درخواست‌های سایت سازی" 
                leftIcon="search"
                rightIcon="menu"
            />
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
                }}/>
            <NotConnected serviceConnected={serviceConnected} refresh={sendRequest} />
            <FlatList
                data={siteRequests}
                renderItem={renderItem}
                keyExtractor={item => item.requestId}
            />
            <LoadingView isLoading={isLoading} text={'در حال بارگیری...'} />
            <SideMenu isVisible={menuVisible} onClose={toggleMenu} navigation={props.navigation}/>
        </View>
    );
}


export default ServiceSite;