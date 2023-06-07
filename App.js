import React from 'react'
import { AppRegistry } from 'react-native'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import registerNNPushToken from 'native-notify'
import { Provider } from 'react-redux'
import store from './store'
// Screens
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

const client = new ApolloClient({
  uri: 'http://192.168.0.76:8081/localdev/graphql',
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