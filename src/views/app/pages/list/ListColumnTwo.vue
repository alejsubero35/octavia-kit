<template>
    <div>
        <v-row>
            <v-col md="12">
                <transition-group appear name="fade-up" tag="div">
                    <v-data-iterator
                        key
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
                                    sm="6"
                                    md="6"
                                    lg="4"
                                >
                                    <!-- <base-card>
                    <v-card-text>
                      <div class="d-flex justify-space-between align-center flex-wrap">
                        <div class="d-flex align-center">
                          <img
                            class="mr-md rounded-circle mr-2"
                            height="44"
                            width="44"
                            :src="item.img"
                          >
                          <div>
                            <p class="ma-0">
                              <a
                                href="#"
                                class="grey--text text--darken-3  font-weight-medium mb-1 hover:info--text"
                              > {{ item.title }} </a>
                            </p>
                            <p class="text--disabled caption ma-0 ">
                              {{ item.subTitle }}
                            </p>
                          </div>
                        </div>
                        <div>
                          <v-btn
                            class="ma-2 bg-blue-200 text-blue-600"
                            tile
                            small
                          >
                            CHAT
                          </v-btn>
                          <v-btn
                            class="ma-2 bg-blue-200 text-blue-600"
                            tile
                            small
                          >
                            PROFILE
                          </v-btn>
                        </div>
                      </div>
                    </v-card-text>
                  </base-card>-->
                                    <list-card-two
                                        :avatar="item.img"
                                        :title="item.title"
                                        :sub-title="item.subTitle"
                                        primary-btn="View Profile "
                                        secondary-btn="PROFILE"
                                    />
                                </v-col>
                            </v-row>
                        </template>
                        <template v-slot:footer>
                            <v-row class="mt-2" align="center" justify="center">
                                <v-spacer />

                                <span class="mr-4 grey--text"
                                    >Page {{ page }} of
                                    {{ numberOfPages }}</span
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
                </transition-group>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import ListcardTwo from '@/components/card/listCard/ListCardTwo'

export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'ListColumn Two'
    },
    components: {
        'list-card-two': ListcardTwo
    },
    data() {
        return {
            itemsPerPageArray: [],
            search: '',
            filter: {},
            sortDesc: false,
            page: 1,
            itemsPerPage: 18,
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
                    subTitle: 'Python Developer'
                },
                {
                    img: require('@/assets/images/avatars/002-woman.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/007-woman-2.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer'
                },
                {
                    img: require('@/assets/images/avatars/006-woman-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/faces/1.jpg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer'
                },
                {
                    img: require('@/assets/images/faces/2.jpg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/faces/3.jpg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/001-man.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer'
                },
                {
                    img: require('@/assets/images/avatars/002-woman.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/007-woman-2.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer'
                },
                {
                    img: require('@/assets/images/avatars/006-woman-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/001-man.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer'
                },
                {
                    img: require('@/assets/images/avatars/002-woman.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/007-woman-2.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer'
                },
                {
                    img: require('@/assets/images/avatars/006-woman-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/faces/1.jpg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer'
                },
                {
                    img: require('@/assets/images/faces/2.jpg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/faces/1.jpg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer'
                },
                {
                    img: require('@/assets/images/faces/2.jpg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/faces/3.jpg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/001-man.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer'
                },
                {
                    img: require('@/assets/images/avatars/002-woman.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/007-woman-2.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer'
                },
                {
                    img: require('@/assets/images/avatars/006-woman-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/001-man.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer'
                },
                {
                    img: require('@/assets/images/avatars/002-woman.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/007-woman-2.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer'
                },
                {
                    img: require('@/assets/images/avatars/006-woman-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer'
                }
            ]
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
<style lang="scss">
.fade-up-enter {
    opacity: 0;
    transform: translateY(40px);
}
.fade-up-enter-active {
    transition: all 0.4s ease;
}
</style>
