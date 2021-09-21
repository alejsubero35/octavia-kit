<template>
    <v-row>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Usage</v-card-title>
                <v-card-text>
                    <v-tabs>
                        <v-tab>Item One</v-tab>
                        <v-tab>Item Two</v-tab>
                        <v-tab>Item Three</v-tab>
                    </v-tabs>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Fixed Tabs</v-card-title>
                <v-card-text>
                    <v-tabs fixed-tabs background-color="indigo" dark>
                        <v-tab>
                            Option
                        </v-tab>
                        <v-tab>
                            Another Selection
                        </v-tab>
                        <v-tab>
                            Items
                        </v-tab>
                        <v-tab>
                            Another Screen
                        </v-tab>
                    </v-tabs>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>Tab Items</v-card-title>
                <v-card-text>
                    <v-card>
                        <v-tabs v-model="tab" background-color="primary" dark>
                            <v-tab v-for="item in items" :key="item.tab">
                                {{ item.tab }}
                            </v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                            <v-tab-item v-for="item in items" :key="item.tab">
                                <v-card flat>
                                    <v-card-text>{{
                                        item.content
                                    }}</v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-card>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card class="h-full">
                <v-card-title>Custom Icons</v-card-title>
                <v-card-text>
                    <v-sheet elevation="6">
                        <v-tabs
                            background-color="cyan"
                            dark
                            next-icon="mdi-arrow-right-bold-box-outline"
                            prev-icon="mdi-arrow-left-bold-box-outline"
                            show-arrows
                        >
                            <v-tabs-slider color="yellow" />
                            <v-tab v-for="i in 30" :key="i" :href="'#tab-' + i">
                                Item {{ i }}
                            </v-tab>
                        </v-tabs>
                    </v-sheet>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card class="h-full">
                <v-card-title>Vertical Tabs</v-card-title>
                <v-card-text>
                    <v-card>
                        <v-toolbar flat color="primary" dark>
                            <v-toolbar-title>User Profile</v-toolbar-title>
                        </v-toolbar>
                        <v-tabs vertical>
                            <v-tab>
                                <v-icon left>
                                    mdi-account
                                </v-icon>
                                Option 1
                            </v-tab>
                            <v-tab>
                                <v-icon left>
                                    mdi-lock
                                </v-icon>
                                Option 2
                            </v-tab>
                            <v-tab>
                                <v-icon left>
                                    mdi-access-point
                                </v-icon>
                                Option 3
                            </v-tab>

                            <v-tab-item>
                                <v-card flat>
                                    <v-card-text>
                                        <p>
                                            Sed aliquam ultrices mauris. Donec
                                            posuere vulputate arcu. Morbi ac
                                            felis. Etiam feugiat lorem non
                                            metus. Sed a libero.
                                        </p>

                                        <p>
                                            Nam ipsum risus, rutrum vitae,
                                            vestibulum eu, molestie vel, lacus.
                                            Aenean tellus metus, bibendum sed,
                                            posuere ac, mattis non, nunc.
                                            Aliquam lobortis. Aliquam lobortis.
                                            Suspendisse non nisl sit amet velit
                                            hendrerit rutrum.
                                        </p>

                                        <p class="mb-0">
                                            Phasellus dolor. Fusce neque. Fusce
                                            fermentum odio nec arcu.
                                            Pellentesque libero tortor,
                                            tincidunt et, tincidunt eget, semper
                                            nec, quam. Phasellus blandit leo ut
                                            odio.
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item>
                                <v-card flat>
                                    <v-card-text>
                                        <p>
                                            Morbi nec metus. Suspendisse
                                            faucibus, nunc et pellentesque
                                            egestas, lacus ante convallis
                                            tellus, vitae iaculis lacus elit id
                                            tortor. Sed mollis, eros et ultrices
                                            tempus, mauris ipsum aliquam libero,
                                            non adipiscing dolor urna a orci.
                                            Curabitur ligula sapien, tincidunt
                                            non, euismod vitae, posuere
                                            imperdiet, leo. Nunc sed turpis.
                                        </p>

                                        <p>
                                            Suspendisse feugiat. Suspendisse
                                            faucibus, nunc et pellentesque
                                            egestas, lacus ante convallis
                                            tellus, vitae iaculis lacus elit id
                                            tortor. Proin viverra, ligula sit
                                            amet ultrices semper, ligula arcu
                                            tristique sapien, a accumsan nisi
                                            mauris ac eros. In hac habitasse
                                            platea dictumst. Fusce ac felis sit
                                            amet ligula pharetra condimentum.
                                        </p>

                                        <p>
                                            Sed consequat, leo eget bibendum
                                            sodales, augue velit cursus nunc,
                                            quis gravida magna mi a libero. Nam
                                            commodo suscipit quam. In
                                            consectetuer turpis ut velit. Sed
                                            cursus turpis vitae tortor. Aliquam
                                            eu nunc.
                                        </p>

                                        <p>
                                            Etiam ut purus mattis mauris sodales
                                            aliquam. Ut varius tincidunt libero.
                                            Aenean viverra rhoncus pede. Duis
                                            leo. Fusce fermentum odio nec arcu.
                                        </p>

                                        <p class="mb-0">
                                            Donec venenatis vulputate lorem.
                                            Aenean viverra rhoncus pede. In dui
                                            magna, posuere eget, vestibulum et,
                                            tempor auctor, justo. Fusce commodo
                                            aliquam arcu. Suspendisse enim
                                            turpis, dictum sed, iaculis a,
                                            condimentum nec, nisi.
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item>
                                <v-card flat>
                                    <v-card-text>
                                        <p>
                                            Fusce a quam. Phasellus nec sem in
                                            justo pellentesque facilisis. Nam
                                            eget dui. Proin viverra, ligula sit
                                            amet ultrices semper, ligula arcu
                                            tristique sapien, a accumsan nisi
                                            mauris ac eros. In dui magna,
                                            posuere eget, vestibulum et, tempor
                                            auctor, justo.
                                        </p>

                                        <p class="mb-0">
                                            Cras sagittis. Phasellus nec sem in
                                            justo pellentesque facilisis. Proin
                                            sapien ipsum, porta a, auctor quis,
                                            euismod ut, mi. Donec quam felis,
                                            ultricies nec, pellentesque eu,
                                            pretium quis, sem. Nam at tortor in
                                            tellus interdum sagittis.
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs>
                    </v-card>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12">
            <base-card>
                <v-card-title>Right Aligned Tabs</v-card-title>
                <v-card-text>
                    <v-tabs
                        background-color="white"
                        color="deep-purple accent-4"
                        right
                    >
                        <v-tab>Landscape</v-tab>
                        <v-tab>City</v-tab>
                        <v-tab>Abstract</v-tab>

                        <v-tab-item v-for="n in 3" :key="n">
                            <v-container fluid>
                                <v-row>
                                    <v-col
                                        v-for="(img, index) in images"
                                        :key="index"
                                        cols="12"
                                        md="4"
                                    >
                                        <v-img :src="img" aspect-ratio="1" />
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-tab-item>
                    </v-tabs>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <v-card>
                <v-toolbar color="purple" dark flat prominent>
                    <v-text-field
                        append-icon="mdi-microphone"
                        class="mx-4"
                        flat
                        hide-details
                        label="Search"
                        prepend-inner-icon="mdi-shield-search"
                        solo-inverted
                    />

                    <template v-slot:extension>
                        <v-tabs v-model="tabs" centered>
                            <v-tab v-for="n in 3" :key="n">
                                Item {{ n }}
                            </v-tab>
                        </v-tabs>
                    </template>
                </v-toolbar>

                <v-tabs-items v-model="tabs">
                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card flat>
                            <v-card-title class="headline">
                                An awesome title
                            </v-card-title>
                            <v-card-text>
                                <p>
                                    Duis lobortis massa imperdiet quam. Donec
                                    vitae orci sed dolor rutrum auctor.
                                    Vestibulum facilisis, purus nec pulvinar
                                    iaculis, ligula mi congue nunc, vitae
                                    euismod ligula urna in dolor. Praesent
                                    congue erat at massa.
                                </p>

                                <p>
                                    Aenean posuere, tortor sed cursus feugiat,
                                    nunc augue blandit nunc, eu sollicitudin
                                    urna dolor sagittis lacus. Pellentesque
                                    egestas, neque sit amet convallis pulvinar,
                                    justo nulla eleifend augue, ac auctor orci
                                    leo non est. Etiam sit amet orci eget eros
                                    faucibus tincidunt. Donec sodales sagittis
                                    magna.
                                </p>

                                <p class="mb-0">
                                    Ut leo. Suspendisse potenti. Duis vel nibh
                                    at velit scelerisque suscipit. Fusce
                                    pharetra convallis urna.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>

                    <v-tab-item>
                        <v-card flat>
                            <v-card-title class="headline">
                                An even better title
                            </v-card-title>
                            <v-card-text>
                                <p>
                                    Maecenas ullamcorper, dui et placerat
                                    feugiat, eros pede varius nisi, condimentum
                                    viverra felis nunc et lorem. Sed hendrerit.
                                    Maecenas malesuada. Vestibulum ullamcorper
                                    mauris at ligula. Proin faucibus arcu quis
                                    ante.
                                </p>

                                <p class="mb-0">
                                    Etiam vitae tortor. Curabitur ullamcorper
                                    ultricies nisi. Sed magna purus, fermentum
                                    eu, tincidunt eu, varius ut, felis. Aliquam
                                    lobortis. Suspendisse potenti.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Tabs'
    },
    data() {
        return {
            tab: null,
            tabs: null,
            items: [
                {tab: 'One', content: 'Tab 1 Content'},
                {tab: 'Two', content: 'Tab 2 Content'},
                {tab: 'Three', content: 'Tab 3 Content'},
                {tab: 'Four', content: 'Tab 4 Content'},
                {tab: 'Five', content: 'Tab 5 Content'},
                {tab: 'Six', content: 'Tab 6 Content'},
                {tab: 'Seven', content: 'Tab 7 Content'},
                {tab: 'Eight', content: 'Tab 8 Content'},
                {tab: 'Nine', content: 'Tab 9 Content'},
                {tab: 'Ten', content: 'Tab 10 Content'}
            ],
            images: [
                require('@/assets/images/gallery/sq-4.jpg'),
                require('@/assets/images/gallery/sq-5.jpg'),
                require('@/assets/images/gallery/sq-6.jpg'),
                require('@/assets/images/gallery/sq-7.jpg'),
                require('@/assets/images/gallery/sq-8.jpg'),
                require('@/assets/images/gallery/sq-9.jpg')
            ]
        }
    }
}
</script>
