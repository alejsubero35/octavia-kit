<template>
    <div>
        <vue-perfect-scrollbar
            :settings="{suppressScrollX: true, wheelPropagation: false}"
            class="h-100 rtl-ps-none ps scroll"
            style="height: 100%;"
        >
            <div class="pa-5 relative">
                <v-app-bar
                    :color="$vuetify.theme.dark ? 'dark' : 'grey lighten-4'"
                    :dark="$vuetify.theme.dark"
                    class="pt-1"
                    fixed
                    flat
                >
                    <div
                        class="d-flex justify-space-between align-center w-full"
                    >
                        <h6 class="ma-0">My Cart</h6>
                        <slot name="cartDrawerCloseButton"></slot>
                    </div>
                </v-app-bar>
            </div>
            <div class="mt-15 pa-3">
                <div
                    v-for="(product, index) in getCartList"
                    :key="index"
                    class="d-flex  align-center eg-cart-shop mb-4"
                >
                    <div class="mr-3  relative ">
                        <div class="eg-cart-img">
                            <v-img
                                width="128"
                                class=" h-auto"
                                :src="product.imgUrl"
                                alt=""
                            />
                        </div>
                        <div class="absolute eg-cart-hover">
                            <v-btn
                                icon
                                class="eg-cart-btn"
                                color="white"
                                @click="deleteCart(product)"
                            >
                                <v-icon>mdi-close-circle</v-icon>
                            </v-btn>
                        </div>
                    </div>
                    <div class="d-flex flex-column ml-4">
                        <h5 class="ma-0">{{ product.title }}</h5>
                        <small class="">Unit Price ${{ product.price }}</small>
                        <p class="">
                            Total Price ${{ product.price * product.qty }}
                        </p>
                        <div class="mt-2 d-flex justify-space-between flex-end">
                            <v-btn-toggle dense>
                                <v-btn small @click="productDecrement(product)">
                                    <v-icon small>mdi-minus</v-icon>
                                </v-btn>

                                <p class="ma-0 px-3 pt-1">{{ product.qty }}</p>

                                <v-btn small @click="product.qty++">
                                    <v-icon small>mdi-plus</v-icon>
                                </v-btn>
                            </v-btn-toggle>
                        </div>
                    </div>
                </div>
            </div>
        </vue-perfect-scrollbar>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'CartDrawer',
    props: {},
    data() {
        return {
            totalPrice: ''
        }
    },
    computed: {
        ...mapGetters(['getCartList'])
    },
    methods: {
        ...mapActions(['addCart']),
        totalAmount() {
            let total = 0
            return (total += this.getCartList.reduce(
                (left, cur) => left + cur.price * cur.qty,
                0
            ))
        },
        deleteCart(cart) {
            this.getCartList.splice(this.getCartList.indexOf(cart), 1)
        },
        productDecrement(product) {
            if (product.qty <= 1) {
                product.qty = 0
                this.getCartList.splice(this.getCartList.indexOf(product), 1)
            } else {
                product.qty--
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.eg-cart-shop {
    &:hover {
        .eg-cart-hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.4);
            transform-origin: center center;
            .v-btn {
                transition: all 0.3s ease-in-out;
                transform: scale(1);
            }
        }
    }
    .eg-cart-hover {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        transform-origin: center center;
        .eg-cart-btn {
            transition: all 0.3s ease-in-out;
            transform: scale(0);
        }
    }
}
</style>
