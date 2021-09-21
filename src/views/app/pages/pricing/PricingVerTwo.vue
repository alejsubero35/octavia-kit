<template>
  <v-row>
    <v-col cols="12">
      <h1 class="text-center my-10">Simple Pricing</h1>
      <v-row justify="center">
        <v-col cols="12" md="6" class="mb-8">
          <v-tabs
            v-model="tab"
            background-color="primary"
            dark
            color
            class="pricing-tabs rounded-circle"
            grow
          >
            <v-tab v-for="item in items" :key="item" class="pricing-single-tab">{{ item }}</v-tab>
          </v-tabs>
        </v-col>
      </v-row>

      <v-tabs-items v-model="tab" class="transparent">
        <v-tab-item>
          <v-row>
            <v-col cols="12" lg="4" class="mb-6">
              <h4 class="text--disabled mb-8 mt-10">Monthly Product Pricing</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam tempus vestibulum
                vestibulum. Nunc nec feugiat ligula. In porta
                feugiat purus et ornare.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam tempus vestibulum
                vestibulum. Nunc nec feugiat ligula. In porta
                feugiat purus et ornare.
              </p>
            </v-col>
            <v-col cols="12" lg="4" class="mb-6">
              <base-card class="h-full">
                <v-card-text>
                  <div class="ul-icon-box-animate-onhover pt-4 pb-4">
                    <div class="ul-pricing-v2 text-center">
                      <v-img
                        height="100"
                        width="100"
                        class="mx-auto mb-8"
                        src="@/assets/images/svg/startup.svg"
                      />
                      <h4 class="card-title font-weight-regular">Startup</h4>
                      <div class="d-flex justify-center align-start mb-10">
                        <p class="ma-0 text--disabled text-20 mt-1">$</p>
                        <h1 class="font-weight-bold text-64 mr-1">75</h1>
                        <div class="text--disabled text-24 mt-10">/month</div>
                      </div>
                      <base-outline-button rounded large class text="Purchase" />
                    </div>
                  </div>
                </v-card-text>
              </base-card>
            </v-col>
            <v-col cols="12" lg="4" class="mb-6">
              <base-card color="primary" class="h-full">
                <v-card-text>
                  <div class="ul-icon-box-animate-onhover pt-4 pb-4">
                    <div class="ul-pricing-v2 text-center">
                      <svg
                        class="fill-current white--text mb-8"
                        id="_x31__px"
                        enable-background="new 0 0 24 24"
                        height="100"
                        viewBox="0 0 24 24"
                        width="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="XMLID_1_">
                          <path
                            d="m14 9.09 8.81 1.75c.71.15 1.19.75 1.19 1.46v10.2c0 .83-.67 1.5-1.5 1.5h-9c.28 0 .5-.22.5-.5v-.5h8.5c.27 0 .5-.22.5-.5v-10.2c0-.23-.16-.44-.39-.49l-8.61-1.7z"
                          />
                          <path
                            d="m19.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m19.5 17c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m19.5 20c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m14 23.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.5-13.5c0-.15.07-.29.18-.39.12-.09.27-.13.42-.1l.4.08v1.02 12.89z"
                          />
                          <path d="m13 23v.5c0 .28.22.5.5.5h-4c.28 0 .5-.22.5-.5v-.5z" />
                          <path
                            d="m10.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m11 8.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5z"
                          />
                          <path
                            d="m10.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m10.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m6 14.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5z"
                          />
                          <path
                            d="m5.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m5.5 8c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m5.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m9 18.5c0-.28-.23-.5-.5-.5h-3c-.28 0-.5.22-.5.5v4.5h-1v-4.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v4.5h-1z"
                          />
                          <path d="m5 23h4 1v.5c0 .28-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5v-.5z" />
                          <path
                            d="m1.75.2 10.99 1.67c.73.12 1.26.74 1.26 1.48v5.74l-.4-.08c-.15-.03-.3.01-.42.1-.11.1-.18.24-.18.39v-6.15c0-.25-.18-.46-.42-.5l-10.99-1.66c-.03-.01-.06-.01-.09-.01-.12 0-.23.04-.32.12-.12.1-.18.23-.18.38v20.82c0 .28.23.5.5.5h2.5v.5c0 .28.22.5.5.5h-3c-.83 0-1.5-.67-1.5-1.5v-20.82c0-.44.19-.86.53-1.14.34-.29.78-.41 1.22-.34z"
                          />
                        </g>
                      </svg>
                      <h4 class="card-title white--text font-weight-regular">Enterprise</h4>
                      <div class="d-flex justify-center align-start mb-10">
                        <p class="ma-0 white--text text-20 mt-1">$</p>
                        <h1 class="font-weight-bold white--text text-64 mr-1">775</h1>
                        <div class="text-24 white--text mt-10">/month</div>
                      </div>
                      <base-outline-button
                        rounded
                        large
                        text="Purchase"
                        text-color="white--text"
                        bg-hover
                      />
                    </div>
                  </div>
                </v-card-text>
              </base-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row>
            <v-col cols="12" lg="4" class="mb-6">
              <h4 class="text--disabled mb-8 mt-10">Anuual Product Pricing</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam tempus vestibulum
                vestibulum. Nunc nec feugiat ligula. In porta
                feugiat purus et ornare.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam tempus vestibulum
                vestibulum. Nunc nec feugiat ligula. In porta
                feugiat purus et ornare.
              </p>
            </v-col>
            <v-col cols="12" lg="4" class="mb-6">
              <base-card class="h-full">
                <v-card-text>
                  <div class="ul-icon-box-animate-onhover pt-4 pb-4">
                    <div class="ul-pricing-v2 text-center">
                      <v-img
                        height="100"
                        width="100"
                        class="mx-auto mb-8"
                        src="@/assets/images/svg/startup.svg"
                      />
                      <h4 class="card-title font-weight-regular">Startup</h4>
                      <div class="d-flex justify-center align-start mb-10">
                        <p class="ma-0 text--disabled text-20 mt-1">$</p>
                        <h1 class="font-weight-bold text-64 mr-1">75</h1>
                        <div class="text--disabled text-24 mt-10">/month</div>
                      </div>
                      <base-outline-button rounded large class text="Purchase" />
                    </div>
                  </div>
                </v-card-text>
              </base-card>
            </v-col>
            <v-col cols="12" lg="4" class="mb-6">
              <base-card color="success" class="h-full">
                <v-card-text>
                  <div class="ul-icon-box-animate-onhover pt-4 pb-4">
                    <div class="ul-pricing-v2 text-center">
                      <svg
                        class="fill-current white--text mb-8"
                        id="_x31__px"
                        enable-background="new 0 0 24 24"
                        height="100"
                        viewBox="0 0 24 24"
                        width="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="XMLID_1_">
                          <path
                            d="m14 9.09 8.81 1.75c.71.15 1.19.75 1.19 1.46v10.2c0 .83-.67 1.5-1.5 1.5h-9c.28 0 .5-.22.5-.5v-.5h8.5c.27 0 .5-.22.5-.5v-10.2c0-.23-.16-.44-.39-.49l-8.61-1.7z"
                          />
                          <path
                            d="m19.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m19.5 17c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m19.5 20c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m14 23.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.5-13.5c0-.15.07-.29.18-.39.12-.09.27-.13.42-.1l.4.08v1.02 12.89z"
                          />
                          <path d="m13 23v.5c0 .28.22.5.5.5h-4c.28 0 .5-.22.5-.5v-.5z" />
                          <path
                            d="m10.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m11 8.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5z"
                          />
                          <path
                            d="m10.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m10.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m6 14.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5z"
                          />
                          <path
                            d="m5.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m5.5 8c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m5.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m9 18.5c0-.28-.23-.5-.5-.5h-3c-.28 0-.5.22-.5.5v4.5h-1v-4.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v4.5h-1z"
                          />
                          <path d="m5 23h4 1v.5c0 .28-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5v-.5z" />
                          <path
                            d="m1.75.2 10.99 1.67c.73.12 1.26.74 1.26 1.48v5.74l-.4-.08c-.15-.03-.3.01-.42.1-.11.1-.18.24-.18.39v-6.15c0-.25-.18-.46-.42-.5l-10.99-1.66c-.03-.01-.06-.01-.09-.01-.12 0-.23.04-.32.12-.12.1-.18.23-.18.38v20.82c0 .28.23.5.5.5h2.5v.5c0 .28.22.5.5.5h-3c-.83 0-1.5-.67-1.5-1.5v-20.82c0-.44.19-.86.53-1.14.34-.29.78-.41 1.22-.34z"
                          />
                        </g>
                      </svg>
                      <h4 class="card-title font-weight-regular white--text">Enterprise</h4>
                      <div class="d-flex justify-center align-start mb-10">
                        <p class="ma-0 text-20 mt-1 white--text">$</p>
                        <h1 class="font-weight-bold text-64 mr-1 white--text">775</h1>
                        <div class="text-24 mt-10 white--text">/month</div>
                      </div>
                      <base-outline-button
                        rounded
                        large
                        text="Purchase"
                        text-color="white--text"
                        bg-hover
                      />
                    </div>
                  </div>
                </v-card-text>
              </base-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-col>

    <!-- end-tab1  -->
    <v-col cols="12">
      <h1 class="text-center my-10">Simple Pricing</h1>
      <v-row justify="center">
        <v-col cols="12" md="6" class="mb-8">
          <v-tabs
            v-model="tabTwo"
            background-color="primary"
            dark
            color
            class="pricing-tabs rounded-circle"
            grow
          >
            <v-tab v-for="item in items" :key="item" class="pricing-single-tab">{{ item }}</v-tab>
          </v-tabs>
        </v-col>
      </v-row>

      <v-tabs-items v-model="tabTwo" class="transparent">
        <v-tab-item>
          <v-row>
            <v-col cols="12" lg="4" class="mb-6">
              <base-card class="h-full">
                <v-card-text>
                  <h4 class="text--disabled mb-8 mt-10">Monthly Product Pricing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam tempus
                    vestibulum vestibulum. Nunc nec feugiat
                    ligula. In porta feugiat purus et
                    ornare.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam tempus
                    vestibulum vestibulum. Nunc nec feugiat
                    ligula. In porta feugiat purus et
                    ornare.
                  </p>
                </v-card-text>
              </base-card>
            </v-col>
            <v-col cols="12" lg="4" class="mb-6">
              <base-card class="h-full">
                <v-card-text>
                  <div class="ul-icon-box-animate-onhover pt-4 pb-4">
                    <div class="ul-pricing-v2 text-center">
                      <v-img
                        height="100"
                        width="100"
                        class="mx-auto mb-8"
                        src="@/assets/images/svg/startup.svg"
                      />
                      <h4 class="card-title font-weight-regular">Startup</h4>
                      <div class="d-flex justify-center align-start mb-10">
                        <p class="ma-0 text--disabled text-20 mt-1">$</p>
                        <h1 class="font-weight-bold text-64 mr-1">75</h1>
                        <div class="text--disabled text-24 mt-10">/month</div>
                      </div>
                      <base-outline-button rounded large class text="Purchase" />
                    </div>
                  </div>
                </v-card-text>
              </base-card>
            </v-col>
            <v-col cols="12" lg="4" class="mb-6">
              <base-card color="primary" class="h-full">
                <v-card-text>
                  <div class="ul-icon-box-animate-onhover pt-4 pb-4">
                    <div class="ul-pricing-v2 text-center">
                      <svg
                        class="fill-current white--text mb-8"
                        id="_x31__px"
                        enable-background="new 0 0 24 24"
                        height="100"
                        viewBox="0 0 24 24"
                        width="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="XMLID_1_">
                          <path
                            d="m14 9.09 8.81 1.75c.71.15 1.19.75 1.19 1.46v10.2c0 .83-.67 1.5-1.5 1.5h-9c.28 0 .5-.22.5-.5v-.5h8.5c.27 0 .5-.22.5-.5v-10.2c0-.23-.16-.44-.39-.49l-8.61-1.7z"
                          />
                          <path
                            d="m19.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m19.5 17c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m19.5 20c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m14 23.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.5-13.5c0-.15.07-.29.18-.39.12-.09.27-.13.42-.1l.4.08v1.02 12.89z"
                          />
                          <path d="m13 23v.5c0 .28.22.5.5.5h-4c.28 0 .5-.22.5-.5v-.5z" />
                          <path
                            d="m10.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m11 8.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5z"
                          />
                          <path
                            d="m10.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m10.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m6 14.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5z"
                          />
                          <path
                            d="m5.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m5.5 8c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m5.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m9 18.5c0-.28-.23-.5-.5-.5h-3c-.28 0-.5.22-.5.5v4.5h-1v-4.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v4.5h-1z"
                          />
                          <path d="m5 23h4 1v.5c0 .28-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5v-.5z" />
                          <path
                            d="m1.75.2 10.99 1.67c.73.12 1.26.74 1.26 1.48v5.74l-.4-.08c-.15-.03-.3.01-.42.1-.11.1-.18.24-.18.39v-6.15c0-.25-.18-.46-.42-.5l-10.99-1.66c-.03-.01-.06-.01-.09-.01-.12 0-.23.04-.32.12-.12.1-.18.23-.18.38v20.82c0 .28.23.5.5.5h2.5v.5c0 .28.22.5.5.5h-3c-.83 0-1.5-.67-1.5-1.5v-20.82c0-.44.19-.86.53-1.14.34-.29.78-.41 1.22-.34z"
                          />
                        </g>
                      </svg>
                      <h4 class="card-title white--text font-weight-regular">Enterprise</h4>
                      <div class="d-flex justify-center align-start mb-10">
                        <p class="ma-0 white--text text-20 mt-1">$</p>
                        <h1 class="font-weight-bold white--text text-64 mr-1">775</h1>
                        <div class="text-24 white--text mt-10">/month</div>
                      </div>
                      <base-outline-button
                        rounded
                        large
                        text="Purchase"
                        text-color="white--text"
                        bg-hover
                      />
                    </div>
                  </div>
                </v-card-text>
              </base-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row>
            <v-col cols="12" lg="4" class="mb-6">
              <base-card class="h-full">
                <v-card-text>
                  <h4 class="text--disabled mb-8 mt-10">Annual Product Pricing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam tempus
                    vestibulum vestibulum. Nunc nec feugiat
                    ligula. In porta feugiat purus et
                    ornare.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam tempus
                    vestibulum vestibulum. Nunc nec feugiat
                    ligula. In porta feugiat purus et
                    ornare.
                  </p>
                </v-card-text>
              </base-card>
            </v-col>
            <v-col cols="12" lg="4" class="mb-6">
              <base-card class="h-full">
                <v-card-text>
                  <div class="ul-icon-box-animate-onhover pt-4 pb-4">
                    <div class="ul-pricing-v2 text-center">
                      <v-img
                        height="100"
                        width="100"
                        class="mx-auto mb-8"
                        src="@/assets/images/svg/startup.svg"
                      />
                      <h4 class="card-title font-weight-regular">Startup</h4>
                      <div class="d-flex justify-center align-start mb-10">
                        <p class="ma-0 text--disabled text-20 mt-1">$</p>
                        <h1 class="font-weight-bold text-64 mr-1">75</h1>
                        <div class="text--disabled text-24 mt-10">/month</div>
                      </div>
                      <base-outline-button
                        rounded
                        large
                        bg-hover="danger"
                        text-hover
                        text-color="white--text"
                        text="Purchase"
                      />
                    </div>
                  </div>
                </v-card-text>
              </base-card>
            </v-col>
            <v-col cols="12" lg="4" class="mb-6">
              <base-card color="danger" class="h-full">
                <v-card-text>
                  <div class="ul-icon-box-animate-onhover pt-4 pb-4">
                    <div class="ul-pricing-v2 text-center">
                      <svg
                        class="fill-current white--text mb-8"
                        id="_x31__px"
                        enable-background="new 0 0 24 24"
                        height="100"
                        viewBox="0 0 24 24"
                        width="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="XMLID_1_">
                          <path
                            d="m14 9.09 8.81 1.75c.71.15 1.19.75 1.19 1.46v10.2c0 .83-.67 1.5-1.5 1.5h-9c.28 0 .5-.22.5-.5v-.5h8.5c.27 0 .5-.22.5-.5v-10.2c0-.23-.16-.44-.39-.49l-8.61-1.7z"
                          />
                          <path
                            d="m19.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m19.5 17c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m19.5 20c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m14 23.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.5-13.5c0-.15.07-.29.18-.39.12-.09.27-.13.42-.1l.4.08v1.02 12.89z"
                          />
                          <path d="m13 23v.5c0 .28.22.5.5.5h-4c.28 0 .5-.22.5-.5v-.5z" />
                          <path
                            d="m10.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m11 8.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5z"
                          />
                          <path
                            d="m10.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m10.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m6 14.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5z"
                          />
                          <path
                            d="m5.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m5.5 8c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m5.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m9 18.5c0-.28-.23-.5-.5-.5h-3c-.28 0-.5.22-.5.5v4.5h-1v-4.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v4.5h-1z"
                          />
                          <path d="m5 23h4 1v.5c0 .28-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5v-.5z" />
                          <path
                            d="m1.75.2 10.99 1.67c.73.12 1.26.74 1.26 1.48v5.74l-.4-.08c-.15-.03-.3.01-.42.1-.11.1-.18.24-.18.39v-6.15c0-.25-.18-.46-.42-.5l-10.99-1.66c-.03-.01-.06-.01-.09-.01-.12 0-.23.04-.32.12-.12.1-.18.23-.18.38v20.82c0 .28.23.5.5.5h2.5v.5c0 .28.22.5.5.5h-3c-.83 0-1.5-.67-1.5-1.5v-20.82c0-.44.19-.86.53-1.14.34-.29.78-.41 1.22-.34z"
                          />
                        </g>
                      </svg>
                      <h4 class="card-title font-weight-regular white--text">Enterprise</h4>
                      <div class="d-flex justify-center align-start mb-10">
                        <p class="ma-0 text-20 mt-1 white--text">$</p>
                        <h1 class="font-weight-bold text-64 mr-1 white--text">775</h1>
                        <div class="text-24 mt-10 white--text">/month</div>
                      </div>
                      <base-outline-button
                        rounded
                        large
                        text="Purchase"
                        text-color="white--text"
                        bg-hover
                      />
                    </div>
                  </div>
                </v-card-text>
              </base-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
    <!-- end-tab-2  -->
    <v-col cols="12">
      <h1 class="text-center my-10">Simple Pricing</h1>
      <v-row justify="center">
        <v-col cols="12" md="6" class="mb-8">
          <v-tabs
            v-model="tabThree"
            background-color="primary"
            dark
            color
            class="pricing-tabs rounded-circle"
            grow
          >
            <v-tab v-for="item in items" :key="item" class="pricing-single-tab">{{ item }}</v-tab>
          </v-tabs>
        </v-col>
      </v-row>

      <v-tabs-items v-model="tabThree" class="transparent">
        <v-tab-item>
          <v-row>
            <v-col cols="12" lg="3" class="mb-6">
              <base-card class="h-full">
                <v-card-text>
                  <h4 class="text--disabled mb-8 mt-10">Monthly Product Pricing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam tempus
                    vestibulum vestibulum. Nunc nec feugiat
                    ligula. In porta feugiat purus et
                    ornare.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam tempus
                    vestibulum vestibulum. Nunc nec feugiat
                    ligula. In porta feugiat purus et
                    ornare.
                  </p>
                </v-card-text>
              </base-card>
            </v-col>
            <v-col cols="12" lg="3" class="mb-6">
              <base-card class="h-full">
                <v-card-text>
                  <div class="ul-icon-box-animate-onhover pt-4 pb-4">
                    <div class="ul-pricing-v2 text-center">
                      <v-img
                        height="100"
                        width="100"
                        class="mx-auto mb-8"
                        src="@/assets/images/svg/startup.svg"
                      />
                      <h4 class="card-title font-weight-regular">Startup</h4>
                      <div class="d-flex justify-center align-start mb-10">
                        <p class="ma-0 text--disabled text-20 mt-1">$</p>
                        <h1 class="font-weight-bold text-64 mr-1">75</h1>
                        <div class="text--disabled text-24 mt-10">/month</div>
                      </div>
                      <base-outline-button rounded large class text="Purchase" />
                    </div>
                  </div>
                </v-card-text>
              </base-card>
            </v-col>
            <v-col cols="12" lg="3" class="mb-6">
              <base-card color="primary" class="h-full">
                <v-card-text>
                  <div class="ul-icon-box-animate-onhover pt-4 pb-4">
                    <div class="ul-pricing-v2 text-center">
                      <v-img
                        height="100"
                        width="100"
                        class="mx-auto mb-8"
                        src="@/assets/images/svg/man.svg"
                      />
                      <h4 class="card-title font-weight-regular white--text">10 Users</h4>
                      <div class="d-flex justify-center align-start mb-10">
                        <p class="ma-0 white--text text-20 mt-1">$</p>
                        <h1 class="font-weight-bold white--text text-64 mr-1">75</h1>
                        <div class="white--text text-24 mt-10">/month</div>
                      </div>
                      <base-outline-button
                        rounded
                        large
                        text="Purchase"
                        text-color="white--text"
                        bg-hover
                      />
                    </div>
                  </div>
                </v-card-text>
              </base-card>
            </v-col>
            <v-col cols="12" lg="3" class="mb-6">
              <base-card color="primary" class="h-full">
                <v-card-text>
                  <div class="ul-icon-box-animate-onhover pt-4 pb-4">
                    <div class="ul-pricing-v2 text-center">
                      <v-img
                        height="100"
                        width="100"
                        class="mx-auto mb-8"
                        src="@/assets/images/svg/skycraper.svg"
                      />

                      <h4 class="card-title white--text font-weight-regular">Enterprise</h4>
                      <div class="d-flex justify-center align-start mb-10">
                        <p class="ma-0 white--text text-20 mt-1">$</p>
                        <h1 class="font-weight-bold white--text text-64 mr-1">775</h1>
                        <div class="text-24 white--text mt-10">/month</div>
                      </div>
                      <base-outline-button
                        rounded
                        large
                        text="Purchase"
                        text-color="white--text"
                        bg-hover
                      />
                    </div>
                  </div>
                </v-card-text>
              </base-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row>
            <v-col cols="12" lg="3" class="mb-6">
              <base-card class="h-full">
                <v-card-text>
                  <h4 class="text--disabled mb-8 mt-10">Annual Product Pricing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam tempus
                    vestibulum vestibulum. Nunc nec feugiat
                    ligula. In porta feugiat purus et
                    ornare.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aliquam tempus
                    vestibulum vestibulum. Nunc nec feugiat
                    ligula. In porta feugiat purus et
                    ornare.
                  </p>
                </v-card-text>
              </base-card>
            </v-col>
            <v-col cols="12" lg="3" class="mb-6">
              <base-card class="h-full">
                <v-card-text>
                  <div class="ul-icon-box-animate-onhover pt-4 pb-4">
                    <div class="ul-pricing-v2 text-center">
                      <v-img
                        height="100"
                        width="100"
                        class="mx-auto mb-8"
                        src="@/assets/images/svg/startup.svg"
                      />
                      <h4 class="card-title font-weight-regular">Startup</h4>
                      <div class="d-flex justify-center align-start mb-10">
                        <p class="ma-0 text--disabled text-20 mt-1">$</p>
                        <h1 class="font-weight-bold text-64 mr-1">75</h1>
                        <div class="text--disabled text-24 mt-10">/month</div>
                      </div>
                      <base-outline-button
                        rounded
                        large
                        bg-hover="danger"
                        text-hover="white--text"
                        text-color="white--text"
                        text="Purchase"
                      />
                    </div>
                  </div>
                </v-card-text>
              </base-card>
            </v-col>
            <v-col cols="12" lg="3" class="mb-6">
              <base-card color="danger" class="h-full">
                <v-card-text>
                  <div class="ul-icon-box-animate-onhover pt-4 pb-4">
                    <div class="ul-pricing-v2 text-center">
                      <svg
                        class="fill-current white--text mb-8"
                        id="_x31__px"
                        enable-background="new 0 0 24 24"
                        height="100"
                        viewBox="0 0 24 24"
                        width="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="XMLID_1_">
                          <path
                            d="m14 9.09 8.81 1.75c.71.15 1.19.75 1.19 1.46v10.2c0 .83-.67 1.5-1.5 1.5h-9c.28 0 .5-.22.5-.5v-.5h8.5c.27 0 .5-.22.5-.5v-10.2c0-.23-.16-.44-.39-.49l-8.61-1.7z"
                          />
                          <path
                            d="m19.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m19.5 17c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m19.5 20c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m14 23.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.5-13.5c0-.15.07-.29.18-.39.12-.09.27-.13.42-.1l.4.08v1.02 12.89z"
                          />
                          <path d="m13 23v.5c0 .28.22.5.5.5h-4c.28 0 .5-.22.5-.5v-.5z" />
                          <path
                            d="m10.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m11 8.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5z"
                          />
                          <path
                            d="m10.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m10.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m6 14.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5z"
                          />
                          <path
                            d="m5.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m5.5 8c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m5.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m9 18.5c0-.28-.23-.5-.5-.5h-3c-.28 0-.5.22-.5.5v4.5h-1v-4.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v4.5h-1z"
                          />
                          <path d="m5 23h4 1v.5c0 .28-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5v-.5z" />
                          <path
                            d="m1.75.2 10.99 1.67c.73.12 1.26.74 1.26 1.48v5.74l-.4-.08c-.15-.03-.3.01-.42.1-.11.1-.18.24-.18.39v-6.15c0-.25-.18-.46-.42-.5l-10.99-1.66c-.03-.01-.06-.01-.09-.01-.12 0-.23.04-.32.12-.12.1-.18.23-.18.38v20.82c0 .28.23.5.5.5h2.5v.5c0 .28.22.5.5.5h-3c-.83 0-1.5-.67-1.5-1.5v-20.82c0-.44.19-.86.53-1.14.34-.29.78-.41 1.22-.34z"
                          />
                        </g>
                      </svg>
                      <h4 class="card-title font-weight-regular white--text">Enterprise</h4>
                      <div class="d-flex justify-center align-start mb-10">
                        <p class="ma-0 text-20 mt-1 white--text">$</p>
                        <h1 class="font-weight-bold text-64 mr-1 white--text">775</h1>
                        <div class="text-24 mt-10 white--text">/month</div>
                      </div>
                      <base-outline-button
                        rounded
                        large
                        text="Purchase"
                        text-color="white--text"
                        bg-hover
                      />
                    </div>
                  </div>
                </v-card-text>
              </base-card>
            </v-col>
            <v-col cols="12" lg="3" class="mb-6">
              <base-card color="warning" class="h-full">
                <v-card-text>
                  <div class="ul-icon-box-animate-onhover pt-4 pb-4">
                    <div class="ul-pricing-v2 text-center">
                      <svg
                        class="fill-current white--text mb-8"
                        id="_x31__px"
                        enable-background="new 0 0 24 24"
                        height="100"
                        viewBox="0 0 24 24"
                        width="100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="XMLID_1_">
                          <path
                            d="m14 9.09 8.81 1.75c.71.15 1.19.75 1.19 1.46v10.2c0 .83-.67 1.5-1.5 1.5h-9c.28 0 .5-.22.5-.5v-.5h8.5c.27 0 .5-.22.5-.5v-10.2c0-.23-.16-.44-.39-.49l-8.61-1.7z"
                          />
                          <path
                            d="m19.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m19.5 17c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m19.5 20c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m14 23.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.5-13.5c0-.15.07-.29.18-.39.12-.09.27-.13.42-.1l.4.08v1.02 12.89z"
                          />
                          <path d="m13 23v.5c0 .28.22.5.5.5h-4c.28 0 .5-.22.5-.5v-.5z" />
                          <path
                            d="m10.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m11 8.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5z"
                          />
                          <path
                            d="m10.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m10.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m6 14.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5z"
                          />
                          <path
                            d="m5.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m5.5 8c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m5.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
                          />
                          <path
                            d="m9 18.5c0-.28-.23-.5-.5-.5h-3c-.28 0-.5.22-.5.5v4.5h-1v-4.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v4.5h-1z"
                          />
                          <path d="m5 23h4 1v.5c0 .28-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5v-.5z" />
                          <path
                            d="m1.75.2 10.99 1.67c.73.12 1.26.74 1.26 1.48v5.74l-.4-.08c-.15-.03-.3.01-.42.1-.11.1-.18.24-.18.39v-6.15c0-.25-.18-.46-.42-.5l-10.99-1.66c-.03-.01-.06-.01-.09-.01-.12 0-.23.04-.32.12-.12.1-.18.23-.18.38v20.82c0 .28.23.5.5.5h2.5v.5c0 .28.22.5.5.5h-3c-.83 0-1.5-.67-1.5-1.5v-20.82c0-.44.19-.86.53-1.14.34-.29.78-.41 1.22-.34z"
                          />
                        </g>
                      </svg>
                      <h4 class="card-title font-weight-regular white--text">Enterprise</h4>
                      <div class="d-flex justify-center align-start mb-10">
                        <p class="ma-0 text-20 mt-1 white--text">$</p>
                        <h1 class="font-weight-bold text-64 mr-1 white--text">775</h1>
                        <div class="text-24 mt-10 white--text">/month</div>
                      </div>
                      <base-outline-button
                        rounded
                        large
                        text="Purchase"
                        text-color="white--text"
                        bg-hover
                      />
                    </div>
                  </div>
                </v-card-text>
              </base-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
    <!-- end-tab-3  -->
  </v-row>
</template>
<script>
export default {
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Pricing Ver 2",
  },
  data() {
    return {
      tab: null,
      tabTwo: null,
      tabThree: null,
      items: ["Monthly Fees", "Annual Fees"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
<style lang="scss" scoped>
.v-tabs.pricing-tabs {
  ::v-deep .v-slide-group__wrapper {
    border-radius: 22px !important;
  }
}

.pricing-single-tab {
  &.v-tab--active {
    background-color: #0081ff !important;
    color: #fff !important;
  }
  background-color: #fff;
  color: #000 !important;

  // border-top-left-radius: 0px;
  // border-top-right-radius: 20px;
  // border-bottom-right-radius: 20px;
  // border-bottom-left-radius: 0px;
}
</style>
