<template>
  <v-row>
    <v-col cols="12" md="6" lg="6">
      <chart-card title="Basic Column chart">
        <template slot="chart">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="bar"
              height="350"
              :options="basicColumnChart.chartOptions"
              :series="basicColumnChart.series"
            />
          </div>
        </template>
      </chart-card>
    </v-col>
    <v-col cols="12" md="6" lg="6">
      <chart-card title="Column with Data Labels">
        <template slot="chart">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="bar"
              height="350"
              :options="columnDataLabels.chartOptions"
              :series="columnDataLabels.series"
            />
          </div>
        </template>
      </chart-card>
    </v-col>
    <v-col cols="12" md="6" lg="6">
      <chart-card title="Stacked Columns">
        <template slot="chart">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="bar"
              height="350"
              :options="stackedColumn.chartOptions"
              :series="stackedColumn.series"
            />
          </div>
        </template>
      </chart-card>
    </v-col>
    <v-col cols="12" md="6" lg="6">
      <chart-card title="Column with Negative Values">
        <template slot="chart">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="bar"
              height="350"
              :options="negativeColumn.chartOptions"
              :series="negativeColumn.series"
            />
          </div>
        </template>
      </chart-card>
    </v-col>
    <v-col cols="12" md="6" lg="6">
      <chart-card title="Distributed Columns">
        <template slot="chart">
          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="bar"
              height="350"
              :options="distributedColumnChart.chartOptions"
              :series="distributedColumnChart.chartOptions.series"
            />
          </div>
        </template>
      </chart-card>
    </v-col>
  </v-row>
</template>

<script>
import ChartCard from "@/components/card/ChartCard";
import {
  basicColumnChart,
  columnDataLabels,
  stackedColumn,
  negativeColumn,
  distributedColumnChart,
} from "@/data/apexChart";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Apex- Column Charts",
  },
  components: {
    ChartCard,
  },
  data() {
    return {
      basicColumnChart,
      columnDataLabels,
      stackedColumn,
      negativeColumn,
      distributedColumnChart,
    };
  },
};
</script>
