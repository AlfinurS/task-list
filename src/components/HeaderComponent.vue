<template>
    <header class="header">
      <div class="header__box">
        
        <router-link to="/">
          <icon-logo></icon-logo>
        </router-link>
        <router-link to="/task"  class="header__item">Мои Задачи</router-link>

      </div>
    </header>
</template>

<script>
import iconLogo from "./icons/iconLogo.vue";

export default {
  name: 'HeaderComponent',
  components: {
    iconLogo
  }
}
</script>
