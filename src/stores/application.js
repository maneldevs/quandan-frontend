import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useApplicationStore = defineStore('application', () => {
  const appTitle = ref(import.meta.env.VITE_APP_TITLE);
  const sidebarVisible = ref(false);

  return { appTitle, sidebarVisible }
})
