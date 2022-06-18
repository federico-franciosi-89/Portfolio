<template>
  <card-template v-for="item in items" :key="item.id">
    <div class="inner-card">
      <h1>{{ item.text }}</h1>
      <button @click="remove(item.id)">Remove</button>
    </div>
  </card-template>
</template>

<script>
import CardTemplate from './CardTemplate';

export default {
  components: { CardTemplate },
  props: ['items'],
  methods: {
    remove(id) {
      this.$emit('remove', id);
    },
  },
  emits: ['remove'],
};
</script>

<style scoped>
.inner-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  color: white;
  font-size: 1.5em;
  font-weight: 100;
}
button {
  height: 2.5rem;
  border-radius: 10px;
  background-color: #a0a4d9;
  font-size: 1em;
  font-weight: 700;
}
</style>
