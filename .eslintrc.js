module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2024,
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'node', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'prettier',
    'airbnb-base'
  ],
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  'rules': {
    'block-scoped-var': "error",
    'eqeqeq': "error",
    'no-var': "error",
    'no-console': "error",
    'prefer-const': "error",
    'eol-last': "error",
    'prefer-arrow-callback': "error",
    'no-trailing-spaces': "error",
    'quotes': ['warn', 'single', { avoidEscape: true }],
    'no-restricted-properties': [
      "error",
      {
        object: "describe",
        'property': "only"
      },
      {
        object: "it",
        property: "only"
      }
    ],
    'linebreak-style': 0,
    'prettier/prettier': [
      "error",
      {
        'endOfLine': "auto"
      }
    ],
    'id-length': [error, { min: 2 }],
    'comma-dangle': 0,
    'max-params': [error, 3],
    'node/no-unsupported-features/es-syntax': ["error", { ignores: ['modules'] }],
    'import/no-unresolved': 'off',
    'node/no-missing-import': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-constructor': 'off',
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'object-curly-newline': 'off',
    'no-underscore-dangle': 'off',
    'import/no-absolute-path': 'off',
    'node/no-unpublished-import': 'off',
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
    'lines-between-class-members': 'off',
    'camelcase': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'no-shadow': 'off',
    'indent': 'off',
    'brace-style': 'off'
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-warning-comments': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/naming-convention': [
          error,
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: true
            }
          },
          {
            selector: 'enum',
            format: ['PascalCase'],
            custom: {
              regex: '^[a-zA-Z]+Enum',
              match: true
            }
          }
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'off'
      }
    }
  ]
};
