<template>
   <div>
      <MapChart
         :countryData="{'US': 4, 'CA': 7, 'GB': 8, 'IE': 14, 'ES': 21}"
         highColor="#ff0000"
         lowColor="#aaaaaa"
         countryStrokeColor="#909090"
         defaultCountryFillColor="#dadada"
         legendFontColorContent="#ff0000"
         />


         <v-row>
            <v-col cols="12" md="6">
               <base-card>
                  <v-card-text>
                     <MapChart
                        :countryData="{'US': 4, 'CA': 7, 'GB': 8, 'IE': 14, 'ES': 21}"
                        highColor="#ff0000"
                        lowColor="#aaaaaa"
                        countryStrokeColor="#909090"
                        defaultCountryFillColor="#dadada"
                        legendFontColorContent="#ff0000"
                     />
                  </v-card-text>
               </base-card>
            </v-col>
         </v-row>
   </div>
</template>
<script>
import MapChart from 'vue-map-chart'
export default {
   components: {
      MapChart,
   },
   data(){
      return {

      }
   }
}
</script>
<style lang="stylus">

</style>