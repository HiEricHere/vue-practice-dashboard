<template>
  <div>
    Testing Fetch
    <p>{{ source }}/<span>{{ input }}</span></p>
    <input type="number" v-model="input" placeholder="number">
    <button type="submit" @click="handleSubmit">Fetch</button>
    <p>output:</p>
    <p>name: {{ asyncStatus ? asyncStatus : this.name }}</p>
    <p>email: {{ asyncStatus ? asyncStatus : this.email }}</p>
  </div>
</template>
<script>
export default {
  name: 'Test',
  data() {
    return {
      source: 'https://jsonplaceholder.typicode.com/users',
      input: '',
      name: '',
      email: '',
      fetchStatus: '',
      errorMessage: 'No information available at this time.',
    };
  },
  computed: {
    url() {
      return `${this.source}/${this.input.toString()}`;
    },
    asyncStatus() {
      switch (this.fetchStatus) {
        case ('pending'):
          return 'Loading...';
        case ('error'):
          return this.errorMessage;
        default:
          return false;
      }
    },
  },
  methods: {
    handleSubmit() {
      this.fetchStatus = 'pending';
      fetch(this.url)
        .then((res) => res.json())
        .then((res) => {
          this.name = res.name || this.errorMessage;
          this.email = res.email || this.errorMessage;
          this.fetchStatus = '';
        })
        .catch(() => {
          this.fetchStatus = 'error';
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  button {
    border: solid 1px black;
  }
</style>
