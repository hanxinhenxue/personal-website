<template>
  <Provider>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </Provider>
</template>
<script>
  export default {
    name: 'App',
  }
</script>
<script setup>
  console.log(1)
</script>
<style lang="scss">
  #app {
    @apply w-full layer;
    .n-config-provider {
      height: inherit;
    }
  }
</style>
