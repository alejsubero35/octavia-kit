<template>
  <v-row>
    <v-col cols="12" md="12" lg="6" >
      <chart-card title="Simple Scatter Chart">
        <template slot="chart">
          <div id="basicArea-chart">
            <apexchart
              type="scatter"
              height="350"
              :options="simpleScatter.chartOptions"
              :series="simpleScatter.series"
            />
          </div>
          
        </template>
      </chart-card>
      
    </v-col>
    <v-col cols="12" md="12" lg="6" >
      <chart-card title="Scatter – Datetime Chart">
        <template slot="chart">
          <div id="basicArea-chart">
            <apexchart
              type="scatter"
              height="350"
              :options="scatterDatetime.chartOptions"
              :series="scatterDatetime.series"
            />
          </div>
          
        </template>
      </chart-card>
     
    </v-col>
  </v-row>
 
</template>
<script>
import ChartCard from '@/components/card/ChartCard';
import { simpleScatter, scatterDatetime } from "@/data/apexChart.js";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Apex- Scatter Charts"
  },
  components:{
    ChartCard
  },
  data() {
    return {
      simpleScatter,
      scatterDatetime
    };
  }
};
</script>
