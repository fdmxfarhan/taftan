import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import colors from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import SideMenu from '../components/SideMenu';
import NavBar from '../components/navbar';

const ServiceInstallation = (props) => {    
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const handleSearchPress = () => {
        console.log('Search clicked');
    };

    return (
        <View style={styles.container}>
            <NavBar
                rightCallback={toggleMenu} 
                leftCallback={handleSearchPress} 
                title="درخواست‌های نصب" 
                leftIcon="search"
                rightIcon="menu"
            />
            <SideMenu isVisible={menuVisible} onClose={toggleMenu} navigation={props.navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
});

export default ServiceInstallation;