<template>
    <div class="v-main-wrapper">
        <p>{{ title }}</p>
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
            title: "Main wrapper"
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    max-width: 900px;
    margin: 0 auto;
}
</style>