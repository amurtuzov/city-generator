import { defineComponent, ref } from 'vue'
import { default as AppButton } from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import { default as TextAreaComponent } from 'primevue/textarea'

export default defineComponent({
  name: 'HomePage',
  components: {
    AppButton,
    InputText,
    Dropdown,
    TextAreaComponent,
  },
  setup() {
    const selectedCity = ref()
    const cities = ref([
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ])

    return {
      selectedCity,
      cities,
    }
  },
})
