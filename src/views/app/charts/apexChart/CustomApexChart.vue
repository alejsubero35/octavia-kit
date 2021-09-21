<template>
    <div>
        <v-row>
            <v-col cols="12" md="6" lg="6">
                <chart-card title="Data Science" buttonText="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="area"
                                height="350"
                                :options="customChartOne.chartOptions"
                                :series="customChartOne.chartOptions.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6" lg="6">
                <chart-card title="Data Science" buttonText="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="area"
                                height="350"
                                :options="customChartTwo.chartOptions"
                                :series="customChartTwo.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6">
                <chart-card title="Last Updates" button-text="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="bar"
                                height="350"
                                :options="customChartThree.chartOptions"
                                :series="customChartThree.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6">
                <chart-card title="Last Updates" button-text="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="bar"
                                height="350"
                                :options="customChartFour.chartOptions"
                                :series="customChartFour.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6">
                <chart-card title="Last Updates" button-text="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="radialBar"
                                height="350"
                                :options="customChartFive.chartOptions"
                                :series="customChartFive.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6">
                <chart-card title="Last Updates" button-text="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="bar"
                                height="350"
                                :options="customChartSix.chartOptions"
                                :series="customChartSix.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6">
                <chart-card title="Last Updates" button-text="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="line"
                                height="350"
                                :options="customChartSeven.chartOptions"
                                :series="customChartSeven.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6">
                <chart-card title="Last Updates" button-text="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="area"
                                height="350"
                                :options="customChartEight.chartOptions"
                                :series="customChartEight.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6">
                <chart-card title="Last Updates" button-text="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="bar"
                                height="350"
                                :options="customChartNine.chartOptions"
                                :series="customChartNine.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6">
                <chart-card title="Last Updates" button-text="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="bar"
                                height="350"
                                :options="customChartTen.chartOptions"
                                :series="customChartTen.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6">
                <chart-card title="Graph" buttonText="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="bar"
                                height="350"
                                :options="customChartEleven.chartOptions"
                                :series="customChartEleven.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6">
                <chart-card title="Data Science" buttonText="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="line"
                                height="350"
                                :options="customChartTwelve.chartOptions"
                                :series="customChartTwelve.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6">
                <chart-card title="Data Science" buttonText="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="bar"
                                height="350"
                                :options="customChartThirteen.chartOptions"
                                :series="customChartThirteen.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6">
                <chart-card title="Data Science" buttonText="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="line"
                                height="350"
                                :options="customChartFourteen.chartOptions"
                                :series="customChartFourteen.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6">
                <chart-card title="Data Science" buttonText="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="radar"
                                height="350"
                                :options="customChartFifteen.chartOptions"
                                :series="customChartFifteen.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="6">
                <chart-card title="Data Science" buttonText="last 7 days">
                    <template slot="chart">
                        <div id="basicArea-chart" style="min-height: 365px">
                            <apexchart
                                type="pie"
                                height="350"
                                :options="customChartSixteen.chartOptions"
                                :series="customChartSixteen.series"
                            />
                        </div>
                    </template>
                </chart-card>
            </v-col>
            <v-col cols="12" md="8">
                <chart-card title="Dual Pie" buttonText="2 days">
                    <template slot="chart">
                        <v-row>
                            <v-col cols="12" md="6">
                                <div
                                    id="basicArea-chart"
                                    style="min-height: 365px"
                                >
                                    <apexchart
                                        type="radialBar"
                                        height="350"
                                        :options="
                                            customChartSeventeen.chartOptions
                                        "
                                        :series="customChartSeventeen.series"
                                    />
                                </div>
                            </v-col>
                            <v-col cols="12" md="6">
                                <div
                                    id="basicArea-chart"
                                    style="min-height: 365px"
                                >
                                    <apexchart
                                        type="radialBar"
                                        height="350"
                                        :options="
                                            customChartEighteen.chartOptions
                                        "
                                        :series="customChartEighteen.series"
                                    />
                                </div>
                            </v-col>
                        </v-row>
                    </template>
                </chart-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import ChartCard from '@/components/card/ChartCard'

import {
    customChartOne,
    customChartTwo,
    customChartThree,
    customChartFour,
    customChartFive,
    customChartSix,
    customChartSeven,
    customChartEight,
    customChartNine,
    customChartTen,
    customChartEleven,
    customChartTwelve,
    customChartThirteen,
    customChartFourteen,
    customChartFifteen,
    customChartSixteen,
    customChartSeventeen,
    customChartEighteen
} from '@/data/apexChart'

export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Apex- Custom Charts'
    },
    components: {
        ChartCard
    },
    data() {
        return {
            customChartOne,
            customChartTwo,
            customChartThree,
            customChartFour,
            customChartFive,
            customChartSix,
            customChartSeven,
            customChartEight,
            customChartNine,
            customChartTen,
            customChartEleven,
            customChartTwelve,
            customChartThirteen,
            customChartFourteen,
            customChartFifteen,
            customChartSixteen,
            customChartSeventeen,
            customChartEighteen
        }
    },
    methods: {}
}
</script>
