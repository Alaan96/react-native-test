import React from 'react'
import { View, StyleSheet } from 'react-native'
import Logo from './Logo'

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 300,
    height: 300,
  },
})

const Header = () => {
  return (
    <View style={styles.header}>
      <Logo style={styles.logo} />
    </View>
  )
}

export default Header
