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
                                    <list-card
                                        :avatar="item.img"
                                        :title="item.title"
                                        :sub-title="item.subTitle"
                                        button-icon-one="mdi-google"
                                        button-icon-two="mdi-facebook"
                                        button-icon-three="mdi-ftwitter"
                                        :progress-linear-color="
                                            item.progressLinearColor
                                        "
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
                                    color="primary darken-3"
                                    class="mr-1"
                                    @click="formerPage"
                                >
                                    <v-icon>mdi-chevron-left</v-icon>
                                </v-btn>
                                <v-btn
                                    small
                                    fab
                                    dark
                                    color="primary darken-3"
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
import ListCard from '@/components/card/listCard/ListCard'

export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'ListColumn One'
    },
    components: {
        'list-card': ListCard
    },
    data() {
        return {
            itemsPerPageArray: [],
            search: '',
            filter: {},
            sortDesc: false,
            page: 1,
            itemsPerPage: 12,
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
                    subTitle: 'React Developer',
                    progressLinearColor: 'primary'
                },
                {
                    img: require('@/assets/images/avatars/002-woman.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'success'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'danger'
                },
                {
                    img: require('@/assets/images/avatars/007-woman-2.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer',
                    progressLinearColor: 'primary'
                },
                {
                    img: require('@/assets/images/avatars/006-woman-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'success'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'danger'
                },
                {
                    img: require('@/assets/images/faces/1.jpg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer',
                    progressLinearColor: 'primary'
                },
                {
                    img: require('@/assets/images/faces/2.jpg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'success'
                },
                {
                    img: require('@/assets/images/faces/3.jpg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'danger'
                },
                {
                    img: require('@/assets/images/avatars/001-man.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer',
                    progressLinearColor: 'primary'
                },
                {
                    img: require('@/assets/images/avatars/002-woman.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'success'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'danger'
                },
                {
                    img: require('@/assets/images/avatars/007-woman-2.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer',
                    progressLinearColor: 'primary'
                },
                {
                    img: require('@/assets/images/avatars/006-woman-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'success'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'danger'
                },
                {
                    img: require('@/assets/images/avatars/001-man.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer',
                    progressLinearColor: 'primary'
                },
                {
                    img: require('@/assets/images/avatars/002-woman.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'success'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'danger'
                },
                {
                    img: require('@/assets/images/avatars/007-woman-2.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer',
                    progressLinearColor: 'primary'
                },
                {
                    img: require('@/assets/images/avatars/006-woman-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'success'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'danger'
                },
                {
                    img: require('@/assets/images/faces/1.jpg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer',
                    progressLinearColor: 'primary'
                },
                {
                    img: require('@/assets/images/faces/2.jpg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'success'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'danger'
                },
                {
                    img: require('@/assets/images/faces/1.jpg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer',
                    progressLinearColor: 'primary'
                },
                {
                    img: require('@/assets/images/faces/2.jpg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'success'
                },
                {
                    img: require('@/assets/images/faces/3.jpg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'danger'
                },
                {
                    img: require('@/assets/images/avatars/001-man.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer',
                    progressLinearColor: 'primary'
                },
                {
                    img: require('@/assets/images/avatars/002-woman.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'success'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'danger'
                },
                {
                    img: require('@/assets/images/avatars/007-woman-2.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer',
                    progressLinearColor: 'primary'
                },
                {
                    img: require('@/assets/images/avatars/006-woman-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'success'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'danger'
                },
                {
                    img: require('@/assets/images/avatars/001-man.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer',
                    progressLinearColor: 'primary'
                },
                {
                    img: require('@/assets/images/avatars/002-woman.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'success'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'danger'
                },
                {
                    img: require('@/assets/images/avatars/007-woman-2.svg'),
                    title: 'Timothy clarkson',
                    subTitle: 'React Developer',
                    progressLinearColor: 'primary'
                },
                {
                    img: require('@/assets/images/avatars/006-woman-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'success'
                },
                {
                    img: require('@/assets/images/avatars/003-man-1.svg'),
                    title: 'Zac Clarkson',
                    subTitle: 'Vue Developer',
                    progressLinearColor: 'danger'
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
