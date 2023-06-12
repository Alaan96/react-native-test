import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 48,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(342, 100%, 50%)',
    borderRadius: 10
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 600
  }
})

const AppButton = ({ text, loading, style, onPress }) => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPress}>
      <Text style={styles.text}>{loading ? 'Loading...' : text}</Text>
    </TouchableOpacity>
  )
}

AppButton.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool,
  style: PropTypes.object,
  onPress: PropTypes.func
}

export default AppButton
