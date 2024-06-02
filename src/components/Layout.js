// src/components/Layout.js

import React from "react"
import { Box, Container } from "@chakra-ui/react"
import SEO from "./seo"

const Layout = ({ children }) => {
  return (
    <Box>
      <SEO />
      <Container maxW="container.xl">
        {children}
      </Container>
    </Box>
  )
}

export default Layout
