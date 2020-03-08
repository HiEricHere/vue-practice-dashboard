<template>
  <aside id="sidebar">
    <UserCard :userData="{ name: userState.name, email: userState.email }" />
    <UserNav />
  </aside>
</template>

<script>
import UserCard from './UserCard.vue';
import UserNav from './UserNav.vue';

export default {
  name: 'Sidebar',
  props: ['userState'],
  components: {
    UserCard,
    UserNav,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

@media all and (min-width: 800px) {
  aside {
    padding: $margin;
    box-shadow: 1px 1px 3px rgb(231, 231, 231);
  }
}

@media all and (max-width: 799px) {
  aside {
    padding: $margin-mobile;
  }
}

</style>
