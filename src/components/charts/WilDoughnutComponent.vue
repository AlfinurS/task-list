<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data: () => ({
    data: {
      labels: ['Wildberries'],
      datasets: [{
          data: [80, 20],
          backgroundColor: [
            '#3241B1',
          ],
          hoverOffset: 4
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false
      },
      legend: {
              display: true,
              position: "bottom",
              labels: { 
                fontColor: 'rgb(25, 22, 81)',
                boxWidth:30
                }
          }
    }
  }),

  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
