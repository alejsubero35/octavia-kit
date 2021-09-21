<template>
    <v-row>
        <v-col cols="12">
            <base-card>
                <v-card-title>Multiple combobox</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <v-combobox
                                v-model="select"
                                :items="itemsOne"
                                label="Select a favorite activity or create a new one"
                                multiple
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-combobox
                                v-model="select"
                                :items="itemsOne"
                                label="I use chips"
                                multiple
                                chips
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-combobox
                                v-model="select"
                                :items="itemsOne"
                                label="I use a scoped slot"
                                multiple
                                chips
                            >
                                <template v-slot:selection="data">
                                    <v-chip
                                        :key="JSON.stringify(data.item)"
                                        v-bind="data.attrs"
                                        :input-value="data.selected"
                                        :disabled="data.disabled"
                                        @click:close="
                                            data.parent.selectItem(data.item)
                                        "
                                    >
                                        <v-avatar
                                            class="accent white--text"
                                            left
                                            v-text="
                                                data.item.slice(0, 1).totext -
                                                    uppercase()
                                            "
                                        />
                                        {{ data.item }}
                                    </v-chip>
                                </template>
                            </v-combobox>
                        </v-col>
                        <v-col cols="12">
                            <v-combobox
                                v-model="select"
                                label="I'm readonly"
                                chips
                                multiple
                                readonly
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Dense</v-card-title>
                <v-card-text>
                    <v-combobox
                        v-model="select"
                        :items="itemsOne"
                        label="Combobox"
                        multiple
                        outlined
                        dense
                    />
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Advanced Custom Options</v-card-title>
                <v-card-text>
                    <v-combobox
                        v-model="model"
                        :filter="filter"
                        :hide-no-data="!search"
                        :items="items"
                        :search-input.sync="search"
                        hide-selected
                        label="Search for an option"
                        multiple
                        small-chips
                        solo
                    >
                        <template v-slot:no-data>
                            <v-list-item>
                                <span class="subheading">Create</span>
                                <v-chip
                                    :color="`${colors[nonce - 1]} lighten-3`"
                                    label
                                    small
                                >
                                    {{ search }}
                                </v-chip>
                            </v-list-item>
                        </template>
                        <template
                            v-slot:selection="{attrs, item, parent, selected}"
                        >
                            <v-chip
                                v-if="item === Object(item)"
                                v-bind="attrs"
                                :color="`${item.color} lighten-3`"
                                :input-value="selected"
                                label
                                small
                            >
                                <span class="pr-2">
                                    {{ item.text }}
                                </span>
                                <v-icon small @click="parent.selectItem(item)">
                                    mdi-close
                                </v-icon>
                            </v-chip>
                        </template>
                        <template v-slot:item="{index, item}">
                            <v-text-field
                                v-if="editing === item"
                                v-model="editing.text"
                                autofocus
                                flat
                                background-color="transparent"
                                hide-details
                                solo
                                @keyup.enter="edit(index, item)"
                            />
                            <v-chip
                                v-else
                                :color="`${item.color} lighten-3`"
                                dark
                                label
                                small
                            >
                                {{ item.text }}
                            </v-chip>
                            <v-spacer />
                            <v-list-item-action @click.stop>
                                <v-btn
                                    icon
                                    @click.stop.prevent="edit(index, item)"
                                >
                                    <v-icon>{{
                                        editing !== item
                                            ? 'mdi-pencil'
                                            : 'mdi-check'
                                    }}</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </template>
                    </v-combobox>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'ComboBox'
    },
    data() {
        return {
            select: ['Vuetify', 'Programming'],
            itemsOne: ['Programming', 'Design', 'Vue', 'Vuetify'],
            // advanced custom options
            activator: null,
            attach: null,
            colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
            editing: null,
            index: -1,
            items: [
                {header: 'Select an option or create one'},
                {
                    text: 'Foo',
                    color: 'blue'
                },
                {
                    text: 'Bar',
                    color: 'red'
                }
            ],
            nonce: 1,
            menu: false,
            model: [
                {
                    text: 'Foo',
                    color: 'blue'
                }
            ],
            x: 0,
            search: null,
            y: 0
        }
    },
    watch: {
        model(val, prev) {
            if (val.length === prev.length) return

            this.model = val.map((v) => {
                if (typeof v === 'string') {
                    v = {
                        text: v,
                        color: this.colors[this.nonce - 1]
                    }

                    this.items.push(v)

                    this.nonce++
                }

                return v
            })
        }
    },

    methods: {
        edit(index, item) {
            if (!this.editing) {
                this.editing = item
                this.index = index
            } else {
                this.editing = null
                this.index = -1
            }
        },
        filter(item, queryText, itemText) {
            if (item.header) return false

            const hasValue = (val) => (val != null ? val : '')

            const text = hasValue(itemText)
            const query = hasValue(queryText)

            return (
                text
                    .toString()
                    .toLowerCase()
                    .indexOf(query.toString().toLowerCase()) > -1
            )
        }
    }
}
</script>
