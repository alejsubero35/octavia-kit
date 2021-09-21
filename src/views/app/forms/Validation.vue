<template>
    <v-row>
        <v-col cols="12">
            <base-card>
                <v-card-title>Basic</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="firstname"
                                :rules="nameRules"
                                :counter="10"
                                label="First name"
                                required
                            />
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="lastname"
                                :rules="nameRules"
                                :counter="10"
                                label="Last name"
                                required
                            />
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Validation with submit & clear</v-card-title>
                <v-card-text>
                    <v-form ref="form" v-model="valid2" lazy-validation>
                        <v-text-field
                            v-model="name"
                            :counter="10"
                            :rules="nameRules2"
                            label="Name"
                            required
                        />

                        <v-text-field
                            v-model="email2"
                            :rules="emailRules2"
                            label="E-mail"
                            required
                        />

                        <v-select
                            v-model="select"
                            :items="items"
                            :rules="[(v) => !!v || 'Item is required']"
                            label="Item"
                            required
                        />

                        <v-checkbox
                            v-model="checkbox"
                            :rules="[
                                (v) => !!v || 'You must agree to continue!'
                            ]"
                            label="Do you agree?"
                            required
                        />

                        <v-btn
                            :disabled="!valid2"
                            color="success"
                            class="mr-4"
                            @click="validate"
                        >
                            Validate
                        </v-btn>

                        <v-btn color="warning" class="mr-4" @click="reset">
                            Reset Form
                        </v-btn>

                        <v-btn color="warning" @click="resetValidation">
                            Reset Validation
                        </v-btn>
                    </v-form>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Creating Rules</v-card-title>
                <v-card-text>
                    <v-row justify="space-between">
                        <v-col cols="12" md="4">
                            <v-form ref="form">
                                <v-text-field
                                    v-model="model"
                                    :counter="max"
                                    :rules="rules"
                                    label="First name"
                                />
                            </v-form>
                        </v-col>

                        <v-col cols="12" md="6">
                            <v-slider v-model="max" label="Max characters" />

                            <v-checkbox
                                v-model="allowSpaces"
                                label="Allow spaces"
                            />

                            <v-text-field
                                v-model="match"
                                label="Value must match"
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
        title: 'Validation'
    },
    data() {
        return {
            valid: false,
            firstname: '',
            lastname: '',
            nameRules: [
                (v) => !!v || 'Name is required',
                (v) => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            // Validation with submit & clear
            valid2: true,
            name: '',
            nameRules2: [
                (v) => !!v || 'Name is required',
                (v) =>
                    (v && v.length <= 10) ||
                    'Name must be less than 10 characters'
            ],
            email2: '',
            emailRules2: [
                (v) => !!v || 'E-mail is required',
                (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            select: null,
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
            checkbox: false,
            // creating rules
            allowSpaces: false,
            match: 'Foobar',
            max: 0,
            model: 'Foobar'
        }
    },
    // creating rules
    computed: {
        rules() {
            const rules = []

            if (this.max) {
                const rule = (v) =>
                    (v || '').length <= this.max ||
                    `A maximum of ${this.max} characters is allowed`

                rules.push(rule)
            }

            if (!this.allowSpaces) {
                const rule = (v) =>
                    (v || '').indexOf(' ') < 0 || 'No spaces are allowed'

                rules.push(rule)
            }

            if (this.match) {
                const rule = (v) =>
                    (!!v && v) === this.match || 'Values do not match'

                rules.push(rule)
            }

            return rules
        }
    },

    watch: {
        match: 'validateField',
        max: 'validateField',
        model: 'validateField'
    },
    // Validation with submit & clear
    methods: {
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
        // creating rules
        validateField() {
            this.$refs.form.validate()
        }
    }
}
</script>
