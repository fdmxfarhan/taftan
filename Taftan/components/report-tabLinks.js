import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import colors from './colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons

const ReportTabLink = ({ tabItemVar, setTabItemCallback, reportDetail }) => {
    return (
        <View style={styles.tabLinksView}>
            <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'tab1' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('tab1')}>
                <Ionicons name={tabItemVar == 'tab1' ? "information" : "information-outline"} style={[styles.tabLinkIcon, tabItemVar == 'tab1' ? styles.activeIcon : styles.deactive]} />
                <Text style={[styles.tabLinkText, tabItemVar == 'tab1' ? styles.activeText : styles.deactive]}>اطلاعات</Text>
            </TouchableOpacity>
            {reportDetail && reportDetail.requestReportInfo.serviceGroupId == 1 && (
                <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'tab2' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('tab2')}>
                    <Ionicons name={tabItemVar == 'tab2' ? "headset" : "headset-outline"} style={[styles.tabLinkIcon, tabItemVar == 'tab2' ? styles.activeIcon : styles.deactive]} />
                    <Text style={[styles.tabLinkText, tabItemVar == 'tab2' ? styles.activeText : styles.deactive]}>تشخیص</Text>
                </TouchableOpacity>
            )}
            {reportDetail && reportDetail.requestReportInfo.serviceGroupId == 3 && (
                <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'tab2' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('tab2')}>
                    <Ionicons name={tabItemVar == 'tab2' ? "settings" : "settings-outline"} style={[styles.tabLinkIcon, tabItemVar == 'tab2' ? styles.activeIcon : styles.deactive]} />
                    <Text style={[styles.tabLinkText, tabItemVar == 'tab2' ? styles.activeText : styles.deactive]}>نصب</Text>
                </TouchableOpacity>
            )}
            {reportDetail && reportDetail.requestReportInfo.serviceGroupId != 2 && (
                <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'tab3' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('tab3')}>
                    <Ionicons name={tabItemVar == 'tab3' ? "footsteps" : "footsteps-outline"} style={[styles.tabLinkIcon, tabItemVar == 'tab3' ? styles.activeIcon : styles.deactive]} />
                    <Text style={[styles.tabLinkText, tabItemVar == 'tab3' ? styles.activeText : styles.deactive]}>اقدامات</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'tab4' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('tab4')}>
                <Ionicons name={tabItemVar == 'tab4' ? "construct" : "construct-outline"} style={[styles.tabLinkIcon, tabItemVar == 'tab4' ? styles.activeIcon : styles.deactive]} />
                <Text style={[styles.tabLinkText, tabItemVar == 'tab4' ? styles.activeText : styles.deactive]}>قطعات</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'tab5' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('tab5')}>
                <Ionicons name={tabItemVar == 'tab5' ? "cloud-upload" : "cloud-upload-outline"} style={[styles.tabLinkIcon, tabItemVar == 'tab5' ? styles.activeIcon : styles.deactive]} />
                <Text style={[styles.tabLinkText, tabItemVar == 'tab5' ? styles.activeText : styles.deactive]}>آپلود</Text>
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