module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
    },
    "extends": "airbnb",
    "plugins": [
        "react"
      ],
     "parser": "babel-eslint",
     "globals":{
        "fetch": true,
        "window": true,
        "document": true
      },
      "rules":{
        "max-len": "off",
        "react/destructuring-assignment": "off",
        "react/prop-types": "off"
      }
};
