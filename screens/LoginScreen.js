import { gql, useMutation } from '@apollo/client'
import React from 'react'
import { Button, Text, View } from 'react-native'

const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      token
    }
  }
`

const LoginScreen = () => {
  const [login, { loading, error, data }] = useMutation(loginMutation, {
    variables: {
      email: 'alan@getcharly.com',
      password: 'passdealan'
    }
  })

  return (
    <View>
      <Text>Login</Text>
      {loading && <Text>Cargando...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data && <Text>Data: {data}</Text>}
      <Button title="Login" onPress={login} />
    </View>
  )
}

export default LoginScreen