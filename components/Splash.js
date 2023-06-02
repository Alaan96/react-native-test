import React from 'react'
import { View, StyleSheet } from 'react-native'
import Logo from './Logo'

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100
  }
})

const Splash = () => {
  return (
    <View style={styles.container}>
      <Logo style={styles.image} />
    </View>
  )
}

export default Splash
