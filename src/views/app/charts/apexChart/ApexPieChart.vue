<template>
    <v-row>
        <v-col cols="12" md="6" lg="4">
            <chart-card title="Simple Pie">
                <template slot="chart">
                    <div id="basicArea-chart">
                        <apexchart
                            type="pie"
                            width="100%"
                            :options="simplePie.chartOptions"
                            :series="simplePie.series"
                        />
                    </div>
                </template>
            </chart-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
            <chart-card title="Simple Donut">
                <template slot="chart">
                    <div id="basicArea-chart">
                        <apexchart
                            type="donut"
                            width="100%"
                            :options="simpleDonut.chartOptions"
                            :series="simpleDonut.series"
                        />
                    </div>
                </template>
            </chart-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
            <chart-card title="Monochrome Pie">
                <template slot="chart">
                    <div id="basicArea-chart">
                        <apexchart
                            type="pie"
                            width="100%"
                            :options="monochromePie.chartOptions"
                            :series="monochromePie.series"
                        />
                    </div>
                </template>
            </chart-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
            <chart-card title="Gradient Donut">
                <template slot="chart">
                    <div id="basicArea-chart">
                        <apexchart
                            type="donut"
                            width="100%"
                            :options="gradientDonut.chartOptions"
                            :series="gradientDonut.series"
                        />
                    </div>
                </template>
            </chart-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
            <chart-card title="Donut with Pattern">
                <template slot="chart">
                    <div id="basicArea-chart">
                        <apexchart
                            type="donut"
                            width="100%"
                            :options="donutwithPattern.chartOptions"
                            :series="donutwithPattern.series"
                        />
                    </div>
                </template>
            </chart-card>
        </v-col>
    </v-row>
</template>
<script>
import ChartCard from '@/components/card/ChartCard'
import {
    simplePie,
    simpleDonut,
    monochromePie,
    gradientDonut,
    donutwithPattern
} from '@/data/apexChart.js'

export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Apex- Pie/Donut Charts'
    },
    components: {
        ChartCard
    },
    data() {
        return {
            simplePie,
            simpleDonut,
            monochromePie,
            gradientDonut,
            donutwithPattern
        }
    }
}
</script>
