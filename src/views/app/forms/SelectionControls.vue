<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <base-card class="h-full">
        <v-card-title>Checkboxes - Boolean</v-card-title>
        <v-card-text>
          <v-checkbox
            v-model="checkbox1"
            :label="`Checkbox 1: ${checkbox1.toString()}`"
          />
          <v-checkbox
            v-model="checkbox2"
            :label="`Checkbox 2: ${checkbox2.toString()}`"
          />
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Checkboxes - Array</v-card-title>
        <v-card-text>
          <p>{{ selected }}</p>
          <v-checkbox
            v-model="selected"
            label="John"
            value="John"
          />
          <v-checkbox
            v-model="selected"
            label="Jacob"
            value="Jacob"
          />
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Usage</v-card-title>
        <v-card-text>
          <v-checkbox
            v-model="checkbox"
            :label="`Checkbox 1: ${checkbox.toString()}`"
          />
          <v-radio-group v-model="radioGroup">
            <v-radio
              v-for="n in 3"
              :key="n"
              :label="`Radio ${n}`"
              :value="n"
            />
          </v-radio-group>
          <v-switch
            v-model="switch1"
            :label="`Switch 1: ${switch1.toString()}`"
          />
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Label slot</v-card-title>
        <v-card-text>
          <v-checkbox v-model="checkboxTwo">
            <template v-slot:label>
              <div>
                I agree that
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <a
                      target="_blank"
                      @click.stop
                      v-on="on"
                    >
                      Vuetify
                    </a>
                  </template>
                  Opens in new window
                </v-tooltip>
                is awesome
              </div>
            </template>
          </v-checkbox>

          <v-radio-group v-model="radios">
            <template v-slot:label>
              <div>Your favourite <strong>search engine</strong></div>
            </template>
            <v-radio value="Google">
              <template v-slot:label>
                <div>Of course it's <strong class="success--text">Google</strong></div>
              </template>
            </v-radio>
            <v-radio value="Duckduckgo">
              <template v-slot:label>
                <div>Definitely <strong class="primary--text">Duckduckgo</strong></div>
              </template>
            </v-radio>
          </v-radio-group>

          <v-switch v-model="switchMe">
            <template v-slot:label>
              Turn on the progress: <v-progress-circular :indeterminate="switchMe" :value="0" size="24" class="ml-2"></v-progress-circular>
            </template>
          </v-switch>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col>
      <base-card>
        <v-card-title>Checkboxes - Colors</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="red"
                color="red"
                value="red"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="red darken-3"
                color="red darken-3"
                value="red darken-3"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="indigo"
                color="indigo"
                value="indigo"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="indigo darken-3"
                color="indigo darken-3"
                value="indigo darken-3"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="orange"
                color="orange"
                value="orange"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="orange darken-3"
                color="orange darken-3"
                value="orange darken-3"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row class="mt-12">
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="primary"
                color="primary"
                value="primary"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="secondary"
                color="secondary"
                value="secondary"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="success"
                color="success"
                value="success"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="info"
                color="info"
                value="info"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="warning"
                color="warning"
                value="warning"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="error"
                color="error"
                value="error"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>Switches Colors</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="4" md="4">
              <v-switch
                v-model="ex11"
                label="red"
                color="red"
                value="red"
                hide-details
              ></v-switch>
              <v-switch
                v-model="ex11"
                label="red darken-3"
                color="red darken-3"
                value="red darken-3"
                hide-details
              ></v-switch>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-switch
                v-model="ex11"
                label="indigo"
                color="indigo"
                value="indigo"
                hide-details
              ></v-switch>
              <v-switch
                v-model="ex11"
                label="indigo darken-3"
                color="indigo darken-3"
                value="indigo darken-3"
                hide-details
              ></v-switch>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-switch
                v-model="ex11"
                label="orange"
                color="orange"
                value="orange"
                hide-details
              ></v-switch>
              <v-switch
                v-model="ex11"
                label="orange darken-3"
                color="orange darken-3"
                value="orange darken-3"
                hide-details
              ></v-switch>
            </v-col>
          </v-row>

          <v-row class="mt-12">
            <v-col cols="12" sm="4" md="4">
              <v-switch
                v-model="ex11"
                label="primary"
                color="primary"
                value="primary"
                hide-details
              ></v-switch>
              <v-switch
                v-model="ex11"
                label="secondary"
                color="secondary"
                value="secondary"
                hide-details
              ></v-switch>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-switch
                v-model="ex11"
                label="success"
                color="success"
                value="success"
                hide-details
              ></v-switch>
              <v-switch
                v-model="ex11"
                label="info"
                color="info"
                value="info"
                hide-details
              ></v-switch>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-switch
                v-model="ex11"
                label="warning"
                color="warning"
                value="warning"
                hide-details
              ></v-switch>
              <v-switch
                v-model="ex11"
                label="error"
                color="error"
                value="error"
                hide-details
              ></v-switch>
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
      title: "Selection Controls",
    },
    data () {
      return {
        checkbox: true,
        radioGroup: 1,
        switch1: true,
        checkbox1: true,
        checkbox2: false,
        selected: ['John'],
        checkboxTwo: false,
        radios: 'Duckduckgo',
        switchMe: false,
        ex11: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
        ex4: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
      }
    },
  }
</script>
