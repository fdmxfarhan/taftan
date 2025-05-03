import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from './colors';
import Popup from './popup';

const DuplicateItemPopup = ({ popupEN, setPopupEN }) => {
    return (
        <View>
            <Popup modalVisible={popupEN} setModalVisible={setPopupEN}>
                <Text style={styles.centerlabel}>این مورد قبلا اضافه شده</Text>

                <View style={styles.submitButtonsView}>
                    <TouchableOpacity style={styles.submitButton} onPress={() => setPopupEN(false)}>
                        <Text style={styles.submitButtonText}>متوجه شدم</Text>
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
        flexDirection: 'row-reverse',
        marginTop: 25,
        justifyContent: 'center',
    },
    submitButton: {
        width: '46%',
        marginHorizontal: '2%',
        paddingVertical: 5,
        backgroundColor: colors.red3,
        borderRadius: 5,
    },
    submitButtonText: {
        fontFamily: 'iransans',
        fontSize: 14,
        textAlign: 'center',
        color: colors.white,
    },
});

export default DuplicateItemPopup; 