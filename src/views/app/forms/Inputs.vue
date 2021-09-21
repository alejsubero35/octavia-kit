<template>
  <v-row>
    <v-col
      cols="12"
    >
      <base-card>
        <v-card-title>
          Loading
        </v-card-title>
        <v-card-text>
          <v-text-field
            color="success"
            loading
            disabled
          />
        </v-card-text>
      </base-card>
    </v-col>
    <!-- hint  -->
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>
          Hint
        </v-card-title>
        <v-card-text>
          <v-switch
            v-model="showMessages"
            label="Show messages"
          />
          <v-input
            hint="I am hint"
            persistent-hint
            :messages="messages"
          >
            Input
          </v-input>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <base-card>
        <v-card-title>
          Slots
        </v-card-title>
        <v-card-text>
          <v-text-field>
            <v-icon
              slot="append"
              color="red"
            >
              mdi-plus
            </v-icon>
            <v-icon
              slot="prepend"
              color="green"
            >
              mdi-minus
            </v-icon>
          </v-text-field>
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: "Inputs",
    },
    data: () => ({
      showMessages: false,
    }),

    computed: {
      messages () {
        return this.showMessages ? ['Message'] : undefined
      },
    },
  }
</script>
