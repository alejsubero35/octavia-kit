<template>
    <div>
        <v-row justify="center">
            <v-col cols="4">
                <base-card card-class="warning lighten-3">
                    <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    />
                    <v-card-title class="font-weight-bold text-h5 ">
                        Top 10 Australian beaches
                    </v-card-title>

                    <div class="text--primary px-6">
                        <p class=" body-1 ma-0 ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                            exercitationem praesentium nihil.
                        </p>
                    </div>

                    <v-card-actions class="py-4">
                        <v-chip
                            class="ma-2 grey lighten-2 px-3 py-1 body-2 font-weight-medium grey--text text--darken-3"
                            small
                        >
                            #Photography
                        </v-chip>
                        <v-chip
                            class="d-inline-block grey lighten-2  px-3 py-1 body-2 font-weight-medium grey--text text--darken-3 mr-2"
                            >#travel</v-chip
                        >
                        <v-chip
                            class="d-inline-block grey lighten-2  px-3 py-1 body-2 font-weight-medium grey--text text--darken-3"
                            >#winter</v-chip
                        >
                    </v-card-actions>
                </base-card>
            </v-col>

            <v-col cols="4">
                <base-card>
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
                        <p class="grey--text text--darken-3 body-1 ma-0 ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 py-4">
                        <v-chip
                            class="d-inline-block grey lighten-2  px-3 py-1 body-2 font-weight-medium grey--text text--darken-3 mr-2"
                            >#photography</v-chip
                        >
                        <v-chip
                            class="d-inline-block grey lighten-2  px-3 py-1 body-2 font-weight-medium grey--text text--darken-3 mr-2"
                            >#travel</v-chip
                        >
                        <v-chip
                            class="d-inline-block grey lighten-2  px-3 py-1 body-2 font-weight-medium grey--text text--darken-3"
                            >#winter</v-chip
                        >
                    </div>
                </base-card>
            </v-col>

            <v-col cols="4">
                <base-card>
                    <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                        <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>

                    <div class="text--primary px-6">
                        <p class=" body-1 ma-0 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>

                    <v-card-actions class="py-4">
                        <div class="d-flex flex-wrap">
                            <v-chip
                                class="d-inline-block grey lighten-2  px-3 py-1 body-2 font-weight-medium grey--text text--darken-3 mr-2"
                                >#photography</v-chip
                            >
                            <v-chip
                                class="d-inline-block grey lighten-2  px-3 py-1 body-2 font-weight-medium grey--text text--darken-3 mr-2"
                                >#travel</v-chip
                            >
                            <v-chip
                                class="d-inline-block grey lighten-2  px-3 py-1 body-2 font-weight-medium grey--text text--darken-3"
                                >#winter</v-chip
                            >
                        </div>
                    </v-card-actions>
                </base-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="6">
                <base-card class="">
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
                </base-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Cards'
    },

    data: () => ({
        transition: 'scale-transition'
    })
}
</script>
