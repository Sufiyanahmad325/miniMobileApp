import React, { useContext } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Pressable, Alert } from "react-native";
import { CardContextApi } from '../../app/_layout'; // Adjust the import path as necessary
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function App() {

  const { products, setProducts, addToCart, setAddToCart } = useContext(CardContextApi);


  const addToCartHandler = (item) => {
    // Check if the item is already in the cart
      const existingItem = addToCart?.find((cardItem) => cardItem.id == item.id)
      if(existingItem){
        Alert.alert("Its Allready Added")
        return
      }
      setAddToCart([item , ...addToCart])
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Pressable
        onPress={() => {
          router.push({ pathname: "ProductCard", params: { ...item } });
        }}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </Pressable>
      <TouchableOpacity
        onPress={()=> addToCartHandler(item) }
        style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}  >
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // 2-column grid
        columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }} // space between columns
        contentContainerStyle={{ padding: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    flex: 1,
    alignItems: "center",
    elevation: 3, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  price: {
    fontSize: 13,
    color: "gray",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4dd0e1",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});
