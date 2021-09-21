<template>
    <v-row>
        <v-col cols="12">
            <base-card>
                <v-card-title>
                    <div class="d-flex justify-space-between flex-wrap">
                        <v-btn class="ma-2" dark color="danger">
                            <v-icon>mdi-plus</v-icon>
                            Add Customer
                        </v-btn>
                        <div>
                            <v-btn class="ma-2" color="primary">
                                <v-icon>mdi-cog</v-icon>
                            </v-btn>
                            <v-btn outlined class="ma-2">Import</v-btn>
                            <v-btn outlined class="ma-2">Export</v-btn>
                        </div>
                    </div>
                </v-card-title>
                <v-card-title>
                    Customers
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>

                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                    v-model="selected"
                    :search="search"
                    :headers="headers"
                    :items="desserts"
                    item-key="name"
                    show-select
                    class="elevation-1 table-one"
                    multi-sort
                >
                    <template v-slot:item.name="{item}">
                        <div class="d-flex align-center">
                            <v-avatar class="mr-2" size="30" dark tile>
                                <img :src="item.img" alt="" />
                            </v-avatar>
                            <div>
                                <p class="mb-0 font-weight-medium">
                                    {{ item.name }}
                                </p>
                                <span>
                                    <v-icon x-small color="warning"
                                        >mdi-star</v-icon
                                    >
                                    <v-icon x-small color="warning"
                                        >mdi-star</v-icon
                                    >
                                    <v-icon x-small color="warning"
                                        >mdi-star</v-icon
                                    >
                                    <v-icon x-small color="warning"
                                        >mdi-star</v-icon
                                    >
                                    <v-icon x-small color="warning"
                                        >mdi-star</v-icon
                                    >
                                </span>
                            </div>
                        </div>
                    </template>
                    <template v-slot:item.badge="{item}">
                        <template v-if="item.badge === 'Active'">
                            <v-chip
                                class=""
                                color="success"
                                label
                                small
                                text-color="white"
                            >
                                <v-icon small left>mdi-check</v-icon>
                                {{ item.badge }}
                            </v-chip>
                        </template>
                        <template v-else>
                            <v-chip
                                class=""
                                color="danger"
                                label
                                small
                                text-color="white"
                            >
                                <v-icon small left>mdi-close</v-icon>
                                {{ item.badge }}
                            </v-chip>
                        </template>
                    </template>
                    <template v-slot:item.action="">
                        <div class="d-flex">
                            <v-tooltip top>
                                <template v-slot:activator="{on, attrs}">
                                    <v-btn v-bind="attrs" v-on="on" icon>
                                        <v-icon>mdi-eye</v-icon>
                                    </v-btn>
                                </template>
                                <span>Check</span>
                            </v-tooltip>
                            <v-tooltip top>
                                <template v-slot:activator="{on, attrs}">
                                    <v-btn v-bind="attrs" v-on="on" icon>
                                        <v-icon>mdi-pencil-box-outline</v-icon>
                                    </v-btn>
                                </template>
                                <span>Edit</span>
                            </v-tooltip>
                            <v-tooltip top>
                                <template v-slot:activator="{on, attrs}">
                                    <v-btn v-bind="attrs" v-on="on" icon>
                                        <v-icon>mdi-trash-can-outline</v-icon>
                                    </v-btn>
                                </template>
                                <span>Delete</span>
                            </v-tooltip>
                        </div>
                    </template>
                </v-data-table>
            </base-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Table Two'
    },
    data() {
        return {
            search: '',
            selected: [],
            headers: [
                {
                    text: 'Product',
                    align: 'start',
                    sortable: false,
                    value: 'name'
                },
                {text: 'Store Name', value: 'calories'},
                {text: 'Products', value: 'fat'},
                {text: 'Wallet Balance', value: 'carbs'},
                {text: 'Create Date', value: 'protein'},
                {text: 'Status', value: 'badge'},
                {text: 'Action', value: 'action'}
            ],
            desserts: [
                {
                    img: require('@/assets/images/illustrations/ecomerce/chair.svg'),
                    name: 'Hitech Chair',
                    calories: 'Walmart',
                    fat: '95',
                    carbs: '$14,384',
                    protein: '03/24/2020',
                    badge: 'Active'
                },
                {
                    img: require('@/assets/images/illustrations/ecomerce/chair-2.svg'),
                    name: 'Hitech Chair Pro',
                    calories: 'KFC',
                    fat: '876',
                    carbs: '$38,384',
                    protein: '03/24/2020',
                    badge: 'Deactive'
                },
                {
                    img: require('@/assets/images/illustrations/ecomerce/chair-3.svg'),
                    name: 'Otobi',
                    calories: 'KFC',
                    fat: '876',
                    carbs: '$38,384',
                    protein: '03/24/2020',
                    badge: 'Deactive'
                },
                {
                    img: require('@/assets/images/illustrations/ecomerce/furniture.svg'),
                    name: 'Otobi 2',
                    calories: 'KFC',
                    fat: '876',
                    carbs: '$38,384',
                    protein: '03/24/2020',
                    badge: 'Active'
                },
                {
                    img: require('@/assets/images/illustrations/ecomerce/chair-2.svg'),
                    name: 'Hitech 1',
                    calories: 'KFC',
                    fat: '876',
                    carbs: '$38,384',
                    protein: '03/24/2020',
                    badge: 'Deactive'
                },
                {
                    img: require('@/assets/images/illustrations/ecomerce/chair-3.svg'),
                    name: 'Otobi 3',
                    calories: 'KFC',
                    fat: '876',
                    carbs: '$38,384',
                    protein: '03/24/2020',
                    badge: 'Deactive'
                },
                {
                    img: require('@/assets/images/illustrations/ecomerce/furniture.svg'),
                    name: 'Otobi 5',
                    calories: 'KFC',
                    fat: '876',
                    carbs: '$38,384',
                    protein: '03/24/2020',
                    badge: 'Active'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
::v-deep .table-one {
    thead.v-data-table-header {
        tr {
            &:hover {
                background-color: #f2f3f8;
            }
            th {
                span {
                    font-size: 16px;
                    color: #304156;
                }
            }
        }
        tr {
            td {
                padding-bottom: 30px;
                padding-top: 30px;
            }
        }
    }
    tbody {
        tr {
            &:hover {
                background-color: #f2f3f8 !important;
            }
            td {
                padding: 0.95rem !important;
            }
        }
    }
}
</style>
