import React from 'react'
import { GlobalStyles } from 'twin.macro'

import '../fonts/calibre.css'
import '../fonts/sfmono.css'

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    {children}
  </div>
)

export default Layout