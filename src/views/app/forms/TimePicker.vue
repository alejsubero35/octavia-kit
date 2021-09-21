<template>
    <v-row>
        <v-col cols="12" md="6">
            <base-card class="h-full">
                <v-card-title>Usage</v-card-title>
                <v-card-text>
                    <v-row justify="center">
                        <v-time-picker v-model="picker" />
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Color</v-card-title>
                <v-card-text>
                    <v-row justify="space-around">
                        <v-time-picker color="green lighten-1" class="ma-2" />
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col>
            <base-card>
                <v-card-title>In dialog and Menu</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="11" sm="5">
                            <v-menu
                                ref="menu"
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="time"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                            >
                                <template v-slot:activator="{on, attrs}">
                                    <v-text-field
                                        v-model="time"
                                        label="Picker in menu"
                                        prepend-icon="mdi-clock-outline"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    />
                                </template>
                                <v-time-picker
                                    v-if="menu2"
                                    v-model="time"
                                    full-width
                                    @click:minute="$refs.menu.save(time)"
                                />
                            </v-menu>
                        </v-col>
                        <v-spacer />
                        <v-col cols="11" sm="5">
                            <v-dialog
                                ref="dialog"
                                v-model="modal2"
                                :return-value.sync="time"
                                persistent
                                width="290px"
                            >
                                <template v-slot:activator="{on, attrs}">
                                    <v-text-field
                                        v-model="time"
                                        label="Picker in dialog"
                                        prepend-icon="mdi-clock-outline"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    />
                                </template>
                                <v-time-picker
                                    v-if="modal2"
                                    v-model="time"
                                    full-width
                                >
                                    <v-spacer />
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="modal2 = false"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="$refs.dialog.save(time)"
                                    >
                                        OK
                                    </v-btn>
                                </v-time-picker>
                            </v-dialog>
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Timepicker'
    },
    components: {},
    data() {
        return {
            picker: null,
            time: null,
            menu2: false,
            modal2: false
        }
    }
}
</script>
