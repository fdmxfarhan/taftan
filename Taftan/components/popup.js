import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Popup = ({ modalVisible, setModalVisible, children }) => {
    return (
        <Modal transparent visible={modalVisible} animationType="fade" onRequestClose={() => setModalVisible(false)}>
            <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={() => {
                // setModalVisible(false)
            }}>
                {/* <TouchableWithoutFeedback> */}
                    <View style={styles.modalBox}>
                        {children}
                    </View>
                {/* </TouchableWithoutFeedback> */}
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        // zIndex: 100,
    },
    modalBox: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        maxHeight: 700,
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
});

export default Popup;