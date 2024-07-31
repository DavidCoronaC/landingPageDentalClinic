import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      'arrow-parens': ['error', 'as-needed'],
      'class-methods-use-this': ['off'],
      'comma-dangle': ['error', 'never'],
      'consistent-return': 'error',
      'max-len': ['error', { code: 100 }],
      'no-empty-function': 'warn',
      'no-shadow': 'error',
      'no-underscore-dangle': ['error', { allowAfterThis: true }],
      'no-unused-expressions': ['error', { allowTernary: true }],
      'no-use-before-define': ['error'],
      'operator-linebreak': ['error', 'before'],
      'react/destructuring-assignment': 'warn',
      'react/forbid-component-props': ['warn', { forbid: ['styleName', 'tid', 'data-testid'] }],
      'react/forbid-foreign-prop-types': 'error',
      'react/hook-use-state': 'warn',
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-curly-newline': ['warn', 'consistent'],
      'react/jsx-curly-spacing': ['warn', { when: 'never', allowMultiline: false }],
      'react/jsx-equals-spacing': ['warn', 'never'],
      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
      'react/jsx-first-prop-new-line': 'warn',
      'react/jsx-fragments': ['warn', 'element'],
      'react/jsx-handler-names': 'warn',
      'react/jsx-no-duplicate-props': 'error',
      'react/no-children-prop': 'error',
      'react/no-invalid-html-attribute': 'error',
      'react/no-this-in-sfc': 'error',
      'react/no-typos': 'error',
      'react/no-unknown-property': ['error', { ignore: ['styleName', 'tid'] }],
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }],
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-pascal-case': 'error',
      'react/jsx-indent': [
        'error', 2 /* two-spaces identation */, { indentLogicalExpressions: true }
      ],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-max-props-per-line': ['error', { when: 'multiline' }],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-space-before-closing': ['error', 'always'],
      'react/jsx-tag-spacing': ['error'],
      'react/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens',
        logical: 'parens',
        prop: 'ignore'
      }]
    }
  },
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended
];
