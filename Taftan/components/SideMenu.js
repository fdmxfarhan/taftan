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

const { width } = Dimensions.get('window');

const SideMenu = (props) => {
  const [slideAnim] = useState(new Animated.Value(width * 0.7)); // Initial position off screen
  var {isVisible, onClose, navigation} = props;

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

          <TouchableOpacity style={styles.menuItem} onPress={() => { 
            props.navigation.navigate('Home'); 
            onClose();
          }}>
            <Text style={styles.menuText}>درخواست خرابی</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => { /* Handle navigation or action */ }}>
            <Text style={styles.menuText}>سرویس دوره‌ای</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => { /* Handle navigation or action */ }}>
            <Text style={styles.menuText}>پروژه</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => { 
            props.navigation.navigate('MapPage'); 
            onClose();
          }}>
            <Text style={styles.menuText}>نقشه</Text>
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
  },
  menuText: {
    fontSize: 18,
  },
});

export default SideMenu;