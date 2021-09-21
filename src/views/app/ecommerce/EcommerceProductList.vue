<template>
    <div>
        <v-row>
            <v-col cols="12" md="4">
                <base-card class="h-full">
                    <v-card-text>
                        <div class="d-flex justify-space-between align-center">
                            <div class="card-title mb-0">Filter</div>
                            <v-btn color="primary" small dark>
                                <v-icon>mdi-reload</v-icon>
                            </v-btn>
                        </div>
                    </v-card-text>
                </base-card>
            </v-col>
            <v-col cols="12" md="8">
                <base-card class="align-center">
                    <v-card-text class="pa-0 pr-3">
                        <div
                            class="d-flex justify-space-between align-center flex-wrap"
                        >
                            <div>
                                <v-toolbar flat class="pl-0">
                                    <v-autocomplete
                                        clearable
                                        class="mx-0 pl-0 elevation-0"
                                        hide-no-data
                                        hide-details
                                        filled
                                        dense
                                        label="Search..."
                                        solo
                                        elevation="0"
                                    ></v-autocomplete>
                                </v-toolbar>
                            </div>
                            <div class="pa-lg-3 pa-sm-0">
                                <v-badge
                                    color="primary"
                                    :content="cartCount"
                                    overlap
                                    class="mr-4"
                                >
                                    <v-btn
                                        class="white--text mr-2"
                                        color="primary"
                                        small
                                        outlined
                                        depressed
                                        @click.stop="cartDrawer = !cartDrawer"
                                    >
                                        <v-icon>mdi-cart-outline</v-icon>
                                    </v-btn>
                                </v-badge>
                                <v-btn
                                    class="mr-2"
                                    small
                                    outlined
                                    color="primary"
                                    @click="gridView"
                                >
                                    <v-icon>mdi-view-grid</v-icon>
                                </v-btn>
                                <v-btn
                                    small
                                    dark
                                    color="danger"
                                    @click="listView"
                                >
                                    <v-icon>mdi-view-list-outline</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </v-card-text>
                </base-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" lg="3">
                <v-row>
                    <v-col cols="12" md="12">
                        <base-card>
                            <v-card-title>
                                <div class="card-title mb-0">Prices</div>
                            </v-card-title>
                            <!-- <v-divider></v-divider> -->
                            <v-card-text>
                                <v-radio-group
                                    v-model="radios"
                                    :mandatory="false"
                                >
                                    <v-radio
                                        label="All"
                                        value="radio-1"
                                        @change="allProductPrice"
                                    ></v-radio>
                                    <v-radio
                                        label="Less than $500"
                                        value="radio-2"
                                        @change="lessThan"
                                    ></v-radio>

                                    <v-radio
                                        label="More than $500"
                                        value="radio-4"
                                        @change="moreThan"
                                    ></v-radio>
                                </v-radio-group>
                            </v-card-text>
                        </base-card>
                    </v-col>
                    <v-col cols="12" md="12">
                        <base-card>
                            <v-card-title>
                                <div class="card-title mb-0">Category</div>
                            </v-card-title>
                            <!-- <v-divider></v-divider> -->
                            <v-card-text>
                                <div
                                    v-for="(category, index) in categories"
                                    :key="index"
                                    class="d-flex justify-space-between align-center"
                                >
                                    <div>
                                        <v-checkbox
                                            class="ma-0 pa-0"
                                            @change="filterCategory(category)"
                                            v-model="selected"
                                            :value="category.title"
                                            :label="category.title"
                                        >
                                        </v-checkbox>
                                    </div>
                                    <div>
                                        <v-chip
                                            class="primary--text primary lighten-5"
                                            label
                                        >
                                            <p class="font-weight-bold mb-0">
                                                {{ category.product }}
                                            </p>
                                        </v-chip>
                                    </div>
                                </div>
                            </v-card-text>
                        </base-card>
                    </v-col>

                    <v-col cols="12" md="12">
                        <base-card>
                            <v-card-title>
                                <div class="card-title mb-0">Rating</div>
                            </v-card-title>
                            <!-- <v-divider></v-divider> -->
                            <v-card-text>
                                <div
                                    v-for="(rate, index) in rating"
                                    :key="index"
                                    @click.stop="productRate(rate)"
                                    class="d-flex justify-space-between flex-wrap"
                                >
                                    <v-rating
                                        class="cursor-pointer mb-3"
                                        readonly
                                        color="warning"
                                        background-color="warning"
                                        dense
                                        v-model="rate.rates"
                                    ></v-rating>
                                    <div>
                                        <v-chip
                                            class="primary--text primary lighten-5"
                                            label
                                        >
                                            <p class="font-weight-bold mb-0">
                                                {{ rate.product }}
                                            </p>
                                        </v-chip>
                                    </div>
                                </div>
                            </v-card-text>
                        </base-card>
                    </v-col>
                    <v-col cols="12" md="12">
                        <base-card>
                            <v-card-title>
                                <div class="card-title mb-0">Free Shipping</div>
                            </v-card-title>
                            <!-- <v-divider></v-divider> -->
                            <v-card-text>
                                <v-checkbox
                                    class="ma-0 pa-0"
                                    label="Free Shipping"
                                ></v-checkbox>
                            </v-card-text>
                        </base-card>
                    </v-col>

                    <!-- hover  -->
                </v-row>
            </v-col>
            <v-col cols="12" lg="9">
                <v-row>
                    <v-col
                        v-for="(product, index) in filterProductList"
                        v-show="setPaginate(index)"
                        :key="index"
                        cols="12"
                        :class="{
                            'col-lg-4 col-md-6 col-sm-6': !isListView,
                            'col-md-12': isListView
                        }"
                    >
                        <base-card class="overflow-hidden">
                            <div
                                class=""
                                :class="{
                                    'list-grid': isListView,
                                    'list-horizontal': !isListView,
                                    'd-xs-block d-md-flex d-xl-flex d-lg-flex flex-row': isListView
                                }"
                            >
                                <img
                                    class=""
                                    :class="{
                                        'object-contain h-64 w-full': !isListView,
                                        'object-contain   pa-3': isListView
                                    }"
                                    :src="product.imgUrl"
                                    :height="!isListView ? 150 : ''"
                                    :width="isListView ? 128 : ''"
                                />

                                <v-card-text
                                    :class="{
                                        'align-self-center flex-grow-1 d-xs-block d-md-flex d-lg-flex d-xl-flex justify-space-between align-center': isListView
                                    }"
                                >
                                    <p class="text-18 ma-0 ">
                                        <a href="#" class="text--primary">
                                            {{ product.title }}
                                        </a>
                                    </p>
                                    <p
                                        :class="{
                                            'mb-0  mx-sm-0 mx-md-3 mx-lg-3 mx-xl-3': isListView
                                        }"
                                        class="body-2 text--disabled font-weight-thin"
                                    >
                                        {{ product.details }}
                                    </p>
                                    <div
                                        :class="{
                                            'mb-sm-0  mx-md-4 mx-lg-4 mx-xl-4  py-xs-3 py-3 py-md-0': isListView,
                                            'mb-5': !isListView
                                        }"
                                        class="d-flex flex-wrap align-center justify-space-between "
                                    >
                                        <v-rating
                                            v-model="product.rating"
                                            background-color="primary"
                                            color="primary"
                                            readonly
                                            dense
                                        ></v-rating>
                                        <div
                                            class="font-weight-bold text-18"
                                            :class="{
                                                'ml-4': isListView
                                            }"
                                        >
                                            ${{ product.price }}
                                        </div>
                                    </div>

                                    <div
                                        :class="{
                                            'justify-space-between  flex-wrap': !isListView,
                                            'justify-end': isListView
                                        }"
                                        class="d-flex"
                                    >
                                        <base-hover-button
                                            @click.native="
                                                cartDrawer = !cartDrawer
                                            "
                                            small
                                            text="View Cart"
                                            v-if="product.qty >= 1"
                                            class="primary lighten-5 primary--text"
                                        />
                                        <base-hover-button
                                            v-else
                                            @click.native.once="
                                                addCartx(product)
                                            "
                                            text="Add Cart"
                                            small
                                            class="mr-1 mb-1 primary lighten-5 primary--text"
                                        />

                                        <base-hover-button
                                            text="wish list "
                                            small
                                            class="primary lighten-5 primary--text"
                                        />
                                    </div>
                                </v-card-text>
                            </div>
                        </base-card>
                    </v-col>
                    <v-col cols="12">
                        <v-pagination
                            v-model="current"
                            :length="paginate_total"
                            @click.prevent="updateCurrent(page_index)"
                        >
                            circle ></v-pagination
                        >
                    </v-col>
                    <div>
                        <!-- cartDrawer -->
                        <v-navigation-drawer
                            v-model="cartDrawer"
                            fixed
                            right
                            height="100%"
                            temporary
                            floating
                            width="450"
                        >
                            <cart-drawer>
                                <template v-slot:cartDrawerCloseButton>
                                    <v-btn
                                        icon
                                        color
                                        @click.stop="cartDrawer = !cartDrawer"
                                    >
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </template>
                            </cart-drawer>
                            <template v-slot:append>
                                <div class="my-4 mx-4">
                                    <div class="">
                                        <v-btn
                                            to="/app/ecommerce/ecommerce-product-checkout"
                                            block
                                            color="primary"
                                        >
                                            Procced To Checkout | $
                                            {{ totalAmount() }}
                                        </v-btn>
                                    </div>
                                </div>
                            </template>
                        </v-navigation-drawer>
                    </div>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import axios from 'axios'
export default {
    components: {
        CartDrawer: () => import('./CartDrawer')
    },
    computed: {
        ...mapGetters(['getCartList'])
    },
    data: () => ({
        drawer: null,
        cartDrawer: false,
        cartCount: 0,
        current: 1,
        paginate: 6,
        paginate_total: 0,
        isColumnTwelve: false,
        isColumnFour: true,
        radios: 'radio-1',
        productRating: 3.5,
        productList: [],
        filterProductList: [],
        categories: [],
        cartList: [],
        brands: [],
        rating: [],
        selected: [],
        isListView: false,
        items: [
            {title: 'Click Me'},
            {title: 'Click Me'},
            {title: 'Click Me'},
            {title: 'Click Me 2'}
        ],

        // search
        loading: false,
        items: [],
        search: null,
        select: null
    }),
    created() {
        axios.get('/api/ecommerce/get-product-list').then((response) => {
            this.productList = response.data
            this.filterProductList = response.data
            this.paginate_total = Math.ceil(
                this.filterProductList.length / this.paginate
            )
        })
        axios
            .get('/api/ecommerce/get-category-list')
            .then((response) => (this.categories = response.data))
        axios
            .get('/api/ecommerce/get-brand-list')
            .then((response) => (this.brands = response.data))
        axios
            .get('/api/ecommerce/get-rating-list')
            .then((response) => (this.rating = response.data))
    },
    lessThan() {
        this.filterProductList = this.productList.filter((x) => x.price < 500)
        if (this.current > 1) this.current = 1
    },
    moreThan() {
        this.filterProductList = this.productList.filter((x) => x.price >= 500)
        if (this.current > 1) this.current = 1
    },
    filterCategory(category) {
        this.filterProductList = this.productList.filter((x) =>
            this.selected.includes(x.category)
        )

        if (this.selected.length <= 0) {
            this.filterProductList = this.productList
        }
        if (this.current > 1) this.current = 1
        this.paginate_total = Math.ceil(
            this.filterProductList.length / this.paginate
        )
    },

    gridView() {
        this.isListView = false
    },
    listView() {
        this.isListView = true
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
        addCartx(item) {
            this.addCart(item)
            if (item.qty == 1) this.cartCount++
        },
        setPaginate(i) {
            if (this.current == 1) {
                return i < this.paginate
            } else {
                return (
                    i >= this.paginate * (this.current - 1) &&
                    i < this.current * this.paginate
                )
            }
        },
        updateCurrent(i) {
            this.current = i
        },
        productRate(rate) {
            this.filterProductList = this.productList.filter(
                (x) => x.rating == rate.rates
            )

            if (this.current > 1) this.current = 1
            this.paginate_total = Math.ceil(
                this.filterProductList.length / this.paginate
            )
        },
        allProductPrice() {
            this.filterProductList = this.productList.filter(
                (x) => x.price >= 0
            )
            if (this.current > 1) this.current = 1
            this.paginate_total = Math.ceil(
                this.filterProductList.length / this.paginate
            )
        },
        lessThan() {
            this.filterProductList = this.productList.filter(
                (x) => x.price < 500
            )
            if (this.current > 1) this.current = 1
            this.paginate_total = Math.ceil(
                this.filterProductList.length / this.paginate
            )
        },
        moreThan() {
            this.filterProductList = this.productList.filter(
                (x) => x.price >= 500
            )
            if (this.current > 1) this.current = 1
            this.paginate_total = Math.ceil(
                this.filterProductList.length / this.paginate
            )
        },
        filterCategory(category) {
            this.filterProductList = this.productList.filter((x) =>
                this.selected.includes(x.category)
            )

            if (this.selected.length <= 0) {
                this.filterProductList = this.productList
            }
            if (this.current > 1) this.current = 1
            this.paginate_total = Math.ceil(
                this.filterProductList.length / this.paginate
            )
        },

        gridView() {
            this.isListView = false
        },
        listView() {
            this.isListView = true
        },
        querySelections(v) {
            this.loading = true
            // Simulated ajax query
            setTimeout(() => {
                this.items = this.states.filter((e) => {
                    return (
                        (e || '')
                            .toLowerCase()
                            .indexOf((v || '').toLowerCase()) > -1
                    )
                })
                this.loading = false
            }, 500)
        }
    }
}
</script>
