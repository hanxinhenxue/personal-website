module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    checkParamsType: true, // 公用函数-检查类型
    useRoute: true, // 以下为vue3内置语法自动导入
    useRouter: true,
    useSlots: true,
    useAttrs: true,
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    $message: true,
    $dialog: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier', 'plugin:prettier/recommended', 'vue-global-api'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false, //允许在全局作用域下使用 return 语句
      impliedStrict: false, //启用全局的严格模式(如果 ecmaVersion 是 5 或更高)
      jsx: true, //启用 JSX
    },
  },
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off', // 组件名要2个
    'vue/no-mutating-props': 'off', // 允许props修改
    'vue/no-v-html': 'off',
    'vue/valid-template-root': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'import/no-unresolved': 'off',
    // 'import/prefer-default-export': 'off',
    // 'no-param-reassign': 'off',
    // "prettier/prettier": 'off' // 尾逗号
  },
}
