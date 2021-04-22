module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
    'react-native/react-native': true,
  },
  extends: [
    'airbnb',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathSuffix: 'app',
        rootPathPrefix: '~',
      },
      node: {
        extensions: ['.js', '.jsx', 'ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'no-use-before-define': 0,
    'import/extensions': 'off',
  },
}
