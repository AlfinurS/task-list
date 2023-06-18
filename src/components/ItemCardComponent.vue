<template>
<div class="card__wrapper">
  <div class="card__content">{{ dataProps.name }}</div>
  <div class="card__content">
  <iconMoney class="card__icon"></iconMoney>
  <span class="card__content-subtitle">{{ dataProps.profit }}</span>
  </div>
</div>
</template>


<script>

import iconMoney from './icons/iconMoney.vue'

export default {
  name: 'ItemCardComponent',
  components: {
    iconMoney
  },
  props: {
      dataProps: {
        type: Object,
        default: () => ({}),
      },
  },
  data() {
    return {
      shops: [        ]
    }
  }
}
</script>
