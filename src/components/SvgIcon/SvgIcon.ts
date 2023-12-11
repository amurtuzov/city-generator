import { defineComponent, ref, watch, Ref, defineAsyncComponent } from 'vue'
import { ComponentPublicInstance } from '@/types/svgIcon'

export default defineComponent({
  props: {
    icon: { type: String, required: true },
  },
  emits: ['iconReady'],
  setup(props, { emit }) {
    const dynamicSvg = defineAsyncComponent(
      () => import(`../../assets/icons/${props.icon}.svg`),
    )
    const svgRef = ref(null) as Ref<ComponentPublicInstance<HTMLElement> | null>
    watch(
      () => svgRef.value?.$el,
      () => {
        emit('iconReady')
      },
    )
    return {
      dynamicSvg,
      svgRef,
    }
  },
})
