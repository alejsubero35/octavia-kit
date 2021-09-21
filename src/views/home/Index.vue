<template>
    <!-- <v-row justify="center">
    <v-col cols="4">
      <base-card class="px-6 py-4">
  <v-responsive
      class="text-center grey lighten-2 rounded-circle d-inline-flex align-center justify-center ma-3"
      height="64"
      width="64"
    >
      Circle
    </v-responsive>
      </base-card>
    </v-col>
    <v-col cols="4">
      <base-card>
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />
        <v-card-title class="font-weight-bold text-h5">
          Top 10 Australian beaches
        </v-card-title>

        <v-card-text class="text--primary">
          <p class=" body-1 ma-0 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </v-card-text>

        <v-card-actions class="py-4">
          <v-chip
            class="ma-2 bg-gray-200 px-3 py-1 body-2 font-weight-medium text-gray-700"
            small
          >
            #Photography
          </v-chip>
          <span
            class="d-inline-block bg-gray-200 rounded-circle px-3 py-1 body-2 font-weight-medium text-gray-700 mr-2"
            >#travel</span
          >
          <span
            class="d-inline-block bg-gray-200 rounded-circle px-3 py-1 body-2 font-weight-medium text-gray-700"
            >#winter</span
          >
        </v-card-actions>
      </base-card>
    </v-col>
    <v-col cols="4">
      <div class="  rounded overflow-hidden  shadow-sm  bg-white" shaped>
        <v-img
          class=""
          height="200"
          src="@/assets/images/gallery/sq-4.jpg"
          alt="Sunset in the mountains"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        />
        <div class="px-6 py-4">
          <div class="font-weight-bold text-h5 mb-2">
            The Coldest Sunset
          </div>
          <p class="text-gray-700 body-1 ma-0 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <span
            class="d-inline-block bg-gray-200 rounded-circle px-3 py-1 body-2 font-weight-medium text-gray-700 mr-2"
            >#photography</span
          >
          <span
            class="d-inline-block bg-gray-200 rounded-circle px-3 py-1 body-2 font-weight-medium text-gray-700 mr-2"
            >#travel</span
          >
          <span
            class="d-inline-block bg-gray-200 rounded-circle px-3 py-1 body-2 font-weight-medium text-gray-700"
            >#winter</span
          >
        </div>
      </div>
    </v-col>
    <v-col cols="4">
      <v-card class="mx-auto shadow-sm" flat shaped>
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>

        <v-card-text class="text--primary">
          <p class=" body-1 ma-0 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </v-card-text>

        <v-card-actions class="py-4">
          <span
            class="d-inline-block bg-gray-200 rounded-circle px-3 py-1 body-2 font-weight-medium text-gray-700 mr-2"
            >#photography</span
          >
          <span
            class="d-inline-block bg-gray-200 rounded-circle px-3 py-1 body-2 font-weight-medium text-gray-700 mr-2"
            >#travel</span
          >
          <span
            class="d-inline-block bg-gray-200 rounded-circle px-3 py-1 body-2 font-weight-medium text-gray-700"
            >#winter</span
          >
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="6">
      <div class="shadow-sm  w-full lg:max-w-full lg:flex ">
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style="background-image: url('https://tailwindcss.com/img/card-left.jpg')"
          title="Woman holding a mug"
        />
        <div
          class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r pa-4 d-flex flex-column justify-space-between leading-normal"
        >
          <div class="mb-8">
            <p class="body-2 grey--text d-flex align-center">
              <svg
                class="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg>
              Members only
            </p>
            <div class="text-gray-900 font-weight-bold text-h5 mb-2">
              Can coffee make you a better developer?
            </div>
            <p class="text-gray-700 body-1 ma-0 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="d-flex align-center">
            <img
              class=" h-10 rounded-circle mr-4"
              src="@/assets/images/gallery/sq-5.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="body-2">
              <p class="text-gray-900 leading-none">
                Jonathan Reinink
              </p>
              <p class="grey--text">
                Aug 18
              </p>
            </div>
          </div>
        </div>
      </div>
    </v-col>
    <v-col cols="6">
      <div class=" shadow-sm w-full lg:max-w-full lg:flex ">
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style="background-image: url('https://tailwindcss.com/img/card-left.jpg')"
          title="Woman holding a mug"
        />
        <div
          class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r pa-4 d-flex flex-column justify-space-between leading-normal"
        >
          <div class="mb-8">
            <p class="body-2 grey--text d-flex align-center">
              <svg
                class="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg>
              Members only
            </p>
            <div class="text-gray-900 font-weight-bold text-h5 mb-2">
              Can coffee make you a better developer?
            </div>
            <p class="text-gray-700 body-1 ma-0 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="d-flex align-center">
            <img
              class=" h-10 rounded-circle mr-4"
              src="@/assets/images/gallery/sq-5.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="body-2">
              <p class="text-gray-900 leading-none">
                Jonathan Reinink
              </p>
              <p class="grey--text">
                Aug 18
              </p>
            </div>
          </div>
        </div>
      </div>
    </v-col>
    <v-col cols="6">
      <v-card class="mx-auto shadow-sm " flat max-width="450">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
          :aspect-ratio="16 / 9"
        />
        <v-card-title>
          Welcome Home...
        </v-card-title>
        <v-card-text class="body-1">
          Monday, 12:30 PM, Mostly Sunny
        </v-card-text>
        <v-row class="px-4 grey--text" align="center">
          <v-avatar size="24" class="mr-4">
            <v-img
              src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
              contain
            />
          </v-avatar>

          <span>81° / 62°</span>
        </v-row>

        <v-divider class="mt-6 mx-4" />

        <v-card-text>
          <v-chip class="mr-2">
            <v-icon left>
              mdi-brightness-5
            </v-icon>
            Turn on Lights
          </v-chip>
          <v-chip class="mr-2">
            <v-icon left>
              mdi-alarm-check
            </v-icon>
            Set alarm
          </v-chip>
          <v-chip>
            <v-icon left>
              mdi-blinds
            </v-icon>
            Close blinds
          </v-chip>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row> -->
</template>

<script>
export default {
    name: 'Home',

    data: () => ({
        features: [
            ['Routing', 'mdi-road-variant', 'blue-grey'],
            ['Vuetify ESLint', 'mdi-auto-fix', 'deep-purple accent-4'],
            ['SASS', 'mdi-sass', 'danger'],
            ['Base Components', 'mdi-cube-scan', 'indigo'],
            ['View Layouts', 'mdi-view-grid-outline', 'orange'],
            ['Webfont Loader', 'mdi-format-size', 'green accent-4']
        ],
        links: [
            ['//github.com/vuetifyjs/vuetify', 'Github', 'mdi-github-circle'],
            ['//vuetifyjs.com', 'Documentation', 'mdi-file-document'],
            ['//community.vuetifyjs.com', 'Community', 'mdi-account-multiple'],
            [
                '//github.com/users/johnleider/sponsors',
                'Support Vuetify',
                'mdi-vuetify'
            ]
        ]
    })
}
</script>
