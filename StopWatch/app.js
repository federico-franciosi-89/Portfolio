const app = Vue.createApp({
  data() {
    return {
      seconds: '00',
      minutes: '00',
      seconds: 0,
      minutes: 0,
    };
  },
  methods: {
    startWatch() {
      idVar = setInterval(() => {
        if (this.seconds >= 60) {
          this.minutes++;
          this.seconds = 0;
        }
        this.seconds++;
      }, 1000);
      console.log('passed');
    },
    stopWatch() {
      clearInterval(idVar);
    },
    resetWatch() {
      this.seconds = 0;
    },
  },
});

app.mount('#watch');
