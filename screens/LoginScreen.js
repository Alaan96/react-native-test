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
    flex:1,
    paddingHorizontal: 0,
    paddingBottom: 100,
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  logo: {
    width: 200,
    height: 250,
    marginVertical: 0
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
      {data && <Text>Data: {data.login._id}</Text>}
      <Button title="Login" onPress={login} />
    </View>
  )
}

export default LoginScreen