<template>
  <section id="user-card">
    <figure>
      <img :src="imgsrc" alt="you">
    </figure>
    <div>
      <span class="h4">{{ userData.name }}</span>
      <span class="h4">{{ userData.email }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['userData'],
  data() {
    return {
      imgsrc: 'https://via.placeholder.com/100',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins/user-module-container.scss';
@import '../styles/mixins/button-up.scss';
@import '../styles/mixins/grid-auto-row.scss';

#user-card {
  display: grid;
  grid-template-rows: repeat(3, auto) 1fr;
  row-gap: $margin;
  justify-content: center;
  figure {
    width: 100px;
    img {
      border-radius: 50%;
    }
  }
  div {
    @include grid-auto-row($margin);
    text-align: center;
  }
}

</style>
