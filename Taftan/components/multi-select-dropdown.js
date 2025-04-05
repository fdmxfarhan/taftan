import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './colors';

const MultiSelectDropdown = ({ 
    list, 
    selectedValues, 
    setSelectedValues, 
    placeHolder, 
    buttonStyle, 
    buttonTextStyle, 
    onSubmit,
    getLabel = (item) => item.label,
    getValue = (item) => item.value
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState('');

    const filteredList = useMemo(() => {
        return list.filter(item => 
            getLabel(item).toLowerCase().includes(searchText.toLowerCase())
        );
    }, [list, searchText, getLabel]);

    const toggleItem = (item) => {
        const value = getValue(item);
        const newSelectedValues = selectedValues.includes(value)
            ? selectedValues.filter(v => v !== value)
            : [...selectedValues, value];
        
        setSelectedValues(newSelectedValues);
        if (onSubmit) {
            onSubmit(newSelectedValues);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.itemContainer}
            onPress={() => toggleItem(item)}
        >
            <Ionicons 
                name={selectedValues.includes(getValue(item)) ? 'checkbox' : 'square-outline'} 
                size={20} 
                color={colors.darkblue}
            />
            <Text style={styles.itemText}>{getLabel(item)}</Text>
        </TouchableOpacity>
    );

    const getDisplayText = () => {
        if (selectedValues.length === 0) return placeHolder || 'انتخاب کنید';
        if (selectedValues.length === 1) {
            const selectedItem = list.find(item => getValue(item) === selectedValues[0]);
            return selectedItem ? getLabel(selectedItem) : placeHolder;
        }
        return `${selectedValues.length} مورد انتخاب شده`;
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={[buttonStyle, styles.placeHolderButton]} 
                onPress={() => setIsOpen(!isOpen)}
            >
                <Text style={buttonTextStyle}>
                    {getDisplayText()}
                    <Ionicons name={'chevron-down'} style={styles.chevron} />
                </Text>
            </TouchableOpacity>
            
            <Modal
                visible={isOpen}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsOpen(false)}
            >
                <TouchableOpacity 
                    style={styles.modalOverlay}
                    activeOpacity={1} 
                    onPress={() => setIsOpen(false)}
                >
                    <View style={styles.dropdownContainer}>
                        <View style={styles.searchContainer}>
                            <Ionicons name="search" size={20} color={colors.gray} />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="جستجو..."
                                value={searchText}
                                onChangeText={setSearchText}
                            />
                        </View>
                        <FlatList 
                            data={filteredList}
                            keyExtractor={item => getValue(item)}
                            renderItem={renderItem}
                            style={styles.list}
                            nestedScrollEnabled={true}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        zIndex: 1,
    },
    placeHolderButton: {
        flexDirection: 'row-reverse',
        position: 'relative',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownContainer: {
        backgroundColor: colors.white,
        width: '90%',
        maxHeight: 300,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    searchContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightergray,
    },
    searchInput: {
        flex: 1,
        marginRight: 10,
        fontFamily: 'iransans',
        fontSize: 14,
    },
    list: {
        maxHeight: 250,
    },
    itemContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightergray,
    },
    itemText: {
        marginRight: 10,
        fontFamily: 'iransans',
        fontSize: 14,
        color: colors.darkBackground,
    },
    chevron: {
        paddingHorizontal: 5,
    },
});

export default MultiSelectDropdown; 