// components/SideMenu.js
import React, { useState } from 'react';
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from './colors';

const { width } = Dimensions.get('window');

const SideMenu = (props) => {
  const [slideAnim] = useState(new Animated.Value(width * 0.7)); // Initial position off screen
  var { isVisible, onClose, navigation } = props;

  // Slide the menu in and out
  const toggleMenu = () => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : width * 0.7, // 70% of screen width
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    toggleMenu();
  }, [isVisible]);

  return (
    <Modal visible={isVisible} transparent animationType="none">
      {/* Overlay */}
      <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
        <View />
      </TouchableOpacity>

      {/* Sliding Menu */}
      <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
        <View style={styles.menu}>
          <Text style={styles.menuTitle}>تفتان</Text>

          <TouchableOpacity style={styles.menuItem} onPress={() => {props.navigation.navigate('ServiceDamage'); onClose();}}>
            <Ionicons style={styles.sideButtonIcon} name={'construct-outline'} />
            <Text style={styles.menuText}>سرویس خرابی</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => {props.navigation.navigate('ServiceInstallation'); onClose();}}>
            <Ionicons style={styles.sideButtonIcon} name={'hammer-outline'} />
            <Text style={styles.menuText}>سرویس نصب</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => {props.navigation.navigate('ServiceSite'); onClose();}}>
            <Ionicons style={styles.sideButtonIcon} name={'storefront-outline'} />
            <Text style={styles.menuText}>سرویس سایت سازی</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => {props.navigation.navigate('ServiceProjects'); onClose();}}>
            <Ionicons style={styles.sideButtonIcon} name={'clipboard-outline'} />
            <Text style={styles.menuText}>سرویس پروژه</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => {props.navigation.navigate('ServicePeriodic'); onClose();}}>
            <Ionicons style={styles.sideButtonIcon} name={'repeat-outline'} />
            <Text style={styles.menuText}>سرویس دوره ای</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => {props.navigation.navigate('MapPage'); onClose();}}>
            <Ionicons style={styles.sideButtonIcon} name={'map-outline'} />
            <Text style={styles.menuText}>نقشه</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => {props.navigation.navigate('Profile'); onClose();}}>
            <Ionicons style={styles.sideButtonIcon} name={'person'} />
            <Text style={styles.menuText}>پروفایل</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark transparent background
  },
  menuContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: width * 0.7, // 70% of the screen width
    backgroundColor: '#fff',
  },
  menu: {
    flex: 1,
    paddingTop: 50, // Just for spacing
    paddingHorizontal: 20,
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row-reverse',
  },
  sideButtonIcon: {
    paddingTop: 4,
    fontSize: 18,
    paddingLeft: 10,
    color: colors.darkBackground,
  },
  menuText: {
    fontSize: 16,
    fontFamily: 'iransans'
  },
});

export default SideMenu;