import React, { useCallback } from 'react'
import { View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
// Components
import Header from '../components/Header'

const HomeScreen = () => {
  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      const isLogged = false
      if (isLogged) return
      else return navigation.navigate('Login')
    })
  )
  return (
    <View>
      <Header />
    </View>
  )
}

export default HomeScreen
