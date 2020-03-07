<template>
  <section id="user-view">
    <Promotion />
    <ul>
    </ul>
  </section>
</template>

<script>
import Promotion from './Promotion.vue';

export default {
  name: 'UserView',
  data() {
    return {
      options: [],
    };
  },
  components: {
    Promotion,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins/user-module-container.scss';

#user-view {
  @include user-module-container($margin);
  ul {
    display: grid;
    grid-template-rows: auto;
    row-gap: $margin;
    justify-content: center;
    text-align: center;
    padding: $margin;
  }
}
</style>
