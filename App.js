import React from 'react'
import { AppRegistry } from 'react-native'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import registerNNPushToken from 'native-notify'
import { Provider } from 'react-redux'
import store from './store'
import AsyncStorage from '@react-native-async-storage/async-storage'
// Screens
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

const httpLink = createHttpLink({
  uri: 'http://192.168.0.76:8081/localdev/graphql'
})
const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('token')
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
const Stack = createNativeStackNavigator()

const App = () => {
  // registerNNPushToken(8462, 'z5d1GJgxYJybHkEIu8x3OD')

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  )
}

AppRegistry.registerComponent('App')
export default App