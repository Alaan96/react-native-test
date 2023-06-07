import React, { useCallback } from 'react'
import { Button, Text, View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/userReducer'
import { gql, useQuery } from '@apollo/client'
// Components
import Splash from '../components/Splash'
import Header from '../components/Header'

const getUserQuery = gql`
  query GetUser($id: String!) {
    getUser(_id: $id) {
      _id
      firstName
      lastName
      photo
      hidden
      rating {
        value
        volatility
        deviation
        confidence
      }
      ratingVerified {
        value
        volatility
        deviation
        confidence
      }
      token
    }
  }
`

const HomeScreen = () => {
  const navigation = useNavigation()
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  console.log({id: state.user._id})

  const { loading, error, data } = useQuery(getUserQuery, {
    variables: state.user._id
  })

  const handleLogout = () => {
    dispatch(logout())
    navigation.navigate('Login')
  }

  useFocusEffect(
    useCallback(() => {
      if (!state.isLogged) return navigation.navigate('Login')
    })
  )
  return (
    <View>
      {loading
        ? <Splash />
        : (
          <View>
            <Header />
            {error && <Text>Error: {error.message}</Text>}
            {data && <Text>Firstname: {data.getUser.firstName}</Text>}
            <Button title="Logout" onPress={handleLogout}>
              Logout
            </Button>
          </View>
        )
      }
    </View>
  )
}

export default HomeScreen
