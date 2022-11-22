<template>
    <div class="v-catalog">
        <h1>Catalog</h1>
        <div class="v-catalog__list">
            <vCatalogItemVue v-for="product in PRODUCTS" :key="product.article" :product_data="product"
                @sendArticle="showChildArticleInConsole" />
        </div>
    </div>
</template>

<script>
import vCatalogItemVue from './v-catalog-item.vue';
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "v-catalog",
    components: {
        vCatalogItemVue
    },
    props: {},
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
        ]),
        showChildArticleInConsole(data) {
            console.log(data);
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
            .then((response) => {
                if (response.data) {
                    console.log('Data arrived!')
                }
            })
    }
}
</script>

<style lang="scss">
.v-catalog {
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;
    }
}
</style>