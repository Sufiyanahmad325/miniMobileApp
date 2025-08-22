import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { CardContextApi } from './_layout';
import { Image } from 'react-native';

const AddToCart = () => {
  const { addToCart } = useContext(CardContextApi);

  return (
     <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      <FlatList
        data={addToCart}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <View style={{ alignItems: 'center', gap: 10 }}>
                <Text style={styles.name}>{item.name}</Text>
                {/* 👇 Description add kiya */}
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                <View>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                  />
                </View>
              </View>

              <Pressable style={styles.removeBtn}>
                <Text style={styles.removeText}>Remove</Text>
              </Pressable>
            </View>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default AddToCart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom:20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15
  },
  card: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10
  },
  removeBtn: {
    padding: 8,
    backgroundColor: '#ffe6e6',
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10
  },
  removeText: {
    color: 'red',
    fontWeight: '600'
  }
})
