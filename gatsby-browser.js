/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider>{element}</ChakraProvider>
}
