<template>
    <div>
        <v-row class="-mt-8">
            <v-col cols="12" class="text-center pt-12 ">
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="6" offset-md="3">
                                <v-text-field
                                    prepend-inner-icon="mdi-magnify"
                                    label="What are you Looking ?"
                                    solo
                                    rounded
                                >
                                    <template v-slot:append>
                                        <div class="my-2">
                                            <v-btn rounded color="primary"
                                                >Search</v-btn
                                            >
                                        </div>
                                    </template>
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-col>
            <v-col cols="10" offset="1">
                <base-card class="-m-10">
                    <v-card-text>
                        <v-tabs v-model="tab">
                            <v-tab
                                v-for="item in items"
                                :key="item.tab"
                                class="body-2 font-weight-medium "
                                >{{ item.tab }}</v-tab
                            >
                        </v-tabs>

                        <v-tabs-items flat v-model="tab">
                            <v-tab-item v-for="item in items" :key="item.tab">
                                <v-card flat>
                                    <v-card-text>
                                        <v-row>
                                            <v-col cols="12" md="6">
                                                <v-expansion-panels
                                                    accordion
                                                    flat
                                                >
                                                    <v-expansion-panel
                                                        v-for="(item,
                                                        i) in itemsTwo"
                                                        :key="i"
                                                        flat
                                                    >
                                                        <v-expansion-panel-header
                                                            class="font-weight-bold"
                                                            >{{
                                                                item.tab
                                                            }}</v-expansion-panel-header
                                                        >
                                                        <v-expansion-panel-content
                                                            >{{
                                                                item.content
                                                            }}</v-expansion-panel-content
                                                        >
                                                    </v-expansion-panel>
                                                </v-expansion-panels>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <v-expansion-panels
                                                    accordion
                                                    flat
                                                >
                                                    <v-expansion-panel
                                                        v-for="(item,
                                                        i) in itemsTwo"
                                                        :key="i"
                                                        flat
                                                    >
                                                        <v-expansion-panel-header
                                                            class="font-weight-bold"
                                                            >{{
                                                                item.tab
                                                            }}</v-expansion-panel-header
                                                        >
                                                        <v-expansion-panel-content
                                                            >{{
                                                                item.content
                                                            }}</v-expansion-panel-content
                                                        >
                                                    </v-expansion-panel>
                                                </v-expansion-panels>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-card-text>
                </base-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Faq Two'
    },
    data() {
        return {
            tab: null,
            items: [
                {tab: 'Getting Started', content: 'Tab 1 Content'},
                {tab: 'Pricing', content: 'Tab 2 Content'}
            ],
            itemsTwo: [
                {
                    tab: 'How to Install ?',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    tab: 'How can I change colors ?',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    tab: 'How to add page ?',
                    content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped></style>
