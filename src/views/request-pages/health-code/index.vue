<template>
  <div>
    <p>红码：{{ state.red_code_num }} </p>
    <p>黄码：{{ state.yellow_code_num }}</p>
    <p>绿码：{{ state.green_code_num }}</p>
    <p>灰码：{{ state.grey_code_num }}</p>
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
        } else {
          $message.warning(res.msg ?? '获取健康码数据失败！')
        }
      })
      .catch(() => {
        $message.error('网路异常或跨域！')
      })
  }
  getData()
</script>

<style lang="scss" scoped></style>
