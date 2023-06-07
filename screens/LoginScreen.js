import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { login as loginAction } from '../store/userReducer'
import { gql, useMutation } from '@apollo/client'
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
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('alan@getcharly.com')
  const [password, setPassword] = useState('passdealan')

  const [login, { loading, error, data }] = useMutation(loginMutation, {
    variables: {
      email: email,
      password: password
    }
  })

  const handleLogin = async () => {
    await login()
    if (data.login) {
      dispatch(loginAction(data.login))
      navigation.navigate('Home')
    }
  }

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

      <Button title={loading ? 'Cargando...' : 'Login'} onPress={handleLogin} />
      {error && <Text>Error: {error.message}</Text>}
    </View>
  )
}

export default LoginScreen