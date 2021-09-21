<template>
    <v-row>
        <v-col cols="12">
            <base-card class="base">
                <h1>Aqui la configuracion</h1>
                    <v-card-title>Checkboxes - Boolean</v-card-title>
                        <v-card-text>
                            <v-checkbox/>
                            <v-checkbox/>
                        </v-card-text>
            </base-card>
    </v-col>
    </v-row>
</template>
<style scoped>
    @media (min-width: 1264px){
        .container {
            max-width: 1497px;
        }
    }
    .base{
        padding: 3%;
    }
</style>