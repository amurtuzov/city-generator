import { defineComponent, reactive } from 'vue'
import { default as AppButton } from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import { default as TextAreaComponent } from 'primevue/textarea'
import { useApiCall } from '@/composables/useApiCall'
import { citiesApiCall } from '@/api/example'

export default defineComponent({
  name: 'HomePage',
  components: {
    AppButton,
    InputText,
    Dropdown,
    TextAreaComponent,
  },
  setup() {
    const params = reactive({
      size: 'Small Town',
      terrain: 'Coastal',
      keywords: 'elvish, dwarfish, femenine, light',
      description:
        'It is a hidden city in forested mountains in a fictional country, with a mixed dwarf-elf cultural influence.',
    })
    const {
      data,
      isLoading,
      error,
      executeApiCall: generateAction,
    } = useApiCall(citiesApiCall, true, params)
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

    const generate = async () => {
      try {
        await generateAction()
        console.log(data, error)
      } catch (e) {
        console.error(e)
      }
    }

    return {
      params,
      sizes,
      terrains,
      isLoading,
      generate,
    }
  },
})
