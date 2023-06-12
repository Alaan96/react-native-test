import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

const Logo = ({ style }) => {
  const logoSrc = require('../assets/redpadel.png')
  return (
    <Image
      source={logoSrc}
      style={style}
    />
  )
}

Logo.propTypes = {
  style: PropTypes.object,
}

export default Logo