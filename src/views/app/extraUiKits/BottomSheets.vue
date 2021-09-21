<template>
    <v-row>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Persistent
                </v-card-title>
                <v-card-text>
                    <v-bottom-sheet v-model="sheet" persistent>
                        <template v-slot:activator="{on}">
                            <v-btn color="green" dark v-on="on">
                                Open Persistent
                            </v-btn>
                        </template>
                        <v-sheet class="text-center" height="200px">
                            <v-btn
                                class="mt-6"
                                flat
                                color="danger"
                                @click="sheet = !sheet"
                            >
                                close
                            </v-btn>
                            <div class="py-3">
                                This is a bottom sheet using the persistent prop
                            </div>
                        </v-sheet>
                    </v-bottom-sheet>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    v-model Control
                </v-card-title>
                <v-card-text>
                    <v-btn color="blue" dark @click="sheet = !sheet">
                        Open v-model
                    </v-btn>
                    <v-bottom-sheet v-model="sheet">
                        <v-sheet class="text-center" height="200px">
                            <v-btn
                                class="mt-6"
                                text
                                color="red"
                                @click="sheet = !sheet"
                            >
                                close
                            </v-btn>
                            <div class="py-3">
                                This is a bottom sheet using the controlled by
                                v-model instead of activator
                            </div>
                        </v-sheet>
                    </v-bottom-sheet>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Inset
                </v-card-title>
                <v-card-text>
                    <v-bottom-sheet v-model="sheet" inset>
                        <template v-slot:activator="{on}">
                            <v-btn color="orange" dark v-on="on">
                                Open Inset
                            </v-btn>
                        </template>
                        <v-sheet class="text-center" height="200px">
                            <v-btn
                                class="mt-6"
                                text
                                color="danger"
                                @click="sheet = !sheet"
                            >
                                close
                            </v-btn>
                            <div class="my-3">
                                This is a bottom sheet using the inset prop
                            </div>
                        </v-sheet>
                    </v-bottom-sheet>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Music Player
                </v-card-title>
                <v-card-text>
                    <v-bottom-sheet inset>
                        <template v-slot:activator="{on}">
                            <v-btn color="red" dark v-on="on">
                                Open Player
                            </v-btn>
                        </template>
                        <v-card tile>
                            <v-progress-linear
                                :value="50"
                                class="my-0"
                                height="3"
                            />

                            <v-list>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            >The Walker</v-list-item-title
                                        >
                                        <v-list-item-subtitle
                                            >Fitz & The
                                            Trantrums</v-list-item-subtitle
                                        >
                                    </v-list-item-content>

                                    <v-spacer />

                                    <v-list-item-icon>
                                        <v-btn icon>
                                            <v-icon>mdi-rewind</v-icon>
                                        </v-btn>
                                    </v-list-item-icon>

                                    <v-list-item-icon
                                        :class="{
                                            'mx-5': $vuetify.breakpoint.mdAndUp
                                        }"
                                    >
                                        <v-btn icon>
                                            <v-icon>mdi-pause</v-icon>
                                        </v-btn>
                                    </v-list-item-icon>

                                    <v-list-item-icon
                                        class="ml-0"
                                        :class="{
                                            'mr-3': $vuetify.breakpoint.mdAndUp
                                        }"
                                    >
                                        <v-btn icon>
                                            <v-icon>mdi-fast-forward</v-icon>
                                        </v-btn>
                                    </v-list-item-icon>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-bottom-sheet>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Bottom Sheets'
    },
    data() {
        return {
            sheet: false,
            tiles: [
                {img: 'keep.png', title: 'Keep'},
                {img: 'inbox.png', title: 'Inbox'},
                {img: 'hangouts.png', title: 'Hangouts'},
                {img: 'messenger.png', title: 'Messenger'},
                {img: 'google.png', title: 'Google+'}
            ]
        }
    }
}
</script>
