<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeading from './components/layout/TheHeading.vue'
</script>

<template>
  <v-app>
    <TheHeading />
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
