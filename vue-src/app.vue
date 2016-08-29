<template lang="pug">
h1 {{msg}}
p {{serverMsg}}
ul
  li(v-for="item in messeges") {{item}}
input(v-model="inValue" @keyup.enter="sendMessege")
div(v-for="item in senserParam" track-by="$index")
  span(v-text="item")
</template>

<script>
export default {
  sockets:{
    connect () {
      console.log('socket connected')
    },
    senserParam(param){
      this.senserParam.push(param);
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
      senserParam : [],
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
