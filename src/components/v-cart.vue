<template>
    <div class="v-cart">
        <h1>Cart</h1>
        <vCartItemVue v-for="(item, index) in cart_data" :key="item.article" :cart_item_data="item"
            @deleteFromCar="deleteFromCar(index)" />
    </div>
</template>

<script>
import vCartItemVue from './v-cart-item.vue';
import { mapActions } from 'vuex';

export default {
    name: "v-cart",
    components: {
        vCartItemVue,
    },
    props: {
        cart_data: {
            typeof: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        ...mapActions([
            'DELETE_FROM_CART'
        ]),
        deleteFromCar(index) {
            this.DELETE_FROM_CART(index)
        }
    }
}
</script>

<style lang="scss">

</style>