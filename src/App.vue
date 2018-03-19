<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld :artikel='post'/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'App',
  data(){
    return {
    }
  },
  mounted(){
    this.$store.dispatch('getData');
  },
  computed: {
  	...mapState([
  		'post'
  	]),
    ...mapGetters([
      'ambilData'
    ])
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
