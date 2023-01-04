module.exports = {
  extends: '../.eslintrc.js',
  globals: {
    JSX: true,
  },
  plugins: ['react', 'react-hooks', 'react-native'],

  rules: {
    'no-restricted-imports': [
      1,
      {
        paths: [
          {
            importNames: [
              'TouchableOpacity',
              'TouchableNativeFeedback',
              'TouchableHighlight',
              'FlatList',
            ],
            message:
              "Please, import it from 'react-native' to avoid unexpected errors.",
            name: 'react-native-gesture-handler',
          },
        ],
      },
    ],

    'react/display-name': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 0,
    'react/no-string-refs': 1,
    'react/no-unknown-property': 0,
    'react/no-unstable-nested-components': 1,
    'react/prop-types': 0,
    'react/self-closing-comp': 1,

    'react/wrap-multilines': 0,

    'react-hooks/exhaustive-deps': 1,

    // Custom
    'react-hooks/rules-of-hooks': 2,
    'react-native/no-inline-styles': 1,
    'react-native/no-unused-styles': 1,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
