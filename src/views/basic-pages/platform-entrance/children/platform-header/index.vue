<template>
  <header class="platform-header__container">
    <div class="clip"></div>
    <div class="clip"></div>
  </header>
</template>
<script>
  export default {
    name: 'PlatformHeader',
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
  .platform-header__container {
    --h: v-bind('props.height');
    background-color: #fff;
    height: calc(var(--h) * 1px);
    @apply w-full px-24px absolute;
    .clip {
      background: url('@pics/basic-pages/clip.png') no-repeat center center;
      @apply w-200px h-200px;
    }
  }
</style>
