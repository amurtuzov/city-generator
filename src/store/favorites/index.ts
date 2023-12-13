import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import {
  getStorageItemWithExpiry,
  setStorageItemWithExpiry,
} from '@/helpers/localStorageHelpers'

export const useFavouritesStore = defineStore('favourites', () => {
  const favourites = ref<Array<string>>(
    getStorageItemWithExpiry('favourites') || [],
  )

  watch(
    () => favourites.value,
    () => {
      setStorageItemWithExpiry('favourites', favourites.value)
    },
  )
  return {
    favourites,
  }
})
