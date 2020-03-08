<template>
  <section id="user-view">
    <router-view :promotions="promotions"></router-view>
  </section>
</template>

<script>
export default {
  name: 'UserView',
  props: ['promotions'],
  data() {
    return {
      options: [],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins/user-module-container.scss';

// #user-view {
//   @include user-module-container($margin);
//   ul {
//     display: grid;
//     grid-template-rows: auto;
//     row-gap: $margin;
//     justify-content: center;
//     text-align: center;
//     padding: $margin;
//   }
// }
</style>
