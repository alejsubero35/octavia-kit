<template>
    <div>
        <v-row justify="center">
            <v-col cols="10" md="10" class="text-center">
                <h3 class="mb-4">Security</h3>
                <p>
                    Settings and recommendations to help you keep your account
                    secure
                </p>
            </v-col>
            <v-col cols="10" md="10">
                <e-info-card
                    title="Critical security issues found"
                    sub-title="Protect your account now by resolving these issues"
                    link="Take action"
                    :image="imgOne"
                />
            </v-col>

            <v-col cols="10" md="10">
                <e-info-card
                    title="Contacts"
                    sub-title="Organize your UI Lib contacts so you can connect with people on UI Lib services, like Gmail."
                    :image="imgTwo"
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
                                            class="d-flex  align-center flex-wrap"
                                            style="flex: 1 1 0%;"
                                        >
                                            <p class="ma-0">{{ item.title }}</p>
                                        </div>
                                        <div class="flex-1">
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
            <v-col cols="10" md="10">
                <e-info-card
                    title="Ways we can verify it's you"
                    sub-title="These can be used to make sure it's really you signing in or to reach you if there's suspicious activity in your account."
                    :image="imgThree"
                >
                    <template slot="basic-info-slot">
                        <v-expansion-panels class="my-4">
                            <v-expansion-panel
                                v-for="(item, i) in items2"
                                :key="i"
                            >
                                <v-expansion-panel-header>
                                    <div class="d-flex flex-wrap align-center">
                                        <div
                                            class="d-flex flex-1 align-center flex-wrap"
                                        >
                                            <p class="ma-0">{{ item.title }}</p>
                                        </div>
                                        <div class="flex-1">
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
            <v-col cols="10" md="10">
                <e-info-card
                    title="Recent security activity"
                    sub-title="No activity in the last 28 days.
          You'll be notified if unusual security activity is detected, like a sign-in from a new device or if a sensitive setting is changed in your account."
                >
                </e-info-card>
            </v-col>
            <v-col cols="10" md="5">
                <e-info-card
                    title="Your devices"
                    sub-title="You’re currently signed in to your Google Account on these devices"
                    link="Manage devices"
                >
                    <template slot="basic-info-slot">
                        <div class="d-flex align-center mb-4">
                            <div class="mr-4">
                                <v-img
                                    max-width="40"
                                    max-height="40"
                                    class=""
                                    src="@/assets/images/svg/brands-and-logotypes.svg"
                                    alt=""
                                ></v-img>
                            </div>
                            <div>
                                <p class="mb-1 font-weight-medium">Windows</p>
                                <v-icon color="primary" class="body-1"
                                    >mdi-check-circle</v-icon
                                >Devices
                            </div>
                        </div>
                        <div class="d-flex align-center mb-4">
                            <div class="mr-4">
                                <v-img
                                    max-width="40"
                                    max-height="40"
                                    src="@/assets/images/svg/brands-and-logotypes.svg"
                                    alt=""
                                ></v-img>
                            </div>
                            <div>
                                <p class="mb-1 font-weight-medium">Windows</p>
                                11:29 AM
                            </div>
                        </div>
                        <v-chip class="ma-2" color="indigo" outlined>
                            <v-avatar left>
                                <v-icon>mdi-radar</v-icon>
                            </v-avatar>
                            Find a lost device
                        </v-chip>
                    </template>
                </e-info-card>
            </v-col>
            <v-col cols="10" md="5">
                <e-info-card
                    title="Third-party apps with account access"
                    sub-title="You gave these sites and apps access to some of your Google Account data, including info that may be sensitive. Remove access for those you no longer trust or use."
                    link="Manage third-party access"
                >
                    <template slot="basic-info-slot">
                        <div class="d-flex align-center">
                            <div class="mr-4">
                                <v-img
                                    max-width="40"
                                    max-height="40"
                                    src="@/assets/images/svg/wrench.svg"
                                    alt=""
                                ></v-img>
                            </div>
                            <div>
                                <p class="font-weight-medium mb-0">
                                    Fiverr: The Marketplace for Creative &
                                    Professional Services
                                </p>
                                <p class="text--disabled">
                                    Has some account access
                                </p>
                            </div>
                        </div>
                    </template>
                </e-info-card>
            </v-col>

            <v-col cols="10" md="10">
                <e-info-card
                    title="Less secure app access"
                    sub-title="To protect your account, apps and devices that use less secure sign-in technology are blocked. To keep your account secure, Google will automatically turn this setting OFF if it’s not being used."
                    link="Turn on access (not recomended)"
                >
                    <template slot="basic-info-slot">
                        <v-icon color="secondary" class="mr-2"
                            >mdi-minus-circle</v-icon
                        >Off
                    </template>
                </e-info-card>
            </v-col>
            <v-col cols="10" md="10">
                <e-info-card title="Signing in to other sites">
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
                                    <div
                                        class="d-flex justify-space-between sm:align-center align-start"
                                    >
                                        <div class="ma-0">
                                            <v-img
                                                max-width="40"
                                                max-height="40"
                                                class=" mr-2"
                                                :src="item.img"
                                            ></v-img>
                                        </div>

                                        <div
                                            class="md:flex block justify-space-between sm:align-center align-start  flex-1"
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
                                <v-expansion-panel-content
                                    class=" font-weight-medium"
                                >
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
        title: 'Account Security'
    },
    components: {
        EInfoCard
    },
    data() {
        return {
            imgOne: require('@/assets/images/svg/ui.svg'),
            imgTwo: require('@/assets/images/svg/log-in.svg'),
            imgThree: require('@/assets/images/svg/contact.svg'),
            items: [
                {
                    title: 'Password',
                    titleTwo: 'Last changed Sep 4, 2018'
                },

                {
                    title: 'Use your phone to sign in',
                    iconTwo: 'mdi-minus-circle',
                    titleTwo: 'Paused',
                    iconColor: 'secondary'
                },
                {
                    title: '2-Step verification',
                    iconTwo: 'mdi-check-circle',
                    titleTwo: 'On',
                    iconColor: 'primary'
                }
            ],
            items2: [
                {
                    title: 'Recovery phone',
                    titleTwo: '+990 3533 990 89'
                },

                {
                    title: 'Recovery email',

                    titleTwo: 'ui-lib@gmail.com'
                }
            ],
            accordion: [
                {
                    img: require('@/assets/images/svg/google-logo.svg'),
                    title: 'Signing in with Google',
                    subtitle:
                        'You use your Google Account to sign in to 22 sites and apps'
                },
                {
                    img: require('@/assets/images/svg/password-manager.svg'),
                    title: 'Password Manager',
                    subtitle:
                        'You have 54 passwords saved in your Google Account. Password Manager makes it easier to sign in to sites and apps you use on any signed-in device.'
                },
                {
                    img: require('@/assets/images/svg/link.svg'),
                    title: 'Linked Accounts',
                    subtitle:
                        'You have no linked accounts. You can give Google access to data from your third-party sites and apps, like your playlists.'
                }
            ]
        }
    }
}
</script>
