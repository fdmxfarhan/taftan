// components/SideMenu.js
import React, { useState } from 'react';
import {
  Animated,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './colors';
import handleLogout from '../services/authHelper';

const { width, height } = Dimensions.get('window');

const SideMenu = (props) => {
  const [slideAnim] = useState(new Animated.Value(width * 0.65));
  var { isVisible, onClose, navigation } = props;

  const toggleMenu = () => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : width * 0.65,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    toggleMenu();
  }, [isVisible]);

  const menuItems = [
    {
      title: 'سرویس خرابی',
      icon: 'construct-outline',
      screen: 'ServiceDamage',
    },
    {
      title: 'سرویس نصب',
      icon: 'hammer-outline',
      screen: 'ServiceInstallation',
    },
    {
      title: 'سرویس سایت سازی',
      icon: 'storefront-outline',
      screen: 'ServiceSite',
    },
    {
      title: 'سرویس پروژه',
      icon: 'clipboard-outline',
      screen: 'ServiceProjects',
    },
    {
      title: 'سرویس دوره ای',
      icon: 'repeat-outline',
      screen: 'ServicePeriodic',
    },
    {
      title: 'نقشه',
      icon: 'map-outline',
      screen: 'MapPage',
    },
    {
      title: 'پروفایل',
      icon: 'person-outline',
      screen: 'Profile',
    },
  ];

  return (
    <Modal visible={isVisible} transparent animationType="none">
      {/* Overlay */}
      <TouchableOpacity 
        style={styles.overlay} 
        activeOpacity={1} 
        onPress={onClose}
      >
        <View />
      </TouchableOpacity>

      {/* Sliding Menu */}
      <Animated.View 
        style={[
          styles.menuContainer, 
          { transform: [{ translateX: slideAnim }] }
        ]}
      >
        <SafeAreaView style={styles.safeArea}>
          {/* Header with Logo */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image source={require('../assets/logo.png')} style={styles.toplogo} />
            </View>
          </View>

          {/* Menu Items */}
          <ScrollView style={styles.menuContent} showsVerticalScrollIndicator={false}>
            <View style={styles.menuItemsContainer}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.menuItem}
                  onPress={() => {
                    navigation.navigate(item.screen);
                    onClose();
                  }}
                  activeOpacity={0.7}
                >
                  <View style={styles.menuItemContent}>
                    <View style={styles.iconContainer}>
                      <Ionicons 
                        name={item.icon} 
                        size={20} 
                        color={colors.darkBackground || '#333'} 
                      />
                    </View>
                    <Text style={styles.menuText}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          {/* Fixed Logout Button */}
          <View style={styles.logoutContainer}>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => handleLogout(navigation, onClose)}
              activeOpacity={0.8}
            >
              <View style={styles.logoutContent}>
                <Text style={styles.logoutText}>خروج</Text>
                <View style={styles.logoutIconContainer}>
                  <Ionicons name="log-out-outline" size={20} color="#fff" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: width * 0.65,
    backgroundColor: '#fff',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: -2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.darkBackground,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  toplogo: {
    width: 54,
    height: 54,
    resizeMode: 'contain',
  },
  menuContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuItemsContainer: {
    paddingTop: 10,
  },
  menuItem: {
    marginHorizontal: 10,
    marginVertical: 2,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  menuItemContent: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,

  },
  menuText: {
    fontSize: 16,
    fontFamily: 'iransans',
    color: '#333',
    flex: 1,
    textAlign: 'right',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  logoutContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#f8f9fa',
  },
  logoutButton: {
    backgroundColor: colors.red, 
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#f44336',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logoutContent: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'iransans',
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  logoutIconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SideMenu;