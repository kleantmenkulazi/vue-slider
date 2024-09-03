
const { createApp } = Vue

createApp({
      data() {
          return{
          message: 'Hello World!',
          imageSrc: 'https://unsplash.com/it/foto/un-uomo-in-piedi-davanti-a-una-grande-cascata-eQDiFlyjcG8'
      }
  }
}).mount('#app')