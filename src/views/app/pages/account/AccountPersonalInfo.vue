<template>
    <v-row justify="center">
        <v-col cols="10" md="10" class="text-center">
            <h3 class="mb-4">Personal info</h3>
            <p>
                Basic info, like your name and photo, that you use on UI Lib
                services
            </p>
        </v-col>

        <v-col cols="10" md="10">
            <e-info-card
                title="Profile"
                sub-title="Some info may be visible to other people using UI Lib services"
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
                                <div
                                    class="d-flex justify-space-between sm:align-center align-start"
                                >
                                    <div
                                        class="md:flex block justify-space-between sm:align-center align-start  flex-1"
                                    >
                                        <div
                                            class=" flex-grow-1"
                                            style="flex-basis:136px;"
                                        >
                                            <p
                                                class="text-uppercase caption ma-0 mb-3 mr-4"
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
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </template>
            </e-info-card>
        </v-col>
        <v-col cols="10" md="10">
            <e-info-card title="Contact info">
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
                                <div
                                    class="d-flex justify-space-between sm:align-center align-start"
                                >
                                    <div
                                        class="md:flex block justify-space-between sm:align-center align-start  flex-1"
                                    >
                                        <div
                                            class=" flex-grow-1"
                                            style="flex-basis:136px;"
                                        >
                                            <p
                                                class="text-uppercase caption ma-0 mb-3 mr-4"
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
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </template>
            </e-info-card>
        </v-col>
        <v-col cols="10" md="10">
            <e-info-card
                title="Choose what other see"
                sub-title="You decide what personal info you make visible to others across Google services"
                link="Go to About me"
                :image="imgOne"
            >
            </e-info-card>
        </v-col>
    </v-row>
</template>
<script>
import EInfoCard from '@/components/card/BasicInfoCard'
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Account Personal Info'
    },
    components: {
        EInfoCard
    },
    data() {
        return {
            imgOne: require('@/assets/images/svg/search.svg'),
            accordion: [
                {
                    title: 'photo',
                    subtitle: 'A photo helps personalize your account'
                },
                {
                    title: 'name',
                    subtitle: 'UI Lib'
                },
                {
                    title: 'birthday',
                    subtitle: 'March 18, 1990'
                },
                {
                    title: 'Gender',
                    subtitle: 'Male'
                },
                {
                    title: 'password',
                    subtitle: 'Last changed Sep 4, 2018'
                }
            ],
            accordion2: [
                {
                    title: 'email',
                    subtitle: 'ui-lib23@gmail.com'
                },
                {
                    title: 'phone',
                    subtitle: '+1-202-555-0108'
                }
            ]
        }
    }
}
</script>
