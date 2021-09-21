<template>
    <v-row>
        <v-col cols="12" sm="6">
            <base-card>
                <v-card-text>
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                    >
                        <template v-slot:activator="{on, attrs}">
                            <v-text-field
                                v-model="date"
                                label="Birthday date"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            ref="picker"
                            v-model="date"
                            :max="new Date().toISOString().substr(0, 10)"
                            min="1950-01-01"
                            @change="save"
                        ></v-date-picker>
                    </v-menu>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" sm="6">
            <base-card>
                <v-card-text>
                    <v-menu
                        ref="menuTwo"
                        v-model="menuTwo"
                        :close-on-content-click="false"
                        :return-value.sync="dates"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                    >
                        <template v-slot:activator="{on, attrs}">
                            <v-combobox
                                v-model="dates"
                                multiple
                                chips
                                small-chips
                                label="Multiple picker in menu"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-combobox>
                        </template>
                        <v-date-picker
                            v-model="dates"
                            multiple
                            no-title
                            scrollable
                        >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="menuTwo = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.menuTwo.save(dates)"
                            >
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-menu>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <base-card>
                <v-card-text>
                    <v-menu
                        ref="menuThree"
                        v-model="menuThree"
                        :close-on-content-click="false"
                        :return-value.sync="dateTwo"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                    >
                        <template v-slot:activator="{on, attrs}">
                            <v-text-field
                                v-model="dateTwo"
                                label="Picker in menu"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model="dateTwo" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="menuThree = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.menuThree.save(dateTwo)"
                            >
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-menu>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="4" sm="6">
            <base-card>
                <v-card-text>
                    <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="date"
                        persistent
                        width="290px"
                    >
                        <template v-slot:activator="{on, attrs}">
                            <v-text-field
                                v-model="date"
                                label="Picker in dialog"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="modal = false">
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.dialog.save(date)"
                            >
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-dialog>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <base-card>
                <v-card-text>
                    <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                    >
                        <template v-slot:activator="{on, attrs}">
                            <v-text-field
                                v-model="date"
                                label="Picker without buttons"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date"
                            @input="menu2 = false"
                        ></v-date-picker>
                    </v-menu>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <v-date-picker v-model="picker" landscape></v-date-picker>
        </v-col>
        <v-col cols="12" md="6">
            <v-date-picker v-model="picker"></v-date-picker>
        </v-col>
        <v-col cols="12" sm="6">
            <v-date-picker v-model="dates" range></v-date-picker>
        </v-col>
        <v-col cols="12" sm="6">
            <v-text-field
                v-model="dateRangeText"
                label="Date range"
                prepend-icon="mdi-calendar"
                readonly
            ></v-text-field>
            model: {{ dates }}
        </v-col>
    </v-row>
</template>
<script>
export default {
    data: () => ({
        picker: new Date().toISOString().substr(0, 7),
        dates: ['2018-09-15', '2018-09-20'],
        menu: false,
        menuTwo: false,
        menu2: false,
        menuThree: false,
        modal: false,
        date: null,
        dateTwo: new Date().toISOString().substr(0, 10)
    }),
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        }
    },
    methods: {
        save(date) {
            this.$refs.menu.save(date)
        }
    },
    computed: {
        dateRangeText() {
            return this.dates.join(' ~ ')
        }
    }
}
</script>
