<template>
  <div class="w-full p-20px">
    <p>红码：{{ state.red_code_num }} </p>
    <p>黄码：{{ state.yellow_code_num }}</p>
    <p>绿码：{{ state.green_code_num }}</p>
    <p>灰码：{{ state.grey_code_num }}</p>
    <div v-if="state.isShow" class="pt-10px">
      <n-button type="primary" @click="copyHandle">一键复制</n-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HealthCode',
  }
</script>
<script setup>
  import { getHealthCodeData } from '@/apis/request-pages'
  const state = reactive({
    red_code_num: 0,
    yellow_code_num: 0,
    green_code_num: 0,
    grey_code_num: 0,
    copyText: '',
    isShow: false,
  })
  const getData = () => {
    getHealthCodeData()
      .then((res) => {
        if (checkParamsType(res.data, 'object')) {
          const { red_code_num, yellow_code_num, green_code_num, grey_code_num } = res.data
          state.red_code_num = red_code_num
          state.yellow_code_num = yellow_code_num
          state.green_code_num = green_code_num
          state.grey_code_num = grey_code_num
          state.copyText = `红码：${red_code_num}\r\n黄码：${yellow_code_num}\r\n绿码：${green_code_num}\r\n灰码：${grey_code_num}`
          state.isShow = true
        } else {
          $message.warning(res.msg ?? '获取健康码数据失败！')
        }
      })
      .catch(() => {
        $message.error('网路异常或跨域！')
      })
  }
  getData()
  const copyHandle = () => {
    var textValue = document.createElement('textarea')
    textValue.setAttribute('readonly', 'readonly') //设置只读属性防止手机上弹出软键盘
    textValue.value = state.copyText
    document.body.appendChild(textValue) //将textarea添加为body子元素
    textValue.select()
    var res = document.execCommand('copy')
    document.body.removeChild(textValue) //移除DOM元素
    $message.success('已复制到剪贴板！')
    return res
  }
</script>

<style lang="scss" scoped></style>
