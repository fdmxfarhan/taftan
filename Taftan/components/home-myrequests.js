import React, { useEffect, useRef, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Animated,
    ScrollView
} from 'react-native';
import colors from './colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import ReqGridController from './req-grid-controller';
import LoadingView from './loading';
import { loadMyMessageBoxList } from '../services/message-my-list';
import { loadMyDamageRequestList } from '../services/req-my-requests';
import getSLAColor from '../config/getSLAColor';

const MyRequestsList = ({ navigation, myRequestsList, setmyRequestsList }) => {
    const [skipValue, setskipValue] = useState(1);
    const [rowsValue, setrowsValue] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [DamageFilterEN, setDamageFilterEN] = useState(true);
    const [InstallFilterEN, setInstallFilterEN] = useState(false);
    const [siteFilterEN, setsiteFilterEN] = useState(false);
    const [projectFilterEN, setprojectFilterEN] = useState(false);
    const [periodicFilterEN, setperiodicFilterEN] = useState(false);
    useEffect(() => {

    })
    const handleItemPress = (item) => {
        navigation.navigate('DamageReqView', { item });
    };
    
    return (
        <View>
            <ScrollView horizontal={true} style={styles.typeFiltersView} inverted={true}>
                <TouchableOpacity style={[styles.typeFiltersButton, { backgroundColor: DamageFilterEN ? colors.blue : colors.white }]} onPress={() => setDamageFilterEN(!DamageFilterEN)}>
                    <Text style={[styles.typeFiltersText, { color: DamageFilterEN ? colors.white : colors.blue }]}>خرابی</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.typeFiltersButton, { backgroundColor: InstallFilterEN ? colors.blue : colors.white }]} onPress={() => setInstallFilterEN(!InstallFilterEN)}>
                    <Text style={[styles.typeFiltersText, { color: InstallFilterEN ? colors.white : colors.blue }]}>نصب</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.typeFiltersButton, { backgroundColor: siteFilterEN ? colors.blue : colors.white }]} onPress={() => setsiteFilterEN(!siteFilterEN)}>
                    <Text style={[styles.typeFiltersText, { color: siteFilterEN ? colors.white : colors.blue }]}>سایت سازی</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.typeFiltersButton, { backgroundColor: projectFilterEN ? colors.blue : colors.white }]} onPress={() => setprojectFilterEN(!projectFilterEN)}>
                    <Text style={[styles.typeFiltersText, { color: projectFilterEN ? colors.white : colors.blue }]}>پروژه</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.typeFiltersButton, { backgroundColor: periodicFilterEN ? colors.blue : colors.white }]} onPress={() => setperiodicFilterEN(!periodicFilterEN)}>
                    <Text style={[styles.typeFiltersText, { color: periodicFilterEN ? colors.white : colors.blue }]}>دوره ای</Text>
                </TouchableOpacity>
            </ScrollView>
            {/* <ReqGridController
                currentPage={skipValue}
                skipValue={skipValue}
                setskipValue={setskipValue}
                setData={(skip, rows) => {
                    setskipValue(skip);
                    setrowsValue(rows);
                    sendRequest(skip, rows);
                }} /> */}
            <ScrollView style={styles.scrollviwe}>
                <View style={styles.container}>
                    {myRequestsList.map((item, index) => (
                        <TouchableOpacity key={item.id} onPress={() => handleItemPress(item)} style={styles.itemContainer}>
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
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        direction: 'rtl',
        textAlign: 'right',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 300,
    },
    typeFiltersView: {
        marginVertical: 10,
        flexDirection: 'row-reverse',
    },
    typeFiltersButton: {
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 7,
        borderColor: colors.blue,
        borderWidth: 1,
        marginHorizontal: 5,
    },
    typeFiltersText: {
        fontFamily: 'iransansbold',
        fontSize: 12,
    },
    itemContainer: {
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 0,
        backgroundColor: colors.lightergray,
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
    stateCircle:{
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
});

export default MyRequestsList;