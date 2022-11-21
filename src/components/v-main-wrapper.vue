<template>
    <div class="v-main-wrapper">
        <vCatalogVue />
        <vCartVue />
    </div>
</template>

<script>
import vCatalogVue from './v-catalog.vue';
import vCartVue from './v-cart.vue';

export default {
    name: "v-main-wrapper",
    components: {
        vCatalogVue,
        vCartVue
    },
    props: {},
    data() {
        return {

        }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
        console.log("Hello I'm alive!")
    }
}
</script>

<style lang="scss">
.v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
}
</style>