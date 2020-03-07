<template>
  <section id="user-card">
    <figure>
      <img :src="imgsrc" alt="you">
    </figure>
    <div>
      <span class="h4">{{ username }}</span>
      <span class="h4">{{ email }}</span>
    </div>
    <div>
      <button
        v-for="(option, idx) in userOptions"
        :key='idx'
        :class="['button-up', { active: isActive } ]"
        @click=handleClick(idx)
        >{{option}}</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserCard',
  data() {
    return {
      username: 'Loading...',
      email: 'Loading...',
      imgsrc: 'https://via.placeholder.com/100',
      userOptions: ['Account', 'Beep Points', 'Referrals', 'Promotions'],
    };
  },
  methods: {
    handleClick(idx) {
      console.log(idx);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins/user-module-container.scss';
@import '../styles/mixins/button-up.scss';
@import '../styles/mixins/grid-auto-row.scss';

#user-card {
  // @include user-module-container($margin);
  display: grid;
  grid-template-rows: auto;
  row-gap: $margin;
  justify-content: center;
  padding: $margin;
  box-shadow: 1px 1px 3px rgb(231, 231, 231);
  figure {
    width: 100px;
    img {
      border-radius: 50%;
    }
  }
  div {
    &:first-of-type {
      @include grid-auto-row($margin);
      text-align: center;
    }
    &:last-child {
      @include button-up($main-color, $contrast-color);
      @include grid-auto-row($margin);
    }
  }
}

</style>
