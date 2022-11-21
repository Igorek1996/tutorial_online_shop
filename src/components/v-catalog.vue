<template>
    <div class="v-catalog">
        <h1>Catalog</h1>
        <vCatalogItemVue />
    </div>
</template>

<script>
import vCatalogItemVue from './v-catalog-item.vue';

export default {
    name: "v-catalog",
    components: {
        vCatalogItemVue
    },
    props: {},
    data() {
        return {}
    },
    computed: {}
}
</script>

<style lang="scss">

</style>