<template> </template>
<script>
  export default {
    name: 'MessageContent',
  }
</script>
<script setup>
  import { useMessage } from 'naive-ui'
  window['$message'] = useMessage()
</script>
