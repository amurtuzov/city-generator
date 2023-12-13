import { defineComponent } from 'vue'
import { useFavoritesStore } from '@/store/favourites'
import ListItem from '@/components/ListItem/ListItem.vue'

export default defineComponent({
  name: 'FavoritesItems',
  components: {
    ListItem,
  },
  setup() {
    const { favorites } = useFavoritesStore()
    return {
      favorites,
    }
  },
})
