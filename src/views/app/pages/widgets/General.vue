<template>
  <v-row>
    <v-col v-for="(item, index) in generals" :key="index" cols="12" md="4">
      <base-card class="h-full">
        <v-card-text>
          <div class="d-flex align-center mb-3">
            <v-avatar class="mr-3" :color="item.avatarColor" rounded>
              <v-icon :class="item.avatarIconColor">
                {{
                item.avatar
                }}
              </v-icon>
            </v-avatar>
            <div>
              <p class="card-title mb-0">{{ item.title }}</p>
              <span class="text--disabled">
                {{
                item.subTitle
                }}
              </span>
            </div>
          </div>
          <p class="text--disabled">{{ item.paragraph }}</p>
          <v-divider class="py-2"></v-divider>
          <div class="d-flex justify-space-between">
            <avatar-group-card class="ml-3"></avatar-group-card>
            <base-hover-button bg-color="primary lighten-5" textColor="primary--text" text="Join"></base-hover-button>
          </div>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col cols="12" md="4">
      <base-card class="h-full">
        <v-card-title class="d-flex justify-space-between">
          <div class="body-2">Announcement</div>
          <div>
            <v-icon color="primary" @click="slider--">mdi-chevron-left</v-icon>
            <v-icon color="primary" @click="slider++">mdi-chevron-right</v-icon>
          </div>
        </v-card-title>
        <v-card-text>
          <v-carousel
            hide-delimiters
            v-model="slider"
            :show-arrows="false"
            height="auto"
            cycle
            light
          >
            <v-carousel-item v-for="(slide, i) in 3" :key="i">
              <div>
                <div class="card-title">EGRET Launch Party</div>
                <p class="text--primary">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
                <div class="d-flex justify-space-between py-2">
                  <v-chip class="ma-2" color="primary" small>24 FEB, 2020</v-chip>
                  <base-hover-button
                    textColor="primary--text"
                    bg-color="primary lighten-5"
                    text="JOIN"
                    small
                  ></base-hover-button>
                </div>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col cols="12" md="4">
      <base-card class="h-full">
        <v-card-title class="d-flex justify-space-between">
          <p class="body-2">Projects</p>
          <div>
            <v-icon color="primary" @click="sliderTwo--">mdi-chevron-left</v-icon>
            <v-icon color="primary" @click="sliderTwo++">mdi-chevron-right</v-icon>
          </div>
        </v-card-title>
        <v-card-text>
          <v-carousel
            hide-delimiters
            v-model="sliderTwo"
            :show-arrows="false"
            height="auto"
            cycle
            light
          >
            <v-carousel-item v-for="(slide, i) in 3" :key="i">
              <div>
                <div class="card-title">EGRET Launch Party</div>
                <p class="text--primary">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>

                <div class="d-flex justify-space-between">
                  <span class="text--primary">Progress</span>
                  <span class="text--primary">65%</span>
                </div>
                <v-progress-linear class="my-3" value="76"></v-progress-linear>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col cols="12" md="4">
      <base-card class="h-full">
        <v-card-title class="d-flex justify-space-between">
          <p class="body-2">Upcoming Events</p>
          <div>
            <v-icon color="primary" @click="sliderThree--">mdi-chevron-left</v-icon>
            <v-icon color="primary" @click="sliderThree++">mdi-chevron-right</v-icon>
          </div>
        </v-card-title>
        <v-card-text>
          <v-carousel
            hide-delimiters
            v-model="sliderThree"
            :show-arrows="false"
            height="auto"
            cycle
            light
          >
            <v-carousel-item v-for="(slide, i) in 3" :key="i">
              <div>
                <div class="card-title">EGRET Launch Party</div>
                <p class="text-primary font-weight-bold">2:30 PM to 4:00 PM</p>

                <div class="d-flex justify-space-between py-4">
                  <div>
                    <v-icon class="mr-2" color="success">mdi-map-marker</v-icon>
                    <span class="text--primary">New Jersey</span>
                  </div>
                  <base-hover-button
                    textColor="primary--text"
                    bg-color="primary lighten-5"
                    text="view"
                    small
                  ></base-hover-button>
                </div>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col cols="12" md="8">
      <base-card class="h-full">
        <v-card-title class="d-flex justify-space-between">
          <p class="body-2">New Products</p>
          <div>
            <v-icon color="primary" @click="sliderFour--">mdi-chevron-left</v-icon>
            <v-icon color="primary" @click="sliderFour++">mdi-chevron-right</v-icon>
          </div>
        </v-card-title>
        <v-card-text>
          <v-carousel
            hide-delimiters
            v-model="sliderFour"
            :show-arrows="false"
            height="auto"
            cycle
            light
          >
            <v-carousel-item v-for="(slide, i) in 3" :key="i">
              <div>
                <div class="d-flex justify-space-between flex-wrap align-center mb-10">
                  <div class="d-flex align-center">
                    <v-avatar size="64" class="mr-2">
                      <img src="@/assets/images/products/speaker-1.jpg" alt />
                    </v-avatar>
                    <div>
                      <h5 class="text--primary mb-1">Speaker 7:1</h5>
                      <p class="text--disabled mb-0">
                        Lorem Ipsum is simply dummy text
                        of the printing and typesetting
                        industry.
                      </p>
                    </div>
                  </div>
                  <div class="ml-10">
                    <v-chip class="ma-2" color="primary" outlined small>370 Purchases</v-chip>
                    <v-chip class="ma-2" color="danger" outlined small>41 Reviews</v-chip>
                  </div>
                </div>
                <div class="d-flex justify-space-between align-center flex-wrap py-4">
                  <v-chip class="mb-1" color="primary" small>24 DEC, 2020</v-chip>

                  <div>
                    <base-hover-button
                      textColor="primary--text"
                      bg-color="primary lighten-5"
                      class="mr-2"
                      text="preview"
                      small
                    ></base-hover-button>
                    <base-hover-button
                      textColor="primary--text"
                      bg-color="primary lighten-5"
                      text="details"
                      small
                    ></base-hover-button>
                  </div>
                </div>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col cols="12" md="8">
      <base-card class="h-full">
        <v-card-title class="d-flex justify-space-between">
          <p class="body-2">New User</p>
          <div>
            <v-icon color="primary" @click="sliderFive--">mdi-chevron-left</v-icon>
            <v-icon color="primary" @click="sliderFive++">mdi-chevron-right</v-icon>
          </div>
        </v-card-title>
        <v-card-text>
          <v-carousel
            hide-delimiters
            v-model="sliderFive"
            :show-arrows="false"
            height="auto"
            cycle
            light
          >
            <v-carousel-item v-for="(slide, i) in 3" :key="i">
              <div>
                <div class="d-flex justify-space-between flex-wrap align-center mb-10">
                  <div class="d-flex align-center mb-4">
                    <v-avatar size="64" class="mr-2">
                      <img src="@/assets/images/faces/1.jpg" alt />
                    </v-avatar>
                    <div>
                      <h5 class="text--primary mb-1">Timothy Clarkson</h5>
                      <p class="text--disabled mb-0">Frontend Developer</p>
                    </div>
                  </div>
                  <div>
                    <v-btn color="primary" outlined small class="mr-2">Facebook</v-btn>
                    <v-btn color="cyan lighten-2" outlined small>Twitter</v-btn>
                  </div>
                </div>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
import AvatarGroupCard from "@/components/card/AvatarGroupCard";
export default {
  name: "General",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "General",
  },
  components: {
    AvatarGroupCard,
  },
  data() {
    return {
      slider: 0,
      sliderTwo: 0,
      sliderThree: 0,
      sliderFour: 0,
      sliderFive: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      generals: [
        {
          title: "Presentation",
          subTitle: "New York",
          paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Dummy text of the printing",
          avatar: "mdi-briefcase-variant-outline",
          avatarColor: "blue lighten-5",
          avatarIconColor: "blue--text text--darken-1",
        },
        {
          title: "Holiday",
          subTitle: "Los Angeles",
          paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Dummy text of the printing",
          avatar: "mdi-umbrella",
          avatarColor: "green lighten-5",
          avatarIconColor: "green--text text--darken-1",
        },
        {
          title: "Local Activity",
          subTitle: "Michigan",
          paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Dummy text of the printing",
          avatar: "mdi-account-check-outline",
          avatarColor: "red lighten-5",
          avatarIconColor: "red--text text--darken-1",
        },
      ],
    };
  },
};
</script>
