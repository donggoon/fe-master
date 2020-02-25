<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data', 'options'],
  data: () => ({
  }),
  oncreated () {
    console.log('oncreated')
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
