<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      chartOption: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  // }
  },
  oncreated () {
    // eslint-disable-next-line
    console.log('oncreated')
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOption)
  }
}
</script>

<style scoped lang="scss">
</style>
