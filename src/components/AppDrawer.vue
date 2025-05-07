<template>
  <v-navigation-drawer
    v-model="model"
    location="left"
  >
    <v-list density="compact" nav>
      <v-list-item
        v-for="item in navItems"
        :key="item.to"
        :value="item.to"
        :title="item.title"
        :to="item.to"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const model = ref(props.modelValue)
watch(model, (val) => emit('update:modelValue', val))

const navItems = [
  { title: 'Home', to: '/' },
  { title: 'Example', to: '/example' }, // New route
  { title: 'Dashboard', to: '/dashboard' },
  { title: 'Settings', to: '/settings' }
]
</script>
