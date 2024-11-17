import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Touchable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Popup from './popup';

const ConfirmPopup = ({ modalVisible, setModalVisible, question, onSubmit }) => {
    return (
        <Popup modalVisible={modalVisible} setModalVisible={setModalVisible}>
            <Text style={styles.question}>{question}</Text>
            <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.yesButton} onPress={onSubmit}>
                    <Text style={styles.yesText}>بله</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noButton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.noText}>خیر</Text>
                </TouchableOpacity>
            </View>
        </Popup>
    );
};

const styles = StyleSheet.create({
    question: {
        fontFamily: 'iransans',
        fontSize: 17,
    },
    buttonsView: {
        flexDirection: 'row-reverse',
        marginTop: 50,
    },
    yesButton: {
        flexDirection: 'row-reverse',
        width: '40%',
        // backgroundColor: colors.red2,
        marginLeft: '10%',
        borderColor: colors.blue,
        borderWidth: 2,
        borderRadius: 5,
    },
    buttonIcon: {
        
    },
    yesText: {
        textAlign: 'center',
        width: '100%',
        fontFamily: 'iransans',
        fontSize: 16,
        paddingVertical: 2,
        color: colors.blue,
    },
    noButton: {
        flexDirection: 'row-reverse',
        width: '40%',
        backgroundColor: colors.blue,
        borderRadius: 5,
    },
    noText: {
        textAlign: 'center',
        width: '100%',
        fontFamily: 'iransans',
        fontSize: 16,
        paddingVertical: 2,
        color: colors.white,
    },
});

export default ConfirmPopup;