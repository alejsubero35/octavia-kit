<template>
    <div>
        <v-row class="">
            <v-col cols="12" class="text-center ">
                <h2>Hi, How can we help you ?</h2>
                <!-- test -->
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col cols="6" offset="3">
                                <v-text-field
                                    class
                                    prepend-inner-icon="mdi-magnify"
                                    label="Search"
                                    solo
                                    rounded
                                >
                                    <template v-slot:append>
                                        <div class="my-2">
                                            <v-btn rounded color="primary"
                                                >Primary</v-btn
                                            >
                                        </div>
                                    </template>
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
                <p class="text--disabled">Or Browse by category</p>
            </v-col>
            <v-col cols="12">
                <v-tabs
                    v-model="tab"
                    height="120"
                    icons-and-text
                    centered
                    class="tabs-faq"
                >
                    <v-tabs-slider class="test" />

                    <v-tab
                        href="#tab-1"
                        class="eg-white-tab white px-10 shadow-lg mr-4 rounded-sm body-2 font-weight-bold "
                    >
                        Getting Started
                        <v-icon>mdi-home</v-icon>
                    </v-tab>

                    <v-tab
                        href="#tab-2"
                        class="eg-white-tab white px-10 shadow-lg mr-4 rounded-sm body-2 font-weight-bold "
                    >
                        Plans & Pricing
                        <v-icon>mdi-layers</v-icon>
                    </v-tab>

                    <v-tab
                        href="#tab-3"
                        class="eg-white-tab white px-10 shadow-lg mr-4 rounded-sm body-2 font-weight-bold "
                    >
                        Sales Questions
                        <v-icon>mdi-contacts</v-icon>
                    </v-tab>
                    <v-tab
                        href="#tab-4"
                        class="eg-white-tab white px-10 shadow-lg rounded-sm body-2 font-weight-bold "
                    >
                        Usage Guide
                        <v-icon>mdi-reload</v-icon>
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab" class="mt-5 transparent">
                    <v-tab-item v-for="i in 4" :key="i" :value="'tab-' + i">
                        <v-card flat color="transparent">
                            <v-card-text>
                                <v-expansion-panels class="border-0" flat>
                                    <v-expansion-panel
                                        v-for="(item, i) in 3"
                                        :key="i"
                                        class="mb-4 py-3 border-0"
                                        flat
                                    >
                                        <v-expansion-panel-header
                                            class="font-weight-bold"
                                            >Collapsible Group Item #{{
                                                item
                                            }}</v-expansion-panel-header
                                        >
                                        <v-expansion-panel-content
                                            >Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo
                                            consequat.</v-expansion-panel-content
                                        >
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Faq One'
    },
    data() {
        return {
            tab: null,
            text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    }
}
</script>
<style lang="scss" scoped>
.tabs-faq {
    ::v-deep .v-tabs-bar {
        background-color: transparent !important;
    }
}
</style>
