<template>
  <section>
    <h1>ToDo App</h1>
    <div class="add-form">
      <label for="">New ToDo</label>
      <input type="text" v-model="toDoAdd" />
      <button @click="adding">Add ToDo</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      toDoAdd: '',
    };
  },
  methods: {
    adding() {
      this.$emit('adding', this.toDoAdd);
      this.toDoAdd = '';
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
}
h1 {
  margin-top: 2rem;
  color: white;
  font-size: 3em;
}

.add-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
label {
  color: white;
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 1.2em;
}
input {
  height: 3.5rem;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
  background: transparent;
  border: 2px solid #727476;
  font-size: 1.5em;
  padding-left: 1rem;
  color: white;
}

button {
  width: 100%;
  height: 3.5rem;
  border-radius: 10px;
  background-color: #a0a4d9;
  font-size: 1.5em;
  font-weight: 800;
}
button:hover {
  cursor: pointer;
}
</style>
