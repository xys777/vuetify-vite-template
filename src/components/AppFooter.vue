<template>
  <v-footer app border>
    <v-container>
      <div class="d-flex justify-space-between align-center">
        <div>&copy; {{ new Date().getFullYear() }} My App</div>
        <div class="d-flex gap-2">
          <v-btn variant="text" size="small" to="/privacy">Privacy Policy</v-btn>
          <v-btn variant="text" size="small" to="/terms">Terms of Service</v-btn>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script lang="ts" setup>
// Component logic can be added here if needed
</script>