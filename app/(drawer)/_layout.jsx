import { StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import React from 'react'
import CustomHeader from '../CustomHeader';

const  DrawerRoot = () => {
  return (
    <GestureHandlerRootView>

        <Drawer 
        screenOptions={{
          header:({navigation}) => <CustomHeader navigation={navigation} />
        }}
        >
            <Drawer.Screen name='index' options={{title:'Home' }} />
            <Drawer.Screen name='abouts' options={{title:'About' }} />
            <Drawer.Screen name='tech' options={{title:'tech' }} />
        </Drawer>

    </GestureHandlerRootView>
  )
}

export default DrawerRoot

const styles = StyleSheet.create({})