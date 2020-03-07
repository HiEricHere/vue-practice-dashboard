<template>
  <div id="app">
    <AppHeader />
    <main>
      <UserCard />
      <UserView />
    </main>
    <Test />
    <p v-for="(prop, idx) in userState" :key="idx">{{ statusMessage(prop) }}</p>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import UserCard from './components/UserCard.vue';
import UserView from './components/UserView.vue';
import Test from './components/Test.vue';

const defaultState = {
  name: 'No information available at this time',
  email: 'No information available at this time',
  promotions: [],
};

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
      userState: defaultState,
      loading: false,
    };
  },
  methods: {
    fetchUser(url) {
      this.loading = true;
      fetch(url)
        .then((res) => res.json())
        .then(({ name, email, promotions }) => {
          this.loading = false;
          this.userState = { name, email, promotions };
        })
        .catch(() => {
          this.loading = false;
          this.userState = defaultState;
        });
    },
    statusMessage(current) {
      return this.loading ? 'Loading...' : current;
    },
  },
  created() {
    this.fetchUser(process.env.VUE_APP_API);
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
