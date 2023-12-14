import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
} from 'vue'
import { default as AppButton } from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import { default as TextAreaComponent } from 'primevue/textarea'
import ListItem from '@/components/ListItem/ListItem.vue'
import FavoritesToggler from '@/components/FavoritesToggler/FavoritesToggler.vue'
import { useApiCall } from '@/composables/useApiCall'
import { citiesApiCall } from '@/api/citiesApiCall'
import ConfirmDialog from 'primevue/confirmdialog'

export default defineComponent({
  name: 'HomePage',
  components: {
    ConfirmDialog,
    AppButton,
    InputText,
    Dropdown,
    TextAreaComponent,
    ListItem,
    FavoritesToggler,
  },
  setup() {
    const sizes = [
      'Small Town',
      'Medium Town',
      'Large City',
      'Metropolis',
      'Capital City',
    ]
    const terrains = [
      'Coastal',
      'Riverine',
      'Mountainous',
      'Forested',
      'Desert',
      'Plains',
    ]
    const generatedItemsListRef = ref<HTMLElement>()
    const generatedItems = ref<Array<string>>([])
    const params = reactive({
      size: '',
      terrain: '',
      keywords: '',
      description: '',
    })
    const errorMessages = reactive({
      description: '',
      keywords: '',
    })

    const isValid = computed(() => {
      return (
        (!!params.keywords || !!params.description) &&
        !errorMessages.keywords &&
        !errorMessages.description
      )
    })

    const {
      data,
      isLoading,
      executeApiCall: generateAction,
    } = useApiCall<
      { result: Array<string> },
      Record<string, unknown>,
      typeof params
    >(citiesApiCall, true, params)

    const textFieldsLatinLettersCheck = (fieldType: string) => {
      const re = /^[A-Za-z0-9\s,.!?:;‘'-]+$/
      if (
        params[fieldType as keyof typeof params] !== '' &&
        !re.test(params[fieldType as keyof typeof params])
      ) {
        errorMessages[fieldType as keyof typeof errorMessages] =
          'Please use Latin letters'
      } else {
        errorMessages[fieldType as keyof typeof errorMessages] = ''
      }
    }

    const generate = async () => {
      try {
        await generateAction()
        if (data.value && data.value.result && data.value.result.length) {
          generatedItems.value = [...data.value.result]
        }
        await nextTick()
        generatedItemsListRef.value?.scrollIntoView({ behavior: 'smooth' })
      } catch (e) {
        console.error(e)
      }
    }

    const confirmDialogOverlayStopPropagation = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('p-dialog-mask')) {
        e.stopImmediatePropagation()
        e.stopPropagation()
      }
    }

    onMounted(() => {
      document.addEventListener('click', confirmDialogOverlayStopPropagation)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('click', confirmDialogOverlayStopPropagation)
    })

    return {
      generatedItemsListRef,
      generatedItems,
      params,
      sizes,
      terrains,
      isLoading,
      isValid,
      errorMessages,
      generate,
      textFieldsLatinLettersCheck,
    }
  },
})
