<template>
    <v-row>
        <v-col cols="12">
            <base-card>
                <v-card-title>Progress Circular</v-card-title>
                <v-card-text>
                    <div class="text-center">
                        <v-progress-circular :value="20"></v-progress-circular>

                        <v-progress-circular :value="40"></v-progress-circular>

                        <v-progress-circular :value="60"></v-progress-circular>

                        <v-progress-circular :value="80"></v-progress-circular>

                        <v-progress-circular :value="100"></v-progress-circular>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Colored</v-card-title>
                <v-card-text>
                    <div class="text-center">
                        <v-progress-circular
                            :value="100"
                            color="blue-grey"
                        ></v-progress-circular>

                        <v-progress-circular
                            :value="80"
                            color="deep-orange lighten-2"
                        ></v-progress-circular>

                        <v-progress-circular
                            :value="60"
                            color="brown"
                        ></v-progress-circular>

                        <v-progress-circular
                            :value="40"
                            color="lime"
                        ></v-progress-circular>

                        <v-progress-circular
                            :value="20"
                            color="indigo darken-2"
                        ></v-progress-circular>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Indeterminate</v-card-title>
                <v-card-text>
                    <div class="text-center">
                        <v-progress-circular
                            indeterminate
                            :value="100"
                            color="blue-grey"
                        ></v-progress-circular>

                        <v-progress-circular
                            indeterminate
                            :value="80"
                            color="deep-orange lighten-2"
                        ></v-progress-circular>

                        <v-progress-circular
                            indeterminate
                            :value="60"
                            color="brown"
                        ></v-progress-circular>

                        <v-progress-circular
                            indeterminate
                            :value="40"
                            color="lime"
                        ></v-progress-circular>

                        <v-progress-circular
                            indeterminate
                            :value="20"
                            color="indigo darken-2"
                        ></v-progress-circular>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Size & Width</v-card-title>
                <v-card-text>
                    <div class="text-center">
                        <v-progress-circular
                            :size="50"
                            color="primary"
                            indeterminate
                        ></v-progress-circular>

                        <v-progress-circular
                            :width="3"
                            color="red"
                            indeterminate
                        ></v-progress-circular>

                        <v-progress-circular
                            :size="70"
                            :width="7"
                            color="purple"
                            indeterminate
                        ></v-progress-circular>

                        <v-progress-circular
                            :width="3"
                            color="green"
                            indeterminate
                        ></v-progress-circular>

                        <v-progress-circular
                            :size="50"
                            color="amber"
                            indeterminate
                        ></v-progress-circular>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Rotate</v-card-title>
                <v-card-text>
                    <div class="text-center">
                        <v-progress-circular
                            :rotate="360"
                            :size="100"
                            :width="15"
                            :value="value"
                            color="teal"
                        >
                            {{ value }}
                        </v-progress-circular>

                        <v-progress-circular
                            :rotate="-90"
                            :size="100"
                            :width="15"
                            :value="value"
                            color="primary"
                        >
                            {{ value }}
                        </v-progress-circular>

                        <v-progress-circular
                            :rotate="90"
                            :size="100"
                            :width="15"
                            :value="value"
                            color="red"
                        >
                            {{ value }}
                        </v-progress-circular>

                        <v-progress-circular
                            :rotate="180"
                            :size="100"
                            :width="15"
                            :value="value"
                            color="danger"
                        >
                            {{ value }}
                        </v-progress-circular>
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Circular'
    },
    data() {
        return {
            interval: {},
            value: 0
        }
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.value === 100) {
                return (this.value = 0)
            }
            this.value += 10
        }, 1000)
    }
}
</script>
<style scoped>
.v-progress-circular {
    margin: 1rem;
}
</style>
