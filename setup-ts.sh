#!/bin/bash

npm i -D eslint eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier

cat > .eslintrc.js <<EOF
module.exports = {
  root: true,
  env: {
      browser: true,
      es2021: true,
      node: true
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
		"@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
     ecmaVersion: 2021
  },
  plugins: [
  ],
  rules: {
  }
}
EOF

cat > .prettierrc.js <<EOF
module.exports = {
  printWidth: 100,
  semi: false,
  tabWidth: 2,
  useTabs: true,
  trailingComma: "es5",
  singleQuote: true
}
EOF

cat > vite.config.ts <<EOF
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src')
		}
	},
})
EOF

cat > tsconfig.json <<EOF
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "moduleResolution": "node",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "allowJs": true,
    "baseUrl": ".",
    "paths": {
      "@/*": [ // / to begin with.
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
  ],
  "exclude": [
    "node_modules"
  ]
}
EOF
