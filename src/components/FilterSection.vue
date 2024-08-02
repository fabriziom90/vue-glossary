<script>
export default {
    
}
</script>
<template lang="">
    <div class="filters">
        <button class="filter-btn" id="all">Tutti</button>
        <button class="filter-btn" id="git">GIT</button>
        <button class="filter-btn" id="html">HTML</button>
        <button class="filter-btn" id="css">CSS</button>
        <button class="filter-btn" id="js">js</button>
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