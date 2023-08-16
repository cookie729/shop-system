<template>
  <div>
    <HeaderPage />
    <div class="m20"></div>
    <ShopItem />
  </div>
</template>

<script>
import HeaderPage from './views/components/HeaderPage.vue'
import ShopItem from './views/components/ShopItem.vue'

export default {
  name: 'App',
  components: {
    HeaderPage,
    ShopItem,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.m20 {
  margin: 20px;
}
</style>