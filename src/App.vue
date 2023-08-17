<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeading from './components/layout/TheHeading.vue'
import TheSidebar from './components/layout/TheSidebar.vue'
</script>

<template>
  <v-app>
    <TheHeading />
    <TheSidebar />
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
