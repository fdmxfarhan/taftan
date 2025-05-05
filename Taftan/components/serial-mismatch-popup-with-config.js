import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from './colors';
import Popup from './popup';

const SerialMismatchPopupWithConfig = ({ popupEN, setPopupEN, onConfirm, onAddToConfig }) => {
    return (
        <View>
            <Popup modalVisible={popupEN} setModalVisible={setPopupEN}>
                <Text style={styles.centerlabel}>سریال درج شده در پیکربندی نیست</Text>

                <View style={styles.submitButtonsView}>
                    <TouchableOpacity style={styles.submitButton} onPress={() => {
                        onConfirm();
                        setPopupEN(false);
                    }}>
                        <Text style={styles.submitButtonText}>ثبت مغایرت</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.configButton} onPress={() => {
                        onAddToConfig();
                        setPopupEN(false);
                    }}>
                        <Text style={styles.submitButtonText}>درج ماژول جدید در پیکربندی</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancleButton} onPress={() => setPopupEN(false)}>
                        <Text style={styles.cancleButtonText}>انصراف</Text>
                    </TouchableOpacity>
                </View>
            </Popup>
        </View>
    );
};

const styles = StyleSheet.create({
    centerlabel: {
        color: colors.text,
        fontSize: 15,
        marginTop: 10,
        marginBottom: 5,
        width: '100%',
        margin: 'auto',
        fontFamily: 'iransansbold',
        textAlign: 'center',
    },
    submitButtonsView: {
        width: '100%',
        // flexDirection: 'row-reverse',
        marginTop: 25,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    submitButton: {
        width: '100%',
        marginHorizontal: '2%',
        paddingVertical: 10,
        backgroundColor: colors.emerald,
        borderRadius: 10,
        marginBottom: 10,
    },
    configButton: {
        width: '100%',
        marginHorizontal: '2%',
        paddingVertical: 10,
        backgroundColor: colors.blue,
        borderRadius: 10,
        marginBottom: 10,
    },
    submitButtonText: {
        fontFamily: 'iransans',
        fontSize: 13,
        textAlign: 'center',
        color: colors.white,
    },
    cancleButton: {
        width: '100%',
        marginHorizontal: '2%',
        paddingVertical: 10,
        backgroundColor: colors.red3,
        borderRadius: 10,
        marginBottom: 10,
    },
    cancleButtonText: {
        fontFamily: 'iransans',
        fontSize: 12,
        textAlign: 'center',
        color: colors.white,
    },
});

export default SerialMismatchPopupWithConfig; 