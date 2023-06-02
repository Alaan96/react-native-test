import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
// Components
import Logo from '../components/Logo'
import Input from '../components/Input'

const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      token
    }
  }
`
const styles = StyleSheet.create({
  container: {
    maxWidth: '32rem',
    width: '100%',
    paddingHorizontal: '1.25rem',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logo: {
    width: '8.5rem',
    height: '5rem',
    marginVertical: '2.5rem'
  }
})

const LoginScreen = () => {
  const [email, setEmail] = useState('alan@getcharly.com')
  const [password, setPassword] = useState('passdealan')

  const [login, { loading, error, data }] = useMutation(loginMutation, {
    variables: {
      email: email,
      password: password
    }
  })

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <Input
        type="email-address"
        label="Email"
        value={email}
        onInput={setEmail}
      />
      <Input label="Password" value={password} onInput={setPassword} />

      {loading && <Text>Cargando...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data && <Text>Data: {data}</Text>}
      <Button title="Login" onPress={login} />
    </View>
  )
}

export default LoginScreen