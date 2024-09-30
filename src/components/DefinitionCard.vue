<script>
export default {
    props: {
        def: Object
    }
}
</script>
<template lang="">
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card p-3 rounded-0 bg-bluebool text-white m-2 min-height-300">
            <h3 class="text-center">{{ def.name }}</h3>
            <p v-html="def.description"></p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.min-height-300 {
    min-height: 300px;
}

.bg-bluebool {
    background-color: $primary_color;
}

</style>