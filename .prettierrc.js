module.exports = {
  printWidth: 150, //每行最大长度
  tabWidth: 2, //缩进
  useTabs: false, //是否使用制表符
  semi: false, // 未尾逗号
  vueIndentScriptAndStyle: true, //vue文件缩进
  singleQuote: true, // 单引号
  quoteProps: 'as-needed', //引用对象中的属性时更改
  bracketSpacing: true, //对象文本中括号之间的打印空格
  bracketSameLine: false,
  jsxBracketSameLine: false, // jsx中使用单引号
  trailingComma: 'es5', // 尾逗号 es5|none|all
  jsxSingleQuote: false, // jsx中使用单引号
  arrowParens: 'always', // 在唯一的箭头函数参数周围包括括号 always|avoid
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict', // 全局空白敏感性
  endOfLine: 'auto', // 换行 lf|crlf|cr|auto 默认lf
  embeddedLanguageFormatting: 'auto',
}
