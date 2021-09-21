<template>
    <div>
        <base-card>
            <v-row no-gutters>
                <v-col cols="12" md="6" class="overflow-hidden">
                    <div class="mr-4">
                        <vueper-slides
                            class="rounded-md"
                            ref="vueperslides1"
                            :touchable="false"
                            fade
                            :autoplay="false"
                            :bullets="false"
                            @slide="
                                $refs.vueperslides2.goToSlide(
                                    $event.currentSlide.index,
                                    {emit: false}
                                )
                            "
                            fixed-height="400px"
                        >
                            <vueper-slide
                                class="rounded-md object-cover w-full"
                                v-for="(slide, i) in slides"
                                :key="i"
                                :image="slide.image"
                            >
                            </vueper-slide>
                        </vueper-slides>
                        <vueper-slides
                            class="no-shadow thumbnails"
                            ref="vueperslides2"
                            @slide="
                                $refs.vueperslides1.goToSlide(
                                    $event.currentSlide.index,
                                    {emit: false}
                                )
                            "
                            fixed-height="75px"
                            :dragging-distance="70"
                            :visible-slides="6"
                            :bullets="false"
                            :touchable="false"
                            :slide-ratio="1 / 4"
                            :gap="2.5"
                            :arrows="false"
                        >
                            <vueper-slide
                                v-for="(slide, i) in slides"
                                :key="i"
                                :image="slide.image"
                                @click.native="$refs.vueperslides2.goToSlide(i)"
                            >
                            </vueper-slide>
                        </vueper-slides>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="pa-3">
                        <h4>Headphone Kraken</h4>
                        <p class="text--disabled">
                            Lightweight Aluminum Frame - Retractable Noise
                            Isolating Microphone
                        </p>

                        <v-rating
                            dense
                            v-model="rating"
                            background-color="primary"
                            color="primary"
                            class="mb-4"
                        ></v-rating>

                        <p class="">
                            The #1 Best-Selling Gaming Peripherals Manufacturer
                            in the US: Source - The NPD Group, Inc., U.S. Retail
                            Tracking Service, Gaming Designed: Keyboards, Mice,
                            PC Headsets, and PC Microphones, Based on dollar
                            sales, Jan. 2017- June 2020 combined.
                        </p>

                        <div class="d-flex mb-3">
                            <h5 class="mb-0 mr-3">$100.00</h5>
                            <h5 class="ma-0 text--disabled line-through">
                                $100.00
                            </h5>
                        </div>

                        <div>
                            <p class="text-md text mb-1">
                                Shipping Fees: <span>$50</span>
                            </p>
                            <p class="text-md text">
                                Stock: <span> Available</span>
                            </p>
                        </div>

                        <div class="d-flex">
                            <v-btn color="primary" class="mr-2"
                                >Add to Cart</v-btn
                            >
                            <v-btn outlined color="primary" class="mr-2"
                                >Wishlist</v-btn
                            >
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="12" class="mb-10">
                    <div class="mt-10">
                        <v-tabs v-model="tab" centered>
                            <v-tab v-for="item in items" :key="item.tab">
                                {{ item.tab }}
                            </v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                            <v-tab-item v-for="item in items" :key="item.tab">
                                <v-card flat>
                                    <v-card-text>{{
                                        item.content
                                    }}</v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                    </div>
                </v-col>
            </v-row>
        </base-card>

        <v-row>
            <v-col cols="12" md="12">
                <base-card>
                    <v-card-title>
                        <div class="card-title">Related Products</div>
                    </v-card-title>
                    <v-card-text>
                        <vueper-slides
                            class="no-shadow"
                            :visible-slides="4"
                            slide-multiple
                            fixed-height="350px"
                            :gap="2"
                            :slide-ratio="1 / 2"
                            :dragging-distance="200"
                            :breakpoints="{
                                800: {visibleSlides: 2, slideMultiple: 2},
                                400: {visibleSlides: 1}
                            }"
                        >
                            <!-- <vueper-slide v-for="(slide, index) in sliderImage" :key="index" :image="slide.img" /> -->
                            <vueper-slide
                                v-for="(card, index) in cards"
                                :key="index"
                            >
                                <template v-slot:content>
                                    <base-card class="h-full">
                                        <div class="">
                                            <img
                                                class="md:w-6/12"
                                                :src="card.img"
                                            />

                                            <v-card-text>
                                                <p class="text-18 ma-0 ">
                                                    <a href="#">
                                                        {{ card.title }}
                                                    </a>
                                                </p>
                                                <p
                                                    class="body-2 text--disabled font-weight-thin"
                                                >
                                                    {{ card.details }}
                                                </p>
                                                <div class="">
                                                    <v-rating
                                                        v-model="productRating"
                                                        background-color="primary"
                                                        color="primary"
                                                        readonly
                                                        dense
                                                        class="mb-3"
                                                    ></v-rating>
                                                    <div
                                                        class="font-weight-bold text-18"
                                                    >
                                                        ${{ card.price }}
                                                    </div>
                                                </div>
                                            </v-card-text>
                                        </div>
                                    </base-card>
                                </template>
                            </vueper-slide>
                        </vueper-slides>
                    </v-card-text>
                </base-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
// In your Vue.js component.
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Product Details'
    },
    components: {VueperSlides, VueperSlide},

    data: () => ({
        tab: null,
        productRating: 4,
        rating: 4,
        items: [
            {
                tab: 'Descriptions',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra nibh et urna tempus, id feugiat sapien iaculis. Morbi aliquam et nisl ut varius. Vivamus fringilla, nisl ac lacinia fermentum, nisl felis facilisis lectus, id condimentum turpis quam ac ipsum. Vivamus purus nisi, condimentum eget felis vel, finibus interdum odio. Pellentesque lacinia aliquam ipsum. Donec euismod ex in sodales faucibus. Proin eget lacus vitae eros vestibulum vehicula. Mauris tortor massa, fringilla ut metus quis, malesuada semper diam. Phasellus et iaculis ex, vitae maximus odio.'
            },
            {
                tab: 'Specifications',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra nibh et urna tempus, id feugiat sapien iaculis. Morbi aliquam et nisl ut varius. Vivamus fringilla, nisl ac lacinia fermentum, nisl felis facilisis lectus, id condimentum turpis quam ac ipsum. Vivamus purus nisi, condimentum eget felis vel, finibus interdum odio. Pellentesque lacinia aliquam ipsum. Donec euismod ex in sodales faucibus. Proin eget lacus vitae eros vestibulum vehicula. Mauris tortor massa, fringilla ut metus quis, malesuada semper diam. Phasellus et iaculis ex, vitae maximus odio.'
            },
            {
                tab: 'Review',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra nibh et urna tempus, id feugiat sapien iaculis. Morbi aliquam et nisl ut varius. Vivamus fringilla, nisl ac lacinia fermentum, nisl felis facilisis lectus, id condimentum turpis quam ac ipsum. Vivamus purus nisi, condimentum eget felis vel, finibus interdum odio. Pellentesque lacinia aliquam ipsum. Donec euismod ex in sodales faucibus. Proin eget lacus vitae eros vestibulum vehicula. Mauris tortor massa, fringilla ut metus quis, malesuada semper diam. Phasellus et iaculis ex, vitae maximus odio.'
            }
        ],
        cards: [
            {
                title: 'Beats Headphone',
                details: 'Enjoy Premium Sound',
                price: '39',
                img: require('@/assets/images/products/headphone-1.jpg')
            },
            {
                title: 'Iphone 11pro',
                details: '6G , 4k FPS',
                price: '119',
                img: require('@/assets/images/products/watch-1.jpg')
            },
            {
                title: 'Iphone 11pro',
                details: '6G , 4k FPS',
                price: '119',
                img: require('@/assets/images/products/watch-1.jpg')
            },
            {
                title: 'Beats Headphone',
                details: 'Enjoy Premium Sound',
                price: '39',
                img: require('@/assets/images/products/headphone-1.jpg')
            },
            {
                title: 'Iphone 11pro',
                details: '6G , 4k FPS',
                price: '119',
                img: require('@/assets/images/products/watch-1.jpg')
            }
        ],
        slides: [
            {image: require('@/assets/images/products/headphone-1.jpg')},
            {image: require('@/assets/images/products/headphone-2.jpg')},
            {image: require('@/assets/images/products/iphone-1.jpg')},
            {image: require('@/assets/images/products/speaker-1.jpg')},
            {image: require('@/assets/images/products/watch-2.jpg')},
            {image: require('@/assets/images/products/headphone-2.jpg')},
            {image: require('@/assets/images/products/headphone-1.jpg')},
            {image: require('@/assets/images/products/headphone-2.jpg')}
        ]
    })
}
</script>
