import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

const Input = ({ label, type, secure = false, value, onInput }) => {
  const [focus, setFocus] = useState(false)

  const emitText = (text) => onInput(text)

  const styles = StyleSheet.create({
    inputContainer: {
      width: '100%',
      marginBottom: 20
    },
    label: {
      color: 'hsl(228, 20%, 65%)',
      fontWeight: '600',
      textTransform: 'capitalize',
      fontSize: 16
    },
    input: {
      width: '100%',
      height: 48,
      paddingHorizontal: 16,
      color: 'hsl(233, 12%, 13%)',
      borderWidth: 1,
      borderColor: 'hsl(228, 20%, 65%)',
      borderRadius: 10
    }
  })

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={type}
        style={styles.input}
        secureTextEntry={secure}
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
  secure: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onInput: PropTypes.func
}

export default Input