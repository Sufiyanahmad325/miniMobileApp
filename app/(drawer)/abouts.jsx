import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { CardContextApi } from '../_layout';



const abouts = () => {
  const { products, setProducts } = useContext(CardContextApi);
  return (
    <View>
      <Text>abouts</Text>
    </View>
  )
}

export default abouts

const styles = StyleSheet.create({})