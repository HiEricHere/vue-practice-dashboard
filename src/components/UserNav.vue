<template>
  <nav>
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

  nav {
    height: 100%;
    ul {
      @include button-up($main-color, $contrast-color);
      @include grid-auto-row($margin * 2);
      li {
        text-align: center;
      }
    }
  }

</style>
