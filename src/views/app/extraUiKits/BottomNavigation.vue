<template>
    <v-row>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Usage
                </v-card-title>
                <v-card-text>
                    <v-bottom-navigation v-model="bottomNav">
                        <v-btn value="recent">
                            <span>Recent</span>
                            <v-icon>mdi-history</v-icon>
                        </v-btn>

                        <v-btn value="favorites">
                            <span>Favorites</span>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>

                        <v-btn value="nearby">
                            <span>Nearby</span>
                            <v-icon>mdi-map-marker</v-icon>
                        </v-btn>
                    </v-bottom-navigation>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Color
                </v-card-title>
                <v-card-text>
                    <v-bottom-navigation
                        :value="activeBtn"
                        color="purple lighten-1"
                    >
                        <v-btn>
                            <span>Recents</span>
                            <v-icon>mdi-history</v-icon>
                        </v-btn>

                        <v-btn>
                            <span>Favorites</span>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>

                        <v-btn>
                            <span>Nearby</span>
                            <v-icon>mdi-map-marker</v-icon>
                        </v-btn>
                    </v-bottom-navigation>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Shift
                </v-card-title>
                <v-card-text>
                    <v-bottom-navigation v-model="bottomNav2" dark shift>
                        <v-btn>
                            <span>Video</span>
                            <v-icon>mdi-television-play</v-icon>
                        </v-btn>

                        <v-btn>
                            <span>Music</span>
                            <v-icon>mdi-music-note</v-icon>
                        </v-btn>

                        <v-btn>
                            <span>Book</span>
                            <v-icon>mdi-book</v-icon>
                        </v-btn>

                        <v-btn>
                            <span>Image</span>
                            <v-icon>mdi-image</v-icon>
                        </v-btn>
                    </v-bottom-navigation>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Shift
                </v-card-title>
                <v-card-text>
                    <div class="overflow-hidden">
                        <div class="text-center mb-2">
                            <v-btn
                                text
                                color="deep-purple"
                                @click="showNav = !showNav"
                            >
                                Toggle Nav
                            </v-btn>
                        </div>

                        <v-bottom-navigation
                            v-model="activeBtn"
                            :input-value="showNav"
                            color="indigo"
                        >
                            <v-btn>
                                <span>Recents</span>
                                <v-icon>mdi-history</v-icon>
                            </v-btn>

                            <v-btn>
                                <span>Favorites</span>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>

                            <v-btn>
                                <span>Nearby</span>
                                <v-icon>mdi-map-marker</v-icon>
                            </v-btn>
                        </v-bottom-navigation>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Hide On Scroll
                </v-card-title>
                <v-card-text>
                    <v-card
                        class="overflow-hidden"
                        height="200"
                        max-width="500"
                    >
                        <v-bottom-navigation
                            scroll-target="#scroll-area-1"
                            hide-on-scroll
                            absolute
                            horizontal
                        >
                            <v-btn text color="deep-purple accent-4">
                                <span>Recents</span>
                                <v-icon>mdi-history</v-icon>
                            </v-btn>

                            <v-btn text color="deep-purple accent-4">
                                <span>Favorites</span>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>

                            <v-btn text color="deep-purple accent-4">
                                <span>Nearby</span>
                                <v-icon>mdi-map-marker</v-icon>
                            </v-btn>
                        </v-bottom-navigation>

                        <v-sheet
                            id="scroll-area-1"
                            class="overflow-y-auto"
                            max-height="600"
                        >
                            <v-container style="height: 1500px;"> </v-container>
                        </v-sheet>
                    </v-card>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Scroll threshold
                </v-card-title>
                <v-card-text>
                    <v-card
                        class="overflow-hidden"
                        height="200"
                        max-width="500"
                    >
                        <v-bottom-navigation
                            scroll-target="#scroll-area-2"
                            hide-on-scroll
                            scroll-threshold="500"
                            absolute
                            color="warning"
                            horizontal
                        >
                            <v-btn>
                                <span>Recents</span>
                                <v-icon>mdi-history</v-icon>
                            </v-btn>

                            <v-btn>
                                <span>Favorites</span>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>

                            <v-btn>
                                <span>Nearby</span>
                                <v-icon>mdi-map-marker</v-icon>
                            </v-btn>
                        </v-bottom-navigation>

                        <v-sheet
                            id="scroll-area-2"
                            class="overflow-y-auto"
                            max-height="600"
                        >
                            <v-container style="height: 1500px;"> </v-container>
                        </v-sheet>
                    </v-card>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Bottom Navigation'
    },
    data() {
        return {
            bottomNav: 'recent',
            activeBtn: 1,
            // shift
            bottomNav2: 3,
            // toggle
            activeBtn2: 1,
            showNav: true
        }
    },
    // shift
    computed: {
        color() {
            switch (this.bottomNav2) {
                case 0:
                    return 'blue-grey'
                case 1:
                    return 'teal'
                case 2:
                    return 'brown'
                case 3:
                    return 'indigo'
            }
        }
    }
}
</script>
