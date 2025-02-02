import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed

const DropDownObj = ({ list, getLabel, getValue, setValue, value, buttonStyle, buttonTextStyle, onSubmit, disabled, containerStyle }) => {
    const [numOfRowsOpen, setnumOfRowsOpen] = useState(false);

    const renderListItem = ({ item }) => (
        <TouchableOpacity key={getValue(item)} onPress={() => {
            setnumOfRowsOpen(false);
            // setValue(getValue(item));
            setValue(item);
            // onSubmit(getValue(item));
        }}>
            <Text style={styles.itemText}>{getLabel(item)}</Text>
        </TouchableOpacity>
    )
    return (
        <View style={containerStyle}>
            <TouchableOpacity style={[buttonStyle, styles.placeHolderButton]} onPress={() => {if(!disabled) setnumOfRowsOpen(!numOfRowsOpen)}}>
                <Text style={buttonTextStyle}>
                    {value}
                </Text>
                <Ionicons name={'chevron-down'} style={styles.chevron} />
            </TouchableOpacity>
            {numOfRowsOpen &&
                <View style={styles.listContainer}>
                    <ScrollView nestedScrollEnabled={true}>
                        {list.map((item) => renderListItem({item}))}
                    </ScrollView>
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    placeHolderButton: {
        flexDirection: 'row-reverse',
        position: 'relative',
    },
    listContainer: {
        position: 'absolute',
        top: 35,
        backgroundColor: colors.white,
        width: '90%',
        right: '5%',
        paddingHorizontal: 5,
        zIndex: 20,
        maxHeight: 200,
    },
    itemText: {
        textAlign: 'center',
        fontFamily: 'iransans',
        fontSize: 13,
        paddingVertical: 5,
    },
    chevron: {
        position: 'absolute',
        top: 9,
        left: 0,
        paddingHorizontal: 10,
        fontSize: 10,
        
    },
});

export default DropDownObj;