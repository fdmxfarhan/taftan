import { StyleSheet } from "react-native";
import colors from "../components/colors";

module.exports = StyleSheet.create({
    contents: {
        height: '90%',

    },
    content: {
        backgroundColor: colors.white,
        paddingVertical: 15,
    },
    titleView: {
        backgroundColor: colors.antiflashWhite,
        color: colors.dark,
        paddingHorizontal: '10%',
        paddingTop: 15,
        position: 'relative',
        borderBottomColor: colors.white,
        borderBottomWidth: 2,
        paddingBottom: 10,
    },
    title: {
        fontFamily: 'iransansbold',
        fontSize: 16,
        color: colors.dark,
    },
    chevron: {
        position: 'absolute',
        top: 15,
        left: 30,
        fontSize: 18,
    },
    label: {
        color: colors.text,
        fontSize: 13,
        marginTop: 10,
        marginBottom: 5,
        width: '85%',
        margin: 'auto',
        fontFamily: 'iransansbold',
        textAlign: 'right',
    },
    installLabel: {
        color: colors.darkBackground,
        fontSize: 13,
        marginTop: 20,
        width: '85%',
        margin: 'auto',
        textAlign: 'center',
        fontFamily: 'iransansbold',
        borderColor: colors.antiflashWhite,
        borderBottomWidth: 2,
    },
    textInput: {
        borderRightColor: colors.timberwolf,
        borderLeftColor: colors.timberwolf,
        borderTopColor: colors.timberwolf,
        borderBottomColor: colors.timberwolf,
        borderWidth: 1,
        width: '85%',
        margin: 'auto',
        fontFamily: 'iransans',
        fontSize: 13,
        backgroundColor: colors.antiflashWhite,
        borderRadius: 5,
        textAlign: 'right',
        direction: 'rtl',
        paddingVertical: 4,
        paddingHorizontal: 15,
        color: colors.text,
    },
    textArea: {
        borderColor: colors.gray,
        borderWidth: 1,
        width: '85%',
        margin: 'auto',
        fontFamily: 'iransans',
        fontSize: 13,
        backgroundColor: colors.white,
        borderRadius: 8,
        textAlign: 'right',
        direction: 'rtl',
        paddingVertical: 4,
        paddingHorizontal: 15,
    },
    description: {
        borderColor: colors.timberwolf,
        borderWidth: 1,
        width: '85%',
        margin: 'auto',
        fontFamily: 'iransans',
        fontSize: 13,
        backgroundColor: colors.antiflashWhite,
        borderRadius: 8,
        textAlign: 'right',
        direction: 'rtl',
        paddingVertical: 4,
        paddingHorizontal: 15,
        height: 70,
        marginBottom: 10,
    },
    inputWithActionView: {
        flexDirection: 'row-reverse'
    },
    dualInputPartWithActionView: {
        flexDirection: 'row-reverse',
        flex: 1,
    },
    inputWithActionInput: {
        borderColor: colors.timberwolf,
        borderWidth: 1,
        width: '73%',
        marginRight: '7.5%',
        fontFamily: 'iransans',
        fontSize: 13,
        backgroundColor: colors.antiflashWhite,
        borderRadius: 8,
        textAlign: 'right',
        direction: 'rtl',
        paddingVertical: 4,
        paddingHorizontal: 15,
        color: colors.text,
    },
    inputWithActionButton: {
        width: '10%',
        marginRight: '2%',
        backgroundColor: colors.blue,
        borderRadius: 8,
    },
    inputWithActionIcon: {
        textAlign: 'center',
        marginVertical: 'auto',
        color: colors.white,
        fontSize: 20,
    },
    buttonsView: {
        flexDirection: 'row-reverse',
        width: '90%',
        margin: 'auto',
    },
    submitButton: {
        backgroundColor: colors.blue,
        paddingHorizontal: 20,
        paddingVertical: 13,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 5,
        textAlign: 'center',
        flexDirection: 'row-reverse',
        direction: 'rtl',
    },
    buttonIcon: {
        color: colors.white,
        textAlign: 'center',
        paddingLeft: 10,
        fontSize: 16,
    },
    buttonText: {
        color: colors.white,
        fontSize: 13,
    },
    buttonScrollView: {
        direction: 'rtl',
        textAlign: 'right',
    },
    stateItemView: {
        width: '95%',
        margin: 'auto',
        marginBottom: 2,
        backgroundColor: colors.uranianBlue,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
    stateItemTitle: {
        fontFamily: 'iransans',
        fontSize: 14,
        fontWeight: 'bold',
        position: 'relative',
        color: colors.black,
        textAlign: 'right',
    },
    stateDateView: {
        flexDirection: 'row-reverse',
        position: 'absolute',
        left: 10,
        top: 10,
    },
    dateIcon: {
        fontSize: 12,
        paddingTop: 3,
        paddingLeft: 5,
        paddingRight: 10,
        color: colors.paynesGray,
    },
    stateDateText: {
        fontFamily: 'iransans',
        fontSize: 12,
        color: colors.paynesGray,
    },
    clockIcon: {
        fontSize: 12,
        paddingTop: 3,
        paddingLeft: 5,
        paddingRight: 10,
        color: colors.paynesGray,
    },
    stateClockText: {
        fontFamily: 'iransans',
        fontSize: 12,
        color: colors.paynesGray,
    },
    stateDescText: {
        fontFamily: 'iransans',
        fontSize: 14,
        color: colors.text,
        paddingTop: 3,
        textAlign: 'right',
    },
    actionHistoryItem: {
        backgroundColor: colors.uranianBlue,
        width: '95%',
        marginHorizontal: 'auto',
        borderRadius: 4,
        marginBottom: 2,
        flexDirection: 'row-reverse',
        position: 'relative',
    },
    actionHistoryRight: {
        flex: 1,
        paddingHorizontal: 20,
    },
    actionHistoryTitle: {
        fontFamily: 'iransans',
        fontSize: 13,
        fontWeight: 'bold',
        color: colors.black,
        paddingTop: 10,
        textAlign: 'right',
        direction: 'rtl',
    },
    actionHistoryTitle2: {
        fontFamily: 'iransans',
        fontSize: 12,
        paddingTop: 10,
        textAlign: 'right',
    },
    actionHistoryLeft: {
        flex: 1,
        paddingHorizontal: 20,
    },
    actionDateText: {
        fontSize: 12,
        paddingTop: 6,
        textAlign: 'left',
    },
    actionResult: {
        textAlign: 'left',
        fontFamily: 'iransans',
        fontSize: 14,
        paddingTop: 10,
    },
    actionMoreInfo: {
        width: '95%',
        paddingHorizontal: '5%',
        marginHorizontal: 'auto',
        paddingTop: 10,
        paddingBottom: 20,
        borderColor: colors.timberwolf,
        borderWidth: 1,
        marginBottom: 10,
    },
    actionMoreInfoItem: {
        flexDirection: 'row-reverse',
        marginBottom: 2,
    },
    actionMoreInfoTitle: {
        flex: 1,
        fontFamily: 'iransansbold',
        fontSize: 15,
    },
    actionMoreInfoText: {
        flex: 1,
        textAlign: 'right',
        fontFamily: 'iransans',
        fontSize: 15,
        textAlign: 'left',
    },
    supervisorItem: {
        flexDirection: 'row-reverse',
        width: '90%',
        marginHorizontal: 'auto',
        marginBottom: 8,
    },
    supervisorName: {
        flex: 1,
        textAlign: 'center',
        borderColor: colors.lightgray,
        borderWidth: 1,
        fontFamily: 'iransansbold',
        fontSize: 15,
        paddingVertical: 5,
        borderLeftWidth: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
    },
    supervisorType: {
        flex: 1,
        textAlign: 'center',
        borderColor: colors.lightgray,
        borderWidth: 1,
        fontFamily: 'iransans',
        fontSize: 15,
        paddingVertical: 5,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    dualInputView: {
        flexDirection: 'row-reverse',
        paddingHorizontal: 15,
    },
    dualInputPart: {
        flex: 1,
    },
    requiredBorder: {
        borderRightWidth: 5,
        // borderRightColor: colors.red2,
    },
    dropdown: {
        backgroundColor: colors.antiflashWhite,
        borderWidth: 1,
        borderRightColor: colors.timberwolf,
        borderLeftColor: colors.timberwolf,
        borderTopColor: colors.timberwolf,
        borderBottomColor: colors.timberwolf,
        borderRadius: 7,
        width: '85%',
        marginHorizontal: '7.5%',
        alignContent: 'center',
        alignItems: 'center',
    },
    dropdownText: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        textAlign: 'center',
        width: '100%',
        fontFamily: 'iransans',
        fontSize: 14,
    },
    deleteItemButton: {
        position: 'absolute',
        left: 10,
        top: 20,
        padding: 10,
    },
    deleteItemIcon: {
        color: colors.red2,
        fontSize: 20,
    },
    breakline: {
        backgroundColor: colors.timberwolf,
        width: '100%',
        marginHorizontal: 'auto',
        height: 1,
        marginBottom: 10,
        marginTop: 20,
    },
    sectionTitle: {
        fontFamily: 'iransansbold',
        fontSize: 15,
        color: colors.dark,
        textAlign: 'right',
        marginBottom: 10,
        textAlign: 'center',
    },
});