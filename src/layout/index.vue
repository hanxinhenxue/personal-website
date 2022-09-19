<template>
  <div class="box layer">
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
