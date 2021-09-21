<template>
    <v-row>
        <v-col cols="12" lg="3">
            <base-card>
                <v-list>
                    <!-- <v-subheader>FAQ v3</v-subheader> -->
                    <v-list-item-group v-model="item" color="primary">
                        <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon" />
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.text" />
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </base-card>
        </v-col>
        <v-col cols="12" lg="8">
            <div class="mb-4">
                <p class="font-weight-medium">ABOUT US</p>
                <v-expansion-panels flat>
                    <v-expansion-panel
                        v-for="(item, i) in 3"
                        :key="i"
                        class="mb-3 shadow-none  py-2"
                    >
                        <v-expansion-panel-header
                            >Collapsible Group Item #{{
                                item
                            }}</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
            <div class="mb-4">
                <p class="font-weight-medium">LICENSE</p>
                <v-expansion-panels flat>
                    <v-expansion-panel
                        v-for="(item, i) in 3"
                        :key="i"
                        class="mb-3 shadow-none hg-faq-one-panel py-2"
                    >
                        <v-expansion-panel-header
                            >Collapsible Group Item #{{
                                item
                            }}</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Faq Three'
    },
    data: () => ({
        item: 1,
        items: [
            {text: 'About Us', icon: 'mdi-google-my-business'},
            {text: 'License', icon: 'mdi-license'},
            {text: 'Multi Application', icon: 'mdi-devices'},
            {text: 'Terms of use', icon: 'mdi-rocket-launch'},
            {text: 'Reward policy', icon: 'mdi-library'},
            {text: 'mdi-security', icon: 'mdi-devices'}
        ]
    })
}
</script>
