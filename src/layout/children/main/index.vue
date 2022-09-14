<template>
  <main class="w-full h-full relative z-10 pointer-events-none">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <div :key="route.path" class="w-full h-full">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </main>
</template>
