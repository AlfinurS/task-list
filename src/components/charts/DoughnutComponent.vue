<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data: () => ({
    data: {
      labels: ['Сбермаркет', 'Вкусвилл', 'Самокат', 'Ozon', 'Wildberries'],
      datasets: [{
          data: [103.5, 91.2, 82.5, 58.1, 57.2],
          backgroundColor: [
            '#09D28E',
            '#F3694A',
            '#3241B1',
            '#FFC52C',
            '#B411A3'
          ],
          hoverOffset: 4
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
              display: true,
              position: "bottom",
              align: "start",
              labels: { 
                fontColor: 'rgb(25, 22, 81)',
                boxWidth:30
                }
          },
    }
  }),

  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
