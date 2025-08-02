import React, { useState } from 'react';
import { View, TextInput, Modal, ToastAndroid, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GetRequest } from '../services/search-GetRequest';

const SearchView = ({ popupEN, setPopupEN, navigation }) => {
  const [searchText, setSearchText] = useState('');

  const searchRequestId = (requestId) => {
    GetRequest(requestId, navigation).then((res) => {
      if (res.success) {
        if (res.data === true) {
          navigation.navigate('DamageReqView', { item: { requestId } });
        } else {
          ToastAndroid.show('شماره کار یافت نشد', ToastAndroid.SHORT);
        }
      }
    });
  };

  return (
    <Modal transparent visible={popupEN} animationType="fade" onRequestClose={() => setPopupEN(false)}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.overlay}
      >
        <TouchableOpacity style={styles.background} activeOpacity={1} onPress={() => setPopupEN(false)} />

        <View style={styles.modalBox}>
          <TextInput
            style={styles.textinput}
            placeholder="جستجو شماره کار ..."
            placeholderTextColor="#999"
            keyboardType="numeric"
            onChangeText={text => setSearchText(text)}
            autoFocus={true}
            returnKeyType="search"
            onSubmitEditing={() => searchRequestId(searchText)}
          />
          <TouchableOpacity onPress={() => searchRequestId(searchText)} style={styles.iconWrapper}>
            <Ionicons name="search" size={24} color="#0288D1" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalBox: {
    width: '90%',
    maxWidth: 400,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 15,
    zIndex: 10, 
  },
  textinput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'iransans',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    backgroundColor: '#f2f6fa',
    textAlign: 'right',
    color: '#333',
  },
  iconWrapper: {
    marginRight: 15,
    backgroundColor: '#e1f0ff',
    padding: 10,
    borderRadius: 25,
  },
});

export default SearchView;
