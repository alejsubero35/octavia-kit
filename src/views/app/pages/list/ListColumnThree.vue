<template>
    <v-row>
        <v-col cols="12" lg="3" class="mt-3">
            <base-card>
                <v-card-title class="flex-column">
                    <v-avatar class="my-4">
                        <v-img src="@/assets/images/avatars/007-woman-2.svg" />
                    </v-avatar>
                    <p class="ma-0 body-1 ">Project manager</p>
                    <h6>Asiya Wolff</h6>
                </v-card-title>
                <v-card-text>
                    <v-list subheader>
                        <v-subheader>TEAMS</v-subheader>

                        <v-list-item
                            v-for="item in sidebarList"
                            :key="item.title"
                        >
                            <v-list-item-avatar>
                                <v-icon>mdi-account-multiple</v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title
                                    v-text="item.title"
                                ></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list subheader>
                        <v-subheader>MY TEAM</v-subheader>

                        <v-list-item
                            v-for="item in sidebarListTwo"
                            :key="item.title"
                        >
                            <v-list-item-avatar>
                                <v-icon>mdi-account-heart</v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title
                                    v-text="item.title"
                                ></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" lg="9">
            <v-data-iterator
                :items="items"
                :items-per-page.sync="itemsPerPage"
                :page="page"
                hide-default-footer
            >
                <template v-slot:default="props">
                    <v-row>
                        <v-col
                            v-for="(item, index) in props.items"
                            :key="index"
                            cols="12"
                            md="6"
                            sm="6"
                            lg="4"
                        >
                            <list-card-three
                                :avatar="item.img"
                                :title="item.title"
                                :sub-title="item.subTitle"
                                footer-btn-color="primary"
                                footer-btn-color-two="primary"
                            />
                        </v-col>
                    </v-row>
                </template>
                <template v-slot:footer>
                    <v-row class="mt-2" align="center" justify="center">
                        <v-spacer />

                        <span class="mr-4 grey--text"
                            >Page {{ page }} of {{ numberOfPages }}</span
                        >
                        <v-btn
                            small
                            fab
                            dark
                            color="blue darken-3"
                            class="mr-1"
                            @click="formerPage"
                        >
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn
                            small
                            fab
                            dark
                            color="blue darken-3"
                            class="ml-1"
                            @click="nextPage"
                        >
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                    </v-row>
                </template>
            </v-data-iterator>
        </v-col>
    </v-row>
</template>
<script>
import ListCardThree from '@/components/card/listCard/ListCardThree'

export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'ListColumn Three'
    },
    components: {
        'list-card-three': ListCardThree
    },
    data() {
        return {
            itemsPerPageArray: [],
            search: '',
            filter: {},
            sortDesc: false,
            page: 1,
            itemsPerPage: 9,
            sortBy: 'name',
            keys: [
                'Name',
                'Calories',
                'Fat',
                'Carbs',
                'Protein',
                'Sodium',
                'Calcium',
                'Iron'
            ],
            items: [
                {
                    img: require('@/assets/images/avatars/001-man.svg'),
                    title: 'Timothy clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/002-woman.svg'),
                    title: 'Zac Clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/007-woman-2.svg'),
                    title: 'Timothy clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/006-woman-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/faces/1.jpg'),
                    title: 'Timothy clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/faces/2.jpg'),
                    title: 'Zac Clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/faces/3.jpg'),
                    title: 'Zac Clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/001-man.svg'),
                    title: 'Timothy clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/002-woman.svg'),
                    title: 'Zac Clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/007-woman-2.svg'),
                    title: 'Timothy clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/006-woman-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/001-man.svg'),
                    title: 'Timothy clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/002-woman.svg'),
                    title: 'Zac Clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/007-woman-2.svg'),
                    title: 'Timothy clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/006-woman-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img: require('@/assets/images/faces/1.jpg'),
                    title: 'Timothy clarkson',
                    subTitle:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                }
            ],
            sidebarList: [
                {title: 'Alpha'},
                {title: 'Beta'},
                {title: 'Sales'},
                {title: 'Support'}
            ],
            sidebarListTwo: [{title: 'Favorite'}]
        }
    },
    computed: {
        numberOfPages() {
            return Math.ceil(this.items.length / this.itemsPerPage)
        },
        filteredKeys() {
            return this.keys.filter((key) => key !== 'Name')
        }
    },
    methods: {
        nextPage() {
            if (this.page + 1 <= this.numberOfPages) this.page += 1
        },
        formerPage() {
            if (this.page - 1 >= 1) this.page -= 1
        },
        updateItemsPerPage(number) {
            this.itemsPerPage = number
        }
    }
}
</script>
>
