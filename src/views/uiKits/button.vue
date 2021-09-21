<template>
    <v-row>
        <!-- Example -->
        <v-col cols="12">
            <v-card>
                <v-card-title>Example</v-card-title>
                <v-card-text>
                    <v-btn class="ma-2" color="primary">
                        Primary
                    </v-btn>
                    <v-btn class="ma-2" color="info">
                        Info
                    </v-btn>
                    <v-btn class="ma-2" color="error">
                        Danger
                    </v-btn>
                    <v-btn class="ma-2" color="warning">
                        Warning
                    </v-btn>
                    <v-btn class="ma-2" color="success">
                        Success
                    </v-btn>
                    <v-btn class="text-black" color="secondary" dark>
                        Secondary
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-col>

        <!-- text-button f  -->
        <v-col cols="12">
            <v-card>
                <v-card-title>Text</v-card-title>
                <v-card-text>
                    <v-btn text class="ma-2" color="primary">
                        Primary
                    </v-btn>
                    <v-btn text class="ma-2" color="info">
                        Info
                    </v-btn>
                    <v-btn text class="ma-2" color="error">
                        Danger
                    </v-btn>
                    <v-btn text class="ma-2" color="warning">
                        Warning
                    </v-btn>
                    <v-btn text class="ma-2" color="success">
                        Success
                    </v-btn>
                    <v-btn text color="secondary" dark>
                        Secondary
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-col>

        <!-- Outline-button  -->
        <v-col cols="12">
            <v-card>
                <v-card-title>Outlined</v-card-title>
                <v-card-text>
                    <v-btn outlined class="ma-2" color="primary">
                        Primary
                    </v-btn>
                    <v-btn outlined class="ma-2" color="info">
                        Info
                    </v-btn>
                    <v-btn outlined class="ma-2" color="error">
                        Danger
                    </v-btn>
                    <v-btn outlined class="ma-2" color="warning">
                        Warning
                    </v-btn>
                    <v-btn outlined class="ma-2" color="success">
                        Success
                    </v-btn>
                    <v-btn outlined color="indigo" dark>
                        Indigo
                    </v-btn>
                    <v-btn class="ma-2" outlined fab color="teal">
                        <v-icon>mdi-format-list-bulleted-square</v-icon>
                    </v-btn>
                    <v-btn class="ma-2" outlined large fab color="indigo">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-col>

        <!-- Icon-button  -->
        <v-col cols="12" md="6">
            <v-card class="h-full">
                <v-card-title>Icon</v-card-title>
                <v-card-text>
                    <v-btn class="ma-2" icon color="danger">
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn class="ma-2" icon color="indigo">
                        <v-icon>mdi-star</v-icon>
                    </v-btn>
                    <v-btn class="ma-2" icon color="success">
                        <v-icon>mdi-thumb-up</v-icon>
                    </v-btn>
                    <v-btn class="ma-2" icon color="primary">
                        <v-icon>mdi-puzzle-edit-outline</v-icon>
                    </v-btn>
                    <v-btn class="ma-2" icon color="warning">
                        <v-icon>mdi-account</v-icon>
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-col>

        <!-- Floating-button  -->
        <v-col cols="12" md="6">
            <v-card>
                <v-card-title>Floating</v-card-title>
                <v-card-text>
                    <v-btn class="ma-2" fab dark small color="primary">
                        <v-icon dark>
                            mdi-minus
                        </v-icon>
                    </v-btn>
                    <v-btn class="ma-2" fab dark small color="primary">
                        <v-icon dark>
                            mdi-minus
                        </v-icon>
                    </v-btn>
                    <v-btn class="ma-2" fab dark small color="danger">
                        <v-icon dark>
                            mdi-heart
                        </v-icon>
                    </v-btn>

                    <v-btn class="ma-2" fab dark color="indigo">
                        <v-icon dark>
                            mdi-plus
                        </v-icon>
                    </v-btn>

                    <v-btn class="ma-2" fab dark color="teal">
                        <v-icon dark>
                            mdi-format-list-bulleted-square
                        </v-icon>
                    </v-btn>

                    <v-btn class="ma-2" fab dark large color="cyan">
                        <v-icon dark>
                            mdi-pencil
                        </v-icon>
                    </v-btn>

                    <v-btn class="ma-2" fab dark large color="purple">
                        <v-icon dark>
                            mdi-android
                        </v-icon>
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-col>

        <!-- Sizing-button  -->
        <v-col cols="12">
            <v-card>
                <v-card-title>Sizing</v-card-title>
                <v-card-text>
                    <v-btn class="ma-2" x-small color="info" dark>
                        Extra small Button
                    </v-btn>
                    <v-btn class="ma-2" small color="danger" dark>
                        Small Button
                    </v-btn>
                    <v-btn class="ma-2" dark color="warning">
                        Normal Button
                    </v-btn>
                    <v-btn class="ma-2" large dark color="warning">
                        Large Button
                    </v-btn>
                    <v-btn class="ma-2" x-large dark color="primary">
                        Extra Large Button
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-col>

        <!-- Loaders-button  -->
        <v-col cols="12">
            <v-card>
                <v-card-title>Loaders</v-card-title>
                <v-card-text>
                    <v-btn
                        class="ma-2"
                        :loading="loading"
                        :disabled="loading"
                        color="primary"
                        @click="loader = 'loading'"
                    >
                        Accept Terms
                    </v-btn>

                    <v-btn
                        :loading="loading3"
                        :disabled="loading3"
                        color="blue-grey"
                        class="m-2 white--text"
                        @click="loader = 'loading3'"
                    >
                        Upload
                        <v-icon right dark>
                            mdi-cloud-upload
                        </v-icon>
                    </v-btn>

                    <v-btn
                        class="ma-2"
                        :loading="loading2"
                        :disabled="loading2"
                        color="success"
                        @click="loader = 'loading2'"
                    >
                        Custom Loader
                        <template v-slot:loader>
                            <span>Loading...</span>
                        </template>
                    </v-btn>

                    <v-btn
                        class="ma-2"
                        :loading="loading4"
                        :disabled="loading4"
                        color="info"
                        @click="loader = 'loading4'"
                    >
                        Icon Loader
                        <template v-slot:loader>
                            <span class="custom-loader">
                                <v-icon light>mdi-cached</v-icon>
                            </span>
                        </template>
                    </v-btn>

                    <v-btn
                        :loading="loading5"
                        :disabled="loading5"
                        color="blue-grey"
                        class="m-2 white--text"
                        fab
                        @click="loader = 'loading5'"
                    >
                        <v-icon dark>
                            mdi-cloud-upload
                        </v-icon>
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
// require component
import {codemirror} from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'
export default {
    name: 'Button',
    components: {
        codemirror
    },
    data() {
        return {
            loader: null,
            loading: false,
            loading2: false,
            loading3: false,
            loading4: false,
            loading5: false
        }
    },
    watch: {
        loader() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        }
    }
}
</script>
<style>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
}
@-moz-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@-webkit-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@-o-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
