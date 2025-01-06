import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import Popup from './popup';
import DropDownPicker from 'react-native-dropdown-picker';
import PersianDatePicker from './persian-date-picker';
import TimePicker from './time-picker';
import TwoChoice from './twochoice';
import { getUserList } from '../services/req-load-user-list';
import UserDropDown from './dropdown-user';

const SearchView = ({ popupEN, setPopupEN }) => {
    var [searchText, setSearchText] = useState('');
    return (
        <Modal transparent visible={popupEN} animationType="fade" onRequestClose={() => setPopupEN(false)}>
            <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={() => {setPopupEN(false)}}>
                <View style={styles.modalBox}>
                    <Ionicons style={styles.searchIcon} name={'search'} />
                    <TextInput
                        style={styles.textinput}
                        placeholder="جستجو..."
                        keyboardType={'default'}
                        onChange={(text) => { setSearchText(text.nativeEvent.text) }}
                        autoFocus={true}
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
        width: '90%',
        textAlign: 'right',
    },
});

export default SearchView;