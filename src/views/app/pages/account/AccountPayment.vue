<template>
  <div>
    <v-row justify="center">
      <v-col cols="10" md="10">
        <div class="text-center">
          <h3 class="mb-4">Payments & subscriptions</h3>
          <p>Your payment info, transactions, recurring payments, and reservations</p>
        </div>
      </v-col>
      <v-col 
        v-for="(item, index) in home"
        :key="index"
        cols="12" 
        md="5"
      >
        <e-info-card 
          :title="item.title"
          :sub-title="item.subTitle"
          :image="item.img"
          :link="item.link"
        />
          
        
      </v-col>
    </v-row>
  </div>
</template>
<script>
import EInfoCard from '@/components/card/BasicInfoCard'
export default {
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Account Payment",
  },
  components: {
    EInfoCard,
  },
  data(){
    return {
      
      home: [
        {
          title: 'Payment methods',
          subTitle: 'With UI Lib Pay, you can save payment info for more secure payments online, for your Assistant and in store',
          img: require('@/assets/images/svg/online-payment.svg'),
          link: 'Manage payment methods'
        },
        {
          title: 'Purchases',
          subTitle: 'Your purchases, including deliveries and other online orders, made using Search, Maps, and the Assistant. ',
          img: require('@/assets/images/svg/gift.svg'),
          link: 'Manage purchases'
        },
        {
          title: 'Subscriptions',
          subTitle: 'Your recurring payments for subscription services, like news and streaming media',
          img: require('@/assets/images/svg/subscription.svg'),
          link: 'Manage subscriptions'
        },
        {
          title: 'Reservations',
          subTitle: 'This step-by-step guide helps you choose the privacy settings that are right for you',
          img: require('@/assets/images/svg/booking-online.svg'),
          link: 'Manage reservations'
        },
      ]
    }
  }
}
</script>