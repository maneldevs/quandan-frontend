<script setup>
import { useApplicationStore } from '../../stores/application'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const applicationStore = useApplicationStore();
const { appTitle, sidebarVisible } = storeToRefs(applicationStore)
const dialog = ref(false)
const { name } = useDisplay()

function search(params) {
  // TODO mmr hacer la búsqueda
  dialog.value = false
}

onMounted(() => {
  if (name.value == 'lg' || name.value == 'xl') {
    sidebarVisible.value = true;
  }
})

</script>

<template>
  <v-app-bar elevation="1">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="sidebarVisible = !sidebarVisible"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>{{ appTitle }}</v-app-bar-title>
    <v-spacer class="d-none d-sm-flex"></v-spacer>
      <v-row class="d-none d-sm-flex">
        <v-col no-gutters>
          <div class="d-flex d-flex-row">
          <v-text-field density="compact" variant="outlined" label="Buscar" hide-details></v-text-field>
          <v-btn icon @click="search">
            <v-icon>mdi mdi-magnify</v-icon>
          </v-btn>
        </div>
        </v-col>
      </v-row>

    <v-btn icon class="d-flex d-sm-none">
      <v-icon>mdi-magnify</v-icon>
      <v-dialog
        v-model="dialog"
        activator="parent"
        width="90%"
      >
        <v-card>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field density="compact" variant="outlined" label="Buscar" hide-details></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="search">Buscar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      
    </v-btn>
    <v-btn icon>
      <v-icon>mdi mdi-login</v-icon>
      <v-tooltip activator="parent">login</v-tooltip>
    </v-btn>
  </v-app-bar>
</template>
