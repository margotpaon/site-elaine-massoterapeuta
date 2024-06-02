// src/components/SEO.js

import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, lang = "pt-br", meta = [] }) => {
  const metaDescription = description || "Domine as Maiores Ferramentas de Vendas da Internet"
  const defaultTitle = "Conversão Extrema"

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title || defaultTitle}
      titleTemplate={title ? `%s | ${defaultTitle}` : defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title || defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@conversaoextrema`,
        },
        {
          name: `twitter:title`,
          content: title || defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
