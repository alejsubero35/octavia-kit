<template>
    <div class="app-content-wrapper apps-wrapper --filemanager shadow-lg">
        <div :class="{open: isBlock}" class="app-overlay" @click="overlayApp" />
        <div :class="{open: isOpen}" class="app-sidebar">
            <div class="app-sidebar-header white py-5">
                <v-btn class="rounded-lg py-5" tile block color="primary">
                    <v-icon left> mdi-file-plus </v-icon> Add File
                </v-btn>
            </div>
            <vue-perfect-scrollbar
                :settings="{suppressScrollX: true, wheelPropagation: false}"
                class="h-100 rtl-ps-none ps scroll"
                style="height: 100%"
            >
                <div class="app-sidebar-body mt-6">
                    <v-list flat>
                        <v-subheader
                            class="text--disabled font-weight-medium text-uppercase"
                        >
                            MY drive
                        </v-subheader>
                        <v-list-item-group>
                            <v-list-item
                                v-for="(item, i) in items"
                                :key="i"
                                class="px-10"
                            >
                                <v-list-item-icon class="mr-3">
                                    <v-icon v-text="item.icon" />
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title
                                        class="font-weight-medium"
                                        v-text="item.text"
                                    />
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                    <v-list flat>
                        <v-subheader
                            class="text--disabled font-weight-medium text-uppercase"
                        >
                            Labels
                        </v-subheader>
                        <v-list-item-group>
                            <v-list-item
                                v-for="(item, i) in itemsTwo"
                                :key="i"
                                class="px-10"
                            >
                                <v-list-item-icon class="mr-3">
                                    <v-icon v-text="item.icon" />
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title
                                        class="font-weight-medium"
                                        v-text="item.text"
                                    />
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                    <v-list disabled dense two-line>
                        <v-subheader
                            class="text--disabled font-weight-medium text-uppercase pl-2"
                        >
                            storage
                        </v-subheader>
                        <v-list-item-group color="primary" class="">
                            <v-list-item class="ma-0">
                                <v-list-item-icon class="mr-1 pt-4">
                                    <v-icon>mdi-floppy</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title
                                        class="font-weight-medium"
                                    >
                                        2Gb used of 30GB
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        <v-progress-linear
                                            value="80"
                                            class="w-24"
                                        />
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </div>
            </vue-perfect-scrollbar>
        </div>
        <div class="app-content relative">
            <div class="app-header white">
                <div
                    class="d-flex justify-space-between flex-wrap align-baseline"
                >
                    <div class="">
                        <!-- app-icon class -->
                        <div
                            class="nested-sidebar-toggle d-md-none d-sm-block"
                            @click="appToggle"
                        >
                            <v-icon color="dark"> mdi-menu-open </v-icon>
                        </div>
                        <v-text-field
                            hide-details="auto"
                            class="sm:hidden md:flex ma-0 pa-0"
                            label="Search"
                            outlined
                            dense
                            prepend-inner-icon="mdi-magnify"
                        ></v-text-field>
                    </div>
                    <div>
                        <v-btn icon color="primary">
                            <v-icon>mdi-account-check</v-icon>
                        </v-btn>
                        <v-btn icon color="primary">
                            <v-icon>mdi-trash-can</v-icon>
                        </v-btn>
                        <v-btn icon color="primary">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>
            <vue-perfect-scrollbar
                :settings="{suppressScrollX: true, wheelPropagation: false}"
                class="h-100 rtl-ps-none ps scroll"
                style="height: 100%"
            >
                <div class="app-body mt-10 px-8">
                    <v-row>
                        <v-col cols="12" class="">
                            <div class="card-title">All Files</div>
                            <p
                                class="font-weight-medium ma-0 text--disabled text-12"
                            >
                                RECENTLY ACCESSED FILES
                            </p>
                        </v-col>
                    </v-row>
                    <v-container class="grid filemanager-content">
                        <v-row>
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <div class="py-6">
                                        <v-img
                                            width="40"
                                            class=" h-auto ma-auto"
                                            src="@/assets/images/react.png"
                                        />
                                    </div>
                                    <v-card-text class="bg-white">
                                        <p
                                            class="card-text font-weight-bold ma-0 "
                                        >
                                            Filemanager.pdf
                                        </p>
                                        <p
                                            class="text--disabled font-weight-medium ma-0 "
                                        >
                                            20.5kb
                                        </p>
                                        <p class="ma-0 body-2">
                                            Last accessed: 3 Hours ago
                                        </p>
                                    </v-card-text>
                                </base-card>
                            </v-col>
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <div class="py-6">
                                        <v-img
                                            width="40"
                                            class=" h-auto ma-auto"
                                            src="@/assets/images/Sass_icon.png"
                                        />
                                    </div>
                                    <v-card-text class="bg-white">
                                        <p
                                            class="card-text font-weight-bold ma-0 "
                                        >
                                            Filemanager.pdf
                                        </p>
                                        <p
                                            class="text--disabled font-weight-medium ma-0 "
                                        >
                                            20.5kb
                                        </p>
                                        <p class="ma-0 body-2">
                                            Last accessed: 3 Hours ago
                                        </p>
                                    </v-card-text>
                                </base-card>
                            </v-col>
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <div class="py-6">
                                        <v-img
                                            width="40"
                                            class=" h-auto ma-auto"
                                            src="@/assets/images/Angular_Icon.png"
                                        />
                                    </div>
                                    <v-card-text class="bg-white">
                                        <p
                                            class="card-text font-weight-bold ma-0 "
                                        >
                                            Filemanager.pdf
                                        </p>
                                        <p
                                            class="text--disabled font-weight-medium ma-0 "
                                        >
                                            20.5kb
                                        </p>
                                        <p class="ma-0 body-2">
                                            Last accessed: 3 Hours ago
                                        </p>
                                    </v-card-text>
                                </base-card>
                            </v-col>
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <div class="py-6">
                                        <v-img
                                            width="40"
                                            class=" h-auto ma-auto"
                                            src="@/assets/images/webpack.png"
                                        />
                                    </div>
                                    <v-card-text class="bg-white">
                                        <p
                                            class="card-text font-weight-bold ma-0 "
                                        >
                                            Filemanager.pdf
                                        </p>
                                        <p
                                            class="text--disabled font-weight-medium ma-0 "
                                        >
                                            20.5kb
                                        </p>
                                        <p class="ma-0 body-2">
                                            Last accessed: 3 Hours ago
                                        </p>
                                    </v-card-text>
                                </base-card>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-row>
                        <v-col cols="12" class="">
                            <p
                                class="font-weight-medium ma-0 text--disabled text-12"
                            >
                                FOLDER
                            </p>
                        </v-col>
                    </v-row>
                    <v-container class="grid filemanager-content">
                        <v-row>
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <v-card-text class="bg-white">
                                        <div class="d-flex align-center">
                                            <v-icon class="mr-2">
                                                mdi-folder-outline
                                            </v-icon>
                                            <div>
                                                <p
                                                    class="font-weight-medium ma-0 "
                                                >
                                                    Project
                                                </p>
                                                <p
                                                    class="text--disabled ma-0 body-2"
                                                >
                                                    2 files, 3.05mb
                                                </p>
                                            </div>
                                        </div>
                                    </v-card-text>
                                </base-card>
                            </v-col>
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <v-card-text class="bg-white">
                                        <div class="d-flex align-center">
                                            <v-icon class="mr-2">
                                                mdi-folder-outline
                                            </v-icon>
                                            <div>
                                                <p
                                                    class="font-weight-medium ma-0 "
                                                >
                                                    Video
                                                </p>
                                                <p
                                                    class="text--disabled ma-0 body-2"
                                                >
                                                    25 files, 35mb
                                                </p>
                                            </div>
                                        </div>
                                    </v-card-text>
                                </base-card>
                            </v-col>
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <v-card-text class="bg-white">
                                        <div class="d-flex align-center">
                                            <v-icon class="mr-2">
                                                mdi-folder-outline
                                            </v-icon>
                                            <div>
                                                <p
                                                    class="font-weight-medium ma-0 "
                                                >
                                                    Music
                                                </p>
                                                <p
                                                    class="text--disabled ma-0 body-2"
                                                >
                                                    2 files, 3.05mb
                                                </p>
                                            </div>
                                        </div>
                                    </v-card-text>
                                </base-card>
                            </v-col>
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <v-card-text class="bg-white">
                                        <div class="d-flex align-center">
                                            <v-icon class="mr-2">
                                                mdi-folder-outline
                                            </v-icon>
                                            <div>
                                                <p
                                                    class="font-weight-medium ma-0 "
                                                >
                                                    Documents
                                                </p>
                                                <p
                                                    class="text--disabled ma-0 body-2"
                                                >
                                                    2 files, 3.05mb
                                                </p>
                                            </div>
                                        </div>
                                    </v-card-text>
                                </base-card>
                            </v-col>
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <v-card-text class="bg-white">
                                        <div class="d-flex align-center">
                                            <v-icon class="mr-2">
                                                mdi-folder-outline
                                            </v-icon>
                                            <div>
                                                <p
                                                    class="font-weight-medium ma-0 "
                                                >
                                                    Application Design
                                                </p>
                                                <p
                                                    class="text--disabled ma-0 body-2"
                                                >
                                                    2 files, 3.05mb
                                                </p>
                                            </div>
                                        </div>
                                    </v-card-text>
                                </base-card>
                            </v-col>
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <v-card-text class="bg-white">
                                        <div class="d-flex align-center">
                                            <v-icon class="mr-2">
                                                mdi-folder-outline
                                            </v-icon>
                                            <div>
                                                <p
                                                    class="font-weight-medium ma-0 "
                                                >
                                                    Photos
                                                </p>
                                                <p
                                                    class="text--disabled ma-0 body-2"
                                                >
                                                    2 files, 3.05mb
                                                </p>
                                            </div>
                                        </div>
                                    </v-card-text>
                                </base-card>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-row>
                        <v-col cols="12" class="">
                            <p
                                class="font-weight-medium ma-0 text--disabled text-12"
                            >
                                FOLDER
                            </p>
                        </v-col>
                    </v-row>
                    <v-container class="">
                        <v-row>
                            <!-- <div class="grid filemanager-content"> -->
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <div class="py-6">
                                        <v-img
                                            width="40"
                                            class=" h-auto ma-auto"
                                            src="@/assets/images/react.png"
                                        />
                                    </div>
                                    <v-card-text class="bg-white">
                                        <p
                                            class="card-text font-weight-bold ma-0 "
                                        >
                                            Filemanager.pdf
                                        </p>
                                        <p
                                            class="text--disabled font-weight-medium ma-0 "
                                        >
                                            20.5kb
                                        </p>
                                        <p class="ma-0 body-2">
                                            Last accessed: 3 Hours ago
                                        </p>
                                    </v-card-text>
                                </base-card>
                            </v-col>
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <div class="py-6">
                                        <v-img
                                            width="40"
                                            class=" h-auto ma-auto"
                                            src="@/assets/images/Sass_icon.png"
                                        />
                                    </div>
                                    <v-card-text class="bg-white">
                                        <p
                                            class="card-text font-weight-bold ma-0 "
                                        >
                                            Filemanager.pdf
                                        </p>
                                        <p
                                            class="text--disabled font-weight-medium ma-0 "
                                        >
                                            20.5kb
                                        </p>
                                        <p class="ma-0 body-2">
                                            Last accessed: 3 Hours ago
                                        </p>
                                    </v-card-text>
                                </base-card>
                            </v-col>
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <div class="py-6">
                                        <v-img
                                            width="40"
                                            class=" h-auto ma-auto"
                                            src="@/assets/images/Angular_Icon.png"
                                        />
                                    </div>
                                    <v-card-text class="bg-white">
                                        <p
                                            class="card-text font-weight-bold ma-0 "
                                        >
                                            Filemanager.pdf
                                        </p>
                                        <p
                                            class="text--disabled font-weight-medium ma-0 "
                                        >
                                            20.5kb
                                        </p>
                                        <p class="ma-0 body-2">
                                            Last accessed: 3 Hours ago
                                        </p>
                                    </v-card-text>
                                </base-card>
                            </v-col>
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <div class="py-6">
                                        <v-img
                                            width="40"
                                            class=" h-auto ma-auto"
                                            src="@/assets/images/webpack.png"
                                        />
                                    </div>
                                    <v-card-text class="bg-white">
                                        <p
                                            class="card-text font-weight-bold ma-0 "
                                        >
                                            Filemanager.pdf
                                        </p>
                                        <p
                                            class="text--disabled font-weight-medium ma-0 "
                                        >
                                            20.5kb
                                        </p>
                                        <p class="ma-0 body-2">
                                            Last accessed: 3 Hours ago
                                        </p>
                                    </v-card-text>
                                </base-card>
                            </v-col>
                            <v-col md="6" lg="4" class="">
                                <base-card>
                                    <div class="py-6">
                                        <v-img
                                            width="40"
                                            class=" h-auto ma-auto"
                                            src="@/assets/images/laravel-logo.png"
                                        />
                                    </div>
                                    <v-card-text class="bg-white">
                                        <p
                                            class="card-text font-weight-bold ma-0 "
                                        >
                                            Filemanager.pdf
                                        </p>
                                        <p
                                            class="text--disabled font-weight-medium ma-0 "
                                        >
                                            20.5kb
                                        </p>
                                        <p class="ma-0 body-2">
                                            Last accessed: 3 Hours ago
                                        </p>
                                    </v-card-text>
                                </base-card>
                            </v-col>

                            <!-- </div> -->
                        </v-row>
                    </v-container>
                </div>
            </vue-perfect-scrollbar>
        </div>
    </div>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
    name: 'Filemanager',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Filemanager'
    },
    components: {
        VuePerfectScrollbar
    },
    data: () => ({
        isOpen: false,
        isBlock: false,
        // item: 1,
        // itemsTwo: 0,
        items: [
            {text: 'Admin Information', icon: 'mdi-folder-outline'},
            {text: 'My Devices', icon: 'mdi-devices'},
            {text: 'Recents', icon: 'mdi-clock-outline'},
            {text: 'Important', icon: 'mdi-star-half-full'},
            {text: 'Delete Files', icon: 'mdi-trash-can'}
        ],
        itemsTwo: [
            {text: 'Admin Information', icon: 'mdi-folder-outline'},
            {text: 'My Devices', icon: 'mdi-devices'},
            {text: 'Recents', icon: 'mdi-clock-outline'},
            {text: 'Important', icon: 'mdi-star-half-full'},
            {text: 'Delete Files', icon: 'mdi-trash-can'}
        ]
    }),
    methods: {
        appToggle: function() {
            this.isOpen = !this.isOpen
            this.isBlock = !this.isBlock
        },
        overlayApp: function() {
            this.isOpen = !this.isOpen
            this.isBlock = !this.isBlock
        }
    }
}
</script>
<style lang="scss">
.app-content-wrapper {
    position: relative;
    display: flex;
    overflow: hidden;
    height: calc(100vh - 200px);

    .app-overlay {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        display: none;
        z-index: 2;
        transition: all 0.3s ease-in;
        @media only screen and (max-width: 959px) {
            &.open {
                display: block;
                transition: all 0.3s ease-in;
            }
        }
    }
    .app-sidebar {
        width: 280px;
        position: relative;
        transition: all 0.3s ease-in;
        @media only screen and (max-width: 959px) {
            position: absolute;
            left: -340px;
            z-index: 5;
            height: calc(100vh - 120px);
            transition: all 0.3s ease-in;
            &.open {
                left: 0;
            }
        }
        .app-sidebar-header {
            padding: 0.75rem 1.25rem;
            margin-bottom: 0;
            // border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 1;
        }
        .app-sidebar-body {
            // overflow-y: scroll;
            // height: 100%;
            padding-top: 3.375rem;
            width: 280px;
        }
    }

    .app-content {
        width: calc(100% - 280px);
        @media only screen and (max-width: 959px) {
            width: 100%;
        }
        // margin-left: 30px;
        .app-header {
            padding: 0.75rem 1.25rem;
            margin-bottom: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 1;
        }
        .app-body {
            flex: 1 1 auto;
            padding-top: 3.375rem;
            // overflow-y: scroll;
            height: calc(100% - 130px);
        }
        .app-footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 130px;
        }
    }
}
.app-icon {
    display: none;
    @media only screen and (max-width: 959px) {
        display: block;
    }
}
.eg-filemanager {
    background-color: #fff;
}
.filemanager-content {
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
}

.apps-wrapper {
    &.--filemanager {
        .nested-sidebar-toggle {
            @media (min-width: 959px) {
                display: none;
            }
        }
    }
}
</style>
