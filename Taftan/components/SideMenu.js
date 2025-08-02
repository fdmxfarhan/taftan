import React, { useEffect, useState } from 'react';
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
  InteractionManager,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './colors';
import handleLogout from '../services/authHelper';

const { width } = Dimensions.get('window');

const SideMenu = ({ isVisible, onClose, navigation }) => {
  const [slideAnim] = useState(new Animated.Value(width));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: width,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        InteractionManager.runAfterInteractions(() => {
          setVisible(false);
        });
      });
    }
  }, [isVisible]);

  // اگر نه visible است و نه isVisible، چیزی نمایش نده
  if (!isVisible && !visible) return null;

  const menuItemsMain = [
    { title: 'سرویس خرابی', icon: 'construct-outline', screen: 'ServiceDamage' },
    { title: 'سرویس نصب', icon: 'hammer-outline', screen: 'ServiceInstallation' },
    { title: 'سرویس سایت سازی', icon: 'storefront-outline', screen: 'ServiceSite' },
    { title: 'سرویس پروژه', icon: 'clipboard-outline', screen: 'ServiceProjects' },
    { title: 'سرویس دوره ای', icon: 'repeat-outline', screen: 'ServicePeriodic' },
  ];

  const menuItemsSecondary = [
    { title: 'نقشه', icon: 'map-outline', screen: 'MapPage' },
    { title: 'پروفایل', icon: 'person-outline', screen: 'Profile' },
  ];

  const renderMenuGroup = (items) => (
    <View style={styles.menuItemsContainer}>
      {items.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate(item.screen);
              onClose();
            }}
            activeOpacity={0.7}
          >
            <View style={styles.menuItemContent}>
              <View style={styles.iconContainer}>
                <Ionicons name={item.icon} size={20} color={colors.darkBackground || '#333'} />
              </View>
              <Text style={styles.menuText}>{item.title}</Text>
              <Ionicons name="chevron-back-outline" size={18} color="#999" />
            </View>
          </TouchableOpacity>
          {index !== items.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );

  return (
    <Modal visible transparent animationType="none" statusBarTranslucent>
      <>
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={onClose} >
          <View />
        </TouchableOpacity>

        <Animated.View style={[styles.menuWrapper, { transform: [{ translateX: slideAnim }] }]}>
          <SafeAreaView style={styles.safeArea}>

            <View style={styles.closeButtonContainer}>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Ionicons name="close" size={28} color="#fff" />
              </TouchableOpacity>
            </View>



            <ScrollView style={styles.menuContent} showsVerticalScrollIndicator={false}>
              {renderMenuGroup(menuItemsMain)}
              {renderMenuGroup(menuItemsSecondary)}
            </ScrollView>

            <View style={styles.logoutContainer}>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => handleLogout(navigation, onClose)}
                activeOpacity={0.8}
              >
                <View style={styles.logoutContent}>
                  <View style={styles.logoutIconContainer}>
                    <Ionicons name="log-out-outline" size={20} color={colors.red} />
                  </View>
                  <Text style={styles.logoutText}>خروج</Text>
                </View>
              </TouchableOpacity>
            </View>

          </SafeAreaView>
        </Animated.View>
      </>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: width,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: -4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  safeArea: {
    flex: 1,
  },
  closeButtonContainer: {
    alignItems: 'flex-start',
    paddingTop: 30,
    backgroundColor: colors.darkBackground,
  },
  closeButton: {
    padding: 12,
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  toplogo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  menuContent: {
    flex: 1,
    backgroundColor: '#ececec',
    padding: 5,
  },
  menuItemsContainer: {
    borderRadius: 10,
    margin: 5,
    marginBottom: 10,
    elevation: 2,
    backgroundColor: '#fff',
    paddingVertical: 4,
  },
  menuItem: {
    borderRadius: 8,
  },
  menuItemContent: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  menuText: {
    fontSize: 13,
    fontFamily: 'iransans',
    color: '#333',
    flex: 1,
    textAlign: 'right',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 14,
  },
  divider: {
    height: 1,
    backgroundColor: '#E6E6E6',
    marginRight: 60,
    marginLeft: 18,
    alignSelf: 'stretch',
  },
  logoutContainer: {
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#f8f9fa',
  },
  logoutButton: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
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
    color: colors.red,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  logoutIconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SideMenu;
