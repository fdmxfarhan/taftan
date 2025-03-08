import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors'; // Adjust the import path for colors if needed

const DropDownObj = ({ list, getLabel, getValue, setValue, value, buttonStyle, buttonTextStyle, onSubmit, disabled, containerStyle, searchEN }) => {
    var [numOfRowsOpen, setnumOfRowsOpen] = useState(false);
    var [searchText, setSearchText] = useState('');
    var [filterItems, setFilterItems] = useState([]);
    useEffect(() => {
        filterItems = [];
        for (let i = 0; i < list.length; i++) {
            filterItems.push(true);
        }
        setFilterItems(filterItems);
    }, [list]);
    const filterSearch = (text) => {
        for (let i = 0; i < list.length; i++) {
            if(getLabel(list[i]).toLowerCase().includes(text.toLowerCase())) filterItems[i] = true;
            else filterItems[i] = false;
        }
    }
    const renderListItem = ({ item, index }) => filterItems[index] && (
        <TouchableOpacity key={getValue(item)} onPress={() => { setnumOfRowsOpen(false); setValue(item); }}>
            <Text style={styles.itemText}>{getLabel(item)}</Text>
        </TouchableOpacity>
    )
    return (
        <View style={containerStyle}>
            <TouchableOpacity style={[buttonStyle, styles.placeHolderButton]} onPress={() => { if (!disabled) setnumOfRowsOpen(!numOfRowsOpen) }}>
                <Text style={buttonTextStyle}>{value}</Text>
                <Ionicons name={'chevron-down'} style={styles.chevron} />
            </TouchableOpacity>
            {numOfRowsOpen &&
                <View style={styles.listContainer}>
                    {searchEN && (<View style={styles.searchView}>
                        <TextInput
                            style={[styles.searchTextInput]}
                            placeholder={'جستجو...'}
                            placeholderTextColor={colors.text}
                            returnKeyType={'send'}
                            keyboardType={'default'}
                            value={searchText}
                            onChange={(text) => { setSearchText(text.nativeEvent.text); filterSearch(text.nativeEvent.text); }}
                        // onSubmitEditing={()=>passwordInput.current.focus()}
                        />
                        <Ionicons name={'search'} style={styles.searchIcon} />
                    </View>)}
                    <ScrollView nestedScrollEnabled={true}>
                        {list.map((item, index) => renderListItem({ item, index }))}
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
        borderColor: colors.timberwolf,
        borderRadius: 7,
        borderWidth: 1,
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
    searchView: {
        flexDirection: 'row-reverse',
        borderColor: colors.timberwolf,
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal: 3,
        borderRadius: 7,
    },
    searchIcon: {
        width: '20%',
        textAlign: 'center',
        alignSelf: 'center'
    },
    searchTextInput: {
        width: '80%',
        margin: 0,
        padding: 3,
        paddingHorizontal: 10,
        fontFamily: 'iransans',
        fontSize: 12,
        textAlign: 'right',
    },
});

export default DropDownObj;