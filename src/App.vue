<template>
  <div id="app">
    <AppHeader />
    <main>
      <Sidebar :userState="userState"/>
      <UserView :promotions="userState.promotions" />
    </main>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import UserView from './components/UserView.vue';

const defaultState = {
  name: 'No information available at this time',
  email: 'No information available at this time',
  promotions: [],
};

export default {
  name: 'App',
  components: {
    AppHeader,
    Sidebar,
    UserView,
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
    computed: {
      statusMessage() {
        if (this.loading) {
          this.userState = {
            name: 'Loading...',
            email: 'Loading...',
            promotions: [],
          };
        }
      },
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
