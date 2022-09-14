<template> </template>
<script>
  export default {
    name: 'NotificationContent',
  }
</script>
<script setup>
  import { useNotification } from 'naive-ui'
  window['$notification'] = useNotification()
</script>
