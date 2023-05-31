import React from 'react'
import { View, StyleSheet } from 'react-native'
import Logo from './Logo'

const styles = StyleSheet.create({
  header: {
    width: '100vw',
    paddingVertical: '0.75rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: '5rem',
    height: '3rem',
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
