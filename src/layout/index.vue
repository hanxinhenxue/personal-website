<template>
  <div class="w-full h-full pt-66px relative box-border z-0 layout-container">
    <AppMain />
  </div>
</template>
<script>
  export default {
    name: 'Layout',
  }
</script>
<script setup>
  import AppMain from './children/main/index.vue'
</script>
<style lang="scss" scoped>
  .layout-container {
    background: #eee;
  }
</style>
