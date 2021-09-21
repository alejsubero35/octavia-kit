<template>
    <v-row>
        <v-col cols="12" lg="3">
            <base-card>
                <v-card-text>
                    <div class="d-flex align-center justify-center mb-6">
                        <div class="text-center">
                            <v-img
                                height="128"
                                width="128"
                                src="@/assets/images/faces/2.jpg"
                                class=" rounded-circle"
                                alt=""
                            ></v-img>
                            <h5 class="font-weight-bold my-3">
                                Jhon Doe
                            </h5>
                            <div
                                class="d-flex align-center flex-wrap justify-center mb-3"
                            >
                                <h6 class="font-weight-bold text-14 mr-2 mb-0">
                                    5.0
                                </h6>
                                <v-icon color="warning">
                                    mdi-star
                                </v-icon>
                                <span class="text--disabled">(12 Reviews)</span>
                            </div>
                            <v-chip
                                label
                                small
                                class="ma-2"
                                color="green"
                                text-color="white"
                            >
                                Online
                            </v-chip>
                        </div>
                    </div>
                    <v-divider class="my-4" />
                    <div class="d-flex align-end justify-space-between mb-4">
                        <p class="mt-2 mb-0 flex-1">
                            Response Time
                        </p>
                        <div class="flex-1">
                            <p class="text-right caption ma-0 ">
                                80%
                            </p>
                            <v-progress-linear value="80" />
                        </div>
                    </div>
                    <div class="d-flex align-end justify-space-between mb-4">
                        <p class="mt-2 mb-0 flex-1">
                            Delivered On Time
                        </p>
                        <div class="flex-1">
                            <p class="text-right caption ma-0 ">
                                90%
                            </p>
                            <v-progress-linear value="80" />
                        </div>
                    </div>
                    <div class="d-flex align-end justify-space-between mb-4">
                        <p class="mt-2 mb-0 flex-1">
                            Order Completion
                        </p>
                        <div class="flex-1">
                            <p class="text-right caption ma-0 ">
                                100%
                            </p>
                            <v-progress-linear value="100%" />
                        </div>
                    </div>
                    <v-divider class="my-4" />
                    <div class="d-flex align-center justify-space-between mb-2">
                        <p class="mt-2 mb-0 flex-1">
                            Earned in April
                        </p>
                        <div class="flex-1 text-right">
                            <v-chip small class="ma-2">
                                $ 200
                            </v-chip>
                        </div>
                    </div>
                    <div class="d-flex align-center justify-space-between mb-2">
                        <p class="mt-2 mb-0 flex-1">
                            Response in time
                        </p>
                        <div class="flex-1 text-right">
                            <v-chip small class="ma-2">
                                100%
                            </v-chip>
                        </div>
                    </div>
                </v-card-text>
            </base-card>
            <base-card>
                <v-card-text>
                    <div class="d-flex justify-space-between itesm-center">
                        <h5 class="ma-0">
                            Inbox
                        </h5>
                        <v-btn color="primary" class="rounded-pill" depressed>
                            View All
                        </v-btn>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" lg="9">
            <div class="d-flex align-center">
                <p class="font-weight-medium mr-3 mb-3">
                    Upgrade Your Business
                </p>
                <v-divider />
            </div>

            <base-card class="mb-4">
                <v-card-text class="">
                    <div class="d-flex align-center justify-space-between">
                        <div>
                            <div class="card-title">
                                How to build your success on Market in 3 steps
                            </div>
                            <p class=" font-weight-medium">
                                The key to your success is the brand you build
                                for yourself through your reputation. We
                                gathered some tips and resources to help you
                                become a leading seller.
                            </p>
                        </div>
                        <div>
                            <v-img
                                width="128"
                                height="128"
                                class="d-sm-none d-md-block"
                                src="@/assets/images/illustrations/business_deal.svg"
                                alt=""
                            ></v-img>
                        </div>
                    </div>
                </v-card-text>
            </base-card>

            <base-card>
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <div class="card-title mb-0">
                                How to build your success on Market in 3 steps
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            lg="4"
                            class="text-18-left text-center"
                        >
                            <v-icon class="primary--text mb-2"
                                >mdi-microphone-outline</v-icon
                            >
                            <p class="heading-label ma-0 ">Get Noticed</p>
                            <p class="text--disabled">
                                Tap into the power of social media by sharing
                                your Gig, and
                                <a class="mr-1" href="#">get expert help</a>to
                                grow your impact.
                            </p>
                            <v-btn class="" outlined color="primary"
                                >Share Your Gigs</v-btn
                            >
                        </v-col>
                        <v-col
                            cols="12"
                            lg="4"
                            class="text-18-left text-center"
                        >
                            <v-icon class="info--text mb-2"
                                >mdi-book-open-variant</v-icon
                            >
                            <p class="heading-label ma-0 ">
                                GET MORE SKILLS & EXPOSURE
                            </p>
                            <p class="text--disabled">
                                Hone your skills and expand your knowledge with
                                online courses. You’ll be able to offer more .
                            </p>
                            <v-btn class="" outlined color="primary"
                                >Explore Learn</v-btn
                            >
                        </v-col>
                        <v-col
                            cols="12"
                            lg="4"
                            class="text-18-left text-center"
                        >
                            <v-icon class="warning--text mb-2"
                                >mdi-trophy</v-icon
                            >
                            <p class="heading-label ma-0 ">GET NOTICED</p>
                            <p class="text--disabled">
                                Tap into the power of social media by sharing
                                your Gig, and
                                <a class="mr-1" href="#">get expert help</a>to
                                grow your impact.
                            </p>
                            <v-btn class="" outlined color="primary"
                                >Watch Free Course</v-btn
                            >
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>

            <v-row>
                <v-col cols="12" md="6">
                    <base-card class="h-full py-5">
                        <v-card-text class="d-flex align-start ">
                            <v-icon color="primary" class="mr-2"
                                >mdi-lightbulb-on-outline</v-icon
                            >
                            <div>
                                <h5 class="font-weight-bold body-1">
                                    Tip #1: Business brings business
                                </h5>
                                <p class="ma-0">
                                    Every order counts! The more orders you get,
                                    the more successful you’ll become.
                                </p>
                            </div>
                        </v-card-text>
                    </base-card>
                </v-col>
                <v-col cols="12" md="6">
                    <base-card class="h-full py-5">
                        <v-card-text class="d-flex align-start">
                            <v-icon color="primary" class="mr-2"
                                >mdi-lightbulb-on-outline</v-icon
                            >
                            <div>
                                <h5 class="font-weight-bold body-1">
                                    Tip #2: Keep the cycle going & win buyers
                                </h5>
                                <p class="ma-0">
                                    Get an order, provide quality service, and
                                    get great reviews. You’ll get more traffic,
                                    and more orders.
                                </p>
                            </div>
                        </v-card-text>
                    </base-card>
                </v-col>

                <v-col cols="12">
                    <v-carousel
                        cycle
                        height="100%"
                        hide-delimiters
                        show-arrows-on-hover
                        :light="!$vuetify.theme.dark"
                    >
                        <v-carousel-item v-for="(slide, i) in slides" :key="i">
                            <v-sheet>
                                <v-row class="" align="center" justify="center">
                                    <div class="d-flex pa-4">
                                        <img
                                            class="mr-2"
                                            height="65"
                                            width="65"
                                            :src="slide.img"
                                            alt=""
                                        />
                                        <div>
                                            <div class="card-title">
                                                {{ slide.title }}
                                            </div>
                                            <p>{{ slide.paragraph }}</p>
                                            <v-btn color="primary"
                                                >learn more</v-btn
                                            >
                                        </div>
                                    </div>
                                </v-row>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Profile 2'
    },
    data() {
        return {
            slides: [
                {
                    img: require('@/assets/images/vue.png'),
                    title: 'Take Course On Vue Today',
                    paragraph:
                        'Put your professional career in full force with courses on Learn from React. Gain new skills, earn a badge on your profile, and keep those sales rolling in.'
                },
                {
                    img: require('@/assets/images/Sass_icon.png'),
                    title: 'Communicate With Your Customers',
                    paragraph:
                        'Put your professional career in full force with courses on Learn from React. Gain new skills, earn a badge on your profile, and keep those sales rolling in.'
                },
                {
                    img: require('@/assets/images/Html_Icon.png'),
                    title: 'Take Course On HTML Today',
                    paragraph:
                        'Put your professional career in full force with courses on Learn from React. Gain new skills, earn a badge on your profile, and keep those sales rolling in.'
                }
            ]
        }
    }
}
</script>
