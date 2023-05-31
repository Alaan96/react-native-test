import React from 'react'
import { View, StyleSheet } from 'react-native'
import Logo from './Logo'

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '12rem',
    height: '7rem'
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