import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';
import firebase from '@react-native-firebase/app';

const firebaseConfig = {
    
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Home = (props) => {    
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        console.log('Search clicked');
    };

    const damageRequests = [
        { id: '1' , stateColor: 'green', workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
        { id: '2' , stateColor: 'red'  , workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
        { id: '3' , stateColor: 'red'  , workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
        { id: '4' , stateColor: 'red'  , workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
        { id: '5' , stateColor: 'red'  , workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
        { id: '6' , stateColor: 'red'  , workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
        { id: '7' , stateColor: 'red'  , workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
        { id: '8' , stateColor: 'red'  , workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
        { id: '9' , stateColor: 'red'  , workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
        { id: '10', stateColor: 'red'  , workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
        { id: '11', stateColor: 'red'  , workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
        { id: '12', stateColor: 'red'  , workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
        { id: '13', stateColor: 'red'  , workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
        { id: '14', stateColor: 'red'  , workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
        { id: '15', stateColor: 'red'  , workNum: '101575', deviceName: 'شعبه بلوار جمهوری', date: {year: 1403, month: 1, day: 21}, terminalNum: '270234', model: 'Wincor 2050 Xe USB', customer: 'پاسارگاد', branch: 'شعبه ستاره یزد', damageTitle: 'خرابی کامپیوتر', currentUser: 'لیلا شریفی', submitedBy: 'فاطمه حمزه', repeat: 0, state: 'ارجاع به دفتر', sla: 24},
    ];

    const handleItemPress = (item) => {
        props.navigation.navigate('RequestView', { item }); // Navigate to 'Request' screen, passing the item as a prop
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemContainer}>
            <View style={[styles.stateCircle, {backgroundColor: item.stateColor == 'red'? colors.red : colors.green}]}/>
            <View style={styles.listcol1}>
                <Text style={styles.deviceName}>{item.deviceName}</Text>
                <Text style={styles.textTitle}>{item.workNum}</Text>
                <Text style={styles.date}>{item.date.year}/{item.date.month}/{item.date.day}</Text>
            </View>
            <View style={styles.listcol2}>
                <Text>{item.customer}</Text>
            </View>
            <View style={styles.listcol3}>
                <Text style={styles.damageTitle}>{item.damageTitle}</Text>
                <Text style={styles.state}>{item.state}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <NavBar
                rightCallback={toggleMenu} 
                leftCallback={handleSearchPress} 
                title="درخواست‌های خرابی" 
                leftIcon="search"
                rightIcon="menu"
            />
            <FlatList
                data={damageRequests}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity style={styles.addBtn}>
                <Text>+</Text>
            </TouchableOpacity>
            <SideMenu isVisible={menuVisible} onClose={toggleMenu} navigation={props.navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    itemContainer: {
        padding: 15,
        marginVertical: 0,
        backgroundColor: colors.lightergray,
        borderColor: colors.lightgray,
        borderWidth: 1,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        direction: 'rtl',
    },
    deviceName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        fontFamily: 'iransans',
        paddingRight: 5,
    },
    textTitle: {
        fontSize: 16,
        fontFamily: 'iransans',
        textAlign: 'right',
        paddingRight: 5,
    },
    pageTitle: {
        color: colors.white,
        fontFamily: 'iransans',
        textAlign: 'center',
        width: '100%',
        fontSize: 16,
    },
    date: {
        textAlign: 'right',
        paddingRight: 5,
    },
    stateCircle:{
        position: 'absolute',
        top: 15,
        left: 20,
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    listcol1: {
        flex: 4,
    },
    listcol2: {
        flex: 1,
    },
    listcol3: {
        flex: 2,
    },
    damageTitle: {
        textAlign: 'left',
        paddingLeft: 10,
    },
    state: {
        textAlign: 'left',
        paddingLeft: 10,
    },
});

export default Home;