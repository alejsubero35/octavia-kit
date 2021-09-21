<template>
  
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <chart-card title="Basic Radar Chart">
          <template slot="chart">
            <div id="basicArea-chart">
              <apexchart
                type="radar"
                height="365"
                :options="basicRadar.chartOptions"
                :series="basicRadar.series"
              />
            </div>
            
          </template>
        </chart-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <chart-card title="Basic Radar Chart">
          <template slot="chart">
            <div id="basicArea-chart">
            
              <apexchart
                type="radar"
                height="335"
                :options="radarMultiSeries.chartOptions"
                :series="radarMultiSeries.series"
              />
            </div>
            
          </template>
        </chart-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <chart-card title="Basic Radar Chart">
          <template slot="chart">
            <div id="basicArea-chart">
              <apexchart
                type="radar"
                height="365"
                :options="radarwithPolygonFill.chartOptions"
                :series="radarwithPolygonFill.series"
              />
            </div>
            
          </template>
        </chart-card>
      </v-col>
    </v-row>

</template>
<script>
import ChartCard from '@/components/card/ChartCard';
import {
  basicRadar,
  radarMultiSeries,
  radarwithPolygonFill
} from "@/data/apexChart.js";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Apex- Radar Charts"
  },
  components:{
    ChartCard
  },
  data() {
    return {
      basicRadar,
      radarMultiSeries,
      radarwithPolygonFill
    };
  }
};
</script>
