import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

const Input = ({ label, type, value, onInput }) => {
  const [focus, setFocus] = useState(false)

  const emitText = (text) => onInput(text)

  const styles = StyleSheet.create({
    inputContainer: {
      width: '100%'
    },
    label: {
      position: 'absolute',
      top: '0.875rem',
      left: '1rem',
      color: 'hsla(228, 20%, 65%, 1)',
      fontWeight: '600',
      textTransform: 'capitalize',
      fontSize: '0.75rem',
      transform: 'translateY(-0.5rem)'
    },
    input: {
      width: '100%',
      height: '3rem',
      paddingTop: '1rem',
      paddingHorizontal: '1rem',
      paddingBottom: '0.125rem',
      color: 'hsl(233, 12%, 13%)',
      backgroundColor: 'white',
      borderWidth: '1px',
      borderColor: 'hsla(228, 20%, 65%, 0.2)',
      borderRadius: '0.75rem',
      caretColor: 'hsl(342, 100%, 50%)'
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