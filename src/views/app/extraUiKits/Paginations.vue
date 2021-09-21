<template>
  <v-row>
    <v-col
      cols="12"
    >
      <base-card>
        <v-card-title>Paginations</v-card-title>
        <v-card-text>
          <v-pagination
            v-model="page"
            :length="6"
          />
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
    >
      <base-card>
        <v-card-title>Long</v-card-title>
        <v-card-text>
          <v-pagination
            v-model="page"
            class="my-4"
            :length="15"
          />
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
    >
      <base-card>
        <v-card-title>Limit</v-card-title>
        <v-card-text>
          <v-pagination
            v-model="page"
            :length="15"
            :total-visible="7"
          />
        </v-card-text>
      </base-card>
    </v-col>
    <v-col
      cols="12"
    >
      <base-card>
        <v-card-title>Circle</v-card-title>
        <v-card-text>
          <v-pagination
            v-model="page"
            :length="4"
            circle
          />
        </v-card-text>
      </base-card>
    </v-col>
    <v-col>
      <base-card>
        <v-card-title>Icons</v-card-title>
        <v-card-text>
          <v-pagination
            v-model="page"
            :length="4"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
          />
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {

    metaInfo: {
      // title will be injected into parent titleTemplate
      title: "Paginations",
    },
    data () {
      return {
        page: 1,
      }
    },
  }
</script>
