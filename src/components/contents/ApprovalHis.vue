<script>
import { Bar } from 'vue-chartjs'

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

export default {
  extends: Bar,
  data: () => ({
    chartData: {
      labels: [
        this.getFullDate(year, month, parseInt(day) - 5),
        this.getFullDate(year, month, parseInt(day) - 4),
        this.getFullDate(year, month, parseInt(day) - 3),
        this.getFullDate(year, month, parseInt(day) - 2),
        this.getFullDate(year, month, parseInt(day) - 1),
        this.getFullDate(year, month, parseInt(day))
      ],
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
  }),
  oncreated () {
    // eslint-disable-next-line
    console.log('oncreated')
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOption)
  },
  methods: {
    getFullDate (year, month, day) {
      return year + '/' + month + '/' + day
    }
  }
}
</script>

<style scoped lang="scss">
</style>
