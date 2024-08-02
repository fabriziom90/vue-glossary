<script>
import { store } from './store.js';

import  AppHeader  from './components/AppHeader.vue';


export default {
  components: {
    AppHeader
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
  </div>
</template>
<style lang="scss">
  @import './styles/generals.scss';
</style>
