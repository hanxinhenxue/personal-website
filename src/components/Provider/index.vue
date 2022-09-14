<template>
  <n-config-provider :theme-overrides="useTheme.themeSettings" :locale="zhCN" :date-locale="dateZhCN">
    <n-loading-bar-provider>
      <LoadingBar />
      <n-dialog-provider>
        <DialogContent />
        <n-message-provider>
          <MessageContent />
          <n-notification-provider>
            <NotificationContent />
            <slot></slot>
          </n-notification-provider>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
<script>
  export default {
    name: 'Provider',
  }
</script>
<script setup>
  import LoadingBar from './components/loading-bar.vue'
  import DialogContent from './components/dialog-content.vue'
  import MessageContent from './components/message-content.vue'
  import NotificationContent from './components/notification-content.vue'
  import { zhCN, dateZhCN } from 'naive-ui'
  import { useThemeStore } from '@/store/system/theme.js'
  const useTheme = useThemeStore()
</script>
