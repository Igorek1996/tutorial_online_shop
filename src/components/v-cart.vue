<template>
    <div class="v-cart">
        <router-link :to="{ name: 'catalog' }">
            <div class="v-catalog__link_to_cart">Back to catalog</div>
        </router-link>
        <h1>Cart</h1>
        <p v-if="!cart_data.length">There is no products in cart...</p>
        <vCartItem v-for="(item, index) in cart_data" :key="item.article" :cart_item_data="item"
            @deleteFromCar="deleteFromCar(index)" @increment="increment(index)" @decrement="decrement(index)" />
        <div class="v-cart__total">
            <p class="total__name">Total:</p>
            <p>{{ cartTotalCost }} Р.</p>
        </div>
    </div>
</template>

<script>
import vCartItem from './v-cart-item.vue';
import { mapActions } from 'vuex';

export default {
    name: "v-cart",
    components: {
        vCartItem,
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
    computed: {
        cartTotalCost() {
            let result = [];

            if (this.cart_data.length) {
                for (let item of this.cart_data) {
                    result.push(item.price * item.quantity);
                }
                result = result.reduce(function (sum, el) {
                    return sum + el
                })
                return result;

            }

            else {
                return 0;
            }
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),
        increment(index) {
            this.INCREMENT_CART_ITEM(index)
        },
        decrement(index) {
            this.DECREMENT_CART_ITEM(index)
        },
        deleteFromCar(index) {
            this.DELETE_FROM_CART(index)
        }
    }
}
</script>

<style lang="scss">
.v-cart {
    margin-bottom: 100px;

    &__total {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        padding: $padding*2;
        display: flex;
        justify-content: center;
        background: $green_bg;
        color: #fff;
        font-size: 20px;
    }
}

.total__name {
    margin-right: $margin*2;
}
</style>