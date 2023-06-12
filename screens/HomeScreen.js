import React, { useCallback, useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/userReducer'
import { gql, useQuery } from '@apollo/client'
// Components
import Splash from '../components/Splash'
import Header from '../components/Header'
import AppButton from '../components/AppButton'

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
    }
  }
`

const HomeScreen = () => {
  const navigation = useNavigation()
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const [fullName, setFullName] = useState('')
  const { loading, data } = useQuery(getUserQuery, {
    variables: { id: state.user._id }
  })

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: 'white'
    },
    loggedAsText: {
      textAlign: 'center',
      fontSize: 16,
      color: 'hsl(233, 12%, 13%)'
    }
  })

  const loggedAs = () => {
    return fullName ? `Logged as ${fullName}` : ''
  }

  const handleLogout = () => {
    dispatch(logout())
    navigation.navigate('Login')
  }

  useEffect(() => {
    if (data && 'getUser' in data) {
      const { firstName, lastName } = data.getUser
      setFullName(`${firstName} ${lastName}`)
    }
  }, [data])

  useFocusEffect(
    useCallback(() => {
      if (!state.user.isLogged) return navigation.navigate('Login')
    })
  )

  return (
    <View>
      {loading ? (
        <Splash />
      ) : (
        <View style={styles.container}>
          <Header />
          <Text style={styles.loggedAsText}>{loggedAs()}</Text>
          <View style={{ paddingHorizontal: 20 }}>
            <AppButton
              text="Logout"
              style={{ marginTop: 20 }}
              onPress={handleLogout}
            />
          </View>
        </View>
      )}
    </View>
  )
}

export default HomeScreen
