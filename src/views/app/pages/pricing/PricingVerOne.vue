<template>
  <v-row>
    <v-col cols="12">
      <base-card>
        <v-row>
          <v-col cols="12" md="4" class="pa-4 border-right">
            <div class="my-8 px-8 text-center ul-icon-box-animate-onhover">
              <div class="ul-icon-box mx-auto mb-8">
                <div class="bg-group ul-animate fallingClouds"></div>

                <v-img
                  height="100"
                  width="100"
                  class="mx-auto"
                  src="@/assets/images/svg/startup.svg"
                />
              </div>
              <div class="text-center mb-10">
                <h4 class="font-weight-bold">Startup</h4>
              </div>
              <ul class="d-flex justify-center mb-6">
                <li class="text--disabled mx-3">1 Domain</li>
                <li class="text--disabled mx-3">5 Users</li>
                <li class="text--disabled mx-3">10 Copies</li>
              </ul>
              <div class="text-center">
                <p class="text--disabled mb-10">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
                <div class="d-flex justify-center align-start mb-10">
                  <h1 class="font-weight-bold text-h3 mr-1">75</h1>
                  <p class="ma-0 mt-1">$</p>
                </div>
                <v-btn large rounded depressed color="primary" dark>Purchases</v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="pa-4 border-right">
            <div class="my-8 px-8 text-center ul-icon-box-animate-onhover">
              <div class="ul-icon-box mx-auto mb-8">
                <div class="bg-group ul-animate fallingClouds"></div>

                <v-img
                  height="100"
                  width="100"
                  class="mx-auto"
                  src="@/assets/images/svg/growth.svg"
                />
              </div>
              <div class="text-center mb-10">
                <h4 class="font-weight-bold">Growth Plan</h4>
              </div>
              <ul class="d-flex justify-center mb-6">
                <li class="text--disabled mx-3">8 Domain</li>
                <li class="text--disabled mx-3">15 Users</li>
                <li class="text--disabled mx-3">100 Copies</li>
              </ul>
              <div class="text-center">
                <p class="text--disabled mb-10">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
                <div class="d-flex justify-center align-start mb-10">
                  <h1 class="font-weight-bold text-h3 mr-1">175</h1>
                  <p class="ma-0 mt-1">$</p>
                </div>
                <v-btn large rounded depressed color="primary" dark>Purchases</v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="pa-4 border-right">
            <div class="my-8 px-8 text-center ul-icon-box-animate-onhover">
              <div class="ul-icon-box mx-auto mb-8">
                <div class="bg-group ul-animate fallingClouds"></div>

                <v-img
                  height="100"
                  width="100"
                  class="mx-auto"
                  src="@/assets/images/svg/maps-and-location-2.svg"
                />
              </div>
              <div class="text-center mb-10">
                <h4 class="font-weight-bold">Growth Plan</h4>
              </div>
              <ul class="d-flex justify-center mb-6">
                <li class="text--disabled mx-3">10 Domain</li>
                <li class="text--disabled mx-3">25 Users</li>
                <li class="text--disabled mx-3">1000 Copies</li>
              </ul>
              <div class="text-center">
                <p class="text--disabled mb-10">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
                <div class="d-flex justify-center align-start mb-10">
                  <h1 class="font-weight-bold text-h3 mr-1">875</h1>
                  <p class="ma-0 mt-1">$</p>
                </div>
                <v-btn large rounded depressed color="primary" dark>Purchases</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </base-card>
    </v-col>
    <v-col cols="12">
      <base-card>
        <v-row>
          <v-col
            v-for="(item, index) in priceList"
            :key="index"
            cols="12"
            md="6"
            lg="3"
            class="pa-4 border-right"
          >
            <div class="my-8 px-8 text-center ul-icon-box-animate-onhover">
              <div class="ul-icon-box mx-auto mb-8">
                <div class="bg-group ul-animate fallingClouds"></div>

                <v-icon :color="item.iconColor" class="text-64">{{ item.icon }}</v-icon>
              </div>
              <div class="text-center mb-10">
                <h4 class="font-weight-bold">{{ item.title }}</h4>
              </div>
              <ul class="d-md-flex d-lg-block ml-0 pa-0 justify-center mb-6 list-none flex-wrap">
                <li class="text--disabled mx-3">{{ item.domain }} Domain</li>
                <li class="text--disabled mx-3">{{ item.users }} Users</li>
                <li class="text--disabled mx-3">{{ item.copies }} Copies</li>
              </ul>
              <div class="text-center">
                <p class="text--disabled mb-10">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
                <div class="d-flex justify-center align-start mb-10">
                  <h1 class="font-weight-bold text-h3 mr-1">{{ item.price }}</h1>
                  <p :class="item.supColor" class="ma-0 mt-1 body-1">$</p>
                </div>
                <v-btn large rounded depressed :color="item.btnColor" dark>Purchases</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Pricing Ver 1",
  },
  data() {
    return {
      priceList: [
        {
          icon: "mdi-account",
          iconColor: "danger",
          title: "Student",
          btnColor: "danger",
          supColor: "text-danger",
          domain: 1,
          users: 5,
          copies: 10,
          price: 20,
        },
        {
          icon: "mdi-rocket-launch-outline",
          iconColor: "success",
          title: "Basic Plan",
          btnColor: "success",
          supColor: "text-success",
          domain: 8,
          users: 15,
          copies: 100,
          price: 75,
        },
        {
          icon: "mdi-account-tie",
          iconColor: "orange",
          title: "For Business",
          btnColor: "orange",
          supColor: "text-orange",
          domain: 8,
          users: 15,
          copies: 100,
          price: 175,
        },
        {
          icon: "mdi-office-building",
          iconColor: "primary",
          title: "Enterprise",
          btnColor: "primary",
          supColor: "text-primary",
          domain: 8,
          users: 15,
          copies: 100,
          price: 475,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.border-right {
  border-right: 1px solid #f0f1f2 !important;
}
li {
  list-style: none;
}
</style>
