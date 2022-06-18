<template>
  <header>
    <h1>ToDo List</h1>
    <hr />
    <single-item
      :items="items"
      @remove="remove"
      v-if="isVisibility"
    ></single-item>
    <p v-else>Empty List.</p>
  </header>
</template>

<script>
import SingleItem from './Single/SingleItem.vue';
export default {
  components: { SingleItem },
  props: ['items'],
  methods: {
    remove(id) {
      this.$emit('remove', id);
    },
  },
  computed: {
    isVisibility() {
      return this.items.length > 0 ? true : false;
    },
  },
  emits: ['remove'],
};
</script>

<style scoped>
p {
  color: #939496;
  font-size: 1.5em;
  font-weight: 700;
  margin-top: 2rem;
}
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
h1 {
  color: white;
  font-size: 2em;
}
hr {
  width: 30%;
  background: #727476;
  margin-top: 2rem;
  border: none;
  height: 2px;
}
</style>
