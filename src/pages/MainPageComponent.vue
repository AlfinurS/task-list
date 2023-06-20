<template>
<div class="container"> 
  <h1 class="headline">Онлайн-продажи в России</h1>
  <div class="section">
    <div class="item">
      <ChartComponent class="w-chart"/>
    </div>
    <div class="list">
      <MiniDoughnutComponent class="mini-doughnut"/>
      <OzonDoughnutComponent class="mini-doughnut"/>
      <WilDoughnutComponent class="mini-doughnut"/>
      <VkusDoughnutComponent class="mini-doughnut"/>
    </div>
  </div>

  <div class="section">
    <ItemCardComponent 
      v-for="shop in shops"
      :key="shop.id"
      :dataProps="shop">
    </ItemCardComponent>
  </div>

  <div class="section">
    <div class="item">
      <PieComponent class="w-pie"/>
    </div>
    <div class="item">
      <LineComponent class="w-miniLine"/>
    </div>
  </div>
  <div class="section">
    <div class="item">
      <DoughnutComponent class="w-doughnut"/>
    </div>
    <div class="item">
      <RandomChart class="w-line"/>
    </div>
  </div>
</div>
</template>


<script>
import ItemCardComponent from '../components/ItemCardComponent.vue'
import DoughnutComponent from '../components/charts/DoughnutComponent.vue'
import MiniDoughnutComponent from '../components/charts/MiniDoughnutComponent.vue'
import OzonDoughnutComponent from '../components/charts/OzonDoughnutComponent.vue'
import WilDoughnutComponent from '../components/charts/WilDoughnutComponent.vue'
import VkusDoughnutComponent from '../components/charts/VkusDoughnutComponent.vue'
import ChartComponent from '../components/charts/ChartComponent.vue'
import RandomChart from '../components/charts/RandomChart.vue'
import PieComponent from '../components/charts/PieComponent.vue'
import LineComponent from '../components/charts/LineComponent.vue'


export default {
  name: 'MainPageComponent',
  components: {
    ItemCardComponent,
    DoughnutComponent,
    MiniDoughnutComponent,
    OzonDoughnutComponent,
    WilDoughnutComponent,
    VkusDoughnutComponent,
    PieComponent,
    ChartComponent,
    RandomChart,
    LineComponent,
  },

  data() {
    return {
      shops: [
          {
            id: 1,
            name: "Сбермаркет",
            profit: 103.5,
          },
          {
            id: 2,
            name: "Вкусвилл",
            profit: 91.2,
          },
          {
            id: 3,
            name: "Самокат",
            profit: 82.5,
          },
          {
            id: 4,
            name: "Ozon",
            profit: 58.1,
          },
          {
            id: 5,
            name: "Wildberries",
            profit: 57.2,
          },
        ]
    }
  }
}
</script>