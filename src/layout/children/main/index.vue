<template>
  <main class="box layer">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <div :key="route.path" class="box">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </main>
</template>
