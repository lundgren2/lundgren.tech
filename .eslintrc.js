module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "no-console": 0,
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-boolean-value": 0,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "semi": false,
        "printWidth": 100
      }
    ]
  },
  "plugins": [
    "html",
    "prettier",
    "react-hooks"
  ]
}