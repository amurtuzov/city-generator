import { computed, defineComponent, reactive } from 'vue'
import { default as AppButton } from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import { default as TextAreaComponent } from 'primevue/textarea'
import { useApiCall } from '@/composables/useApiCall'
import { citiesApiCall } from '@/api/citiesApiCall'

export default defineComponent({
  name: 'HomePage',
  components: {
    AppButton,
    InputText,
    Dropdown,
    TextAreaComponent,
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
      error,
      executeApiCall: generateAction,
    } = useApiCall<{ result: Array<string> }, { error: string }, typeof params>(
      citiesApiCall,
      true,
      params,
    )

    const textFieldsLatinLettersCheck = (fieldType: string) => {
      const re = /^[A-Za-z0-9\s,]+$/
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
        console.log(data, error)
      } catch (e) {
        console.error(e)
      }
    }

    return {
      data,
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
