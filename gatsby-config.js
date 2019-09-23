module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "WORDPRESS",
        // This is field under which it's accessible
        fieldName: "wordpress",
        // Url to query from
        url: "http://noface.local/graphql",
      },
    },
  ],
}
