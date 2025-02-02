import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import colors from './colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons

const ReportTabLink = ({ tabItemVar, setTabItemCallback }) => {
    return (
        <View style={styles.tabLinksView}>
            <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'Info' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('Info')}>
                <Ionicons name={tabItemVar == 'Info' ? "information" : "information-outline"} style={[styles.tabLinkIcon, tabItemVar == 'Info' ? styles.activeIcon : styles.deactive]} />
                <Text style={[styles.tabLinkText, tabItemVar == 'Info' ? styles.activeText : styles.deactive]}>اطلاعات</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'Recognition' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('Recognition')}>
                <Ionicons name={tabItemVar == 'Recognition' ? "headset" : "headset-outline"} style={[styles.tabLinkIcon, tabItemVar == 'Recognition' ? styles.activeIcon : styles.deactive]} />
                <Text style={[styles.tabLinkText, tabItemVar == 'Recognition' ? styles.activeText : styles.deactive]}>تشخیص</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'Actions' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('Actions')}>
                <Ionicons name={tabItemVar == 'Actions' ? "footsteps" : "footsteps-outline"} style={[styles.tabLinkIcon, tabItemVar == 'Actions' ? styles.activeIcon : styles.deactive]} />
                <Text style={[styles.tabLinkText, tabItemVar == 'Actions' ? styles.activeText : styles.deactive]}>اقدامات</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'Components' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('Components')}>
                <Ionicons name={tabItemVar == 'Components' ? "construct" : "construct-outline"} style={[styles.tabLinkIcon, tabItemVar == 'Components' ? styles.activeIcon : styles.deactive]} />
                <Text style={[styles.tabLinkText, tabItemVar == 'Components' ? styles.activeText : styles.deactive]}>قطعات</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'Upload' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('Upload')}>
                <Ionicons name={tabItemVar == 'Upload' ? "cloud-upload" : "cloud-upload-outline"} style={[styles.tabLinkIcon, tabItemVar == 'Upload' ? styles.activeIcon : styles.deactive]} />
                <Text style={[styles.tabLinkText, tabItemVar == 'Upload' ? styles.activeText : styles.deactive]}>آپلود</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tabLinksView: {
        flexDirection: 'row-reverse',
        marginTop: 10,
        width: '100%',
        marginHorizontal: 'auto',
    },
    tabLinkItem: {
        flex: 1,
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        borderBottomColor: colors.lightgray,
        borderBottomWidth: 2,
        position: 'relative',
    },
    activeButton: {
        borderBottomColor: colors.darkBackground,
        borderBottomWidth: 3,
    },
    tabLinkIcon: {
        fontSize: 18,
        color: colors.lightDark
    },
    tabLinkText: {
        fontFamily: 'iransans',
        fontSize: 12,
        paddingTop: 4,
        color: colors.lightDark
    },
    activeIcon: {
        color: colors.darkBackground,
    },
    activeText: {
        color: colors.darkBackground,
    },
});

export default ReportTabLink;