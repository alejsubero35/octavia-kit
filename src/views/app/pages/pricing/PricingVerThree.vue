<template>
  <v-row>
    <v-col cols="12">
      <base-card>
        <v-card-text>
          <h1 class="text-center my-12">Simple Non Profit Pricing</h1>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td class="border-none py-4"></td>
                  <td class="border-none py-4">
                    <div class="text-center">
                      <h5>Essential</h5>
                      <p class="text--disabled">
                        All the basics for event &amp;
                        team crowdfunding
                      </p>
                      <v-btn class="mb-2" rounded color="primary" dark depressed>Get Started</v-btn>
                      <div>
                        <a class="link-alt" href="#">Learn More</a>
                      </div>
                    </div>
                  </td>
                  <td class="border-none py-4">
                    <div class="text-center">
                      <h5>Premium</h5>
                      <p class="text--disabled">
                        All the basics for event &amp;
                        team crowdfunding
                      </p>
                      <v-btn class="mb-2" rounded color="primary" dark depressed>Get Started</v-btn>
                      <div>
                        <a class="link-alt" href="#">Learn More</a>
                      </div>
                    </div>
                  </td>
                  <td class="border-none py-4">
                    <div class="text-center">
                      <h5>Enterprise</h5>
                      <p class="text--disabled">
                        All the basics for event &amp;
                        team crowdfunding
                      </p>
                      <v-btn class="mb-2" rounded color="primary" dark depressed>Get Started</v-btn>
                      <div>
                        <a class="link-alt" href="#">Learn More</a>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="font-weight-bold border-none">Pricing</td>
                </tr>
                <tr v-for="item in desserts" :key="item.name">
                  <td class="border-none text--disabled">{{ item.name }}</td>
                  <td class="border-none text--disabled text-center">{{ item.essential }}</td>
                  <td class="border-none text--disabled text-center">
                    {{ item.premium }}
                    <div v-if="item.btn">
                      <base-hover-button
                        text="Contact Us"
                        custom-class="rounded-pill"
                        text-color="success--text"
                        bg-color="success lighten-4"
                        depressed
                        small
                      />
                    </div>
                  </td>
                  <td class="border-none text--disabled text-center">
                    <base-hover-button
                      text="Contact Us"
                      custom-class="rounded-pill"
                      text-color="success--text"
                      bg-color="success lighten-4"
                      depressed
                      small
                    />
                  </td>
                </tr>
                <tr>
                  <td class="font-weight-bold border-none">Features</td>
                </tr>
                <tr v-for="item in features" :key="item.name">
                  <td class="border-none text--disabled">{{ item.name }}</td>
                  <td class="border-none text--disabled text-center">
                    <v-icon v-if="item.approve" color="success">mdi-check-circle</v-icon>
                  </td>
                  <td class="border-none text--disabled text-center">
                    <v-icon v-if="item.approve2" color="success">mdi-check-circle</v-icon>
                  </td>
                  <td class="border-none text--disabled text-center">
                    <v-icon v-if="item.approve3" color="success">mdi-check-circle</v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Pricing ver 3",
  },
  data() {
    return {
      desserts: [
        {
          name: "Plan Cost",
          essential: "Free",
          btn: true,
        },
        {
          name: "Platform",
          essential: "5%",
          premium: "3%",
        },
        {
          name: "Payment processing",
          essential: "2.9%",
          premium: "2.4%",
        },
      ],
      features: [
        {
          name: "Unlimited Fundraising campaigns",
          approve: true,
          approve2: true,
          approve3: true,
        },
        {
          name: "Easy access to funds",
          approve: true,
          approve2: true,
          approve3: true,
        },
        {
          name: "Mobile Optimized",
          approve: true,
          approve2: true,
          approve3: true,
        },
        {
          name: "Basic donor data",
          approve: true,
          approve2: true,
          approve3: true,
        },
        {
          name: "Team fundraising",
          approve: true,
          approve2: true,
          approve3: true,
        },
        {
          name: "Unlimited Fundraising events",
          approve: false,
          approve2: true,
          approve3: true,
        },
        {
          name: "Comphensive donor data",
          approve: false,
          approve2: false,
          approve3: true,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>
