<template>
  <v-app>
    <app-header  @toggle-drawer="drawer = !drawer" />
    <app-drawer v-model="drawer" />
    <v-main>
      <router-view />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script lang="ts" setup>
// Explicit component registration (choose one method)
import AppHeader from '@/components/AppHeader.vue'
import AppDrawer from '@/components/AppDrawer.vue'
import AppFooter from '@/components/AppFooter.vue'
import { ref } from 'vue'

const drawer = ref(true)
</script>

