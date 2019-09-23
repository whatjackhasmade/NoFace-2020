import React from "react"
import Helmet from "react-helmet"

function SEO({ description, lang, meta, title }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          property: `og:title`,
          content: title,
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
          name: `twitter:title`,
          content: title,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
