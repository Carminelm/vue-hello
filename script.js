
  const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Hello World',
        classTitle: 'myText',
      }
    }
  }).mount('#app')