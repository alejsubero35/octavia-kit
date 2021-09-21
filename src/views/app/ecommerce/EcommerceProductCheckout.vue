<template>
    <v-row>
        <v-col cols="12" md="12">
            <form-wizard
                class="test"
                shape="tab"
                title=""
                subtitle=""
                color="#0081FF"
                next-button-text="Order"
                finish-button-text="Deliver"
            >
                <tab-content title="Cart" icon="mdi mdi-cart-outline">
                    <v-row>
                        <v-col cols="12" md="8">
                            <base-card
                                v-for="(product, index) in getCartList"
                                :key="index"
                                class="mb-3"
                            >
                                <v-card-text>
                                    <div
                                        class="d-flex align-center justify-space-between flex-wrap"
                                    >
                                        <div class="d-flex flex-wrap">
                                            <v-img
                                                class="mr-2"
                                                :src="product.imgUrl"
                                                alt=""
                                                max-width="200"
                                                max-height="200"
                                            ></v-img>
                                            <div>
                                                <h5 class="font-weight-thin">
                                                    {{ product.title }}
                                                </h5>
                                                <v-chip
                                                    class="mb-4"
                                                    color="success"
                                                    small
                                                    text-color="white"
                                                >
                                                    In Stock
                                                </v-chip>
                                                <p class="mb-0 text-18">
                                                    ${{
                                                        product.price *
                                                            product.qty
                                                    }}
                                                </p>
                                                <div class="mb-5">
                                                    <p class="text--disabled">
                                                        <v-icon
                                                            small
                                                            color="gray"
                                                            >mdi-cart</v-icon
                                                        >
                                                        Free SHipping
                                                    </p>
                                                    <p>
                                                        Quantity
                                                        {{ product.qty }}
                                                    </p>
                                                </div>
                                                <div>
                                                    <!-- <v-btn class="mr-2" small  color="">
                                <v-icon left>mdi-close</v-icon> Remove
                              </v-btn>
                              <v-btn small  color="primary">
                                <v-icon left>mdi-heart-outline</v-icon> Wishlist
                              </v-btn> -->
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <v-btn-toggle
                                                v-model="toggle_exclusive"
                                                mandatory
                                                tile
                                                class="d-flex align-center"
                                            >
                                                <!-- <v-btn small depressed color="">
                            <v-icon color="">mdi-plus</v-icon>
                          </v-btn>
                          <span class="align-middle mx-2">{{ product.qty }}</span>
                          <v-btn small depressed  color="">
                            <v-icon color="">mdi-minus</v-icon>
                          </v-btn> -->
                                                <div>
                                                    <v-btn
                                                        @click="
                                                            deleteCart(product)
                                                        "
                                                        class="mr-2 danger--text"
                                                        small
                                                        depressed
                                                        color="danger lighten-5"
                                                    >
                                                        <v-icon
                                                            left
                                                            color="danger"
                                                            >mdi-close</v-icon
                                                        >
                                                        Remove
                                                    </v-btn>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        class="primary--text"
                                                        color="primary lighten-5"
                                                    >
                                                        <v-icon
                                                            left
                                                            color="primary"
                                                            >mdi-heart-outline</v-icon
                                                        >
                                                        Wishlist
                                                    </v-btn>
                                                </div>
                                            </v-btn-toggle>
                                        </div>
                                    </div>
                                </v-card-text>
                            </base-card>
                            <!-- <base-card class="mb-3">
                  <v-card-text>
                    <div class="d-flex align-center justify-space-between flex-wrap">
                      <div class="d-flex flex-wrap mb-4">
                        <v-img 
                          class="" 
                          src="@/assets/images/products/headphone-2.jpg" alt=""
                          max-width="200"
                          max-height="200"
                        ></v-img>
                          <div>
                            <h5 class="font-weight-thin">Kraken 5.0 RAZER Headphone</h5>
                            <v-chip
                              class="mb-4"
                              color="success"
                              small
                              text-color="white"
                            >
                              In Stock
                            </v-chip>
                            <p class="mb-0 text-18">$599.99</p>
                              <div class="mb-5">
                                <p class="text--disabled">
                                  <v-icon small color="gray">mdi-cart</v-icon>
                                  Free SHipping
                                </p>
                              </div>
                            <div>
                              <v-btn class="mr-2" small  color="">
                                <v-icon left>mdi-close</v-icon> Remove
                              </v-btn>
                              <v-btn small  color="primary">
                                <v-icon left>mdi-heart-outline</v-icon> Wishlist
                              </v-btn>
                            </div>
                          </div>
                      </div>
                      
                      <div>
                        <v-btn-toggle
                          v-model="toggle_exclusiveTwo"
                          mandatory
                          tile 
                          class="d-flex align-center"
                        >
                          <v-btn small depressed color="">
                            <v-icon color="">mdi-plus</v-icon>
                          </v-btn>
                          <span class="align-middle mx-2">1</span>
                          <v-btn small depressed  color="">
                            <v-icon color="">mdi-minus</v-icon>
                          </v-btn>
                        </v-btn-toggle>
                      </div>
                    </div>
                  </v-card-text>
                </base-card> -->
                        </v-col>
                        <v-col cols="12" md="4">
                            <base-card class="mb-3">
                                <v-card-title>Options</v-card-title>
                                <v-card-text>
                                    <div
                                        class="d-flex justify-space-between mb-3"
                                    >
                                        <h6 class="text--disabled">Coupons</h6>
                                        <a href="#">Apply</a>
                                    </div>
                                    <v-divider></v-divider>
                                    <div class="mt-3">
                                        <h6 class="text--disabled">
                                            Price Details
                                        </h6>

                                        <div
                                            class="d-flex justify-space-between"
                                        >
                                            <p
                                                class="text--disabled mb-1 text-18 mr-2"
                                            >
                                                Total :
                                            </p>
                                            <p
                                                class="text--disabled mb-1 text-18"
                                            >
                                                $500
                                            </p>
                                        </div>
                                        <div
                                            class="d-flex justify-space-between"
                                        >
                                            <p
                                                class="text--disabled mb-1 text-18 mr-2"
                                            >
                                                Bag Discount:
                                            </p>
                                            <p
                                                class="text-success mb-1 text-18"
                                            >
                                                -$15
                                            </p>
                                        </div>
                                        <div
                                            class="d-flex justify-space-between"
                                        >
                                            <p
                                                class="text--disabled mb-1 text-18 mr-2"
                                            >
                                                Estimnated Tax:
                                            </p>
                                            <p
                                                class="text-success mb-1 text-18"
                                            >
                                                $10
                                            </p>
                                        </div>
                                        <div
                                            class="d-flex justify-space-between"
                                        >
                                            <p
                                                class="text--disabled mb-1 text-18 mr-2"
                                            >
                                                EMI Eligibility:
                                            </p>
                                            <p
                                                class="text-success mb-1 text-18"
                                            >
                                                <a href="#">Details</a>
                                            </p>
                                        </div>
                                        <div
                                            class="d-flex justify-space-between"
                                        >
                                            <p
                                                class="text--disabled mb-1 text-18 mr-2"
                                            >
                                                Delivery Charges:
                                            </p>
                                            <p
                                                class="text-success mb-1 text-18 "
                                            >
                                                Free
                                            </p>
                                        </div>

                                        <v-divider class="my-3"></v-divider>

                                        <div
                                            class="d-flex justify-space-between"
                                        >
                                            <h6
                                                class=" font-weight-bold mb-1 text-18 mr-2"
                                            >
                                                Total:
                                            </h6>
                                            <h6 class=" mb-1 text-18">
                                                $ {{ totalAmount }}
                                            </h6>
                                        </div>
                                    </div>
                                </v-card-text>
                            </base-card>

                            <base-card>
                                <v-card-text>
                                    <div
                                        class="d-flex align-center flex-wrap mb-2"
                                    >
                                        <v-icon color="" class="pa-1 mr-2"
                                            >mdi-shield-check</v-icon
                                        >
                                        <p class="ma-0">
                                            Safe and Secure Payment
                                        </p>
                                    </div>
                                    <div
                                        class="d-flex align-center flex-wrap mb-2"
                                    >
                                        <v-icon color="" class="pa-1 mr-2"
                                            >mdi-bus</v-icon
                                        >
                                        <p class="ma-0">
                                            Safe and Secure Payment
                                        </p>
                                    </div>
                                    <div
                                        class="d-flex align-center flex-wrap mb-2"
                                    >
                                        <v-icon color="" class="pa-1 mr-2"
                                            >mdi-reload</v-icon
                                        >
                                        <p class="ma-0">Refund Policy</p>
                                    </div>
                                </v-card-text>
                            </base-card>
                        </v-col>
                    </v-row>
                </tab-content>
                <tab-content
                    title="Address"
                    icon="mdi mdi-map-marker-check-outline"
                >
                    <v-row>
                        <v-col cols="12" md="8">
                            <base-card>
                                <v-card-title>
                                    <div class="card-title">
                                        Add New Address
                                    </div>
                                </v-card-title>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="Full Name"
                                                outlined
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="Mobile Number"
                                                outlined
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="House No"
                                                outlined
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="Landmark"
                                                outlined
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="Town/City"
                                                outlined
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="Pincode"
                                                outlined
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="State"
                                                outlined
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-select
                                                :items="items"
                                                label="Outlined style"
                                                outlined
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-btn color="primary" outlined
                                                >Save and Deliver Here</v-btn
                                            >
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </base-card>
                        </v-col>
                        <v-col cols="12" md="4">
                            <base-card>
                                <v-card-title>
                                    <div class="card-title">Tim Clarkson</div>
                                </v-card-title>
                                <v-card-text>
                                    <p class="tex--disabled mb-1 text-md">
                                        9447 Jhon Carter House
                                    </p>
                                    <p class="text--disabled mb-4 text-md">
                                        Lex Luthor, AZ 23456
                                    </p>
                                    <p class="text--disabled mb-1 text-md">
                                        Central Standard Time (CST)
                                    </p>
                                    <p class="text--disabled mb-1 text-md">
                                        456-789-6543
                                    </p>
                                </v-card-text>
                            </base-card>
                        </v-col>
                    </v-row>
                </tab-content>
                <tab-content title="Payment" icon="mdi mdi-cash">
                    <v-row>
                        <v-col cols="12" md="8">
                            <base-card>
                                <v-card-title>
                                    <div class="card-title">
                                        Payment Options
                                    </div>
                                </v-card-title>
                                <v-card-text>
                                    <div class="d-flex align-center mb-3">
                                        <v-avatar tile class="mr-2">
                                            <img
                                                src="@/assets/images/master-card.png"
                                                alt=""
                                            />
                                        </v-avatar>
                                        <p class="ma-0 text--disabled">
                                            US Debit Card 12XXX XXXX XXX
                                        </p>
                                    </div>

                                    <p class="ma-0 text-18 text--disabled">
                                        Tim Clarkson
                                    </p>
                                    <p class="mb-8 text-18 text--disabled">
                                        30/05/2020
                                    </p>

                                    <div class="d-flex align-center">
                                        <div>
                                            <v-text-field
                                                class="mb-0 mr-2 pa-0"
                                                dense
                                                label="Enter CVV"
                                                outlined
                                            ></v-text-field>
                                        </div>
                                    </div>

                                    <v-divider class="my-2"></v-divider>

                                    <v-radio-group :mandatory="false">
                                        <v-radio
                                            label="Credit / Debit / ATM Card"
                                            value="radio-1"
                                        ></v-radio>
                                        <v-radio
                                            label="Net Banking"
                                            value="radio-2"
                                        ></v-radio>
                                        <v-radio
                                            label="EMI (Easy Installment)"
                                            value="radio-3"
                                        ></v-radio>
                                        <v-radio
                                            label="Cash On Delivery"
                                            value="radio-4"
                                        ></v-radio>
                                    </v-radio-group>
                                </v-card-text>
                            </base-card>
                        </v-col>
                        <v-col cols="12" md="4">
                            <base-card>
                                <v-card-title>Price Details</v-card-title>
                                <v-card-text>
                                    <div
                                        class="d-flex justify-space-between flex-wrap"
                                    >
                                        <p
                                            class="text--disabled mb-1 text-18 mr-2"
                                        >
                                            Price 2 Items:
                                        </p>
                                        <p class="text--disabled mb-1 text-18 ">
                                            $10000
                                        </p>
                                    </div>
                                    <div
                                        class="d-flex justify-space-between flex-wrap"
                                    >
                                        <p
                                            class="text--disabled mb-1 text-18 mr-2"
                                        >
                                            Delivery Charges:
                                        </p>
                                        <p class="text-success mb-1 text-18 ">
                                            Free
                                        </p>
                                    </div>

                                    <v-divider class="my-2"></v-divider>

                                    <div
                                        class="d-flex justify-space-between flex-wrap"
                                    >
                                        <p
                                            class="text--disabled mb-1 text-18 mr-2"
                                        >
                                            Amount Payable:
                                        </p>
                                        <p class="text--disabled mb-1 text-18 ">
                                            $10000
                                        </p>
                                    </div>
                                </v-card-text>
                            </base-card>
                        </v-col>
                    </v-row>
                </tab-content>
            </form-wizard>
        </v-col>
    </v-row>
</template>
<script>
//local registration
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {mapGetters, mapActions} from 'vuex'
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Product Checkout'
    },

    computed: {
        ...mapGetters(['getCartList']),
        totalAmount() {
            let total = 0
            return (total += this.getCartList.reduce(
                (left, cur) => left + cur.price * cur.qty,
                0
            ))
        }
    },
    //component code
    components: {
        FormWizard,
        TabContent
    },
    data() {
        return {
            toggle_exclusive: undefined,
            toggle_exclusiveTwo: undefined,
            items: ['Home', 'Office'],
            subTotal: null
        }
    },
    methods: {
        ...mapActions(['addCart']),
        deleteCart(cart) {
            this.getCartList.splice(this.getCartList.indexOf(cart), 1)
        }
    }
}
</script>
