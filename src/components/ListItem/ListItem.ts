import { defineComponent, ref } from 'vue'
import { default as AppButton } from 'primevue/button'
import { useFavoritesStore } from '@/store/favorites'

export default defineComponent({
  name: 'ListItem',
  components: {
    AppButton,
  },
  props: {
    item: {
      type: String,
      required: true,
    },
    favorites: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    const copyButtonLabel = ref<string>('')
    const favoritesStore = useFavoritesStore()
    const copyToClipBoard = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
        copyButtonLabel.value = 'Copied'
        setTimeout(() => {
          copyButtonLabel.value = ''
        }, 1000)
      } catch (err) {
        console.error('Failed to copy: ', err)
      }
    }
    const checkIfIncludesInFavorites = (text: string) => {
      return favoritesStore.favorites.includes(text)
    }
    const toggleFavorites = (text: string) => {
      if (checkIfIncludesInFavorites(text)) {
        favoritesStore.$patch({
          favorites: favoritesStore.favorites.filter((item) => item !== text),
        })
      } else {
        favoritesStore.$patch({
          favorites: [...favoritesStore.favorites, text],
        })
      }
    }
    const removeFromFavorites = (text: string) => {
      favoritesStore.$patch({
        favorites: favoritesStore.favorites.filter((item) => item !== text),
      })
    }
    return {
      copyButtonLabel,
      copyToClipBoard,
      toggleFavorites,
      removeFromFavorites,
      checkIfIncludesInFavorites,
    }
  },
})
