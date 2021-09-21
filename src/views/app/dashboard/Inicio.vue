<template>
    <v-row>
        <v-col cols="12" md="12" lg="8">
            <v-row>
                <v-col cols="12">
                    <base-card class="px-4 pt-4">
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-card-title class="pb-0 mb-2"
                                    >Welcome Back! Watson</v-card-title
                                >
                                <v-card-text class="pb-0">
                                    <p class="body-2">
                                        You have completed
                                        <span class="font-weight-bold"
                                            >70%</span
                                        >
                                        of your goal this week! Start a new goal
                                        and improve your result.
                                    </p>
                                </v-card-text>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-card-text class="pa-0">
                                    <apexchart
                                        type="radialBar"
                                        :options="
                                            welcomeProgressChart.chartOptions
                                        "
                                        :series="welcomeProgressChart.series"
                                        height="250"
                                    />
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </base-card>
                </v-col>
                <v-col cols="12" md="6">
                    <base-card>
                        <v-card-title>Results</v-card-title>
                        <v-card-text>
                            <div
                                class="d-flex justify-space-between align-baseline"
                            >
                                <div class="mr-2">
                                    <v-icon
                                        class="caption orange--text text--darken-1"
                                        >mdi-checkbox-blank-circle</v-icon
                                    >
                                </div>
                                <div class="lm-title flex-grow-1">
                                    <p class="font-weight-medium mb-0">React</p>
                                    <p class="caption">20 March</p>
                                </div>

                                <div class="flex-grow-1">
                                    <p
                                        class="caption font-weight-medium ma-0 text-right"
                                    >
                                        40%
                                    </p>
                                    <v-progress-linear
                                        v-model="valueDeterminate"
                                        rounded
                                        color="orange darken-1"
                                    />
                                </div>
                            </div>
                            <div
                                class="d-flex justify-space-between align-baseline"
                            >
                                <div class="mr-2">
                                    <v-icon
                                        class="caption blue--text text--darken-1"
                                        >mdi-checkbox-blank-circle</v-icon
                                    >
                                </div>
                                <div class="lm-title flex-grow-1">
                                    <p class="font-weight-medium mb-0">
                                        Angular
                                    </p>
                                    <p class="caption">10 March</p>
                                </div>

                                <div class="flex-grow-1">
                                    <p
                                        class="caption font-weight-medium ma-0 text-right"
                                    >
                                        80%
                                    </p>
                                    <v-progress-linear
                                        v-model="valueDeterminate2"
                                        rounded
                                        color="blue darken-1"
                                    />
                                </div>
                            </div>
                            <div
                                class="d-flex justify-space-between align-baseline"
                            >
                                <div class="mr-2">
                                    <v-icon
                                        class="caption blue--text text--darken-1"
                                        >mdi-checkbox-blank-circle</v-icon
                                    >
                                </div>
                                <div class="lm-title flex-grow-1">
                                    <p class="font-weight-medium mb-0">React</p>
                                    <p class="caption">20 March</p>
                                </div>

                                <div class="flex-grow-1">
                                    <p
                                        class="caption font-weight-medium ma-0 text-right"
                                    >
                                        40%
                                    </p>
                                    <v-progress-linear
                                        v-model="valueDeterminate"
                                        rounded
                                        color="blue darken-1"
                                    />
                                </div>
                            </div>
                            <div
                                class="d-flex justify-space-between align-baseline"
                            >
                                <div class="mr-2">
                                    <v-icon
                                        class="caption orange--text text--darken-1"
                                        >mdi-checkbox-blank-circle</v-icon
                                    >
                                </div>
                                <div class="lm-title flex-grow-1">
                                    <p class="font-weight-medium mb-0">Vue</p>
                                    <p class="caption">10 March</p>
                                </div>

                                <div class="flex-grow-1">
                                    <p
                                        class="caption font-weight-medium ma-0 text-right"
                                    >
                                        80%
                                    </p>
                                    <v-progress-linear
                                        v-model="valueDeterminate2"
                                        rounded
                                        color="purple accent-4"
                                    />
                                </div>
                            </div>
                            <div
                                class="d-flex justify-space-between align-baseline"
                            >
                                <div class="mr-2">
                                    <v-icon class="caption red--text"
                                        >mdi-checkbox-blank-circle</v-icon
                                    >
                                </div>

                                <div class="lm-title flex-grow-1">
                                    <p class="font-weight-medium mb-0">HTML</p>
                                    <p class="caption">06 March</p>
                                </div>

                                <div class="flex-grow-1">
                                    <p
                                        class="caption font-weight-medium ma-0 text-right"
                                    >
                                        80%
                                    </p>
                                    <v-progress-linear
                                        v-model="valueDeterminate2"
                                        rounded
                                        color="red accent-4"
                                    />
                                </div>
                            </div>
                            <div
                                class="d-flex justify-space-between align-baseline"
                            >
                                <div class="mr-2">
                                    <v-icon
                                        class="caption blue--text text--darken-1"
                                        >mdi-checkbox-blank-circle</v-icon
                                    >
                                </div>
                                <div class="lm-title flex-grow-1">
                                    <p class="font-weight-medium mb-0">CSS</p>
                                    <p class="caption">20 March</p>
                                </div>

                                <div class="flex-grow-1">
                                    <p
                                        class="caption font-weight-medium ma-0 text-right"
                                    >
                                        40%
                                    </p>
                                    <v-progress-linear
                                        v-model="valueDeterminate"
                                        rounded
                                        color="blue darken-1"
                                    />
                                </div>
                            </div>
                        </v-card-text>
                    </base-card>
                </v-col>
                <v-col cols="12" md="6">
                    <base-card>
                        <v-card-title>Study Time Last Week</v-card-title>
                        <v-card-text>
                            <apexchart
                                type="bar"
                                height="340"
                                :options="studyChart.chartOptions"
                                :series="studyChart.series"
                            />
                        </v-card-text>
                    </base-card>
                </v-col>
                <v-col cols="12" md="6">
                    <lm-card
                        card-color="primary darken-1"
                        badge-color="primary lighten-1"
                        badge-text="V"
                        badge-text-color="white--text"
                        text="You watched today"
                        caption="Vue tutorial"
                        btn-icon="mdi-play"
                        btn-color="primary darken-1"
                    />
                </v-col>
                <v-col cols="12" md="6">
                    <lm-card
                        card-color="danger darken-1"
                        badge-color="danger lighten-1"
                        badge-text="P"
                        badge-text-color="white--text"
                        text="You watched today"
                        caption="Python tutorial"
                        btn-icon="mdi-play"
                        btn-color="danger darken-1"
                    />
                </v-col>
                <v-col cols="12">
                    <base-card>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Icon</th>
                                        <th class="text-left">Started</th>
                                        <th class="text-left">Course</th>
                                        <th class="text-left">Progress</th>
                                        <th class="text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="item in desserts"
                                        :key="item.name"
                                    >
                                        <td>
                                            <v-img
                                                height="35"
                                                width="35"
                                                class=" h-10 object-cover"
                                                :src="item.logo"
                                                alt
                                            />
                                        </td>
                                        <td class="text-no-wrap">
                                            {{ item.started }}
                                        </td>
                                        <td
                                            class="font-weight-medium text--disabled text-no-wrap"
                                        >
                                            {{ item.course }}
                                        </td>
                                        <td>
                                            <v-progress-linear
                                                v-model="item.progress"
                                                rounded
                                                color="blue darken-1"
                                            />
                                        </td>
                                        <td>
                                            <v-btn
                                                class="mx-2 shadow-none orange darken-1"
                                                fab
                                                dark
                                                x-small
                                            >
                                                <v-icon>mdi-play</v-icon>
                                            </v-btn>
                                        </td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </base-card>
                </v-col>
            </v-row>
        </v-col>

        <v-col cols="12" md="12" lg="4" class="mt-3">
            <base-card>
                <v-card-text class>
                    <v-sheet
                        color="grey lighten-4"
                        class="text-center mb-6 pa-4 rounded-lg"
                    >
                        <v-img
                            class="mx-auto"
                            max-width="50"
                            min-width="50"
                            src="@/assets/images/illustrations/upgrade.svg"
                        />
                        <p class="ma-0 pt-4 pb-4 font-weight-regular">
                            Upgrade to
                            <b>PRO</b> for <br />more resources
                        </p>
                        <div class>
                            <v-btn
                                depressed
                                class="primary primary--text lighten-5"
                                >UPGRADE NOW</v-btn
                            >
                        </div>
                    </v-sheet>

                    <div class="mb-10">
                        <h6 class="caption text--disabled tracking-widest">
                            ACHIEVEMENTS
                        </h6>
                        <div class="d-flex align-center">
                            <v-tooltip top>
                                <template v-slot:activator="{on, attrs}">
                                    <v-avatar
                                        width="30"
                                        min-width="30"
                                        height="30"
                                    >
                                        <img
                                            v-bind="attrs"
                                            width="30"
                                            height="30"
                                            src="@/assets/images/illustrations/badge-1.svg"
                                            v-on="on"
                                        />
                                    </v-avatar>
                                </template>
                                <span>Completed First Course</span>
                            </v-tooltip>
                            <v-tooltip top>
                                <template v-slot:activator="{on, attrs}">
                                    <v-avatar
                                        width="30"
                                        min-width="30"
                                        height="30"
                                    >
                                        <v-img
                                            v-bind="attrs"
                                            width="30"
                                            height="30"
                                            src="@/assets/images/illustrations/badge-2.svg"
                                            v-on="on"
                                        />
                                    </v-avatar>
                                </template>
                                <span>Won a challenge</span>
                            </v-tooltip>
                            <v-tooltip top>
                                <template v-slot:activator="{on, attrs}">
                                    <v-avatar
                                        width="30"
                                        min-width="30"
                                        height="30"
                                    >
                                        <img
                                            v-bind="attrs"
                                            width="30"
                                            height="30"
                                            src="@/assets/images/illustrations/badge-3.svg"
                                            v-on="on"
                                        />
                                    </v-avatar>
                                </template>
                                <span>Won a competition</span>
                            </v-tooltip>
                        </div>
                    </div>

                    <div class="mb-10">
                        <h6 class="caption text--disabled tracking-widest">
                            ACHIEVEMENTS
                        </h6>

                        <v-list-item
                            class="pa-0"
                            v-for="item in items"
                            :key="item.title"
                        >
                            <v-list-item-avatar>
                                <v-icon
                                    :class="[item.iconClass]"
                                    v-text="item.icon"
                                />
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title
                                    class="body-2 font-weight-medium"
                                    v-text="item.title"
                                />
                                <v-list-item-subtitle v-text="item.subtitle" />
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-btn icon>
                                    <v-icon
                                        color="text-gray-700 blue-grey--text text--darken-1"
                                        >mdi-dots-horizontal</v-icon
                                    >
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </div>
                    <div class="mb-10">
                        <h6 class="caption text--disabled tracking-widest">
                            UPCOMING CHALLENGES
                        </h6>

                        <v-list-item
                            class="pa-0"
                            v-for="item in itemsTwo"
                            :key="item.title"
                        >
                            <v-list-item-avatar>
                                <v-icon
                                    :class="[item.iconClass]"
                                    v-text="item.icon"
                                />
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title
                                    class="body-2 font-weight-medium"
                                    v-text="item.title"
                                />
                                <v-list-item-subtitle v-text="item.subtitle" />
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-btn icon>
                                    <v-icon color="text-gray-700"
                                        >mdi-dots-horizontal</v-icon
                                    >
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
import lmCard from '@/components/card/LmsCard'
import {welcomeProgressChart, studyChart} from '@/data/learningManagement'
export default {
    name: 'LearningManagement',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Learning Management'
    },
    components: {
        lmCard
    },
    data() {
        return {
            welcomeProgressChart,
            studyChart,
            valueDeterminate: 50,
            valueDeterminate2: 80,
            desserts: [
                {
                    logo: require('@/assets/images/Angular_Icon.png'),
                    started: '20 May, 2020',
                    course: 'Angular Beyond The Basics',
                    progress: 50
                },
                {
                    logo: require('@/assets/images/react.png'),
                    started: '20 May, 2020',
                    course: 'React Development Course',
                    progress: 30
                },
                {
                    logo: require('@/assets/images/webpack.png'),
                    started: '20 May, 2020',
                    course: 'Webpack For Busy Developer',
                    progress: 50
                },
                {
                    logo: require('@/assets/images/Sass_icon.png'),
                    started: '20 May, 2020',
                    course: 'Bootstrap For Everyone',
                    progress: 70
                },
                {
                    logo: require('@/assets/images/bootstrap-logo.png'),
                    started: '20 May, 2020',
                    course: 'React Development Course',
                    progress: 20
                }
            ],
            items: [
                {
                    icon: 'mdi-view-column',
                    iconClass: 'dark--text text--lighten-4 grey lighten-4',
                    title: 'Data structure test',
                    subtitle: '23 Dec 2020'
                },
                {
                    icon: 'mdi-book-open-variant',
                    iconClass: 'dark--text text--lighten-4 grey lighten-4',
                    title: 'Design Pattern Test',
                    subtitle: '23 Dec 2020'
                },
                {
                    icon: 'mdi-gamepad',
                    iconClass: 'dark--text text--lighten-4 grey lighten-4',
                    title: 'Algorithm Test',
                    subtitle: '23 Dec 2020'
                },
                {
                    icon: 'mdi-calendar-text',
                    iconClass: 'dark--text text--lighten-4 grey lighten-4',
                    title: 'Spanish 201',
                    subtitle: '23 Dec 2020'
                }
            ],
            itemsTwo: [
                {
                    icon: 'mdi-web',
                    iconClass: 'dark--text text--lighten-4 grey lighten-4',
                    title: 'Create Simple Wrbsite',
                    subtitle: '23 Dec 2020'
                },
                {
                    icon: 'mdi-view-list-outline',
                    iconClass: 'dark--text text--lighten-4 grey lighten-4',
                    title: 'Simple Todo App',
                    subtitle: '23 Dec 2020'
                },
                {
                    icon: 'mdi-apps-box',
                    iconClass: 'dark--text text--lighten-4 grey lighten-4',
                    title: 'Invoice App',
                    subtitle: '23 Dec 2020'
                },
                {
                    icon: 'mdi-order-bool-ascending-variant',
                    iconClass: 'dark--text text--lighten-4 grey lighten-4',
                    title: 'Order management app',
                    subtitle: '23 Dec 2020'
                }
            ]
        }
    }
}
</script>
