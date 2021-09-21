<template>
    <v-row>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Usage</v-card-title>
                <v-card-text>
                    <v-progress-linear value="15" />
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Usage</v-card-title>
                <v-card-text>
                    <div style="min-height: 4px;">
                        <v-progress-linear
                            v-model="value"
                            color="danger"
                            :active="show"
                            :indeterminate="query"
                            :query="true"
                        />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Determinate</v-card-title>
                <v-card-text>
                    <div>
                        <v-progress-linear
                            v-model="valueDeterminate"
                            color="deep-purple accent-4"
                        />
                        <br />
                        <v-progress-linear
                            v-model="valueDeterminate"
                            color="danger"
                        />
                        <br />
                        <v-progress-linear
                            v-model="valueDeterminate"
                            color="indigo darken-2"
                        />
                        <br />
                        <v-progress-linear
                            v-model="valueDeterminate"
                            color="amber"
                        />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Indeterminate</v-card-title>
                <v-card-text>
                    <div>
                        <v-progress-linear
                            indeterminate
                            color="yellow darken-2"
                        />
                        <br />
                        <v-progress-linear indeterminate color="green" />
                        <br />
                        <v-progress-linear indeterminate color="teal" />
                        <br />
                        <v-progress-linear indeterminate color="cyan" />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Custom Colors</v-card-title>
                <v-card-text>
                    <div>
                        <v-progress-linear
                            background-color="danger lighten-3"
                            color="danger lighten-1"
                            value="15"
                        />
                        <br />
                        <v-progress-linear
                            background-color="blue-grey"
                            color="lime"
                            value="30"
                        />
                        <br />
                        <v-progress-linear
                            background-color="success"
                            color="error"
                            value="45"
                        />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Stream</v-card-title>
                <v-card-text>
                    <div>
                        <v-progress-linear
                            color="red lighten-2"
                            buffer-value="0"
                            stream
                        />
                        <br />
                        <v-progress-linear
                            color="teal"
                            buffer-value="0"
                            value="20"
                            stream
                        />
                        <br />
                        <v-progress-linear
                            buffer-value="50"
                            stream
                            color="cyan"
                        />
                        <br />
                        <v-progress-linear
                            buffer-value="60"
                            value="40"
                            stream
                            color="orange"
                        />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Reversed</v-card-title>
                <v-card-text>
                    <div>
                        <v-progress-linear color="danger" value="15" reverse />

                        <br />

                        <v-progress-linear color="lime" indeterminate reverse />

                        <br />

                        <v-progress-linear
                            buffer-value="55"
                            color="success"
                            reverse
                            stream
                            value="30"
                        />

                        <br />

                        <v-subheader
                            >In specific cases you may want progress to display
                            in left-to-right mode regardless of the application
                            direction (LTR or RTL):</v-subheader
                        >

                        <v-progress-linear :reverse="$vuetify.rtl" value="15" />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Striped</v-card-title>
                <v-card-text>
                    <div>
                        <v-progress-linear
                            color="light-blue"
                            height="10"
                            value="10"
                            striped
                        />
                        <br />
                        <v-progress-linear
                            color="light-green darken-4"
                            height="10"
                            value="20"
                            striped
                        />
                        <br />
                        <v-progress-linear
                            height="10"
                            value="45"
                            striped
                            color="lime"
                        />
                        <br />
                        <v-progress-linear
                            value="60"
                            height="10"
                            striped
                            color="deep-orange"
                        />
                    </div>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Toolbar Loader </v-card-title>
                <v-card-text>
                    <v-system-bar>
                        <v-spacer />
                        <v-icon>mdi-square</v-icon>
                        <v-icon>mdi-circle</v-icon>
                        <v-icon>mdi-triangle</v-icon>
                    </v-system-bar>

                    <v-toolbar>
                        <v-btn icon>
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>

                        <v-toolbar-title>My Recipes</v-toolbar-title>

                        <v-progress-linear
                            :active="loading"
                            :indeterminate="loading"
                            absolute
                            bottom
                            color="deep-purple accent-4"
                        />

                        <v-spacer />

                        <v-btn icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-toolbar>

                    <v-container style="height: 282px;">
                        <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                        >
                            <v-scale-transition>
                                <div v-if="!loading" class="text-center">
                                    <v-btn
                                        color="primary"
                                        @click="loading = true"
                                    >
                                        Start loading
                                    </v-btn>
                                </div>
                            </v-scale-transition>
                        </v-row>
                    </v-container>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>File Loader</v-card-title>
                <v-card-text>
                    <v-toolbar color="deep-purple accent-4" dark prominent>
                        <v-app-bar-nav-icon />

                        <v-toolbar-title>My Files</v-toolbar-title>

                        <v-btn absolute bottom color="white" fab left light>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>

                        <v-spacer />

                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-toolbar>

                    <v-container style="height: 400px;">
                        <v-row
                            class="fill-height"
                            align-content="center"
                            justify="center"
                        >
                            <v-col class="subtitle-1 text-center" cols="12">
                                Getting your files
                            </v-col>
                            <v-col cols="6">
                                <v-progress-linear
                                    color="deep-purple accent-4"
                                    indeterminate
                                    rounded
                                    height="6"
                                />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Linear'
    },
    data() {
        return {
            value: 0,
            query: false,
            show: true,
            interval: 0,
            valueDeterminate: 50,
            loading: false
        }
    },
    watch: {
        loading(val) {
            if (!val) return

            setTimeout(() => (this.loading = false), 3000)
        }
    },

    mounted() {
        this.queryAndIndeterminate()
    },

    beforeDestroy() {
        clearInterval(this.interval)
    },

    methods: {
        queryAndIndeterminate() {
            this.query = true
            this.show = true
            this.value = 0

            setTimeout(() => {
                this.query = false

                this.interval = setInterval(() => {
                    if (this.value === 100) {
                        clearInterval(this.interval)
                        this.show = false
                        return setTimeout(this.queryAndIndeterminate, 2000)
                    }
                    this.value += 25
                }, 1000)
            }, 2500)
        }
    }
}
</script>
