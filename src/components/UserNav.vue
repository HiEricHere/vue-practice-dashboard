<template>
  <nav id="user-nav">
    <ul>
      <li v-for="(path, option, idx) in navLinks" :key=idx @click=handleClick(idx)>
        <router-link :to="path" exact :class="['button-up']">{{option}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'UserNav',
  props: ['promotions'],
  data() {
    return {
      navLinks: {
        Account: '/account',
        BeepPoints: '/beeppoints',
        Referrals: '/referrals',
        Promotions: '/promotions',
      },
      isActive: 0,
    };
  },
  methods: {
    handleClick(idx) {
      this.isActive = idx;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins/button-up.scss';
@import '../styles/mixins/grid-auto-row.scss';

ul {
  @include button-up($main-color, $contrast-color);
  li {
    text-align: center;
  }
}

a {
  font-size: 0.9rem;
}

@media all and (min-width: 800px){
  ul {
    @include grid-auto-row($margin * 2);
  }
}

@media all and (max-width: 799px){
  nav {
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
  }
  ul {
    grid-column: 2/3;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: $margin-mobile;
  }
}

</style>
