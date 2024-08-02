<script>
import DefinitionCard from './DefinitionCard.vue'
export default {
    components:{
        DefinitionCard
    },
    props:{
        section:Object
    }
}
</script>
<template lang="">
    <div class="row definitions">
        <div class="col-12">
            <h3>{{ section.type.toUpperCase() }}</h3>
            <div class="row">
                <!-- vado a ciclare l'array defs della sezione -->
                <DefinitionCard v-for="definition, index in section.defs" :key="index" :def="definition"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.definitions {
    border-bottom: 1px solid #001533;
    padding-bottom: 50px;
}
    
</style>