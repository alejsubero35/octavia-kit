<template>
    <div>
        <v-sheet class="px-6 py-12 ">
            <div class="container">
                <div class="d-flex flex-wrap justify-space-between mb-8">
                    <v-avatar size="120" class="mr-6">
                        <img
                            class=""
                            src="@/assets/images/avatars/006-woman-1.svg"
                            alt=""
                        />
                    </v-avatar>
                    <div class="flex-1">
                        <div class="d-flex align-start justify-space-between">
                            <div class="mb-3">
                                <h5 class="mr-2 mb-0">
                                    amanda_nash

                                    <v-tooltip top>
                                        <template
                                            v-slot:activator="{on, attrs}"
                                        >
                                            <v-icon
                                                class="body-1"
                                                color="primary"
                                                v-bind="attrs"
                                                v-on="on"
                                            >
                                                mdi-check-decagram</v-icon
                                            >
                                        </template>
                                        <span>Verified</span>
                                    </v-tooltip>
                                </h5>
                                <p class="text--disabled mb-0">Amanda Nash</p>
                            </div>
                            <div>
                                <v-chip
                                    class="ma-2"
                                    color="green"
                                    outlined
                                    small
                                >
                                    Lifestyle
                                </v-chip>
                                <v-chip class="" color="orange" outlined small>
                                    Music
                                </v-chip>
                            </div>
                        </div>
                        <div class="d-flex mb-2">
                            <p class="ma-0 mr-8">
                                <span class="font-weight-medium">1,022 </span
                                ><span class="body-2 text--disabled"
                                    >Posts</span
                                >
                            </p>
                            <p class="ma-0 mr-8">
                                <span class="font-weight-medium">100k </span
                                ><span class="body-2 text--disabled"
                                    >Followers</span
                                >
                            </p>
                            <p class="ma-0 mr-8">
                                <span class="font-weight-medium">1540 </span
                                ><span class="body-2 text--disabled"
                                    >Following</span
                                >
                            </p>
                        </div>
                        <p class="text--disabled">
                            Actor, musician, songwriter #amanda_nash, mailbox:
                            hello@amandanash.com
                        </p>
                    </div>
                    <div class="flex-1 text-right">
                        <v-btn fab class="mr-2" small depressed>
                            <v-icon>mdi-email-outline</v-icon>
                        </v-btn>
                        <v-menu offset-y>
                            <template v-slot:activator="{on, attrs}">
                                <v-btn
                                    fab
                                    color=""
                                    small
                                    depressed
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-icon>mdi-dots-horizontal</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title>
                                        <v-icon>mdi-eye</v-icon> View As
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>
                                        <v-icon
                                            >mdi-comment-text-multiple</v-icon
                                        >
                                        Messages
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>
                                        <v-icon>mdi-account-settings</v-icon>
                                        Account Settings
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </div>
            </div>
        </v-sheet>
        <base-card class="transparent">
            <v-tabs v-model="tab" background-color="">
                <v-tab v-for="item in items" :key="item.tab">
                    {{ item.tab }}
                </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab" class="transparent">
                <v-tab-item class="transparent">
                    <v-row>
                        <v-col cols="12" lg="3">
                            <base-card class="mb-4">
                                <v-card-title class="body-1"
                                    >Basic Info</v-card-title
                                >
                                <v-divider></v-divider>
                                <v-card-text>
                                    <v-list>
                                        <v-list-item
                                            v-for="(info, index) in infos"
                                            :key="index"
                                            two-line
                                            class="pa-0"
                                        >
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    {{ info.title }}
                                                </v-list-item-title>
                                                <v-list-item-subtitle>
                                                    {{ info.subtitle }}
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <v-responsive
                                                    class="text-center grey lighten-3 rounded-circle d-inline-flex align-center justify-center"
                                                    height="30"
                                                    width="30"
                                                >
                                                    <v-icon
                                                        class="body-1 grey--text"
                                                    >
                                                        {{ info.icon }}
                                                    </v-icon>
                                                </v-responsive>
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                </v-card-text>
                            </base-card>

                            <base-card class="mb-4">
                                <v-card-title class="body-1"
                                    >Friends</v-card-title
                                >
                                <v-divider></v-divider>
                                <v-card-text>
                                    <v-list>
                                        <v-list-item
                                            v-for="(friend, index) in friends"
                                            :key="index"
                                            two-line
                                            class="pa-0"
                                        >
                                            <v-list-item-avatar>
                                                <v-img
                                                    :src="friend.img"
                                                ></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title
                                                    v-html="friend.title"
                                                ></v-list-item-title>
                                                <v-list-item-subtitle
                                                    v-html="friend.subtitle"
                                                ></v-list-item-subtitle>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <v-icon
                                                    :color="friend.iconColor"
                                                    >mdi-star</v-icon
                                                >
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                    <v-btn block depressed color="primary"
                                        >View All Friends</v-btn
                                    >
                                </v-card-text>
                            </base-card>

                            <base-card class="mb-4">
                                <v-card-title class="body-1"
                                    >Photos</v-card-title
                                >
                                <v-divider></v-divider>
                                <v-card-text>
                                    <v-row>
                                        <v-col
                                            v-for="(image, index) in images"
                                            :key="index"
                                            class="d-flex child-flex"
                                            cols="6"
                                        >
                                            <base-card flat tile class="d-flex">
                                                <v-img
                                                    :src="image.img"
                                                    :lazy-src="image.img"
                                                    aspect-ratio="1"
                                                    width="120"
                                                    height="120"
                                                    contain
                                                    class="grey lighten-2"
                                                >
                                                    <template
                                                        v-slot:placeholder
                                                    >
                                                        <v-row
                                                            class="fill-height ma-0"
                                                            align="center"
                                                            justify="center"
                                                        >
                                                            <v-progress-circular
                                                                indeterminate
                                                                color="grey lighten-5"
                                                            ></v-progress-circular>
                                                        </v-row>
                                                    </template>
                                                </v-img>
                                            </base-card>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </base-card>

                            <base-card class="mb-4">
                                <v-card-title class="body-1"
                                    >Travels</v-card-title
                                >
                                <v-divider></v-divider>
                                <v-card-text>
                                    <v-list>
                                        <v-list-item
                                            v-for="(place, index) in country"
                                            :key="index"
                                            two-line
                                            class="pa-0"
                                        >
                                            <v-list-item-avatar>
                                                <v-img :src="place.img"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title
                                                    v-html="place.title"
                                                ></v-list-item-title>
                                                <v-list-item-subtitle
                                                    v-html="place.subtitle"
                                                ></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-card-text>
                            </base-card>
                        </v-col>
                        <v-col cols="12" lg="9">
                            <v-timeline dense align-top>
                                <v-timeline-item>
                                    <template v-slot:icon>
                                        <v-avatar>
                                            <img
                                                src="@/assets/images/faces/1.jpg"
                                            />
                                        </v-avatar>
                                    </template>
                                    <base-card>
                                        <v-card-title>
                                            <div
                                                class="d-flex justify-space-between"
                                            >
                                                <div class="d-flex">
                                                    <v-avatar class="mr-2">
                                                        <img
                                                            src="@/assets/images/faces/1.jpg"
                                                            alt=""
                                                        />
                                                    </v-avatar>

                                                    <div>
                                                        <p class="body-2 mb-0">
                                                            Timothy Clarkson
                                                        </p>
                                                        <p
                                                            class="text--disabled caption mb-0"
                                                        >
                                                            11 Mar 2020
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <v-menu left bottom>
                                                        <template
                                                            v-slot:activator="{
                                                                on
                                                            }"
                                                        >
                                                            <v-btn
                                                                icon
                                                                v-on="on"
                                                            >
                                                                <v-icon
                                                                    >mdi-dots-horizontal</v-icon
                                                                >
                                                            </v-btn>
                                                        </template>

                                                        <v-list>
                                                            <v-list-item
                                                                @click="
                                                                    () => {}
                                                                "
                                                            >
                                                                <v-list-item-title>
                                                                    <v-icon
                                                                        class="mr-1"
                                                                        >mdi-cogs</v-icon
                                                                    >
                                                                    Actions
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item
                                                                @click="
                                                                    () => {}
                                                                "
                                                            >
                                                                <v-list-item-title>
                                                                    <v-icon
                                                                        class="mr-1"
                                                                        >mdi-play</v-icon
                                                                    >
                                                                    Another
                                                                    Actions
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item
                                                                @click="
                                                                    () => {}
                                                                "
                                                            >
                                                                <v-list-item-title>
                                                                    <v-icon
                                                                        class="mr-1"
                                                                        >mdi-pencil</v-icon
                                                                    >
                                                                    Something
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-menu>
                                                </div>
                                            </div>
                                        </v-card-title>
                                        <v-card-text>
                                            <p class="ma-0 mb-4">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s
                                            </p>
                                            <img
                                                class="mb-4 rounded"
                                                src="@/assets/images/gallery/sq-16.jpg"
                                                alt=""
                                            />

                                            <div
                                                class="d-flex justify-space-between align-center flex-wrap"
                                            >
                                                <avatar-group-card
                                                    class="ml-4"
                                                ></avatar-group-card>
                                                <div class="my-3">
                                                    <v-icon small class=""
                                                        >mdi-heart-outline</v-icon
                                                    >
                                                    32
                                                    <v-icon small class="ml-4"
                                                        >mdi-comment-outline</v-icon
                                                    >
                                                    12
                                                </div>
                                            </div>
                                        </v-card-text>
                                    </base-card>
                                </v-timeline-item>
                                <v-timeline-item>
                                    <template v-slot:icon>
                                        <v-avatar>
                                            <img
                                                src="@/assets/images/faces/2.jpg"
                                            />
                                        </v-avatar>
                                    </template>
                                    <base-card>
                                        <v-card-title>
                                            <div
                                                class="d-flex justify-space-between"
                                            >
                                                <div class="d-flex">
                                                    <v-avatar class="mr-2">
                                                        <img
                                                            src="@/assets/images/faces/2.jpg"
                                                            alt=""
                                                        />
                                                    </v-avatar>

                                                    <div>
                                                        <p class="body-2 mb-0">
                                                            Timothy Clarkson
                                                        </p>
                                                        <p
                                                            class="text--disabled caption mb-0"
                                                        >
                                                            11 Mar 2020
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <v-menu left bottom>
                                                        <template
                                                            v-slot:activator="{
                                                                on
                                                            }"
                                                        >
                                                            <v-btn
                                                                icon
                                                                v-on="on"
                                                            >
                                                                <v-icon
                                                                    >mdi-dots-horizontal</v-icon
                                                                >
                                                            </v-btn>
                                                        </template>

                                                        <v-list>
                                                            <v-list-item
                                                                @click="
                                                                    () => {}
                                                                "
                                                            >
                                                                <v-list-item-title>
                                                                    <v-icon
                                                                        class="mr-1"
                                                                        >mdi-cogs</v-icon
                                                                    >
                                                                    Actions
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item
                                                                @click="
                                                                    () => {}
                                                                "
                                                            >
                                                                <v-list-item-title>
                                                                    <v-icon
                                                                        class="mr-1"
                                                                        >mdi-play</v-icon
                                                                    >
                                                                    Another
                                                                    Actions
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item
                                                                @click="
                                                                    () => {}
                                                                "
                                                            >
                                                                <v-list-item-title>
                                                                    <v-icon
                                                                        class="mr-1"
                                                                        >mdi-pencil</v-icon
                                                                    >
                                                                    Something
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-menu>
                                                </div>
                                            </div>
                                        </v-card-title>
                                        <v-card-text>
                                            <p class="ma-0 mb-4">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s
                                            </p>
                                            <div
                                                class="border-solid border-1 border-gray-200 border-opacity-100"
                                            >
                                                <v-card-title>
                                                    <div
                                                        class="d-flex justify-space-between"
                                                    >
                                                        <div class="d-flex">
                                                            <v-avatar
                                                                class="mr-2"
                                                            >
                                                                <img
                                                                    src="@/assets/images/faces/2.jpg"
                                                                    alt=""
                                                                />
                                                            </v-avatar>

                                                            <div>
                                                                <p
                                                                    class="body-2 mb-0"
                                                                >
                                                                    Timothy
                                                                    Clarkson
                                                                </p>
                                                                <p
                                                                    class="text--disabled caption mb-0"
                                                                >
                                                                    11 Mar 2020
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </v-card-title>
                                                <v-card-text>
                                                    <p class="ma-0 mb-4">
                                                        Lorem Ipsum is simply
                                                        dummy text of the
                                                        printing and typesetting
                                                        industry. Lorem Ipsum
                                                        has been the industry's
                                                        standard dummy text ever
                                                        since the 1500s
                                                    </p>
                                                    <img
                                                        class="mb-4 rounded"
                                                        src="@/assets/images/gallery/sq-4.jpg"
                                                        alt=""
                                                    />

                                                    <div
                                                        class="d-flex justify-space-between align-center flex-wrap"
                                                    >
                                                        <avatar-group-card
                                                            class="ml-4"
                                                        ></avatar-group-card>
                                                        <div class="my-3">
                                                            <v-icon
                                                                small
                                                                class=""
                                                                >mdi-heart-outline</v-icon
                                                            >
                                                            32
                                                            <v-icon
                                                                small
                                                                class="ml-4"
                                                                >mdi-comment-outline</v-icon
                                                            >
                                                            12
                                                        </div>
                                                    </div>
                                                </v-card-text>
                                            </div>
                                        </v-card-text>
                                    </base-card>
                                </v-timeline-item>
                                <v-timeline-item>
                                    <template v-slot:icon>
                                        <v-avatar>
                                            <img
                                                src="@/assets/images/faces/3.jpg"
                                            />
                                        </v-avatar>
                                    </template>
                                    <base-card>
                                        <v-card-title>
                                            <div
                                                class="d-flex justify-space-between"
                                            >
                                                <div class="d-flex">
                                                    <v-avatar class="mr-2">
                                                        <img
                                                            src="@/assets/images/faces/3.jpg"
                                                            alt=""
                                                        />
                                                    </v-avatar>

                                                    <div>
                                                        <p class="body-2 mb-0">
                                                            Timothy Clarkson
                                                        </p>
                                                        <p
                                                            class="text--disabled caption mb-0"
                                                        >
                                                            11 Mar 2020
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <v-menu left bottom>
                                                        <template
                                                            v-slot:activator="{
                                                                on
                                                            }"
                                                        >
                                                            <v-btn
                                                                icon
                                                                v-on="on"
                                                            >
                                                                <v-icon
                                                                    >mdi-dots-horizontal</v-icon
                                                                >
                                                            </v-btn>
                                                        </template>

                                                        <v-list>
                                                            <v-list-item
                                                                @click="
                                                                    () => {}
                                                                "
                                                            >
                                                                <v-list-item-title>
                                                                    <v-icon
                                                                        class="mr-1"
                                                                        >mdi-cogs</v-icon
                                                                    >
                                                                    Actions
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item
                                                                @click="
                                                                    () => {}
                                                                "
                                                            >
                                                                <v-list-item-title>
                                                                    <v-icon
                                                                        class="mr-1"
                                                                        >mdi-play</v-icon
                                                                    >
                                                                    Another
                                                                    Actions
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item
                                                                @click="
                                                                    () => {}
                                                                "
                                                            >
                                                                <v-list-item-title>
                                                                    <v-icon
                                                                        class="mr-1"
                                                                        >mdi-pencil</v-icon
                                                                    >
                                                                    Something
                                                                </v-list-item-title>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-menu>
                                                </div>
                                            </div>
                                        </v-card-title>
                                        <v-card-text>
                                            <p class="ma-0 mb-4">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s
                                            </p>
                                            <img
                                                class="mb-4 rounded"
                                                src="@/assets/images/gallery/sq-15.jpg"
                                                alt=""
                                            />

                                            <div
                                                class="d-flex justify-space-between align-center flex-wrap"
                                            >
                                                <avatar-group-card
                                                    class="ml-4"
                                                ></avatar-group-card>
                                                <div class="my-3">
                                                    <v-icon small class=""
                                                        >mdi-heart-outline</v-icon
                                                    >
                                                    32
                                                    <v-icon small class="ml-4"
                                                        >mdi-comment-outline</v-icon
                                                    >
                                                    12
                                                </div>
                                            </div>
                                        </v-card-text>
                                    </base-card>
                                </v-timeline-item>
                            </v-timeline>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item class="transparent">
                    <base-card class="transparent">
                        <v-card-text>tab 2</v-card-text>
                    </base-card>
                </v-tab-item>
            </v-tabs-items>
        </base-card>
    </div>
</template>
<script>
import avatarGroupCard from '@/components/card/AvatarGroupCard'
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Profile 1'
    },
    components: {
        avatarGroupCard
    },
    data() {
        return {
            tab: null,
            items: [
                {tab: 'Timeline', content: 'Tab 1 Content'},
                {tab: 'Photo', content: 'Tab 2 Content'}
            ],
            infos: [
                {
                    title: 'Country',
                    subtitle: 'USA',
                    icon: 'mdi-home'
                },
                {
                    title: 'Relationship',
                    subtitle: 'Single',
                    icon: 'mdi-heart'
                },
                {
                    title: 'Form',
                    subtitle: 'New York',
                    icon: 'mdi-map'
                },
                {
                    title: 'Studied @',
                    subtitle: 'University Of UI Lib',
                    icon: 'mdi-school'
                },
                {
                    title: 'Lives In',
                    subtitle: 'Texas',
                    icon: 'mdi-google-maps'
                },
                {
                    title: 'Followers',
                    subtitle: '120k Followers',
                    icon: 'mdi-bell'
                }
            ],
            friends: [
                {
                    img: require('@/assets/images/faces/1.jpg'),
                    title: 'Tim Clarkson',
                    subtitle:
                        '<span class="text--disabled"> 2 mutual friend </span>',
                    iconColor: 'warning'
                },
                {
                    img: require('@/assets/images/faces/2.jpg'),
                    title: 'Jhon Weaver',
                    subtitle:
                        '<span class="text--disabled"> 2 mutual friend </span>',
                    iconColor: ''
                },
                {
                    img: require('@/assets/images/faces/3.jpg'),
                    title: 'Kane Frost',
                    subtitle:
                        '<span class="text--disabled"> 2 mutual friend </span>',
                    iconColor: 'warning'
                },
                {
                    img: require('@/assets/images/faces/4.jpg'),
                    title: 'Kane Frost',
                    subtitle:
                        '<span class="text--disabled"> 2 mutual friend </span>',
                    iconColor: 'warning'
                },
                {
                    img: require('@/assets/images/faces/5.jpg'),
                    title: 'Drow Ranger',
                    subtitle:
                        '<span class="text--disabled"> 2 mutual friend </span>',
                    iconColor: 'warning'
                },
                {
                    img: require('@/assets/images/faces/4.jpg'),
                    title: 'Juggernaut Frost',
                    subtitle:
                        '<span class="text--disabled"> 2 mutual friend </span>',
                    iconColor: ''
                }
            ],
            images: [
                {img: require('@/assets/images/gallery/sq-10.jpg')},
                {img: require('@/assets/images/gallery/sq-11.jpg')},
                {img: require('@/assets/images/gallery/sq-12.jpg')},
                {img: require('@/assets/images/gallery/sq-13.jpg')}
            ],
            country: [
                {
                    img: require('@/assets/images/country/dubai.jpg'),
                    title: 'Dubai',
                    subtitle: '<span class="text--disabled"> 2 days ago </span>'
                },
                {
                    img: require('@/assets/images/country/new_york.jpg'),
                    title: 'New York, USA',
                    subtitle:
                        '<span class="text--disabled"> 2 years ago </span>'
                },
                {
                    img: require('@/assets/images/country/china.jpg'),
                    title: 'Shanghai, China',
                    subtitle:
                        '<span class="text--disabled"> 11 months ago </span>'
                },
                {
                    img: require('@/assets/images/country/paris.jpg'),
                    title: 'Paris, France',
                    subtitle:
                        '<span class="text--disabled"> 11 months ago </span>'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.ul-widget-profile-img {
    position: relative;
}
.ul-widget-profile-img:after {
    // content: "";
    // position: absolute;
    // top: 44px;
    // left: 50%;
    // width: 1px;
    // height: calc(100% - 30px);
    // background: #B3C0CE;
    content: '';
    position: absolute;
    top: 44px;
    left: 50%;
    width: 1px;
    height: calc(100% - 30px);
    background: #b3c0ce;
}
</style>
