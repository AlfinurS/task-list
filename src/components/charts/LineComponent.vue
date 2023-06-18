<template>
  <div class="miniLine">
    <mini-line-chart :chart-data="datacollection"></mini-line-chart>
  </div>
</template>

<script>
  import MiniLineChart from './MiniLineChart.js'

  export default {
    components: {
      MiniLineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['2022','2023'],
          datasets: [
            {
              label: 'Wildberries',
              fill: false,
              borderColor: '#B411A3',
              data: [0, 41, 47],
            },
            {
              label: 'Ozon',
              fill: false,
              borderColor: '#0C49F4',
              data: [0, 63, 59]
            }, 
          ],
          options: {
            steppedLine: true
          }
        }
      },
    }
  }
</script>