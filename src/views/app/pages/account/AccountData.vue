<template>
    <div>
        <v-row justify="center">
            <v-col cols="10" md="10">
                <div class="text-center">
                    <v-avatar size="96" class="mb-4">
                        <img src="@/assets/images/faces/1.jpg" alt="" />
                    </v-avatar>
                    <h3 class="mb-4">Data & personalization</h3>
                    <p>
                        Your data, activity, and preferences that help make UI
                        Lib services more useful to you
                    </p>
                </div>
            </v-col>
            <v-col cols="10" md="10">
                <e-info-card
                    title="Take the Privacy Checkup"
                    sub-title="This step-by-step guide helps you choose the privacy settings that are right for you"
                    :image="imgOne"
                    link="Get started"
                />
            </v-col>
            <v-col cols="10" md="10">
                <e-info-card
                    title="Activity controls"
                    sub-title="You can choose to save your activity for better personalization across UI Lib. Turn on or pause these settings at any time."
                    :image="imgTwo"
                    link="Manage your activity controls"
                >
                    <template slot="basic-info-slot">
                        <v-expansion-panels class="my-4" flat>
                            <v-expansion-panel
                                v-for="(item, i) in items"
                                :key="i"
                            >
                                <v-expansion-panel-header>
                                    <div class="d-flex flex-wrap align-center">
                                        <div style=" flex: 1 1 0%;">
                                            <v-icon :color="item.iconColor">{{
                                                item.icon
                                            }}</v-icon>
                                            {{ item.title }}
                                        </div>
                                        <div style=" flex: 1 1 0%;">
                                            <v-icon :color="item.iconColor">{{
                                                item.iconTwo
                                            }}</v-icon>
                                            {{ item.titleTwo }}
                                        </div>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                </e-info-card>
            </v-col>

            <v-col cols="10" md="5">
                <e-info-card
                    title="Ad personalization"
                    sub-title="You can make ads more useful to you"
                    link="Go to ad settings"
                >
                    <template slot="basic-info-slot">
                        <div class="d-flex">
                            <v-img
                                max-width="48"
                                max-height="48"
                                src="@/assets/images/svg/experience.svg"
                            ></v-img>
                            <div class="ml-4">
                                <h6>Ad personalization</h6>
                                <p class="mb-1">
                                    Ads UI lib shows you are personalized
                                </p>
                                <v-icon color="primary"
                                    >mdi-check-circle</v-icon
                                >
                                On
                            </div>
                        </div>
                    </template>
                </e-info-card>
            </v-col>
            <v-col cols="10" md="5">
                <e-info-card
                    title="Activity and timeline"
                    sub-title="See the activity saved in your account and the places you've been. You can delete any or all your past activity."
                >
                    <template slot="basic-info-slot">
                        <v-list>
                            <v-list-item
                                v-for="item in items2"
                                :key="item.title"
                            >
                                <v-list-item-avatar>
                                    <img :src="item.icon" alt="" />
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title
                                        v-text="item.title"
                                    ></v-list-item-title>
                                    <v-list-item-subtitle
                                        v-text="item.subtitle"
                                    ></v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-btn icon>
                                        <v-icon color="grey lighten-1"
                                            >mdi-information</v-icon
                                        >
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                    </template>
                </e-info-card>
            </v-col>
            <v-col cols="10" md="10">
                <e-info-card
                    title="Things you created and do"
                    sub-title="Check UI Lib Dashboard to see a summary of your services and the data saved in your account"
                    link="Go To UI Lib Dashboard"
                >
                    <template slot="basic-info-slot">
                        <v-tabs icons-and-text show-arrows height="100">
                            <v-tab v-for="(item, index) in items3" :key="index">
                                <div>
                                    <v-img
                                        max-height="40"
                                        max-width="40"
                                        :src="item.img"
                                        alt=""
                                    />
                                    <p>{{ item.title }}</p>
                                </div>
                            </v-tab>
                        </v-tabs>
                    </template>
                </e-info-card>
            </v-col>
            <v-col cols="10" md="10">
                <e-info-card
                    title="Account Storage"
                    sub-title="Your account storage is shared across UI Lib services, like Gmail and Photos"
                    link="Manage Storage"
                    :image="imgThree"
                >
                    <template slot="basic-info-slot">
                        <h6>8% used – 1.23 GB of 15 GB</h6>
                    </template>
                </e-info-card>
            </v-col>
            <v-col cols="10" md="10">
                <e-info-card
                    title="Download, delete, or make a plan for your data"
                >
                    <template slot="basic-info-slot">
                        <v-expansion-panels class="my-4">
                            <v-expansion-panel
                                v-for="(item, i) in accordion"
                                :key="i"
                                class=""
                                elevation="1"
                            >
                                <v-expansion-panel-header
                                    class="border-b-2 border-gray-600"
                                >
                                    <div class="d-flex justify-space-between">
                                        <div class="">
                                            <v-img
                                                max-width="32"
                                                max-height="32"
                                                class="mr-2"
                                                :src="item.img"
                                            ></v-img>
                                        </div>

                                        <div
                                            class="d-md-flex d-lg-block justify-space-between  "
                                            style=" flex: 1 1 0%;"
                                        >
                                            <div
                                                class=" flex-grow-1"
                                                style="flex-basis:136px;"
                                            >
                                                <p
                                                    class=" ma-0 font-weight-bold mb-3 mr-4"
                                                >
                                                    {{ item.title }}
                                                </p>
                                            </div>
                                            <div
                                                class="flex-grow-1 text-left mr-2"
                                                style="flex-basis:136px;"
                                            >
                                                <p class=" ma-0 ">
                                                    {{ item.subtitle }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                </e-info-card>
            </v-col>
            <v-col cols="10" md="10">
                <e-info-card
                    title="General preferences for the web"
                    sub-title="Manage settings for UI Lib services on the web"
                    :image="imgFour"
                >
                    <template slot="basic-info-slot">
                        <v-expansion-panels class="my-4">
                            <v-expansion-panel
                                v-for="(item, i) in accordion2"
                                :key="i"
                                class=""
                                elevation="1"
                            >
                                <v-expansion-panel-header
                                    class="border-b-2 border-gray-600"
                                >
                                    <div class="d-flex justify-space-between">
                                        <div class="mr-2">
                                            <v-icon color="dark">{{
                                                item.img
                                            }}</v-icon>
                                        </div>

                                        <div
                                            class="d-md-flex d-lg-block justify-space-between  "
                                            style="flex: 1 1 0%;"
                                        >
                                            <div
                                                class=" flex-grow-1"
                                                style="flex-basis:136px;"
                                            >
                                                <p
                                                    class=" ma-0 font-weight-bold mb-3 mr-4"
                                                >
                                                    {{ item.title }}
                                                </p>
                                            </div>
                                            <div
                                                class="flex-grow-1 text-left mr-2"
                                                style="flex-basis:136px;"
                                            >
                                                <p class=" ma-0 ">
                                                    {{ item.subtitle }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                </e-info-card>
            </v-col>
            <v-col cols="10" md="10">
                <e-info-card
                    title="Reservations"
                    sub-title="Your past and upcoming reservations for flights, hotels, and events made using Search, Maps, and the Assistant"
                    :image="imgFive"
                    link="Manage reservations"
                />
            </v-col>
            <v-col cols="10" md="10">
                <e-info-card
                    title="Business Features"
                    sub-title="If you manage a business, you can get recommendations for features that help you connect with customers and add your business to UI Lib for free"
                    :image="imgSix"
                >
                    <template slot="basic-info-slot">
                        <v-expansion-panels class="my-4" flat>
                            <v-expansion-panel
                                v-for="(item, i) in accordion3"
                                :key="i"
                            >
                                <v-expansion-panel-header>
                                    <div class="d-flex flex-wrap align-center">
                                        <div style=" flex: 1 1 0%;">
                                            <v-icon color="secondary">{{
                                                item.icon
                                            }}</v-icon>
                                            {{ item.title }}
                                        </div>
                                        <div style=" flex: 1 1 0%;">
                                            <v-icon :color="item.iconColor">{{
                                                item.iconTwo
                                            }}</v-icon>
                                            {{ item.titleTwo }}
                                        </div>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                </e-info-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import EInfoCard from '@/components/card/BasicInfoCard'
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Account Data'
    },
    components: {
        EInfoCard
    },
    data() {
        return {
            imgOne: require('@/assets/images/svg/ui.svg'),
            imgTwo: require('@/assets/images/svg/business-and-finance.svg'),
            imgThree: require('@/assets/images/svg/database.svg'),
            imgFour: require('@/assets/images/svg/wrench.svg'),
            imgFive: require('@/assets/images/svg/calendar.svg'),
            imgSix: require('@/assets/images/svg/architecture-and-city.svg'),
            items: [
                {
                    icon: 'mdi-reload-alert',
                    title: 'Web & App Activity',
                    iconTwo: 'mdi-check-circle',
                    titleTwo: 'On',
                    iconColor: 'primary'
                },

                {
                    icon: 'mdi-map-marker-alert',
                    title: 'Location & History',
                    iconTwo: 'mdi-pause-circle',
                    titleTwo: 'Paused',
                    iconColor: 'success'
                },
                {
                    icon: 'mdi-youtube',
                    title: 'Youtube History',
                    iconTwo: 'mdi-check-circle',
                    titleTwo: 'On',
                    iconColor: 'danger'
                }
            ],
            items2: [
                {
                    icon: require('@/assets/images/svg/activity.svg'),
                    title: 'My Activity',
                    subtitle:
                        'Rediscover the things you’ve searched for, read, and watched'
                },
                {
                    icon: require('@/assets/images/svg/timeline.svg'),
                    title: 'Timeline',
                    subtitle:
                        'See where you have been based on your Location History'
                }
            ],
            items3: [
                {
                    img: require('@/assets/images/svg/youtube.svg'),
                    title: 'Youtube'
                },
                {
                    img: require('@/assets/images/svg/art-and-design.svg'),
                    title: 'Search Activity'
                },
                {
                    img: require('@/assets/images/svg/mail.svg'),
                    title: 'Mail'
                },
                {
                    img: require('@/assets/images/svg/calendar.svg'),
                    title: 'calendar'
                },
                {
                    img: require('@/assets/images/svg/seo-and-web.svg'),
                    title: 'Drive'
                },
                {
                    img: require('@/assets/images/svg/google-photos.svg'),
                    title: 'Photo'
                },
                {
                    img: require('@/assets/images/svg/maps-and-location.svg'),
                    title: 'Maps'
                }
            ],
            accordion: [
                {
                    img: require('@/assets/images/svg/download.svg'),
                    title: 'Download your data',
                    subtitle:
                        'Make a copy of your data to use it with another account or service'
                },
                {
                    img: require('@/assets/images/svg/login.svg'),
                    title: 'Make a plan for you account',
                    subtitle:
                        'Use Inactive Account Manager to plan what happens to your data if you stop using your account'
                },
                {
                    img: require('@/assets/images/svg/remove-user.svg'),
                    title: 'Delete a service or your account',
                    subtitle:
                        'You can do this if you no longer use a service or your account'
                }
            ],
            accordion2: [
                {
                    img: 'mdi-globe-model',
                    title: 'Language',
                    subtitle: 'English (United States)'
                },
                {
                    img: 'mdi-keyboard-outline',
                    title: 'Input Tools',
                    subtitle: 'Type more easily in your language'
                },
                {
                    img: 'mdi-account-tie-outline',
                    title: 'Accessibility',
                    subtitle: 'Screen reader OFF High-contrast colors OFF'
                },
                {
                    img: 'mdi-account-search-outline',
                    title: 'Search Settings',
                    subtitle: 'Settings like private results and safe search '
                }
            ],
            accordion3: [
                {
                    icon: 'mdi-briefcase-outline',
                    title: 'Business Personalization',
                    iconTwo: 'mdi-check-circle',
                    titleTwo: 'On',
                    iconColor: 'primary'
                },
                {
                    icon: 'mdi-warehouse',
                    title: 'Your business',
                    iconTwo: 'mdi-pause-circle',
                    titleTwo: 'Pause',
                    iconColor: 'dark'
                }
            ]
        }
    }
}
</script>
