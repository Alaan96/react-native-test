import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Screens
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

const client = new ApolloClient({
  uri: 'http://192.168.0.76:8081/localdev/graphql',
  cache: new InMemoryCache()
})
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default App