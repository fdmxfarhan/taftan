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

const MessageListView = ({ navigation, myMessageList, setmyMessageList }) => {
    const [skipValue, setskipValue] = useState(1);
    const [rowsValue, setrowsValue] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    
    const sendRequest = async (skip, take) => {
        setIsLoading(true);

        var result = await loadMyMessageBoxList(skip, take);
        if (result.success) {
            setmyMessageList(result.data.Data);
        } else ToastAndroid.show('پیام های من بارگیری نشد.', ToastAndroid.SHORT);

        setIsLoading(false);
    }
    
    return (
        <View>
            {/* <ReqGridController
                currentPage={skipValue}
                skipValue={skipValue}
                setskipValue={setskipValue}
                setData={(skip, rows) => {
                    setskipValue(skip);
                    setrowsValue(rows);
                    sendRequest(skip, rows);
                }} /> */}
            <ScrollView>
                <View style={styles.container}>
                    {myMessageList.map((item, index) => (
                        <View key={item.Id} style={styles.messageBox}>
                            <View style={styles.messageBoxTitleView}>
                                <Ionicons name="person" style={styles.messageBoxTitleIcon} />
                                <Text style={styles.messageBoxTitleText}>{item.SenderName}</Text>
                            </View>
                            <Text style={styles.messageBoxContent}>{item.Message}</Text>
                            <View style={styles.messageBoxDateView}>
                                {/* <Ionicons name={'checkmark'} /> */}
                                <Ionicons name={'checkmark-done'} style={styles.messageBoxSeenIcon} />
                                <Text style={styles.messageBoxDateText}>{item.persianDateSend}</Text>
                            </View>
                        </View>
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
        paddingTop: 10,
        paddingBottom: 200,
    },
    messageBox: {
        width: '90%',
        marginRight: 10,
        backgroundColor: colors.skyblue,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
    },
    messageBoxTitleView: {
        flexDirection: 'row-reverse',
    },
    messageBoxTitleIcon: {
        color: colors.darkBackground,
        marginLeft: 5,
        fontSize: 12,
    },
    messageBoxTitleText: {
        color: colors.darkBackground,
        fontFamily: 'iransansbold',
        fontSize: 12,
        textAlign: 'right',
    },
    messageBoxContent: {
        color: colors.text,
        textAlign: 'right',
        fontFamily: 'iransans',
        fontSize: 12,
        marginTop: 5,
    },
    messageBoxDateView: {
        flexDirection: 'row'
    },
    messageBoxSeenIcon: {
        fontSize: 16,
        marginRight: 5,
        color: colors.darkGreen,
    },
    messageBoxDateText: {
        fontFamily: 'iransans',
        fontSize: 12,

    },
});

export default MessageListView;