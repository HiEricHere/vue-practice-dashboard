<template>
  <section id="promotions">
    <h3>Promotions</h3>
    <ul>
      <li v-for="(promo, idx) in promos" :key="idx">
        <span v-if="promo.discount">{{promo.discount}} Off!</span>
        <span>{{promo.type}} - {{promo.title}}</span>
        <span>Quantity: {{promo.quantity}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Promotions',
};
</script>

<style lang="scss" scoped>

</style>
