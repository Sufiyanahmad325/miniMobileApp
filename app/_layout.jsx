import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { createContext, useState } from 'react';


export const CardContextApi = createContext();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [products, setProducts] = useState([
    
      {
        "id": "1",
        "name": "Shirt Shirt",
        "price": 18.9,
        "image": "https://images.pexels.com/photos/4495705/pexels-photo-4495705.jpeg",
        "description": "This is a comfortable and stylish cotton shirt, perfect for everyday wear.",
        "category": "Apparel",
        "rating": 4.5
      },
      {
        "id": "2",
        "name": "Proun Nawich",
        "price": 18.9,
        "image": "https://i.ibb.co/7JfqXxB/shoes.png",
        "description": "These lightweight sports shoes are great for running and the gym.",
        "category": "Footwear",
        "rating": 4.2
      },
      {
        "id": "3",
        "name": "Toackings",
        "price": 18.9,
        "image": "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
        "description": "A classy analog watch that will enhance any outfit.",
        "category": "Accessories",
        "rating": 4.8
      },
      {
        "id": "4",
        "name": "Oran Puach",
        "price": 24.9,
        "image": "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg",
        "description": "A beautiful indoor plant that purifies the air in your home.",
        "category": "Home Decor",
        "rating": 4.7
      },
      {
        "id": "5",
        "name": "Denim Jacket",
        "price": 55.0,
        "image": "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg",
        "description": "A classic blue denim jacket that gives you a trendy look.",
        "category": "Apparel",
        "rating": 4.6
      },
      {
        "id": "6",
        "name": "Wireless Headphones",
        "price": 99.9,
        "image": "https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg",
        "description": "Wireless headphones with crystal-clear sound and long battery life.",
        "category": "Electronics",
        "rating": 4.9
      },
      {
        "id": "7",
        "name": "Leather Handbag",
        "price": 75.0,
        "image": "https://images.pexels.com/photos/3527572/pexels-photo-3527572.jpeg",
        "description": "A stylish and durable leather handbag, perfect for daily use.",
        "category": "Accessories",
        "rating": 4.5
      },
      {
        "id": "8",
        "name": "Yoga Mat",
        "price": 29.9,
        "image": "https://images.pexels.com/photos/3527572/pexels-photo-3527572.jpeg",
        "description": "A non-slip and comfortable yoga mat for your fitness routine.",
        "category": "Fitness",
        "rating": 4.3
      },
      {
        "id": "9",
        "name": "Espresso Machine",
        "price": 150.0,
        "image": "https://images.pexels.com/photos/1943846/pexels-photo-1943846.jpeg",
        "description": "Make cafe-quality espresso right in your home.",
        "category": "Home Appliances",
        "rating": 4.8
      },
      {
        "id": "10",
        "name": "Portable Speaker",
        "price": 60.0,
        "image": "https://images.pexels.com/photos/2249249/pexels-photo-2249249.jpeg",
        "description": "Listen to your favorite tunes anywhere, anytime, with excellent audio.",
        "category": "Electronics",
        "rating": 4.7
      }
    
  ])

  const [addToCart, setAddToCart] = useState([])
  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <CardContextApi.Provider value={{ products, setProducts , addToCart, setAddToCart }}>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="addTokart"  />
        <Stack.Screen name="ProductCard" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      </CardContextApi.Provider>
    </ThemeProvider>
  );
}
