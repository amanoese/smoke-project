<template lang="pug">
h1 {{msg}}
p hellow,world!
input(v-model="inValue")
button(@click="sendMessege")
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
      inValue : "sample text"
    }
  },
  methods : {
    sendMessege () {
      this.$socket.emit('clientMessege', this.inValue);
      console.log('clientMessege', this.inValue);
    }
  }
};
</script>
