<template>
    <v-row>
        <v-col cols="12" md="4">
            <base-card>
                <v-card-title>Lists</v-card-title>
                <v-card-text>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title
                                >Single-line item</v-list-item-title
                            >
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Two-line item</v-list-item-title>
                            <v-list-item-subtitle
                                >Secondary text</v-list-item-subtitle
                            >
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title
                                >Three-line item</v-list-item-title
                            >
                            <v-list-item-subtitle>
                                Secondary line text Lorem ipsum dolor sit amet,
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                consectetur adipiscing elit.
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="4">
            <base-card>
                <v-card-title>Shaped Lists</v-card-title>
                <v-card-text>
                    <v-list shaped>
                        <v-subheader>REPORTS</v-subheader>
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
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="4">
            <base-card>
                <v-card-title>Flat</v-card-title>
                <v-card-text>
                    <v-list flat>
                        <v-subheader>REPORTS</v-subheader>
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
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="4">
            <base-card class="h-full">
                <v-card-title>Rounded</v-card-title>
                <v-card-text>
                    <v-list rounded>
                        <v-subheader>REPORTS</v-subheader>
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
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="4">
            <base-card class="h-full">
                <v-card-title>Avatar with title and action</v-card-title>
                <v-card-text>
                    <v-toolbar color="indigo" dark>
                        <v-app-bar-nav-icon />

                        <v-toolbar-title>Inbox</v-toolbar-title>

                        <v-spacer />

                        <v-btn icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-list>
                        <v-list-item v-for="item in itemsTwo" :key="item.title">
                            <v-list-item-icon>
                                <v-icon v-if="item.icon" color="danger">
                                    mdi-star
                                </v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title v-text="item.title" />
                            </v-list-item-content>

                            <v-list-item-avatar>
                                <v-img :src="item.avatar" />
                            </v-list-item-avatar>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col>
            <base-card>
                <v-card-title>Icons With in action</v-card-title>
                <v-card-text>
                    <v-toolbar color="light-blue" dark>
                        <v-app-bar-nav-icon />

                        <v-toolbar-title>My files</v-toolbar-title>

                        <v-spacer />

                        <v-btn icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-view-module</v-icon>
                        </v-btn>
                    </v-toolbar>

                    <v-list two-line subheader>
                        <v-subheader inset>
                            Folders
                        </v-subheader>

                        <v-list-item
                            v-for="item in itemsThree"
                            :key="item.title"
                        >
                            <v-list-item-avatar>
                                <v-icon
                                    :class="[item.iconClass]"
                                    v-text="item.icon"
                                />
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title v-text="item.title" />
                                <v-list-item-subtitle v-text="item.subtitle" />
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-btn icon>
                                    <v-icon color="grey lighten-1">
                                        mdi-information
                                    </v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="4">
            <base-card>
                <v-card-title>Card image with toolbar and list</v-card-title>
                <v-card-text>
                    <v-img
                        src="@/assets/images/gallery/sq-4.jpg"
                        height="300px"
                        dark
                    >
                        <v-row class="fill-height">
                            <v-card-title>
                                <v-btn dark icon>
                                    <v-icon>mdi-chevron-left</v-icon>
                                </v-btn>

                                <v-spacer />

                                <v-btn dark icon class="mr-4">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>

                                <v-btn dark icon>
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </v-card-title>

                            <v-spacer />

                            <v-card-title class="white--text pl-12 pt-12">
                                <div class="display-1 pl-12 pt-12">
                                    Ali Conners
                                </div>
                            </v-card-title>
                        </v-row>
                    </v-img>

                    <v-list two-line>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon color="indigo">
                                    mdi-phone
                                </v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title
                                    >(650) 555-1234</v-list-item-title
                                >
                                <v-list-item-subtitle
                                    >Mobile</v-list-item-subtitle
                                >
                            </v-list-item-content>

                            <v-list-item-icon>
                                <v-icon>mdi-message-text</v-icon>
                            </v-list-item-icon>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-action />

                            <v-list-item-content>
                                <v-list-item-title
                                    >(323) 555-6789</v-list-item-title
                                >
                                <v-list-item-subtitle
                                    >Work</v-list-item-subtitle
                                >
                            </v-list-item-content>

                            <v-list-item-icon>
                                <v-icon>mdi-message-text</v-icon>
                            </v-list-item-icon>
                        </v-list-item>

                        <v-divider inset />

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon color="indigo">
                                    mdi-email
                                </v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title
                                    >aliconnors@example.com</v-list-item-title
                                >
                                <v-list-item-subtitle
                                    >Personal</v-list-item-subtitle
                                >
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-action />

                            <v-list-item-content>
                                <v-list-item-title
                                    >ali_connors@example.com</v-list-item-title
                                >
                                <v-list-item-subtitle
                                    >Work</v-list-item-subtitle
                                >
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider inset />

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon color="indigo">
                                    mdi-map-marker
                                </v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title
                                    >1400 Main Street</v-list-item-title
                                >
                                <v-list-item-subtitle
                                    >Orlando, FL 79938</v-list-item-subtitle
                                >
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="4">
            <base-card>
                <v-card-title>Expansion Lists</v-card-title>
                <v-card-text>
                    <v-toolbar color="teal" dark>
                        <v-app-bar-nav-icon />

                        <v-toolbar-title>Topics</v-toolbar-title>

                        <v-spacer />

                        <v-btn icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-toolbar>

                    <v-list>
                        <v-list-group
                            v-for="item in itemsFive"
                            :key="item.title"
                            v-model="item.active"
                            :prepend-icon="item.action"
                            no-action
                        >
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.title" />
                                </v-list-item-content>
                            </template>

                            <v-list-item
                                v-for="subItem in item.items"
                                :key="subItem.title"
                            >
                                <v-list-item-content>
                                    <v-list-item-title v-text="subItem.title" />
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-group>
                    </v-list>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'List'
    },
    data: () => ({
        item: 1,
        items: [
            {text: 'Real-Time', icon: 'mdi-clock'},
            {text: 'Audience', icon: 'mdi-account'},
            {text: 'Conversions', icon: 'mdi-flag'}
        ],
        itemsTwo: [
            {
                icon: true,
                title: 'Jason Oner',
                avatar: require('@/assets/images/faces/1.jpg')
            },
            {
                title: 'Travis Howard',
                avatar: require('@/assets/images/faces/2.jpg')
            },
            {
                title: 'Ali Connors',
                avatar: require('@/assets/images/faces/3.jpg')
            },
            {
                title: 'Cindy Baker',
                avatar: require('@/assets/images/faces/4.jpg')
            }
        ],
        itemsThree: [
            {
                icon: 'mdi-folder',
                iconClass: 'grey lighten-1 white--text',
                title: 'Photos',
                subtitle: 'Jan 9, 2014'
            },
            {
                icon: 'mdi-folder',
                iconClass: 'grey lighten-1 white--text',
                title: 'Recipes',
                subtitle: 'Jan 17, 2014'
            },
            {
                icon: 'mdi-folder',
                iconClass: 'grey lighten-1 white--text',
                title: 'Work',
                subtitle: 'Jan 28, 2014'
            }
        ],
        itemsFour: [
            {
                icon: 'assignment',
                iconClass: 'blue white--text',
                title: 'Vacation itinerary',
                subtitle: 'Jan 20, 2014'
            },
            {
                icon: 'call_to_action',
                iconClass: 'amber white--text',
                title: 'Kitchen remodel',
                subtitle: 'Jan 10, 2014'
            }
        ],
        itemsFive: [
            {
                action: 'mdi-folder',
                title: 'Attractions',
                items: [{title: 'List Item'}]
            },
            {
                action: 'mdi-folder',
                title: 'Dining',
                active: true,
                items: [
                    {title: 'Breakfast & brunch'},
                    {title: 'New American'},
                    {title: 'Sushi'}
                ]
            },
            {
                action: 'mdi-folder',
                title: 'Education',
                items: [{title: 'List Item'}]
            },
            {
                action: 'mdi-folder',
                title: 'Family',
                items: [{title: 'List Item'}]
            },
            {
                action: 'mdi-folder',
                title: 'Health',
                items: [{title: 'List Item'}]
            },
            {
                action: 'mdi-folder',
                title: 'Office',
                items: [{title: 'List Item'}]
            },
            {
                action: 'mdi-folder',
                title: 'Promotions',
                items: [{title: 'List Item'}]
            }
        ]
    })
}
</script>
