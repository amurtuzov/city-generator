import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { Breakpoints } from '@/enum/Breakpoints'

export const useMainStore = defineStore('main', () => {
  const windowWidth = ref(window.innerWidth)

  const isMobile = computed(() => windowWidth.value < Breakpoints.TABLET)
  const isTablet = computed(
    () =>
      windowWidth.value >= Breakpoints.TABLET &&
      windowWidth.value < Breakpoints.DESKTOP,
  )
  const isDesktop = computed(() => windowWidth.value >= Breakpoints.DESKTOP)

  return {
    windowWidth,
    isMobile,
    isTablet,
    isDesktop,
  }
})
