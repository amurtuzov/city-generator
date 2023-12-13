import { computed, defineComponent, ref } from 'vue'
import OverlayPanel from 'primevue/overlaypanel'
import { default as AppDialog } from 'primevue/dialog'
import { default as AppButton } from 'primevue/button'
import { default as AppBadge } from 'primevue/badge'
import { useMainStore } from '@/store/main'
import FavoritesItems from '@/components/FavoritesItems/FavoritesItems.vue'
import { useFavoritesStore } from '@/store/favorites'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'FavoritesToggler',
  components: {
    OverlayPanel,
    AppDialog,
    AppButton,
    AppBadge,
    FavoritesItems,
  },
  setup() {
    const mainStore = useMainStore()
    const favoritesStore = useFavoritesStore()
    const { favorites } = storeToRefs(favoritesStore)
    const overlayPanelRef = ref<OverlayPanel & { visible: true }>()
    const dialogVisibility = ref(false)

    const isSavedIdeasOpen = computed(
      () => dialogVisibility.value || overlayPanelRef.value?.visible,
    )

    const toggle = (event: Event) => {
      if (mainStore.isDesktop) {
        overlayPanelRef.value?.toggle(event)
      } else {
        dialogVisibility.value = !dialogVisibility.value
      }
    }
    return {
      favorites,
      overlayPanelRef,
      dialogVisibility,
      isSavedIdeasOpen,
      toggle,
    }
  },
})
