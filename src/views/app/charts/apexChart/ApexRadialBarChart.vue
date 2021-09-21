<template>
  <v-row>
    <v-col cols="12" md="6" lg="4">
      <base-card title="Simple Radial Bar" class="h-full">
        <div id="basicArea-chart">
         
          <apexchart
            type="radialBar"
            height="350"
            :options="simpleRadialBar.chartOptions"
            :series="simpleRadialBar.series"
          />
        </div>
      </base-card>
    </v-col>
    <v-col md="6" lg="4" sm="6">
      <base-card title="Multiple Radial Bar" class=" mb-30">
        <div id="basicArea-chart">
          <apexchart
            type="radialBar"
            height="350"
            :options="multipleRadialBar.chartOptions"
            :series="multipleRadialBar.series"
          />
        </div>
      </base-card>
    </v-col>
    <v-col md="6" lg="4" sm="6">
      <base-card title="Custom Angle Circle Chart" class=" mb-30">
        <div id="basicArea-chart">
          <apexchart
            type="radialBar"
            height="350"
            :options="customAngleCircleChart.chartOptions"
            :series="customAngleCircleChart.series"
          />
        </div>
      </base-card>
    </v-col>
    <v-col md="6" lg="4" sm="6">
      <base-card title="Gradient Radial Bar" class=" mb-30">
        <div id="basicArea-chart">
          <apexchart
            type="radialBar"
            height="350"
            :options="gradientRadial.chartOptions"
            :series="gradientRadial.series"
          />
        </div>
      </base-card>
    </v-col>
    <v-col md="6" lg="4" sm="6">
      <base-card title="Stroked Angular Gauge" class=" mb-30">
        <div id="basicArea-chart">
          <apexchart
            type="radialBar"
            height="415"
            :options="strokedangularGauge.chartOptions"
            :series="strokedangularGauge.series"
          />
        </div>
      </base-card>
    </v-col>
    <v-col md="6" lg="4" sm="6">
      <base-card title="Stroked Angular Gauge" class=" mb-30">
        <div id="basicArea-chart">
          <apexchart
            type="radialBar"
            height="350"
            :options="semiCircleGauge.chartOptions"
            :series="semiCircleGauge.series"
          />
        </div>
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
import {
  simpleRadialBar,
  multipleRadialBar,
  customAngleCircleChart,
  gradientRadial,
  strokedangularGauge,
  semiCircleGauge
} from "@/data/apexChart.js";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Apex- Radial Bar Charts"
  },
  data() {
    return {
      simpleRadialBar,
      multipleRadialBar,
      customAngleCircleChart,
      gradientRadial,
      strokedangularGauge,
      semiCircleGauge
    };
  }
};
</script>
