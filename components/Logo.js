import React from 'react'
import { Image } from 'react-native'

const Logo = ({ style }) => {
  return <Image source={require('../assets/redpadel.svg')} style={style} />
}

export default Logo