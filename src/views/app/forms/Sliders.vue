<template>
    <v-row>
        <v-col cols="12">
            <base-card>
                <v-card-title>Min & Max Values</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col class="">
                            <v-slider
                                v-model="slider"
                                class="align-center"
                                :max="max"
                                :min="min"
                                hide-details
                            >
                                <template v-slot:append>
                                    <v-text-field
                                        v-model="slider"
                                        class="mt-0 pt-0"
                                        hide-details
                                        single-line
                                        type="number"
                                        style="width: 60px"
                                    />
                                </template>
                            </v-slider>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-subheader>Min and max range slider</v-subheader>

                <v-card-text>
                    <v-row>
                        <v-col class="">
                            <v-range-slider
                                v-model="range"
                                :max="max"
                                :min="min"
                                hide-details
                                class="align-center"
                            >
                                <template v-slot:prepend>
                                    <v-text-field
                                        :value="range[0]"
                                        class="mt-0 pt-0"
                                        hide-details
                                        single-line
                                        type="number"
                                        style="width: 60px"
                                        @change="$set(range, 0, $event)"
                                    />
                                </template>
                                <template v-slot:append>
                                    <v-text-field
                                        :value="range[1]"
                                        class="mt-0 pt-0"
                                        hide-details
                                        single-line
                                        type="number"
                                        style="width: 60px"
                                        @change="$set(range, 1, $event)"
                                    />
                                </template>
                            </v-range-slider>
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Icons</v-card-title>
                <v-card-text>
                    <v-card flat color="transparent">
                        <v-subheader>Media volume</v-subheader>
                        <v-card-text>
                            <v-slider
                                v-model="media"
                                prepend-icon="mdi-volume-medium"
                            />
                        </v-card-text>

                        <v-subheader>Alarm volume</v-subheader>

                        <v-card-text>
                            <v-slider v-model="alarm" append-icon="mdi-alarm" />
                        </v-card-text>

                        <v-subheader>Icon click callback</v-subheader>

                        <v-card-text>
                            <v-slider
                                v-model="zoom"
                                append-icon="mdi-magnify-plus-outline"
                                prepend-icon="mdi-magnify-minus-outline"
                                @click:append="zoomIn"
                                @click:prepend="zoomOut"
                            />
                        </v-card-text>
                    </v-card>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Vertical sliders</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col>
                            <v-slider
                                v-model="value"
                                vertical
                                label="Regular"
                            />
                        </v-col>
                        <v-col>
                            <v-range-slider
                                v-model="value2"
                                vertical
                                label="Range"
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Thumb</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <v-subheader class="pl-0">
                                Show thumb when using slider
                            </v-subheader>
                            <v-slider v-model="slider" thumb-label />
                        </v-col>

                        <v-col cols="12">
                            <v-subheader class="pl-0">
                                Always show thumb label
                            </v-subheader>
                            <v-slider v-model="slider" thumb-label="always" />
                        </v-col>

                        <v-col cols="12">
                            <v-subheader class="pl-0">
                                Custom thumb size
                            </v-subheader>
                            <v-slider
                                v-model="slider"
                                :thumb-size="24"
                                thumb-label="always"
                            />
                        </v-col>

                        <v-col cols="12">
                            <v-subheader class="pl-0">
                                Custom thumb label
                            </v-subheader>
                            <v-slider
                                v-model="slider"
                                :thumb-size="24"
                                thumb-label="always"
                            >
                                <template v-slot:thumb-label="{value}">
                                    {{
                                        satisfactionEmojis[
                                            Math.min(Math.floor(value / 10), 9)
                                        ]
                                    }}
                                </template>
                            </v-slider>
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="6">
            <base-card>
                <v-card-title>Ticks</v-card-title>
                <v-card-text>
                    <v-card flat color="transparent">
                        <v-subheader>Show ticks when using slider</v-subheader>

                        <v-card-text>
                            <v-slider v-model="value" step="10" ticks />
                        </v-card-text>

                        <v-subheader>Always show ticks</v-subheader>

                        <v-card-text>
                            <v-slider
                                v-model="value"
                                step="10"
                                ticks="always"
                            />
                        </v-card-text>

                        <v-subheader>Tick size</v-subheader>

                        <v-card-text>
                            <v-slider
                                v-model="value"
                                step="10"
                                ticks="always"
                                tick-size="4"
                            />
                        </v-card-text>

                        <v-subheader>Tick labels</v-subheader>

                        <v-card-text>
                            <v-slider
                                v-model="fruits"
                                :tick-labels="ticksLabels"
                                :max="3"
                                step="1"
                                ticks="always"
                                tick-size="4"
                            />
                        </v-card-text>
                    </v-card>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Custom Colors</v-card-title>
                <v-card-text>
                    <v-slider
                        v-model="ex1.val"
                        :color="ex1.color"
                        :label="ex1.label"
                    />

                    <v-slider
                        v-model="ex2.val"
                        :label="ex2.label"
                        :track-color="ex2.color"
                    />

                    <v-slider
                        v-model="ex3.val"
                        :label="ex3.label"
                        :thumb-color="ex3.color"
                        thumb-label="always"
                    />
                </v-card-text>
            </base-card>
        </v-col>
        <v-col>
            <base-card>
                <v-card-title>Validation</v-card-title>
                <v-card-text>
                    <v-card flat color="transparent">
                        <v-subheader>Rules</v-subheader>

                        <v-card-text class="pt-0">
                            <v-slider
                                v-model="value"
                                :rules="rules"
                                label="How many?"
                                step="10"
                                thumb-label="always"
                                ticks
                            />
                        </v-card-text>

                        <v-subheader>Persistent hint</v-subheader>

                        <v-card-text class="pt-0">
                            <v-slider
                                v-model="value"
                                :rules="rules"
                                hint="40 in stock"
                                label="How many?"
                                persistent-hint
                                step="10"
                                thumb-label="always"
                                ticks
                            />
                        </v-card-text>
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
        title: 'Sliders'
    },
    data() {
        return {
            min: -50,
            max: 90,
            slider: 40,
            range: [-20, 70],
            media: 0,
            alarm: 0,
            zoom: 0,
            value: 10,
            value2: [20, 40],
            satisfactionEmojis: [
                '😭',
                '😢',
                '☹️',
                '🙁',
                '😐',
                '🙂',
                '😊',
                '😁',
                '😄',
                '😍'
            ],
            fruits: 0,
            ticksLabels: ['Figs', 'Lemon', 'Pear', 'Apple'],
            ex1: {label: 'color', val: 25, color: 'orange darken-3'},
            ex2: {label: 'track-color', val: 75, color: 'green lighten-1'},
            ex3: {label: 'thumb-color', val: 50, color: 'red'},
            rules: [(v) => v <= 40 || 'Only 40 in stock'],
            bpm: 40,
            interval: null,

            isPlaying: false
        }
    },
    methods: {
        zoomOut() {
            this.zoom = this.zoom - 10 || 0
        },
        zoomIn() {
            this.zoom = this.zoom + 10 || 100
        }
    }
}
</script>
