<template lang="pug">
h1 {{msg}}
p {{serverMsg}}
ul
  li(v-for="item in messeges") {{item}}
input(v-model="inValue" @keyup.enter="sendMessege")
</template>

<script>
export default {
  sockets:{
    connect () {
      console.log('socket connected')
    },
    serverMessege (val) {
      this.serverMsg = val;
    }
  },
  data () {
    return {
      msg: 'Hello from vue-loader!',
      serverMsg : 'Hellow,World!',
      messeges : [],
      inValue : "sample text"
    }
  },
  methods : {
    sendMessege () {
      this.messeges.push(this.inValue);
      this.$socket.emit('clientMessege', this.inValue);
      this.inValue = '';
      console.log('clientMessege', this.inValue);
    }
  }
};
</script>
