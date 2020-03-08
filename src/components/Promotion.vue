<template>
  <li>
    <div>
      <span class="italic bold">{{ this.promotion.discount ? `- $ ${formattedAmt}` : null }}</span>
      <span>{{formattedType}}</span>
      <span>{{promotion.title}}</span>
    </div>
    <span class="h3">{{promotion.quantity}} uses</span>
  </li>
</template>

<script>
export default {
  name: 'Promotion',
  props: ['promotion'],
  computed: {
    formattedAmt() {
      return `${(this.promotion.discount).toFixed(2).split('').join(' ')}`;
    },
    formattedType() {
      return this.promotion.type[0].toUpperCase().concat(this.promotion.type.slice(1));
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

li {
  display: grid;
  grid-template-rows: auto auto;
  border: solid 1px $main-color;
    div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      background-color: $main-color;
      color: $contrast-color;
        span {
          padding: $margin / 2;
          &:nth-child(2) {
            justify-self: center;
          }
          &:last-child {
            justify-self: right;
          }
        }
    }
}

li > span {
  padding: $margin;
  text-align: center;
}

</style>
