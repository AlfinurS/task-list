<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: [ 'млрд руб.'],
      datasets: [
        {
          label: '1 квартал',
          backgroundColor: '#6080D6',
          data: [163]
        },
        {
          label: '2 квартал',
          backgroundColor: '#6080D6',
          data: [138]
        },
        {
          label: '3 квартал',
          backgroundColor: '#6080D6',
          data: [142]
        },
        {
          label: '4 квартал',
          backgroundColor: '#6080D6',
          data: [182]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
              display: true,
              text: 'Темпы роста онлайн-продаж продуктов питания в 2022 году',
              fontSize: 14,
              padding: 18
          }
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
