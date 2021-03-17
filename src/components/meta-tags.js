import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="height=device-height, 
          width=device-width, initial-scale=1.0, 
          minimum-scale=1.0, maximum-scale=1.0, 
          user-scalable=no, target-densitydpi=device-dpi"
      />
      <title>Plant Power Racing</title>
    </Helmet>
  )
}

export default Meta
