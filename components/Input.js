import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

const Input = ({ label, type, value, onInput }) => {
  const [focus, setFocus] = useState(false)

  const emitText = (text) => onInput(text)

  const styles = StyleSheet.create({
    inputContainer: {
      flex: 1
    },
    label: {
      color: 'white',
      fontWeight: '600',
      textTransform: 'capitalize',
      fontSize: 16,
      
    },
    input: {
      width: 100,
      height: 100,
      paddingHorizontal: 150,
      color: 'black',
      borderWidth: 10,
      borderColor: 'white',
      borderRadius: 10
    }
  })

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput
        keyboardType={type}
        style={styles.input}
        value={value}
        onChangeText={emitText}
        onFocus={() => setFocus(true)}
      />
      {/* <View style={styles.errorMessages}></View> */}
    </View>
  )
}
Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onInput: PropTypes.func
}

export default Input