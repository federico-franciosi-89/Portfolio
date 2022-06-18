<template>
  <div class="container">
    <Add @adding="addToArray" />
    <List :items="item" @remove="remove" />
  </div>
</template>

<script>
import Add from './components/Add';
import List from './components/List';
export default {
  components: { Add, List },
  data() {
    return {
      item: [],
    };
  },
  methods: {
    addToArray(add) {
      this.item.push({ id: add + 'ciaocome', text: add });

      console.log(this.item);
    },
    remove(id) {
      const elementToDelete = this.item.find((item) => item.id === id);
      const index = this.item.indexOf(elementToDelete);
      this.item.splice(index, 1);
      console.log(elementToDelete);
    },
  },
  emits: ['adding', 'remove'],
};
</script>

<style>
* {
  margin: 0;
}
body {
  margin: 0;
  background-color: #27292d;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
