<template>
  <header>
    <figure><img src="../assets/beep-white.svg"></figure>
    <a href="" class="h3">Log Out</a>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

header {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  grid-template-rows: 25px;
  align-items: center;
  background-color: rgb(0, 172, 181);
  // border-radius: 20px;
  padding: $margin;
    figure {
      grid-column: 1/2;
      img {
        width: 100%;
        vertical-align: text-bottom;
      }
    }
    a {
      grid-column: 3/4;
      margin-right: $margin;
    }
}
</style>
