<script>
import { store } from '../store.js';

export default {
    data(){
        return{
            store
        }
    },
    methods:{
        filterByType(type){
            this.$emit('filter_by_type', type);
        }
    }
}
</script>
<template lang="">
    <div class="filters">
        <button class="filter-btn" @click="filterByType('all')">Tutti</button>
        <button class="filter-btn" @click="filterByType(section.type)" v-for="section in store.definitions" :key="section.id">{{ section.type.toUpperCase() }}</button>
    </div>
</template>
<style lang="scss" scoped>
.filters{
    margin: 20px 0;
    .filter-btn {
        background-color: #001533;
        padding: 5px 15px;
        color: #fff;
        border-radius: 15px;
        border: none;
        transition: background-color 0.3s;
        margin: 0 5px;
        
        &:hover {
            background-color: #0015339a;
        }
    }
}

    
</style>