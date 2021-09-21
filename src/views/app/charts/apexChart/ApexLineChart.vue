<template>
    <v-row>
        <v-col cols="12" md="6" lg="6">
            <base-card>
                <v-card-title>Basic line chart</v-card-title>
                <v-card-text>
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart
                            type="line"
                            height="350"
                            :options="basicLineChart.chartOptions"
                            :series="basicLineChart.series"
                        />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6" lg="6">
            <base-card>
                <v-card-title>Line with data Label</v-card-title>
                <v-card-text>
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart
                            type="line"
                            height="350"
                            :options="lineChartWIthDataLabel.chartOptions"
                            :series="lineChartWIthDataLabel.series"
                        />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>

        <v-col cols="12" md="6" lg="6">
            <base-card class="mb-30">
                <v-card-title>Gradient Line Chart</v-card-title>
                <v-card-text>
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart
                            type="line"
                            height="350"
                            :options="gradientLineChart.chartOptions"
                            :series="gradientLineChart.series"
                        />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>

        <v-col cols="12" md="6" lg="6">
            <base-card>
                <v-card-title>Dashed Line Chart(Page Statistics)</v-card-title>
                <v-card-text>
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart
                            type="line"
                            height="350"
                            :options="dashedLineChart.chartOptions"
                            :series="dashedLineChart.series"
                        />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6" lg="6">
            <base-card>
                <v-card-title>Brush Line chart</v-card-title>
                <v-card-text>
                    <div id="chart1">
                        <apexchart
                            type="line"
                            height="230"
                            :options="brushLineChart.chartOptionsArea"
                            :series="brushLineChart.series"
                        />
                    </div>
                    <div id="chart2">
                        <apexchart
                            type="area"
                            height="130"
                            :options="brushLineChart.chartOptionsBrush"
                            :series="brushLineChart.series"
                        />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
import {
    basicLineChart,
    lineChartWIthDataLabel,
    gradientLineChart,
    dashedLineChart,
    brushLineChart
} from '@/data/apexChart'

export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Apex- Line Charts'
    },
    data() {
        return {
            basicLineChart,
            lineChartWIthDataLabel,

            gradientLineChart,
            dashedLineChart,
            brushLineChart
        }
    }
}
</script>
