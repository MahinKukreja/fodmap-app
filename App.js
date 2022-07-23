import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
  SafeAreaView,
} from "react-native";
import Popup from "./components/Modal";

import customData from "./data.json";

const darkModeCategories = [
  "Breads, Cereals, Grains and Pasta",
  "Drinks",
  "Sweeteners",
];
const categoryStyles = {
  "Breads, Cereals, Grains and Pasta": "#694f3d",
  Milk: "#9bc3ff",
  Dairy: "#68a3fd",
  "Nuts and Seeds": "#ffff80",
  "Cooking ingredients, Herbs and Spices": "#cfcfcf",
  Drinks: "#2e2e2e",
  "Vegetables and legumes": "#b3ffb3",
  Sweeteners: "#444e8a",
  Cheese: "#fffb23",
  "Meat & Substitutes": "#ff4848",
  Condiments: "#caaae7",
  Fruit: "#39ff74",
};

const Item = ({ title }) => (
  <View
    style={[styles.item, { backgroundColor: categoryStyles[title.category] }]}
  >
    <Text
      style={
        darkModeCategories.includes(title.category)
          ? styles.titleLight
          : styles.title
      }
    >
      {title.name}
      {title.qty ? ` (Quantity: ${title.qty})` : ""}
    </Text>
    <Text
      style={
        darkModeCategories.includes(title.category)
          ? styles.subtitleLight
          : styles.subtitle
      }
    >
      {title.category}
    </Text>
  </View>
);

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(null);
  const [searchText, setSearchText] = React.useState("");

  const searchFilteredData = searchText
    ? customData.filter((x) =>
        x.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : customData;
  const onPress = (item) => {
    setActiveItem(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => onPress(item)}>
      <Item title={item} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setSearchText(text);
        }}
        value={searchText}
        placeholder="Enter food..."
        placeholderTextColor="#e4e4e4"
      />

      <FlatList
        data={searchFilteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Popup
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        activeItem={activeItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },
  input: {
    height: 60,
    margin: 17.5,
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    borderColor: "#969696",
    fontSize: 18,
    color: "#e4e4e4",
    marginTop: 30,
  },
  item: {
    padding: 14,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 13.5,
  },
  titleLight: {
    fontSize: 20,
    color: "white",
  },
  subtitleLight: {
    fontSize: 13.5,
    color: "white",
  },
});
