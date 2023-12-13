import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import {
  getStorageItemWithExpiry,
  setStorageItemWithExpiry,
} from '@/helpers/localStorageHelpers'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<Array<string>>(
    getStorageItemWithExpiry('favorites') || [],
  )

  watch(
    () => favorites.value,
    () => {
      setStorageItemWithExpiry('favorites', favorites.value)
    },
  )
  return {
    favorites,
  }
})
