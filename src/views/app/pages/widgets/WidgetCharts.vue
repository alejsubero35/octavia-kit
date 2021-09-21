<template>
    <v-row>
        <v-col cols="12" md="12" lg="4">
            <base-card class="h-full">
                <v-card-title class="d-flex justify-space-between">
                    <div class="card-title">Author sales</div>
                    <v-menu offset-y>
                        <template v-slot:activator="{on}">
                            <v-btn icon v-on="on">
                                <v-icon color="primary"
                                    >mdi-dots-horizontal</v-icon
                                >
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item>
                                <v-list-item-title>Action</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title
                                    >Another Action</v-list-item-title
                                >
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Something</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-card-title>
                <v-card-text class="pb-0">
                    <div class="d-flex align-center">
                        <div>
                            <h4 class="mb-0 pr-3 font-weight-bold">$34M</h4>
                        </div>
                        <div id="chart">
                            <apexchart
                                type="bar"
                                height="150"
                                :options="widgetChart.chartOptions"
                                :series="widgetChart.series"
                            ></apexchart>
                        </div>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="12" lg="4">
            <base-card class="h-full">
                <v-card-title class="d-flex justify-space-between">
                    <div class="card-title">New Product</div>
                    <v-menu offset-y>
                        <template v-slot:activator="{on}">
                            <v-btn icon v-on="on">
                                <v-icon color="primary"
                                    >mdi-dots-horizontal</v-icon
                                >
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item>
                                <v-list-item-title>Action</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title
                                    >Another Action</v-list-item-title
                                >
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Something</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-card-title>
                <v-card-text class="pb-0">
                    <div class="d-flex align-center">
                        <div>
                            <h4 class="mb-0 pr-3 font-weight-bold">$6M</h4>
                        </div>
                        <div id="chart">
                            <apexchart
                                type="donut"
                                :options="widgetChart2.chartOptions"
                                :series="widgetChart2.series"
                            ></apexchart>
                        </div>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="12" lg="4">
            <base-card class="h-full">
                <v-card-title class="d-flex justify-space-between ">
                    <div class="card-title">New Product</div>
                    <v-menu offset-y>
                        <template v-slot:activator="{on}">
                            <v-btn icon v-on="on">
                                <v-icon color="primary"
                                    >mdi-dots-horizontal</v-icon
                                >
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item>
                                <v-list-item-title>Action</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title
                                    >Another Action</v-list-item-title
                                >
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Something</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-card-title>
                <v-card-text class="pb-0">
                    <div class="d-flex align-center">
                        <div>
                            <h4 class="mb-0 pr-3 font-weight-bold">$17M</h4>
                        </div>
                        <div id="chart">
                            <apexchart
                                type="area"
                                :options="widgetChart3.chartOptions"
                                :series="widgetChart3.series"
                            ></apexchart>
                        </div>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="4">
            <base-card>
                <v-card-title class="d-flex justify-space-between">
                    <div>
                        <div class="card-title mb-0">New Users</div>
                        <p class="text--disabled ma-0 body-1">34 Week</p>
                    </div>
                    <h5 class="font-weight-bold">+789</h5>
                </v-card-title>
                <v-card-text class="pa-0">
                    <div id="chart">
                        <apexchart
                            type="area"
                            height="50"
                            :options="widgetChart4.chartOptions"
                            :series="widgetChart4.series"
                        ></apexchart>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="4">
            <base-card>
                <v-card-title class="d-flex justify-space-between ">
                    <div>
                        <div class="card-title mb-0">Daily Orders</div>
                        <p class="text--disabled ma-0 body-1">12 Week</p>
                    </div>
                    <h5 class="font-weight-bold">3,400</h5>
                </v-card-title>
                <v-card-text class="pa-0">
                    <div id="chart">
                        <apexchart
                            type="area"
                            height="50"
                            :options="widgetChart5.chartOptions"
                            :series="widgetChart5.series"
                        ></apexchart>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="4">
            <base-card>
                <v-card-title class="d-flex justify-space-between ">
                    <div>
                        <div class="card-title mb-0">Revenue</div>
                        <p class="text--disabled ma-0 body-1">One Day</p>
                    </div>
                    <h5 class="font-weight-bold">95%</h5>
                </v-card-title>
                <v-card-text class="pa-0">
                    <div id="chart">
                        <apexchart
                            type="area"
                            height="50"
                            :options="widgetChart6.chartOptions"
                            :series="widgetChart6.series"
                        ></apexchart>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
            <base-card>
                <v-card-title class="d-flex justify-space-between">
                    <div class="card-title">Best Framework</div>
                    <v-menu offset-y>
                        <template v-slot:activator="{on}">
                            <v-btn icon v-on="on">
                                <v-icon color="primary"
                                    >mdi-dots-horizontal</v-icon
                                >
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item>
                                <v-list-item-title>Action</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title
                                    >Another Action</v-list-item-title
                                >
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Something</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-card-title>
                <v-card-text>
                    <v-tabs
                        v-model="tab"
                        background-color="primary"
                        centered
                        dark
                        icons-and-text
                    >
                        <v-tabs-slider></v-tabs-slider>

                        <v-tab href="#tab-1">
                            Settings
                            <v-icon>mdi-cog</v-icon>
                        </v-tab>

                        <v-tab href="#tab-2">
                            Code
                            <v-icon>mdi-code-tags</v-icon>
                        </v-tab>

                        <v-tab href="#tab-3">
                            Design
                            <v-icon>mdi-format-paint</v-icon>
                        </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tab">
                        <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
                            <v-card flat>
                                <v-card-text class="mt-4">
                                    <div
                                        v-for="(item, index) in tabItems"
                                        :key="index"
                                        class="d-flex justify-space-between align-center mb-4"
                                    >
                                        <div>
                                            <p class="ma-0 font-weight-bold">
                                                {{ item.title }}
                                            </p>
                                            <p class="text--disabled ma-0 ">
                                                {{ item.subTitle }}
                                            </p>
                                        </div>
                                        <div class="flex-basis-125">
                                            <span style="float:right"
                                                >{{ item.percent }}%</span
                                            >
                                            <v-progress-linear
                                                rounded
                                                :color="item.progressColor"
                                                class=""
                                                :value="item.percent"
                                            ></v-progress-linear>
                                        </div>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6" lg="8">
            <base-card class="h-full">
                <v-card-title class="d-flex justify-space-between">
                    <div class="card-title">Statistics</div>
                    <v-menu offset-y>
                        <template v-slot:activator="{on}">
                            <v-btn icon v-on="on">
                                <v-icon color="primary"
                                    >mdi-dots-horizontal</v-icon
                                >
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item>
                                <v-list-item-title>Action</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title
                                    >Another Action</v-list-item-title
                                >
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Something</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-card-title>
                <v-card-text>
                    <div id="chart">
                        <apexchart
                            type="bar"
                            height="413"
                            :options="widgetChart7.chartOptions"
                            :series="widgetChart7.series"
                        ></apexchart>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6" lg="8">
            <base-card>
                <v-card-title class="d-flex justify-space-between">
                    <div>
                        <div class="card-title mb-0">Revenue</div>
                    </div>
                    <v-menu offset-y>
                        <template v-slot:activator="{on}">
                            <v-btn icon v-on="on">
                                <v-icon color="primary"
                                    >mdi-dots-horizontal</v-icon
                                >
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item>
                                <v-list-item-title>Action</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title
                                    >Another Action</v-list-item-title
                                >
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Something</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-card-title>
                <v-card-text>
                    <div id="chart">
                        <apexchart
                            type="area"
                            height="350"
                            :options="widgetChart8.chartOptions"
                            :series="widgetChart8.series"
                        ></apexchart>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
            <base-card class="h-full">
                <v-card-title class="d-flex justify-space-between">
                    <div>
                        <div class="card-title mb-0">Best Framework</div>
                    </div>
                    <v-menu offset-y>
                        <template v-slot:activator="{on}">
                            <v-btn icon v-on="on">
                                <v-icon color="primary"
                                    >mdi-dots-horizontal</v-icon
                                >
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item>
                                <v-list-item-title>Action</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title
                                    >Another Action</v-list-item-title
                                >
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Something</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-card-title>
                <v-card-text>
                    <div class="d-flex justify-space-between align-center mb-4">
                        <div>
                            <p class="ma-0 font-weight-bold">
                                Addidas Template
                            </p>
                            <p class="text--disabled ma-0 ">Landing Page</p>
                        </div>
                        <div class="flex-basis-125">
                            <div class="d-flex align-center">
                                <div id="chart" class="mr-2">
                                    <apexchart
                                        type="line"
                                        height="30"
                                        :options="widgetChart9.chartOptions"
                                        :series="widgetChart9.series"
                                    ></apexchart>
                                </div>
                                <div class="text-center">
                                    <p class="ma-0">4.3k</p>
                                    <v-chip
                                        x-small
                                        class=""
                                        label
                                        color="primary"
                                    >
                                        + 240
                                    </v-chip>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-space-between align-center mb-4">
                        <div>
                            <p class="ma-0 font-weight-bold">
                                React.js Template
                            </p>
                            <p class="text--disabled ma-0 ">Frontend</p>
                        </div>
                        <div class="flex-basis-125">
                            <div class="d-flex align-center">
                                <div id="chart" class="mr-2">
                                    <apexchart
                                        type="line"
                                        height="30"
                                        :options="widgetChart10.chartOptions"
                                        :series="widgetChart10.series"
                                    ></apexchart>
                                </div>
                                <div class="text-center">
                                    <p class="ma-0">4.3k</p>
                                    <v-chip
                                        x-small
                                        class=""
                                        label
                                        dark
                                        color="danger"
                                    >
                                        + 240
                                    </v-chip>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-space-between align-center mb-4">
                        <div>
                            <p class="ma-0 font-weight-bold">Vue.js Template</p>
                            <p class="text--disabled ma-0 ">Admin Dashboard</p>
                        </div>
                        <div class="flex-basis-125">
                            <div class="d-flex align-center">
                                <div id="chart" class="mr-2">
                                    <apexchart
                                        type="line"
                                        height="30"
                                        :options="widgetChart11.chartOptions"
                                        :series="widgetChart11.series"
                                    ></apexchart>
                                </div>
                                <div class="text-center">
                                    <p class="ma-0">7.3k</p>
                                    <v-chip
                                        x-small
                                        class=""
                                        dark
                                        label
                                        color="orange"
                                    >
                                        + 240
                                    </v-chip>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-space-between align-center mb-4">
                        <div>
                            <p class="ma-0 font-weight-bold">
                                Angular Template
                            </p>
                            <p class="text--disabled ma-0 ">SPA</p>
                        </div>
                        <div class="flex-basis-125">
                            <div class="d-flex align-center">
                                <div id="chart" class="mr-2">
                                    <apexchart
                                        type="line"
                                        height="30"
                                        :options="widgetChart12.chartOptions"
                                        :series="widgetChart12.series"
                                    ></apexchart>
                                </div>
                                <div class="text-center">
                                    <p class="ma-0">17.3k</p>
                                    <v-chip
                                        x-small
                                        class=""
                                        dark
                                        label
                                        color="success"
                                    >
                                        + 240
                                    </v-chip>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-space-between align-center mb-4">
                        <div>
                            <p class="ma-0 font-weight-bold">Ember Template</p>
                            <p class="text--disabled ma-0 ">Landing Page</p>
                        </div>
                        <div class="flex-basis-125">
                            <div class="d-flex align-center">
                                <div id="chart" class="mr-2">
                                    <apexchart
                                        type="line"
                                        height="30"
                                        :options="widgetChart13.chartOptions"
                                        :series="widgetChart13.series"
                                    ></apexchart>
                                </div>
                                <div class="text-center">
                                    <p class="ma-0">17.3k</p>
                                    <v-chip
                                        x-small
                                        class=""
                                        dark
                                        label
                                        color="info"
                                    >
                                        + 240
                                    </v-chip>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="8">
            <base-card>
                <v-card-title class="d-flex justify-space-between"></v-card-title>
                    <div class="card-title">Statistics</div>
                    <v-menu offset-y>
                        <template v-slot:activator="{on}">
                            <v-btn icon v-on="on">
                                <v-icon color="primary"
                                    >mdi-dots-horizontal</v-icon
                                >
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item>
                                <v-list-item-title>Action</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title
                                    >Another Action</v-list-item-title
                                >
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Something</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-card-title>
                <v-card-text>
                    <v-row align="center">
                        <v-col cols="12" md="3">
                            <div class="d-flex">
                                <div class="mr-2">
                                    <p class="caption ma-0 ">Sales</p>
                                    <p class="body-2 ma-0 ">+23%</p>
                                </div>
                                <div class="flex-basis-50 mt-1">
                                    <div id="chart" class="">
                                        <apexchart
                                            type="line"
                                            height="30"
                                            :options="widgetChart9.chartOptions"
                                            :series="widgetChart9.series"
                                        ></apexchart>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="3">
                            <div class="d-flex">
                                <div class="mr-2">
                                    <p class="caption ma-0 ">Sales</p>
                                    <p class="body-2 ma-0 ">+23%</p>
                                </div>
                                <div class="flex-basis-50 mt-1">
                                    <div id="chart" class="">
                                        <apexchart
                                            type="line"
                                            height="30"
                                            :options="
                                                widgetChart10.chartOptions
                                            "
                                            :series="widgetChart10.series"
                                        ></apexchart>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="3">
                            <div class="d-flex">
                                <div class="mr-2">
                                    <p class="caption ma-0 ">Sales</p>
                                    <p class="body-2 ma-0 ">+23%</p>
                                </div>
                                <div class="flex-basis-50 mt-1">
                                    <div id="chart" class="">
                                        <apexchart
                                            type="line"
                                            height="30"
                                            :options="
                                                widgetChart11.chartOptions
                                            "
                                            :series="widgetChart10.series"
                                        ></apexchart>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="3">
                            <div class="d-flex">
                                <div class="mr-2">
                                    <p class="caption ma-0 ">Sales</p>
                                    <p class="body-2 ma-0 ">+23%</p>
                                </div>
                                <div class="flex-basis-50 mt-1">
                                    <div id="chart" class="">
                                        <apexchart
                                            type="line"
                                            height="30"
                                            :options="
                                                widgetChart12.chartOptions
                                            "
                                            :series="widgetChart10.series"
                                        ></apexchart>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <div class="mt-5">
                        <div id="chart">
                            <apexchart
                                type="area"
                                height="350"
                                :options="widgetChart14.chartOptions"
                                :series="widgetChart14.series"
                            ></apexchart>
                        </div>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
import {
    widgetChart,
    widgetChart2,
    widgetChart3,
    widgetChart4,
    widgetChart5,
    widgetChart6,
    widgetChart7,
    widgetChart8,
    widgetChart9,
    widgetChart10,
    widgetChart11,
    widgetChart12,
    widgetChart13,
    widgetChart14
} from '@/data/widgetChart'
export default {
    name: 'Charts',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Charts'
    },

    data() {
        return {
            widgetChart,
            widgetChart2,
            widgetChart3,
            widgetChart4,
            widgetChart5,
            widgetChart6,
            widgetChart7,
            widgetChart8,
            widgetChart9,
            widgetChart10,
            widgetChart11,
            widgetChart12,
            widgetChart13,
            widgetChart14,
            tab: null,
            tabItems: [
                {
                    title: 'Addidas Template',
                    subTitle: 'Landing Page',
                    percent: 80,
                    progressColor: 'primary'
                },
                {
                    title: 'Agency Template',
                    subTitle: 'Single Page',
                    percent: 50,
                    progressColor: 'danger'
                },
                {
                    title: 'Vuej.s Template',
                    subTitle: 'SPA',
                    percent: 20,
                    progressColor: 'orange'
                },
                {
                    title: 'Medical Template',
                    subTitle: 'SPA',
                    percent: 90,
                    progressColor: 'green'
                },
                {
                    title: 'Reaact.js Template',
                    subTitle: 'Admin Dashboard',
                    percent: 70,
                    progressColor: 'purple'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.flex-basis-125 {
    flex-basis: 125px !important;
}
.flex-basis-50 {
    flex-basis: 50px !important;
}
</style>
