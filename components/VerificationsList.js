import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Text, View, StyleSheet } from 'react-native'

const getVerificationsQuery = gql`
  query GetVerifications {
    getVerifications {
      _id
      coach {
        _id
        firstName
      }
      coachID
      coachRequestedID
      createdAt
      declineReason
      declinedAt
      gender
      info
      method
      ratingAfter {
        value
        volatility
        deviation
        confidence
      }
      ratingBefore {
        value
        volatility
        deviation
        confidence
      }
      user {
        _id
        firstName
      }
      userID
      verifiedAt
    }
  }
`
const styles = StyleSheet.create({
  list: {}
})

const VerificationsList = () => {
  const { loading, error, data } = useQuery(getVerificationsQuery)

  if (loading) {
    return <Text>Cargando...</Text>
  }

  if (error) {
    return <Text>Error: {error.message}</Text>
  }

  return (
    <View style={styles.header}>
      <Text>Data: {data}</Text>
    </View>
  )
}

export default VerificationsList
