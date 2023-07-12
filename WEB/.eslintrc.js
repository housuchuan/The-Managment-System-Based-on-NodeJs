module.exports = {
   env: {
      browser: true,
      es6: true,
      node: true,
      commonjs: true
   },
   parser: '@babel/eslint-parser',
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'prettier'
   ],
   parserOptions: {
      ecmaVersion: 2019,
      ecmaFeatures: {
         experimentalObjectRestSpread: true,
         jsx: true,
         arrowFunctions: true,
         classes: true,
         modules: true,
         defaultParams: true,
      },
      sourceType: 'module'
   },
   plugins: [
      'react'
   ],
   rules: {
      'quotes': [2, 'single'],
      'react/react-in-jsx-scope': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'indent': [2 , 3],
      // 强制使用一致的换行风格
      'linebreak-style': [2, 'windows'],
      //换行空白数为0
      'no-multiple-empty-lines': [2, {max: 1, maxEOF: 0, maxBOF: 0 }]
   }
};
