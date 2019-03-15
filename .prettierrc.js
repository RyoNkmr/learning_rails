module.exports = {
  trailingComma: 'es5',
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.rb',
      options: {
        preferSingleQuotes: true,
      },
    },
  ],
}
