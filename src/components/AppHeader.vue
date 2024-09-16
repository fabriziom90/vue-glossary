<script>
    import {store } from '../store.js';
export default {
    data(){
        return{
            store
        }
    }
}
</script>
<template lang="">
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <img class="logo d-inline-block v-align-middle" src="/img/logo_boolean_zoom.png" alt="Boolean Glossary" />
                    <h2 class="d-inline-block v-align-middle">Boolean</h2>
                </div>
                <div class="col-6">
                    <input type="text" placeholder="Cerca definizione" @keyup.enter="store.searchDef = $event.target.value" >
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
header{
    color: #fff;
    border-bottom: 1px solid #fff;
    .logo{
        width: 100px;
    }

    .v-align-middle{
        vertical-align: middle;
    }

    input{
        float: right;
        margin-top: 40px;
    }
}
</style>