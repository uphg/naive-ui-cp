import { NButton } from 'naive-ui'
import { defineComponent, h, ref } from 'vue'

const App = defineComponent({
  setup() {
    return {
      count: ref(0)
    }
  },
  render() {
    return [
      h(
        NButton,
        {
          onClick: () => this.count++
        },
        { default: () => this.count }
      )
    ]
  }
})

export default App
