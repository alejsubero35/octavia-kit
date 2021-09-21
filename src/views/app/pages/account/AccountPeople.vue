<template>
    <div>
        <v-row justify="center">
            <v-col cols="10" md="10">
                <div class="text-center">
                    <h3 class="mb-4">People & sharing</h3>
                    <p>
                        People you interact with and the info you make visible
                        on UI Lib services
                    </p>
                </div>
            </v-col>

            <v-col cols="10" md="10">
                <e-info-card
                    title="Contacts"
                    sub-title="Organize your UI Lib contacts so you can connect with people on UI Lib services, like Gmail."
                    :image="imgOne"
                >
                    <template slot="basic-info-slot">
                        <v-expansion-panels class="my-4">
                            <v-expansion-panel
                                v-for="(item, i) in items"
                                :key="i"
                            >
                                <v-expansion-panel-header>
                                    <div class="d-flex flex-wrap align-center">
                                        <div
                                            style="flex: 1 1 0%;"
                                            class="d-flex align-center flex-wrap"
                                        >
                                            <v-img
                                                max-width="40"
                                                max-height="40"
                                                class=" mr-2"
                                                :src="item.icon"
                                                alt=""
                                            ></v-img>
                                            <p class="ma-0">{{ item.title }}</p>
                                        </div>
                                        <div class="" style="flex: 1 1 0%;">
                                            <v-icon
                                                class="mr-2"
                                                :color="item.iconColor"
                                                >{{ item.iconTwo }}</v-icon
                                            >{{ item.titleTwo }}
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
                    title="Location Sharing"
                    sub-title="You aren’t sharing your real-time location with anyone on UI Lib"
                    link="Manage location sharing"
                    :image="imgTwo"
                >
                </e-info-card>
            </v-col>
            <v-col cols="10" md="5">
                <e-info-card
                    title="Choose what Others see"
                    link="Manage What Others See"
                >
                    <template slot="basic-info-slot">
                        <div class="d-flex align-center">
                            <v-img
                                max-width="40"
                                max-height="40"
                                src="@/assets/images/svg/art-and-design.svg"
                                alt=""
                            ></v-img>
                            <div>
                                <p class="font-weight-medium mb-0">About me</p>
                                <p class="ma-0">
                                    What personal info you make visible to
                                    others across UI Lib services
                                </p>
                            </div>
                        </div>
                    </template>
                </e-info-card>
            </v-col>

            <v-col cols="10" md="10">
                <e-info-card
                    link="Manage shared endorsements"
                    title="Share recomandations in ads"
                    sub-title="You can choose to show your name, profile photo, and activity in shared endorsements in ads to help others find things you're interested in"
                >
                    <template slot="basic-info-slot">
                        <v-row>
                            <v-col cols="12" md="6">
                                <div class="d-flex">
                                    <v-img
                                        max-width="40"
                                        max-height="40"
                                        class=" mr-4"
                                        src="@/assets/images/svg/share.svg"
                                        alt=""
                                    ></v-img>
                                    <p class="font-weight-medium text-h5 mb-0">
                                        Shared endorsements in ads
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" md="6">
                                <div class="d-flex">
                                    <v-icon color="primary" class="mr-3">
                                        mdi-check-circle
                                    </v-icon>
                                    <p class="font-weight-medium mb-0">On</p>
                                </div>
                            </v-col>
                        </v-row>
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
        title: 'Account People'
    },
    components: {
        EInfoCard
    },
    data() {
        return {
            imgOne: require('@/assets/images/svg/contact.svg'),
            imgTwo: require('@/assets/images/svg/placeholder.svg'),
            items: [
                {
                    icon: require('@/assets/images/svg/add-contact.svg'),
                    title: 'Contacts',
                    titleTwo:
                        'No contacts yet, but some contact info saved for autocomplete suggestions'
                },

                {
                    icon: require('@/assets/images/svg/customer.svg'),
                    title: 'Contact info saved from interactions',
                    iconTwo: 'mdi-minus-circle',
                    titleTwo: 'Paused',
                    iconColor: 'secondary'
                },
                {
                    icon: require('@/assets/images/svg/mobile-banking.svg'),
                    title: 'Contact info from your devices',
                    iconTwo: 'mdi-check-circle',
                    titleTwo: 'On',
                    iconColor: 'primary'
                },

                {
                    icon: require('@/assets/images/svg/block.svg'),
                    title: 'Blocked',
                    iconTwo: '',
                    titleTwo: 'No Blocked User',
                    iconColor: ''
                }
            ]
        }
    }
}
</script>
