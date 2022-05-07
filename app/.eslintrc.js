module.exports = {
  extends: '../.eslintrc.js',
  plugins: ['react', 'react-hooks', 'react-native'],

  globals: {
    JSX: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {argsIgnorePattern: '^_'},
        ],
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 1,
        'no-undef': 'off',
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 1,
      },
    },
  ],

  rules: {
    // React Plugin
    // The following rules are made available via `eslint-plugin-react`.

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
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/wrap-multilines': 0,

    // Custom
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,

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
    'react-native/no-unused-styles': 1,
    'react-native/no-inline-styles': 1,
  },
};
