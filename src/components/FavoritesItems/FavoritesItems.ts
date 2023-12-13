import { defineComponent } from 'vue'
import { useFavoritesStore } from '@/store/favorites'
import ListItem from '@/components/ListItem/ListItem.vue'
import { storeToRefs } from 'pinia'
import ScrollPanel from 'primevue/scrollpanel'
import { default as AppButton } from 'primevue/button'

export default defineComponent({
  name: 'FavoritesItems',
  components: {
    ScrollPanel,
    AppButton,
    ListItem,
  },
  setup() {
    const favoritesStore = useFavoritesStore()
    const { favorites } = storeToRefs(favoritesStore)

    const downloadFavorites = () => {
      const filename = 'favorites.txt'
      const element = document.createElement('a')
      element.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' +
          encodeURIComponent(favorites.value.join('\n')),
      )
      element.setAttribute('download', filename)
      element.style.display = 'none'
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    }

    const removeAllFavorites = () => {
      favoritesStore.$patch({
        favorites: [],
      })
    }
    return {
      favorites,
      downloadFavorites,
      removeAllFavorites,
    }
  },
})
