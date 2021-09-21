<template>
    <v-row>
        <v-col cols="12" lg="6" md="12">
            <chart-card title="Line Column ">
                <template slot="chart">
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart
                            type="line"
                            height="350"
                            :options="lineColumn.chartOptions"
                            :series="lineColumn.series"
                        />
                    </div>
                </template>
            </chart-card>
        </v-col>
        <v-col cols="12" lg="6" md="12">
            <chart-card title="Multiple Y-Axis">
                <template slot="chart">
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart
                            type="line"
                            height="350"
                            :options="multipleYxis.chartOptions"
                            :series="multipleYxis.series"
                        />
                    </div>
                </template>
            </chart-card>
        </v-col>
        <v-col cols="12" lg="6" md="12">
            <chart-card title="Line & Area">
                <template slot="chart">
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart
                            type="line"
                            height="350"
                            :options="lineArea.chartOptions"
                            :series="lineArea.series"
                        />
                    </div>
                </template>
            </chart-card>
        </v-col>
        <v-col cols="12" lg="6" md="12">
            <chart-card title="Line Column Area">
                <template slot="chart">
                    <div id="basicArea-chart" style="min-height: 365px">
                        <apexchart
                            type="line"
                            height="350"
                            :options="lineColumnArea.chartOptions"
                            :series="lineColumnArea.series"
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
    lineColumn,
    multipleYxis,
    lineArea,
    lineColumnArea
} from '@/data/apexChart.js'

export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Apex- Mix Charts'
    },
    components: {
        ChartCard
    },
    data() {
        return {
            lineColumn,
            multipleYxis,
            lineArea,
            lineColumnArea
        }
    }
}
</script>
