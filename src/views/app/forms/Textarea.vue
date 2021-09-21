<template>
    <v-row>
        <v-col cols="12">
            <base-card>
                <v-card-title>Playground</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col sm="6" cols="12">
                            <v-text-field v-model="label" label="Label" />
                            <v-text-field v-model="hint" label="Hint" />
                            <v-text-field
                                v-model="placeholder"
                                label="Placeholder"
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="rowHeight"
                                :disabled="!autoGrow"
                                class="mx-4"
                                label="Row height - px"
                                max="500"
                                min="1"
                                step="1"
                                style="width: 125px"
                                type="number"
                            />
                            <v-text-field
                                v-model="rows"
                                class="mx-4"
                                label="Rows"
                                max="50"
                                min="1"
                                step="1"
                                style="width: 125px"
                                type="number"
                            />
                        </v-col>

                        <v-col cols="12" />

                        <v-col cols="12" md="6">
                            <v-switch
                                v-model="autoGrow"
                                class="ma-1"
                                label="Auto-grow"
                            />
                            <v-switch
                                v-model="clearable"
                                class="ma-1"
                                label="Clearable"
                            />

                            <v-switch
                                v-model="filled"
                                class="ma-1"
                                label="Filled"
                            />
                            <v-switch
                                v-model="flat"
                                class="ma-1"
                                label="Flat (requires Solo)"
                                :disabled="!solo"
                            />
                            <v-switch
                                v-model="loading"
                                class="ma-1"
                                label="Loading"
                            />
                            <v-switch
                                v-model="outlined"
                                class="ma-1"
                                label="Outlined"
                            />
                            <v-switch
                                v-model="persistentHint"
                                class="ma-1"
                                label="Persistent Hint"
                            />
                            <v-switch
                                v-model="rounded"
                                class="ma-1"
                                label="Rounded (requires Filled or Outlined)"
                            />
                            <v-switch
                                v-model="shaped"
                                class="ma-1"
                                label="Shaped (requires Filled or Outlined)"
                            />
                            <v-switch
                                v-model="singleLine"
                                class="ma-1"
                                label="Single-line"
                            />
                            <v-switch
                                v-model="solo"
                                class="ma-1"
                                label="Solo"
                            />
                        </v-col>

                        <v-col cols="12" md="6">
                            <v-sheet elevation="12" class="pa-12">
                                <v-textarea
                                    v-model="model"
                                    :auto-grow="autoGrow"
                                    :clearable="clearable"
                                    :counter="counter ? counter : false"
                                    :filled="filled"
                                    :flat="flat"
                                    :hint="hint"
                                    :label="label"
                                    :loading="loading"
                                    :no-resize="noResize"
                                    :outlined="outlined"
                                    :persistent-hint="persistentHint"
                                    :placeholder="placeholder"
                                    :rounded="rounded"
                                    :row-height="rowHeight"
                                    :rows="rows"
                                    :shaped="shaped"
                                    :single-line="singleLine"
                                    :solo="solo"
                                />
                                <div class="mt-12 text-center">
                                    Value: {{ model }}
                                </div>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Usage</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-textarea
                                name="input-7-1"
                                label="Default style"
                                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                                hint="Hint text"
                            />
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-textarea
                                solo
                                name="input-7-4"
                                label="Solo textarea"
                            />
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-textarea
                                filled
                                name="input-7-4"
                                label="Filled textarea"
                                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                            />
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-textarea
                                outlined
                                name="input-7-4"
                                label="Outlined textarea"
                                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Icons</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-textarea
                                class="mx-2"
                                label="prepend-icon"
                                rows="1"
                                prepend-icon="mdi-comment"
                            />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-textarea
                                append-icon="mdi-comment"
                                class="mx-2"
                                label="append-icon"
                                rows="1"
                            />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-textarea
                                prepend-inner-icon="mdi-comment"
                                class="mx-2"
                                label="prepend-inner-icon"
                                rows="1"
                            />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-textarea
                                append-outer-icon="mdi-comment"
                                class="mx-2"
                                label="append-outer-icon"
                                rows="1"
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Rows</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-textarea
                                label="One row"
                                auto-grow
                                outlined
                                rows="1"
                                row-height="15"
                            />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-textarea
                                filled
                                auto-grow
                                label="Two rows"
                                rows="2"
                                row-height="20"
                            />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-textarea
                                label="Three rows"
                                auto-grow
                                outlined
                                rows="3"
                                row-height="25"
                                shaped
                            />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-textarea
                                filled
                                auto-grow
                                label="Four rows"
                                rows="4"
                                row-height="30"
                                shaped
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
        title: 'Textarea'
    },
    data: () => ({
        autoGrow: false,
        autofocus: true,
        clearable: false,
        counter: 0,
        filled: false,
        flat: false,
        hint: '',
        label: '',
        loading: false,
        model: "I'm a textarea.",

        noResize: false,
        outlined: false,
        persistentHint: false,
        placeholder: '',
        rounded: false,
        rowHeight: 24,
        rows: 1,
        shaped: false,
        singleLine: false,
        solo: false
    })
}
</script>
