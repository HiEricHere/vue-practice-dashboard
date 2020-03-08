<template>
  <section id="promotions">
    <h2>Promotions</h2>
    <ul>
      <Promotion v-for="(promotion, idx) in currentList" :promotion="promotion" :key="idx" />
    </ul>
    <div>
      <button class="button-up"
              type='button'
              :disabled="firstBound"
              @click="handlePrev"
              >Previous</button>
      <button class="button-up"
              type='button'
              :disabled="lastBound"
              @click="handleNext"
              >Next</button>
    </div>
  </section>
</template>

<script>
import Promotion from './Promotion.vue';

const separate = (count) => (list) => {
  const separator = (counter, originalList, currList = []) => {
    if (counter === -1) return currList;
    return separator(counter - 1, originalList, [originalList[counter], ...currList]);
  };
  return separator(count - 1, list);
};

const formatList = (separator) => (list) => {
  const formatter = (originalList, currList = []) => {
    if (originalList.length === 0) return currList;
    const separated = separator(originalList);
    return formatter(originalList.slice(separated.length), [...currList, separated]);
  };
  return formatter(list);
};

const separateFive = separate(5);
const formatPromoList = formatList(separateFive);

export default {
  name: 'Promotions',
  props: ['promotions'],
  data() {
    return {
      promoIndex: 0,
    };
  },
  methods: {
    handleNext() {
      this.promoIndex += 1;
    },
    handlePrev() {
      this.promoIndex -= 1;
    },
  },
  computed: {
    firstBound() {
      return !(this.promoIndex > 0);
    },
    lastBound() {
      return this.promoIndex === this.formattedList.length - 1;
    },
    formattedList() {
      return formatPromoList(this.promotions).map((list) => list.filter((x) => x !== undefined));
    },
    currentList() {
      return this.formattedList[this.promoIndex];
    },
  },
  components: {
    Promotion,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins/button-up.scss';

#promotions {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 6fr 1fr;
  row-gap: $margin;
    ul {
      display: grid;
      grid-template-rows: auto;
      row-gap: $margin;
    }
    div {
      @include button-up($main-color, $contrast-color);
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: $margin;
    }
}

#promotions > * {
  grid-column: 2/3;
}
</style>
