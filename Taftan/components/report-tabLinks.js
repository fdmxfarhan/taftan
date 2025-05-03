import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import colors from './colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons

const ReportTabLink = ({ tabItemVar, setTabItemCallback, reportDetail }) => {
    const scrollViewRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(0);
    const [scrollViewWidth, setScrollViewWidth] = useState(0);

    useEffect(() => {
        if (scrollViewRef.current && contentWidth > scrollViewWidth) {
            scrollViewRef.current.scrollTo({ x: contentWidth - scrollViewWidth, animated: false });
        }
    }, [contentWidth, scrollViewWidth]);

    return (
        <View style={styles.tabLinksView}>
            <ScrollView 
                horizontal={true} 
                style={styles.scrollview} 
                contentContainerStyle={styles.invertedScrollView} 
                showsHorizontalScrollIndicator={false} 
                ref={scrollViewRef}
                onContentSizeChange={(width) => setContentWidth(width)}
                onLayout={(event) => setScrollViewWidth(event.nativeEvent.layout.width)}
            >
                <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'tab1' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('tab1')}>
                    <Ionicons name={tabItemVar == 'tab1' ? "information" : "information-outline"} style={[styles.tabLinkIcon, tabItemVar == 'tab1' ? styles.activeIcon : styles.deactive]} />
                    <Text style={[styles.tabLinkText, tabItemVar == 'tab1' ? styles.activeText : styles.deactive]}>اطلاعات گزارش</Text>
                </TouchableOpacity>
                {reportDetail && reportDetail.requestReportInfo.serviceGroupId == 1 && (
                    <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'tab2' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('tab2')}>
                        <Ionicons name={tabItemVar == 'tab2' ? "headset" : "headset-outline"} style={[styles.tabLinkIcon, tabItemVar == 'tab2' ? styles.activeIcon : styles.deactive]} />
                        <Text style={[styles.tabLinkText, tabItemVar == 'tab2' ? styles.activeText : styles.deactive]}>تشخیص کارشناس</Text>
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
                {reportDetail && reportDetail.requestReportInfo.serviceGroupId != 2 && (
                    <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'tab3.5' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('tab3.5')}>
                        <Ionicons name={tabItemVar == 'tab3.5' ? "document-text" : "document-text-outline"} style={[styles.tabLinkIcon, tabItemVar == 'tab3.5' ? styles.activeIcon : styles.deactive]} />
                        <Text style={[styles.tabLinkText, tabItemVar == 'tab3.5' ? styles.activeText : styles.deactive]}>پرسشنامه</Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'tab4' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('tab4')}>
                    <Ionicons name={tabItemVar == 'tab4' ? "shield-checkmark" : "shield-checkmark-outline"} style={[styles.tabLinkIcon, tabItemVar == 'tab4' ? styles.activeIcon : styles.deactive]} />
                    <Text style={[styles.tabLinkText, tabItemVar == 'tab4' ? styles.activeText : styles.deactive]}>نقض گارانتی</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'tab5' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('tab5')}>
                    <Ionicons name={tabItemVar == 'tab5' ? "construct" : "construct-outline"} style={[styles.tabLinkIcon, tabItemVar == 'tab5' ? styles.activeIcon : styles.deactive]} />
                    <Text style={[styles.tabLinkText, tabItemVar == 'tab5' ? styles.activeText : styles.deactive]}>قطعات مصرفی</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'tab6' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('tab6')}>
                    <Ionicons name={tabItemVar == 'tab6' ? "beaker" : "beaker-outline"} style={[styles.tabLinkIcon, tabItemVar == 'tab6' ? styles.activeIcon : styles.deactive]} />
                    <Text style={[styles.tabLinkText, tabItemVar == 'tab6' ? styles.activeText : styles.deactive]}>خرابی قبل از بهره برداری</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tabLinkItem, tabItemVar == 'tab7' ? styles.activeButton : styles.deactive]} onPress={() => setTabItemCallback('tab7')}>
                    <Ionicons name={tabItemVar == 'tab7' ? "cloud-upload" : "cloud-upload-outline"} style={[styles.tabLinkIcon, tabItemVar == 'tab7' ? styles.activeIcon : styles.deactive]} />
                    <Text style={[styles.tabLinkText, tabItemVar == 'tab7' ? styles.activeText : styles.deactive]}>آپلود</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    tabLinksView: {
        // flexDirection: 'row-reverse',
        marginTop: 10,
        width: '100%',
        marginHorizontal: 'auto',

    },
    tabLinkItem: {
        width: 90,
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 4,
        borderBottomColor: colors.lightgray,
        borderBottomWidth: 2,
        position: 'relative',
    },
    invertedScrollView: {
        flexDirection: 'row-reverse', // Reverse the order of items
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
        color: colors.lightDark,
        textAlign: 'center'
    },
    activeIcon: {
        color: colors.darkBackground,
    },
    activeText: {
        color: colors.darkBackground,
    },
});

export default ReportTabLink;