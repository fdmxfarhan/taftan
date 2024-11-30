import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import colors from "./colors";

const { width } = Dimensions.get("window");
const ITEM_HEIGHT = 50;
const VISIBLE_ITEMS = 5; // Number of rows visible at a time

const SimpleScrollPicker = ({ items, onValueChange, defaultValue }) => {
  const [selectedIndex, setSelectedIndex] = useState(
    defaultValue ? items.findIndex((item) => item === defaultValue) : 0
  );

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    setSelectedIndex(index);
    if (onValueChange) onValueChange(items[index]);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        onScrollEndDrag={handleScroll}
        onMomentumScrollEnd={handleScroll}
        contentContainerStyle={styles.scrollContainer}
      >
        {items.map((item, index) => (
          <View
            key={index}
            style={[
              styles.item,
              index === selectedIndex && styles.selectedItem,
            ]}
          >
            <Text
              style={[
                styles.itemText,
                index === selectedIndex && styles.selectedItemText,
              ]}
            >
              {item}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    width: '100%',
    alignSelf: "center",
    position: "relative",
  },
  scrollContainer: {
    paddingVertical: (ITEM_HEIGHT * VISIBLE_ITEMS) / 2 - ITEM_HEIGHT,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedItem: {
    backgroundColor: colors.lightergray,
  },
  itemText: {
    fontSize: 13,
    color: colors.gray,
    fontFamily: 'iransans',
  },
  selectedItemText: {
    fontSize: 15,
    fontFamily: 'iransans',
    color: colors.text,
  },
  indicator: {
    position: "absolute",
    top: ITEM_HEIGHT * 1.5,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
});

export default SimpleScrollPicker;
