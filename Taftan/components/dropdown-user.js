import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed

const UserDropDown = ({ list, setValue, value, placeHolder, buttonStyle, buttonTextStyle }) => {
    const [numOfRowsOpen, setnumOfRowsOpen] = useState(false);
    useEffect(() => {

    }, [])
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[buttonStyle, styles.placeHolderButton]} onPress={() => setnumOfRowsOpen(!numOfRowsOpen)}>
                <Text style={buttonTextStyle}>
                    {value == ''? placeHolder : value}
                    <Ionicons name={'chevron-down'} style={styles.chevron} />
                </Text>
            </TouchableOpacity>
            {numOfRowsOpen && <View style={styles.listContainer}>
                <ScrollView style={styles.scrollview}>
                    {list.map((item) => (
                        <TouchableOpacity key={item.UserKey} onPress={() => {
                            setnumOfRowsOpen(false);
                            setValue(`${item.Fname} ${item.Lname}`)
                            }}>
                            <Text style={styles.itemText}>{item.Fname} {item.Lname}</Text>
                        </TouchableOpacity>
                    ))}
                    {/* <FlatList data={list} keyExtractor={item => item.Id} renderItem={renderListItem}/> */}
                </ScrollView>
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10,
    },
    placeHolderButton: {
        flexDirection: 'row-reverse',
        position: 'relative',
    },
    listContainer: {
        position: 'absolute',
        bottom: -140,
        backgroundColor: colors.white,
        width: '100%',
        right: 0,
        paddingHorizontal: 5,
        zIndex: 20,
        height: 150,
        borderColor: colors.gray,
        borderWidth: 1,
        // borderRadius: 5,
    },
    itemText: {
        textAlign: 'center',
        fontFamily: 'iransans',
        fontSize: 13,
        paddingVertical: 10,
        borderBottomColor: colors.lightgray,
        borderBottomWidth: 1,
    },
    chevron: {
        paddingHorizontal: 5,
    },
});

export default UserDropDown;