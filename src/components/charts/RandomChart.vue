<template>
  <div >
    <line-chart :chart-data="datacollection"></line-chart>
    <!-- <button @click="fillData()">Обновить</button> -->
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
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
          labels: ['2023', '2022'],
          datasets: [
            {
              label: 'Wildberries',
              backgroundColor: '#B411A3',
              data: [41, 47]
            },
            {
              label: 'Ozon',
              backgroundColor: '#0C49F4',
              data: [63, 59]
            }, 
          ]
        }
      },
    }
  }
</script>

<style>
</style>
