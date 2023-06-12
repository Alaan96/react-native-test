import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { login as loginAction } from '../store/userReducer'
import { gql, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'
// Components
import Logo from '../components/Logo'
import Input from '../components/Input'
import AppButton from '../components/AppButton'

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
    flex: 1,
    maxWidth: 512,
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 100,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logo: {
    width: 136,
    height: 80,
    marginVertical: 40
  }
})

const LoginScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login, { loading, error, data }] = useMutation(loginMutation, {
    variables: {
      email: email,
      password: password
    }
  })
  const setToken = async (token) => {
    try {
      await AsyncStorage.setItem('token', token)
    } catch (err) {
      console.log('Error saving token', err)
    }
  }

  useEffect(() => {
    if (data && data.login && data.login.token) {
      setToken(data.login.token)
      dispatch(loginAction(data.login))
      navigation.navigate('Home')
    }
  }, [data])

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <Input
        label="Email"
        value={email}
        onInput={setEmail}
      />
      <Input
        label="Password"
        secure={true}
        value={password}
        onInput={setPassword}
      />

      <AppButton text="Login" loading={loading} onPress={login} />
      {error && (
        <Text style={{ color: 'hsl(30, 97%, 58%)' }}>
          Error: {error.message}
        </Text>
      )}
    </View>
  )
}

export default LoginScreen