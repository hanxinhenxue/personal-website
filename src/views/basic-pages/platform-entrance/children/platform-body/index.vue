<template>
  <div class="platform-body__container">
    <div class="w-full h-full bg"></div>
  </div>
</template>
<script>
  export default {
    name: 'PlatformBody',
  }
</script>
<script setup>
  const props = defineProps({
    height: {
      type: Number,
      default: 0,
    },
  })
</script>

<style lang="scss" scoped>
  .platform-body__container {
    --h: v-bind('props.height');
    height: calc(100vh - calc(var(--h) * 1px));
    background: #fff;
    @apply w-960px h-1140px mx-auto p-40px;
    box-shadow: 5px 5px 20px #babecc;
  }
  .bg {
    background-color: #eee;
  }
</style>
