const getCurrentHour = () => {
  return new Date().getHours();
};

const getCurrentMinutes = () => {
  return new Date().getMinutes();
};

const getCurrentSeconds = () => {
  return new Date().getSeconds();
};

const app = Vue.createApp({
  data() {
    return {
      hour: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  methods: {},
  beforeCreate() {
    setInterval(() => {
      this.hour = getCurrentHour();
      this.minutes = getCurrentMinutes();
      this.seconds = getCurrentSeconds();
    }, 1000);
  },
});

app.mount('#clock');
