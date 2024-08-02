<script>
import { store } from './store.js';

import  AppHeader  from './components/AppHeader.vue';
import  AppMain  from './components/AppMain.vue';


export default {
  components: {
    AppHeader,
    AppMain
  },
  data(){
    return{
      store
    }
  },
  created(){
    console.log(store.definitions);
  }
}
</script>
<template lang="">
  <div>
      <AppHeader />
      <AppMain />
  </div>
</template>
<style lang="scss">
  @import './styles/generals.scss';
</style>
