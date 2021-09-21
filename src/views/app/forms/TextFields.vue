<template>
    <v-row>
        <v-col cols="12">
            <base-card>
                <v-card-title>Playground</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="label" label="Label" />
                            <v-text-field v-model="hint" label="Hint" />
                            <v-text-field
                                v-model="placeholder"
                                label="Placeholder"
                            />
                        </v-col>
                        <v-col cols="12" />
                        <v-col cols="12" md="6">
                            <v-switch
                                v-model="shaped"
                                class="ma-1"
                                label="Shaped (requires Filled, Outlined or Solo)"
                                :disabled="!outlined && !filled && !solo"
                            />
                            <v-switch
                                v-model="outlined"
                                class="ma-1"
                                label="Outlined"
                            />
                            <v-switch
                                v-model="rounded"
                                class="ma-1"
                                label="Rounded (requires Filled, Outlined or Solo)"
                                :disabled="!filled && !outlined && !solo"
                            />
                            <v-switch
                                v-model="solo"
                                class="ma-1"
                                label="Solo"
                                :disabled="filled"
                            />
                            <v-switch
                                v-model="singleLine"
                                class="ma-1"
                                label="Single-line"
                            />
                            <v-switch
                                v-model="filled"
                                class="ma-1"
                                label="Filled"
                                :disabled="outlined || solo"
                            />
                            <v-switch
                                v-model="clearable"
                                class="ma-1"
                                label="Clearable"
                            />
                            <v-switch
                                v-model="persistentHint"
                                class="ma-1"
                                label="Persistent Hint"
                            />
                            <v-switch
                                v-model="loading"
                                class="ma-1"
                                label="Loading"
                            />
                            <v-switch
                                v-model="flat"
                                class="ma-1"
                                label="Flat (requires Solo)"
                                :disabled="!solo"
                            />
                            <v-switch
                                v-model="dense"
                                class="ma-1"
                                label="Dense"
                            />
                            <v-row>
                                <v-switch
                                    v-model="counterEn"
                                    class="ma-0 mr-2 ml-1"
                                    label="Counter"
                                />
                                <v-slider
                                    v-model="counter"
                                    :disabled="!counterEn"
                                />
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-sheet elevation="12" class="pa-12">
                                <v-text-field
                                    v-model="model"
                                    :label="label"
                                    :hint="hint"
                                    :placeholder="placeholder"
                                    :shaped="shaped"
                                    :outlined="outlined"
                                    :rounded="rounded"
                                    :solo="solo"
                                    :single-line="singleLine"
                                    :filled="filled"
                                    :clearable="clearable"
                                    :persistent-hint="persistentHint"
                                    :loading="loading"
                                    :flat="flat"
                                    :counter="counterEn ? counter : false"
                                    :dense="dense"
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
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="Regular" />
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                                label="Regular"
                                placeholder="Placeholder"
                            />
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="Solo" solo />
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                                label="Solo"
                                placeholder="Placeholder"
                                solo
                            />
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="Filled" filled />
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                                label="Filled"
                                placeholder="Placeholder"
                                filled
                            />
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="Outlined" outlined />
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                                label="Outlined"
                                placeholder="Placeholder"
                                outlined
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Shaped</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="first"
                                label="First Name"
                                outlined
                                shaped
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="last"
                                label="Last Name"
                                filled
                                shaped
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
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field dense label="Regular" />
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Filled" filled dense />
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                label="Filled"
                                placeholder="Dense & Rounded"
                                filled
                                rounded
                                dense
                            />
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Solo" solo dense />
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Outlined" outlined dense />
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                label="Outlined"
                                placeholder="Placeholder"
                                outlined
                                dense
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
                            <v-text-field
                                label="Prepend"
                                prepend-icon="mdi-map-marker"
                            />

                            <v-text-field
                                label="Prepend inner"
                                prepend-inner-icon="mdi-map-marker"
                            />

                            <v-text-field
                                label="Append"
                                append-icon="mdi-map-marker"
                            />

                            <v-text-field
                                label="Append outer"
                                append-outer-icon="mdi-map-marker"
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field
                                solo
                                label="Prepend"
                                prepend-icon="mdi-map-marker"
                            />

                            <v-text-field
                                solo
                                label="Prepend inner"
                                prepend-inner-icon="mdi-map-marker"
                            />

                            <v-text-field
                                solo
                                label="Append"
                                append-icon="mdi-map-marker"
                            />

                            <v-text-field
                                solo
                                label="Append outer"
                                append-outer-icon="mdi-map-marker"
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field
                                filled
                                label="Prepend"
                                prepend-icon="mdi-map-marker"
                            />

                            <v-text-field
                                filled
                                label="Prepend inner"
                                prepend-inner-icon="mdi-map-marker"
                            />

                            <v-text-field
                                filled
                                label="Append"
                                append-icon="mdi-map-marker"
                            />

                            <v-text-field
                                filled
                                label="Append outer"
                                append-outer-icon="mdi-map-marker"
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field
                                outlined
                                label="Prepend"
                                prepend-icon="mdi-map-marker"
                            />

                            <v-text-field
                                outlined
                                label="Prepend inner"
                                prepend-inner-icon="mdi-map-marker"
                            />

                            <v-text-field
                                outlined
                                label="Append"
                                append-icon="mdi-map-marker"
                            />

                            <v-text-field
                                outlined
                                label="Append outer"
                                append-outer-icon="mdi-map-marker"
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Clearable</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="message1"
                                label="Regular"
                                clearable
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="message2"
                                solo
                                label="Solo"
                                clearable
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="message3"
                                filled
                                label="Filled"
                                clearable
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="message4"
                                label="Outlined"
                                outlined
                                clearable
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Character counter</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="title"
                                :rules="rules"
                                counter="25"
                                hint="This field uses counter prop"
                                label="Regular"
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="description"
                                :rules="rules"
                                counter
                                maxlength="25"
                                hint="This field uses maxlength attribute"
                                label="Limit exceeded"
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="title"
                                :rules="rules"
                                counter="25"
                                filled
                                label="Filled"
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="title"
                                :rules="rules"
                                counter="25"
                                label="Outlined"
                                outlined
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col>
            <base-card>
                <v-card-title>Password Input</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rulesTwo.required, rulesTwo.min]"
                                :type="show1 ? 'text' : 'password'"
                                name="input-10-1"
                                label="Normal with hint text"
                                hint="At least 8 characters"
                                counter
                                @click:append="show1 = !show1"
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field
                                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rulesTwo.required, rulesTwo.min]"
                                :type="show2 ? 'text' : 'password'"
                                name="input-10-2"
                                label="Visible"
                                hint="At least 8 characters"
                                value="wqfasds"
                                class="input-group--focused"
                                @click:append="show2 = !show2"
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field
                                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rulesTwo.required, rulesTwo.min]"
                                :type="show3 ? 'text' : 'password'"
                                name="input-10-2"
                                label="Not visible"
                                hint="At least 8 characters"
                                value="wqfasds"
                                class="input-group--focused"
                                @click:append="show3 = !show3"
                            />
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field
                                :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[
                                    rulesTwo.required,
                                    rulesTwo.emailMatch
                                ]"
                                :type="show4 ? 'text' : 'password'"
                                name="input-10-2"
                                label="Error"
                                hint="At least 8 characters"
                                value="Pa"
                                error
                                @click:append="show4 = !show4"
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card ref="form">
                <v-card-title>Custom Validation</v-card-title>
                <v-card-text>
                    <v-card-text>
                        <v-text-field
                            ref="name"
                            v-model="name"
                            :rules="[() => !!name || 'This field is required']"
                            :error-messages="errorMessages"
                            label="Full Name"
                            placeholder="John Doe"
                            required
                        />
                        <v-text-field
                            ref="address"
                            v-model="address"
                            :rules="[
                                () => !!address || 'This field is required',
                                () =>
                                    (!!address && address.length <= 25) ||
                                    'Address must be less than 25 characters',
                                addressCheck
                            ]"
                            label="Address Line"
                            placeholder="Snowy Rock Pl"
                            counter="25"
                            required
                        />
                        <v-text-field
                            ref="city"
                            v-model="city"
                            :rules="[
                                () => !!city || 'This field is required',
                                addressCheck
                            ]"
                            label="City"
                            placeholder="El Paso"
                            required
                        />
                        <v-text-field
                            ref="state"
                            v-model="state"
                            :rules="[() => !!state || 'This field is required']"
                            label="State/Province/Region"
                            required
                            placeholder="TX"
                        />
                        <v-text-field
                            ref="zip"
                            v-model="zip"
                            :rules="[() => !!zip || 'This field is required']"
                            label="ZIP / Postal Code"
                            required
                            placeholder="79938"
                        />
                        <v-autocomplete
                            ref="country"
                            v-model="country"
                            :rules="[
                                () => !!country || 'This field is required'
                            ]"
                            :items="countries"
                            label="Country"
                            placeholder="Select..."
                            required
                        />
                    </v-card-text>
                    <v-divider class="mt-12" />
                    <v-card-actions>
                        <v-btn text>
                            Cancel
                        </v-btn>
                        <v-spacer />
                        <v-slide-x-reverse-transition>
                            <v-tooltip v-if="formHasErrors" left>
                                <template v-slot:activator="{on, attrs}">
                                    <v-btn
                                        icon
                                        class="my-0"
                                        v-bind="attrs"
                                        @click="resetForm"
                                        v-on="on"
                                    >
                                        <v-icon>mdi-refresh</v-icon>
                                    </v-btn>
                                </template>
                                <span>Refresh form</span>
                            </v-tooltip>
                        </v-slide-x-reverse-transition>
                        <v-btn color="primary" text @click="submit">
                            Submit
                        </v-btn>
                    </v-card-actions>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Textfields'
    },
    data: () => ({
        model: "I'm a text field",
        label: 'Hey!',
        hint: 'Customize me!',
        placeholder: '',
        shaped: false,
        outlined: false,
        rounded: false,
        solo: false,
        singleLine: false,
        filled: false,
        clearable: false,
        persistentHint: false,
        loading: false,
        flat: false,
        counterEn: false,
        counter: 0,
        dense: false,
        first: 'John',
        last: 'Doe',
        message1: 'Hey!',
        message2: 'Hey!',
        message3: 'Hey!',
        message4: 'Hey!',
        title: 'Preliminary report',
        description: 'California is a state in the western United States',
        rules: [(v) => v.length <= 25 || 'Max 25 characters'],
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rulesTwo: {
            required: (value) => !!value || 'Required.',
            min: (v) => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => "The email and password you entered don't match"
        },
        // form validations
        countries: [
            'Afghanistan',
            'Albania',
            'Algeria',
            'Andorra',
            'Angola',
            'Anguilla',
            'Antigua &amp; Barbuda',
            'Argentina',
            'Armenia',
            'Aruba',
            'Australia',
            'Austria',
            'Azerbaijan',
            'Bahamas',
            'Bahrain',
            'Bangladesh',
            'Barbados',
            'Belarus',
            'Belgium',
            'Belize',
            'Benin',
            'Bermuda',
            'Bhutan',
            'Bolivia',
            'Bosnia &amp; Herzegovina',
            'Botswana',
            'Brazil',
            'British Virgin Islands',
            'Brunei',
            'Bulgaria',
            'Burkina Faso',
            'Burundi',
            'Cambodia',
            'Cameroon',
            'Cape Verde',
            'Cayman Islands',
            'Chad',
            'Chile',
            'China',
            'Colombia',
            'Congo',
            'Cook Islands',
            'Costa Rica',
            'Cote D Ivoire',
            'Croatia',
            'Cruise Ship',
            'Cuba',
            'Cyprus',
            'Czech Republic',
            'Denmark',
            'Djibouti',
            'Dominica',
            'Dominican Republic',
            'Ecuador',
            'Egypt',
            'El Salvador',
            'Equatorial Guinea',
            'Estonia',
            'Ethiopia',
            'Falkland Islands',
            'Faroe Islands',
            'Fiji',
            'Finland',
            'France',
            'French Polynesia',
            'French West Indies',
            'Gabon',
            'Gambia',
            'Georgia',
            'Germany',
            'Ghana',
            'Gibraltar',
            'Greece',
            'Greenland',
            'Grenada',
            'Guam',
            'Guatemala',
            'Guernsey',
            'Guinea',
            'Guinea Bissau',
            'Guyana',
            'Haiti',
            'Honduras',
            'Hong Kong',
            'Hungary',
            'Iceland',
            'India',
            'Indonesia',
            'Iran',
            'Iraq',
            'Ireland',
            'Isle of Man',
            'Israel',
            'Italy',
            'Jamaica',
            'Japan',
            'Jersey',
            'Jordan',
            'Kazakhstan',
            'Kenya',
            'Kuwait',
            'Kyrgyz Republic',
            'Laos',
            'Latvia',
            'Lebanon',
            'Lesotho',
            'Liberia',
            'Libya',
            'Liechtenstein',
            'Lithuania',
            'Luxembourg',
            'Macau',
            'Macedonia',
            'Madagascar',
            'Malawi',
            'Malaysia',
            'Maldives',
            'Mali',
            'Malta',
            'Mauritania',
            'Mauritius',
            'Mexico',
            'Moldova',
            'Monaco',
            'Mongolia',
            'Montenegro',
            'Montserrat',
            'Morocco',
            'Mozambique',
            'Namibia',
            'Nepal',
            'Netherlands',
            'Netherlands Antilles',
            'New Caledonia',
            'New Zealand',
            'Nicaragua',
            'Niger',
            'Nigeria',
            'Norway',
            'Oman',
            'Pakistan',
            'Palestine',
            'Panama',
            'Papua New Guinea',
            'Paraguay',
            'Peru',
            'Philippines',
            'Poland',
            'Portugal',
            'Puerto Rico',
            'Qatar',
            'Reunion',
            'Romania',
            'Russia',
            'Rwanda',
            'Saint Pierre &amp; Miquelon',
            'Samoa',
            'San Marino',
            'Satellite',
            'Saudi Arabia',
            'Senegal',
            'Serbia',
            'Seychelles',
            'Sierra Leone',
            'Singapore',
            'Slovakia',
            'Slovenia',
            'South Africa',
            'South Korea',
            'Spain',
            'Sri Lanka',
            'St Kitts &amp; Nevis',
            'St Lucia',
            'St Vincent',
            'St. Lucia',
            'Sudan',
            'Suriname',
            'Swaziland',
            'Sweden',
            'Switzerland',
            'Syria',
            'Taiwan',
            'Tajikistan',
            'Tanzania',
            'Thailand',
            "Timor L'Este",
            'Togo',
            'Tonga',
            'Trinidad &amp; Tobago',
            'Tunisia',
            'Turkey',
            'Turkmenistan',
            'Turks &amp; Caicos',
            'Uganda',
            'Ukraine',
            'United Arab Emirates',
            'United Kingdom',
            'United States',
            'Uruguay',
            'Uzbekistan',
            'Venezuela',
            'Vietnam',
            'Virgin Islands (US)',
            'Yemen',
            'Zambia',
            'Zimbabwe'
        ],
        errorMessages: '',
        name: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        country: null,
        formHasErrors: false
    }),
    computed: {
        form() {
            return {
                name: this.name,
                address: this.address,
                city: this.city,
                state: this.state,
                zip: this.zip,
                country: this.country
            }
        }
    },

    watch: {
        name() {
            this.errorMessages = ''
        }
    },

    methods: {
        addressCheck() {
            this.errorMessages =
                this.address && !this.name ? "Hey! I'm required" : ''

            return true
        },
        resetForm() {
            this.errorMessages = []
            this.formHasErrors = false

            Object.keys(this.form).forEach((f) => {
                this.$refs[f].reset()
            })
        },
        submit() {
            this.formHasErrors = false

            Object.keys(this.form).forEach((f) => {
                if (!this.form[f]) this.formHasErrors = true

                this.$refs[f].validate(true)
            })
        }
    }
}
</script>
