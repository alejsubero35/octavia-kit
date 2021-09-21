<template>
    <v-row>
        <v-col cols="12" md="6">
            <chart-card title="Basic Bar chart">
                <template slot="chart">
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart
                            type="bar"
                            height="350"
                            :options="basicBarChart.chartOptions"
                            :series="basicBarChart.series"
                        />
                    </div>
                </template>
            </chart-card>
        </v-col>
        <v-col cols="12" md="6">
            <chart-card title="Grouped Bar">
                <template slot="chart">
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart
                            type="bar"
                            height="350"
                            :options="groupedBar.chartOptions"
                            :series="groupedBar.series"
                        />
                    </div>
                </template>
            </chart-card>
        </v-col>
        <v-col cols="12" md="6">
            <chart-card title="Stacked Bars(Fiction Books Sales)">
                <template slot="chart">
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart
                            type="bar"
                            height="350"
                            :options="stackedbar.chartOptions"
                            :series="stackedbar.series"
                        />
                    </div>
                </template>
            </chart-card>
        </v-col>
        <v-col cols="12" md="6">
            <chart-card title="Bar with Negative Values">
                <template slot="chart">
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart
                            type="bar"
                            height="350"
                            :options="negativeBar.chartOptions"
                            :series="negativeBar.series"
                        />
                    </div>
                </template>
            </chart-card>
        </v-col>
        <v-col cols="12" md="6">
            <chart-card title="Bar with Negative Values">
                <template slot="chart">
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart
                            type="bar"
                            height="350"
                            :options="customDataLabelBar.chartOptions"
                            :series="customDataLabelBar.series"
                        />
                    </div>
                </template>
            </chart-card>
        </v-col>
        <v-col cols="12" md="6">
            <chart-card title="Bar with Negative Values">
                <template slot="chart">
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart
                            type="bar"
                            height="350"
                            :options="patternedBar.chartOptions"
                            :series="patternedBar.series"
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
    basicBarChart,
    groupedBar,
    stackedbar,
    negativeBar,
    customDataLabelBar,
    patternedBar
} from '@/data/apexChart'
export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Apex- Bar Charts'
    },
    components: {
        ChartCard
    },
    data() {
        return {
            name: 'apexBarChart',
            basicBarChart,
            groupedBar,
            stackedbar,
            negativeBar,
            customDataLabelBar,
            patternedBar
        }
    }
}
</script>
