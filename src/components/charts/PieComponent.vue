<script>
import { Pie } from 'vue-chartjs'


export default {
  extends: Pie,
  data: () => ({
    data: {
      labels: ['Электроника и бытовая техника', 'Мебель и товары для дома', 'Одежда и обувь', 'Продукты питания', 'Товары для красоты и здоровья'],
      datasets: [{
          data: [22, 17.7, 13.9, 13.5, 7.5],
          backgroundColor: [
            '#7A6BBA',
            '#968FB6',
            '#B1A6E0',
            '#CFC4FF',
            '#9285CF'
          ],
          hoverOffset: 4,
          borderWidth: 1,
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
      title: {
              display: true,
              text: 'Категории покупок',
              fontSize: 14,
              padding: 14
          }
    }
  }),

  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
