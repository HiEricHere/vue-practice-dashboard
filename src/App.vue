<template>
  <div id="app">
    <AppHeader />
    <main>
      <UserCard />
      <UserView />
    </main>
    <Test />
    <p>{{userState.name}}</p>
    <p>{{userState.email}}</p>
    <p>{{userState.promotions}}</p>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import UserCard from './components/UserCard.vue';
import UserView from './components/UserView.vue';
import Test from './components/Test.vue';
import store from './store/store';

export default {
  name: 'App',
  components: {
    AppHeader,
    UserCard,
    UserView,
    Test,
  },
  data() {
    return {
      userState: store.state,
    };
  },
  methods: {
    set: store.set,
  },
  created() {
    store.get(process.env.VUE_APP_API);
  },
};
</script>

<style lang="scss">
@import './styles/reset';
@import './styles/styles';
@import './styles/variables';

#app {
  width: 70vw;
  margin: auto;
  display: grid;
  grid-template-rows: auto;
  row-gap: $margin;
  main {
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: $margin;
    #user-card {
      grid-column: 1/2;
    }
    #user-view {
      grid-column: 2/3;
    }
  }
}
</style>
