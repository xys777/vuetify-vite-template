<template>
  <v-container fluid class="fill-height pa-0">
    <v-row no-gutters class="fill-height">
      <!-- Left Navigation Menu (3 columns) -->
      <v-col cols="3" class="border-e">
        <v-list density="compact" nav>
          <v-list-item
            v-for="item in menuItems"
            :key="item.component"
            :value="item.component"
            :title="item.title"
            :prepend-icon="item.icon"
            @click="selectedComponent = item.component"
            :active="selectedComponent === item.component"
            active-class="bg-blue-lighten-5"
          />
        </v-list>
      </v-col>

      <!-- Right Content Area (9 columns) -->
      <v-col cols="9" class="pa-4">
        <v-window v-model="selectedComponent">
          <v-window-item
            v-for="item in menuItems"
            :key="item.component"
            :value="item.component"
          >
            <component :is="item.component" />
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import BasicInfo from '../components/example/BasicInfo.vue'
  import AdvancedSettings from '../components/example/AdvancedSettings.vue'
  import StatisticsView from '../components/example/StatisticsView.vue'

  // Menu configuration
  const menuItems = [
    { title: 'Basic Info', component: BasicInfo, icon: 'mdi-information' },
    { title: 'Settings', component: AdvancedSettings, icon: 'mdi-cog' },
    { title: 'Statistics', component: StatisticsView, icon: 'mdi-chart-bar' }
  ] as const

  const selectedComponent = ref<typeof menuItems[number]['component']>('BasicInfo')
</script>

<style scoped>
.border-e {
  border-right: thin solid rgba(0, 0, 0, 0.12);
}
</style>