/**
 * 类型检查工具函数
 * obj 需要检查的对象
 * target 想要推断的类型 obj string number null undefined function
 */
const checkParamsType = (obj, target) => {
  if ((Object.prototype.toString.call(obj) != '[object Null]' || Object.prototype.toString.call(obj) != '[object Undefined]') && !target) {
    console.error('该工具函数必须传递2个参数，第一个是校验的对象，第二个是目标校验类型！')
    return
  }
  if (Object.prototype.toString.call(target) != '[object String]') {
    console.error('目标校验类型必须是字符串！')
    return
  }
  let targetArray = ['string', 'number', 'null', 'boolean', 'function', 'object', 'undefined', 'array']
  if (!targetArray.includes(target)) {
    console.error('目标校验类型必须是"string", "number", "null", "boolean", "function", "object", "undefined", "array"中的一种！')
    return
  }
  let targetObj = {
    string: '[object String]',
    number: '[object Number]',
    null: '[object Null]',
    boolean: '[object Boolean]',
    function: '[object Function]',
    object: '[object Object]',
    undefined: '[object Undefined]',
    array: '[object Array]',
  }
  let isPass = false
  if (Object.prototype.toString.call(obj) == targetObj[target]) {
    isPass = true
  }
  return isPass
}
/**
 * 获取n天前的时间
 */
const getBeforeDate = (n = 0) => {
  let disparitySeconds = +new Date() - n * 24 * 60 * 60 * 1000
  let date = new Date(disparitySeconds)
  // let year = date.getFullYear()
  let month = date.getMonth() + 1
  month = month.toString().padStart(2, '0')
  let day = date.getDate()
  day = day.toString().padStart(2, '0')
  return `${month}-${day}`
}

/**
 * 数字序列化
 * num 传递的数字可以是字符串
 * isLocal 传递的数字是否序列化
 * mark 传递的数字是否需要添加 + -
 * 返回拼接后的title
 */
export const numFormatter = (num, isLocal = false, mark = false) => {
  if (Object.prototype.toString.call(num) == '[object Null]' || Object.prototype.toString.call(num) == '[object Undefined]') {
    return ''
  }
  let markCharset = ''
  if (Object.prototype.toString.call(num) == '[object String]' && Object.prototype.toString.call(parseFloat(num)) == '[object Number]') {
    if (mark) {
      markCharset = parseFloat(num) < 0 ? '' : '+'
    }
    if (isLocal) {
      return markCharset + num.toLocaleString()
    } else {
      return markCharset + num
    }
  } else if (Object.prototype.toString.call(num) == '[object Number]') {
    if (mark) {
      markCharset = num < 0 ? '' : '+'
    }
    if (isLocal) {
      return markCharset + num.toLocaleString()
    } else {
      return markCharset + num
    }
  } else {
    return '-'
  }
}

export default {
  checkParamsType,
  getBeforeDate,
  numFormatter,
}
