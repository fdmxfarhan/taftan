import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Modal, ToastAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import DropDownPicker from 'react-native-dropdown-picker';
import PersianDatePicker from './persian-date-picker';
import TimePicker from './time-picker';
import TwoChoice from './twochoice';
import { getUserList } from '../services/req-load-user-list';
import UserDropDown from './dropdown-user';
import { GetRequest } from '../services/search-GetRequest';

const SearchView = ({ popupEN, setPopupEN, navigation }) => {
    var [searchText, setSearchText] = useState('');
    var searchRequestId = (requestId) => {
        GetRequest(requestId, navigation).then((res) => {
            if(res.success){
                if(res.data == true){
                    navigation.navigate('DamageReqView', { item: {requestId: requestId} });
                }else{
                    ToastAndroid.show('شماره کار یافت نشد', ToastAndroid.SHORT);
                }
            }else{

            }
        });
    }
    return (
        <Modal transparent visible={popupEN} animationType="fade" onRequestClose={() => setPopupEN(false)}>
            <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={() => {setPopupEN(false)}}>
                <View style={styles.modalBox}>
                    <Ionicons style={styles.searchIcon} name={'search'} />
                    <TextInput
                        style={styles.textinput}
                        placeholder="جستجو شماره کار ..."
                        keyboardType={'numeric'}
                        onChange={(text) => { setSearchText(text.nativeEvent.text) }}
                        autoFocus={true}
                        onSubmitEditing={() => {
                            searchRequestId(searchText);
                        }}
                    />
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // justifyContent: 'center',
        alignItems: 'center',
        // zIndex: 100,
    },
    modalBox: {
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        maxHeight: 700,
        marginTop: 70,
        flexDirection: 'row-reverse',
        paddingVertical: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    searchIcon: {
        fontSize: 20,
        width: '10%',
    },
    textinput: {
        fontSize: 13,
        fontFamily: 'iransans',
        width: '85%',
        marginRight: 10,
        textAlign: 'right',
    },
});

export default SearchView;