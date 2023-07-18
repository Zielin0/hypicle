module.exports = {
  extends: [
    'airbnb-typescript/base',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'import',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    '@typescript-eslint/return-await': 0,
    // Add any additional rules here, as needed
  },
  ignorePatterns: ['tests/**/*.ts', 'examples/**/*.ts'],
  overrides: [
    {
      files: ['tests/**/*.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['examples/**/*.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
