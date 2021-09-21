<template>
    <v-row>
        <v-col cols="12" md="6">
            <base-card class="h-full">
                <v-card-title>Usage</v-card-title>
                <v-card-text>
                    <div class="text-center">
                        <v-rating v-model="rating" />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Usage</v-card-title>
                <v-card-text>
                    <div class="text-center">
                        <v-rating v-model="rating2">
                            <template v-slot:item="props">
                                <v-icon
                                    :color="
                                        props.isFilled
                                            ? genColor(props.index)
                                            : 'grey lighten-1'
                                    "
                                    large
                                    @click="props.click"
                                >
                                    {{
                                        props.isFilled
                                            ? 'mdi-star-circle'
                                            : 'mdi-circle-outline'
                                    }}
                                </v-icon>
                            </template>
                        </v-rating>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Size Variants</v-card-title>
                <v-card-text>
                    <div class="text-center">
                        <v-rating
                            v-model="rating"
                            background-color="purple lighten-3"
                            color="purple"
                            small
                        />
                        <v-rating
                            v-model="rating"
                            background-color="danger lighten-3"
                            color="danger"
                        />
                        <v-rating
                            v-model="rating"
                            background-color="orange lighten-3"
                            color="orange"
                            medium
                        />
                        <v-rating
                            v-model="rating"
                            background-color="green lighten-3"
                            color="green"
                            large
                        />
                        <v-rating
                            v-model="rating"
                            background-color="red lighten-3"
                            color="red"
                            x-large
                        />
                        <v-rating
                            v-model="rating"
                            background-color="indigo lighten-3"
                            color="indigo"
                            size="64"
                        />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card class="h-full">
                <v-card-title>Colors</v-card-title>
                <v-card-text>
                    <div class="text-center">
                        <v-rating
                            v-model="rating"
                            background-color="purple lighten-3"
                            color="purple"
                        />
                        <v-rating
                            v-model="rating"
                            background-color="danger lighten-3"
                            color="danger"
                        />
                        <v-rating
                            v-model="rating"
                            background-color="orange lighten-3"
                            color="orange"
                        />
                        <v-rating
                            v-model="rating"
                            background-color="green lighten-3"
                            color="green"
                        />
                        <v-rating
                            v-model="rating"
                            background-color="red lighten-3"
                            color="red"
                        />
                        <v-rating
                            v-model="rating"
                            background-color="indigo lighten-3"
                            color="indigo"
                        />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card class="h-full">
                <v-card-title>Incremented</v-card-title>
                <v-card-text>
                    <v-card-title class="headline" primary-title>
                        Rate Our Framework
                    </v-card-title>
                    <v-card-text>
                        If you enjoy using Vuetify, please take a few seconds to
                        rate your experience with the framework. It really
                        helps!

                        <div class="text-center mt-12">
                            <v-rating
                                v-model="rating"
                                color="yellow darken-3"
                                background-color="grey darken-1"
                                empty-icon="$ratingFull"
                                half-increments
                                hover
                            />
                        </div>
                    </v-card-text>
                    <v-divider />
                    <v-card-actions class="justify-space-between">
                        <v-btn text>
                            No Thanks
                        </v-btn>
                        <v-btn color="primary" text>
                            Rate Now
                        </v-btn>
                    </v-card-actions>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card class="h-full">
                <v-card-title>Incremented</v-card-title>
                <v-card-text>
                    <v-card
                        class="mx-auto elevation-20"
                        color="cyan accent-4"
                        dark
                        style="max-width: 400px;"
                    >
                        <v-row justify="space-between">
                            <v-col cols="8">
                                <v-card-title primary-title>
                                    <div>
                                        <div class="headline">
                                            Halycon Days
                                        </div>
                                        <div>Ellie Goulding</div>
                                        <div>(2013)</div>
                                    </div>
                                </v-card-title>
                            </v-col>
                            <v-img
                                class="shrink ma-2"
                                contain
                                height="125px"
                                src="@/assets/images/gallery/sq-6.jpg"
                                style="flex-basis: 125px"
                            />
                        </v-row>
                        <v-divider dark />
                        <v-card-actions class="pa-4">
                            Rate this album
                            <v-spacer />
                            <span
                                class="grey--text text--lighten-2 caption mr-2"
                            >
                                ({{ rating }})
                            </span>
                            <v-rating
                                v-model="rating"
                                background-color="white"
                                color="yellow accent-4"
                                dense
                                half-increments
                                hover
                                size="18"
                            />
                        </v-card-actions>
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
        title: 'Ratings'
    },
    data: () => ({
        rating: 3,
        colors: ['green', 'purple', 'orange', 'indigo', 'red'],
        rating2: 4.5
    }),
    methods: {
        genColor(i) {
            return this.colors[i]
        }
    }
}
</script>
