<template>
    <v-row>
        <v-col cols="12">
            <base-card>
                <v-card-title>Playground</v-card-title>
                <v-card-text>
                    <v-row align="center" justify="space-around">
                        <v-switch
                            v-model="disabled"
                            class="ma-2"
                            label="Disabled"
                        />
                        <v-switch
                            v-model="readonly"
                            class="ma-2"
                            label="Readonly"
                        />
                        <v-switch v-model="chips" class="ma-2" label="Chips" />
                        <v-switch
                            v-model="multiple"
                            class="ma-2"
                            label="Multiple"
                        />
                        <v-switch
                            v-model="appendIcon"
                            class="ma-2"
                            label="Append icon"
                        />
                        <v-switch
                            v-model="appendSlot"
                            class="ma-2"
                            label="Append slot"
                        />
                        <v-switch
                            v-model="appendItemSlot"
                            class="ma-2"
                            label="Append item slot"
                        />
                        <v-switch
                            v-model="prependIcon"
                            class="ma-2"
                            label="Prepend icon"
                        />
                        <v-switch
                            v-model="prependSlot"
                            class="ma-2"
                            label="Prepend slot"
                        />
                        <v-switch
                            v-model="prependItemSlot"
                            class="ma-2"
                            label="Prepend item slot"
                        />
                        <v-switch
                            v-model="selectSlot"
                            class="ma-2"
                            label="Selection slot"
                        />
                        <v-col cols="12">
                            <v-select
                                v-model="model"
                                :items="items"
                                :disabled="disabled"
                                :readonly="readonly"
                                :chips="chips"
                                :multiple="multiple"
                                :append-icon="appendIcon ? 'mdi-plus' : ''"
                                :prepend-icon="prependIcon ? 'mdi-minus' : ''"
                                label="Label"
                            >
                                <v-icon
                                    v-if="appendSlot"
                                    slot="append"
                                    color="green"
                                >
                                    mdi-plus
                                </v-icon>
                                <v-icon
                                    v-if="prependSlot"
                                    slot="prepend"
                                    color="red"
                                >
                                    mdi-minus
                                </v-icon>
                                <v-icon
                                    v-if="appendItemSlot"
                                    slot="append-item"
                                >
                                    mdi-contain-end
                                </v-icon>
                                <v-icon
                                    v-if="prependItemSlot"
                                    slot="prepend-item"
                                >
                                    mdi-contain-start
                                </v-icon>
                                <template
                                    v-if="selectSlot"
                                    v-slot:selection="{item, index}"
                                >
                                    <v-chip v-if="index === 0">
                                        <span>{{ item }}</span>
                                    </v-chip>
                                    <span
                                        v-if="index === 1"
                                        class="grey--text caption"
                                        >(+{{ model.length - 1 }} others)</span
                                    >
                                </template>
                            </v-select>
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col>
            <base-card class="h-full">
                <v-card-title>Usage</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select :items="items" label="Standard" />
                        </v-col>

                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select
                                :items="items"
                                filled
                                label="Filled style"
                            />
                        </v-col>

                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select
                                :items="items"
                                label="Outlined style"
                                outlined
                            />
                        </v-col>

                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select :items="items" label="Solo field" solo />
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col>
            <base-card>
                <v-card-title>Light Theme</v-card-title>
                <v-card-text>
                    <v-row align="center">
                        <v-col cols="12" sm="6">
                            <v-select
                                v-model="value"
                                :items="items"
                                attach
                                chips
                                label="Chips"
                                multiple
                            />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-select
                                v-model="value"
                                :items="items"
                                filled
                                chips
                                label="Chips"
                                multiple
                            />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-select
                                v-model="value"
                                :items="items"
                                chips
                                label="Chips"
                                multiple
                                outlined
                            />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-select
                                v-model="value"
                                :items="items"
                                chips
                                label="Chips"
                                multiple
                                solo
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Icons </v-card-title>
                <v-card-text>
                    <v-row align="center">
                        <v-col cols="6">
                            <v-subheader>Prepended icon</v-subheader>
                        </v-col>
                        <v-col cols="6">
                            <v-select
                                v-model="e1"
                                :items="states"
                                menu-props="auto"
                                label="Select"
                                hide-details
                                prepend-icon="mdi-map"
                                single-line
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-subheader>Appended icon</v-subheader>
                        </v-col>
                        <v-col cols="6">
                            <v-select
                                v-model="e2"
                                :items="states"
                                append-outer-icon="map"
                                menu-props="auto"
                                hide-details
                                label="Select"
                                single-line
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Multiple</v-card-title>
                <v-card-text>
                    <v-row align="center">
                        <v-col cols="12" sm="6">
                            <v-subheader
                                v-text="'Multiple with persistent hint'"
                            />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-select
                                v-model="e6"
                                :items="states"
                                :menu-props="{maxHeight: '400'}"
                                label="Select"
                                multiple
                                hint="Pick your favorite states"
                                persistent-hint
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-subheader
                                v-text="'Multiple (Chips) with persistent hint'"
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-select
                                v-model="e7"
                                :items="states"
                                label="Select"
                                multiple
                                chips
                                hint="What are the target regions"
                                persistent-hint
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col>
            <base-card>
                <v-card-title>Dense</v-card-title>
                <v-card-text>
                    <v-row align="center">
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select :items="items" label="Standard" dense />
                        </v-col>

                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select
                                :items="items"
                                filled
                                label="Filled style"
                                dense
                            />
                        </v-col>

                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select
                                :items="items"
                                label="Outlined style"
                                dense
                                outlined
                            />
                        </v-col>

                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select
                                :items="items"
                                label="Solo field"
                                dense
                                solo
                            />
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
        title: 'Selects'
    },
    data: () => ({
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        disabled: false,
        readonly: false,
        chips: false,
        multiple: false,
        appendIcon: false,
        appendSlot: false,
        appendItemSlot: false,
        prependIcon: false,
        prependSlot: false,
        prependItemSlot: false,
        selectSlot: false,
        model: 'Foo',
        value: ['foo', 'bar', 'fizz', 'buzz'],
        // icons
        e1: 'Florida',
        e2: 'Texas',
        e3: null,
        e4: null,
        e6: [],
        e7: [],
        itemsTwo: [
            {text: 'State 1'},
            {text: 'State 2'},
            {text: 'State 3'},
            {text: 'State 4'},
            {text: 'State 5'},
            {text: 'State 6'},
            {text: 'State 7'}
        ],
        states: [
            'Alabama',
            'Alaska',
            'American Samoa',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'District of Columbia',
            'Federated States of Micronesia',
            'Florida',
            'Georgia',
            'Guam',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Marshall Islands',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Northern Mariana Islands',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Palau',
            'Pennsylvania',
            'Puerto Rico',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virgin Island',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ]
    }),
    watch: {
        multiple(val) {
            if (val) this.model = [this.model]
            else this.model = this.model[0] || 'Foo'
        }
    }
}
</script>
