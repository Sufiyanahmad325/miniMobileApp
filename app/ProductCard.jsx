import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { CardContextApi } from './_layout';

const ProductCard = () => {
    const { addToCart , setAddToCart } = useContext(CardContextApi);
    const item = useLocalSearchParams()
    console.log(item)
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Pressable onPress={() => router.back()}>
                        <Text style={styles.backArrow}>←</Text>
                    </Pressable>
                </View>
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                />
                <View style={styles.details}>
                    <Text style={styles.title}>ProSound Elite Headphones</Text>
                    <Text style={styles.price}>$299.99</Text>
                    <Text style={styles.description}>
                        Experience superior audio quality with noise-cancelling technology, a comfortable fit for extended wear, and a long-lasting battery life. Available in multiple colors.
                    </Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '85%',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 15,
    },
    backArrow: {
        fontSize: 24,
        color: '#333',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 15,
    },
    details: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
    },
    price: {
        fontSize: 18,
        color: '#666',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        lineHeight: 20,
    },
    button: {
        width: '100%',
        backgroundColor: '#00c0b3',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProductCard;