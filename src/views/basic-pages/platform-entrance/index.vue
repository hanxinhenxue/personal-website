<template>
  <div class="platform-container">
    <PlatformHeader :height="state.height" />
    <PlatformBody :height="state.height" />
  </div>
</template>
<script>
  export default {
    name: 'PlatformEntrance',
  }
</script>
<script setup>
  import PlatformHeader from './children/platform-header/index.vue'
  import PlatformBody from './children/platform-body/index.vue'
  const state = reactive({
    height: 135,
  })
</script>

<style lang="scss" scoped>
  .platform-container {
    background: linear-gradient(45deg, #d2dadd, #edf1f4);
    min-width: 1200px;
    @apply w-full py-135px;
  }
</style>
