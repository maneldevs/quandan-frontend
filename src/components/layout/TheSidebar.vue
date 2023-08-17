<script setup>
import { useApplicationStore } from '../../stores/application'
import { computed } from 'vue'

const applicationStore = useApplicationStore();
const drawer = computed(() => applicationStore.sidebarVisible)

</script>

<template>
  <v-navigation-drawer v-model="drawer">
    hola
  </v-navigation-drawer>
</template>