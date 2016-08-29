<template lang="pug">
h1 {{msg}}
p hellow,world!
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
    clientMessege (val) {
      console.log(val);
    }
  },
  data () {
    return {
      msg: 'Hello from vue-loader!',
      messeges : [],
      inValue : "sample text"
    }
  },
  methods : {
    sendMessege () {
      this.messeges.push(this.inValue);
      this.$socket.emit('clientMessege', this.inValue);
      console.log('clientMessege', this.inValue);
    }
  }
};
</script>
