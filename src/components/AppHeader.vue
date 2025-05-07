<template>
  <v-app-bar color="primary" density="compact">
    <template #prepend>
      <v-app-bar-nav-icon @click="$emit('toggleDrawer')" />
    </template>

    <v-app-bar-title>My Vuetify App</v-app-bar-title>

    <v-spacer />
    
    <div class="d-none d-sm-flex">
      <v-btn variant="text" to="/">Home</v-btn>
      <v-btn variant="text" to="/about">About</v-btn>
      <v-btn variant="text" to="/contact">Contact</v-btn>
    </div>
    <v-menu location="bottom">
      <template #activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>mdi-palette</v-icon>
        </v-btn>
      </template>
      <v-list density="compact">
        <v-list-item
          v-for="theme in availableThemes"
          :key="theme"
          @click="setTheme(theme)"
        >
          <v-list-item-title>{{ theme }}</v-list-item-title>
          <v-icon v-if="theme === currentTheme">mdi-check</v-icon>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts" setup>
defineProps<{
  drawer?: boolean;
}>();

defineEmits<{
  (e: "toggleDrawer"): void;
}>();
import { ref } from "vue";

import { useTheme } from "vuetify";

const theme = useTheme();
const availableThemes = ["light", "dark"];

const savedTheme = localStorage.getItem("appTheme") || "light";
theme.global.name.value = savedTheme


function setTheme(themeName: string) {
  theme.global.name.value = themeName
  localStorage.setItem("appTheme", themeName);
}


</script>