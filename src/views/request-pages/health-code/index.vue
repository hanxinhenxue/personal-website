<template>
  <div>防疫健康码</div>
</template>
<script>
  export default {
    name: 'HealthCode',
  }
</script>
<script setup>
  import { getHealthCodeData } from '@/apis/request-pages'
  const getData = () => {
    getHealthCodeData().then((res) => {
      console.log(1111, res)
    })
  }
  getData()
</script>

<style lang="scss" scoped></style>
