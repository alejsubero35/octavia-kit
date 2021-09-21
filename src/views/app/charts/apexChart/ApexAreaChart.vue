<template>
    <div>
        <v-row>
            <v-col cols="12" md="6" lg="6">
                <chart-card title="Basic Area chart">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="area"
                                height="350"
                                :options="basicArea.chartOptions"
                                :series="basicArea.chartOptions.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6" lg="6">
                <chart-card title="Spline Area">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="area"
                                height="350"
                                :options="splineArea.chartOptions"
                                :series="splineArea.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6" lg="6">
                <chart-card title="Datetime X-Axis">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="area"
                                height="350"
                                :options="dateTimeXaxis.chartOptions"
                                :series="dateTimeXaxis.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6" lg="6">
                <chart-card title="Area with Negative Values">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="area"
                                height="350"
                                width="100%"
                                :options="negativeArea.chartOptions"
                                :series="negativeArea.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6" lg="6">
                <chart-card title="Stacked Area">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="area"
                                height="350"
                                :options="stackedArea.chartOptions"
                                :series="stackedArea.chartOptions.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6" lg="6">
                <chart-card title="Missing / Null values Area Chart">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="area"
                                height="350"
                                :options="nullAreaChart.chartOptions"
                                :series="nullAreaChart.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import ChartCard from '@/components/card/ChartCard'
import {
    apexDemo,
    basicArea,
    splineArea,
    dateTimeXaxis,
    negativeArea,
    stackedArea,
    nullAreaChart
} from '@/data/apexChart'

export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Apex- Area Charts'
    },

    components: {
        ChartCard
    },
    data() {
        return {
            apexDemo,
            basicArea,
            splineArea,
            dateTimeXaxis,
            negativeArea,
            stackedArea,
            nullAreaChart
        }
    },
    methods: {}
}
</script>
