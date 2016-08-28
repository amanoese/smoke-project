/*Globals vue*/
import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://localhost:3001/');
import App from './app.vue';

new Vue({
  el: 'body',
  sockets:{
    connect () {
      console.log('socket connected')
    },
    clientMessege (val) {
      console.log(val);
    }
  },
  components: {
    app:App
  }
})
