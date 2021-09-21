<template>
    <div>
        <v-row>
            <v-col cols="12">
                <base-card>
                    <v-card-text>
                        <div class="d-flex justify-space-between align-center">
                            <div class="card-title ma-0 text-capitalize ">
                                {{ currentRouteName }}
                            </div>
                            <v-breadcrumbs :items="items">
                                <template v-slot:divider>
                                    <v-icon>mdi-chevron-right</v-icon>
                                </template>
                            </v-breadcrumbs>
                        </div>
                    </v-card-text>
                </base-card>
            </v-col>
            <v-col cols="12">
                <base-card>
                    <v-card-text>
                        <v-row align="center">
                            <v-col cols="12" md="4">
                                <div class="d-flex align-center">
                                    <h1
                                        class="text-h3 font-weight-thin mb-0 mr-4"
                                    >
                                        68
                                    </h1>
                                    <div class>
                                        <p class="mb-1">Total Projects</p>
                                        <v-chip
                                            small
                                            class
                                            color="danger lighten-5"
                                            text-color="white"
                                        >
                                            <v-avatar left>
                                                <v-icon
                                                    color="danger lighten-1"
                                                    small
                                                    >mdi-trending-down</v-icon
                                                >
                                            </v-avatar>
                                            <span
                                                class="danger--text text--lighten-1"
                                            >
                                                -5 due</span
                                            >
                                        </v-chip>
                                    </div>
                                    <v-divider
                                        class="mx-10"
                                        vertical
                                    ></v-divider>
                                </div>
                            </v-col>
                            <v-col cols="12" md="8">
                                <div>
                                    <span class="mr-5">
                                        <v-icon
                                            class="mr-2"
                                            x-small
                                            color="primary"
                                            >mdi-circle</v-icon
                                        >In Progress(10)
                                    </span>
                                    <span>
                                        <v-icon
                                            class="mr-2"
                                            x-small
                                            color="success"
                                            >mdi-circle</v-icon
                                        >Completed(5)
                                    </span>
                                    <v-progress-linear
                                        rounded
                                        class="mt-2"
                                        height="10"
                                        background-color="success"
                                        color="primary"
                                        value="45"
                                    ></v-progress-linear>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </base-card>
            </v-col>

            <v-col cols="12">
                <base-card>
                    <v-card-title class="mb-10">
                        <v-text-field
                            rounded
                            solo
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            class="pa-3"
                            single-line
                            hide-details
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>
                        <v-menu class="pa-3" offset-y>
                            <template v-slot:activator="{on, attrs}">
                                <v-btn
                                    small
                                    elevation
                                    depressed
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Export
                                    <v-icon>mdi-chevron-down</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title>PDF</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>CSV</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-card-title>
                    <v-data-table
                        :search="search"
                        v-model="selected"
                        :headers="headers"
                        :items="desserts"
                        item-key="name"
                        show-select
                        class="elevation-1 table-one"
                    >
                        <template v-slot:item.name="{item}">
                            <div class="d-flex align-center text-no-wrap">
                                <v-avatar tile class="mr-4" size="40" dark>
                                    <img :src="item.img" alt />
                                </v-avatar>
                                <div class>
                                    <p class="ma-0 font-weight-medium">
                                        {{ item.name }}
                                    </p>
                                    <span>{{ item.timeUpload }}</span>
                                </div>
                            </div>
                        </template>
                        <template v-slot:item.members="{item}">
                            <avatar-group-card />
                        </template>
                        <template v-slot:item.status="{item}">
                            <span class="text-no-wrap">
                                <v-icon
                                    x-small
                                    :color="item.statusColor"
                                    class="mr-2"
                                    >mdi-circle</v-icon
                                >
                                <span class="ma-0">{{ item.status }}</span>
                            </span>
                        </template>
                        <template v-slot:item.completion="{item}">
                            <div class="d-flex align-center">
                                <p class="mb-0 mr-3">{{ item.completion }}%</p>
                                <v-progress-linear
                                    rounded
                                    :value="item.completion"
                                    :color="item.statusColor"
                                ></v-progress-linear>
                            </div>
                        </template>
                    </v-data-table>
                </base-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import avatarGroupCard from '@/components/card/AvatarGroupCard'
export default {
    name: 'overview',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Overview'
    },
    components: {
        avatarGroupCard
    },
    data() {
        return {
            search: '',
            selected: [],
            singleSelect: false,
            headers: [
                {
                    text: 'PROJECT',
                    align: 'start',
                    sortable: false,
                    value: 'name'
                },
                {text: 'TASKS', value: 'task'},
                {text: 'MEMBERS', value: 'members'},
                {text: 'STATUS', value: 'status'},
                {text: 'COMPLETION', value: 'completion'},
                {text: 'DUE DATE', value: 'date'}
            ],
            desserts: [
                {
                    img: require('@/assets/images/BrandSVG/dell.svg'),
                    name: 'Dell',
                    timeUpload: 'Updated 9min ago',
                    task: 159,
                    members: 6.0,
                    status: 'In Progress',
                    completion: 50,
                    date: '2 Feb',
                    statusColor: 'primary'
                },
                {
                    img: require('@/assets/images/BrandSVG/apple.svg'),
                    name: 'Apple',
                    timeUpload: 'Updated 2min ago',
                    task: 159,
                    members: 6.0,
                    status: 'In Progress',
                    completion: 70,
                    date: '2 Jan',
                    statusColor: 'primary'
                },
                {
                    img: require('@/assets/images/BrandSVG/cisco.svg'),
                    name: 'Cisco',
                    timeUpload: 'Updated 9min ago',
                    task: 159,
                    members: 6.0,
                    status: 'Completion',
                    completion: 100,
                    date: '2 Jan',
                    statusColor: 'success'
                },

                {
                    img: require('@/assets/images/BrandSVG/asus.svg'),
                    name: 'Asus',
                    timeUpload: 'Updated 9min ago',
                    task: 159,
                    members: 6.0,
                    status: 'In Progress',
                    completion: 40,
                    date: '2 Feb',
                    statusColor: 'primary'
                },
                {
                    img: require('@/assets/images/BrandSVG/intel.svg'),
                    name: 'Intel',
                    timeUpload: 'Updated 9min ago',
                    task: 159,
                    members: 6.0,
                    status: 'Completion',
                    completion: 100,
                    date: '2 Feb',
                    statusColor: 'success'
                },
                {
                    img: require('@/assets/images/BrandSVG/motorola.svg'),
                    name: 'Motorola',
                    timeUpload: 'Updated 2min ago',
                    task: 159,
                    members: 6.0,
                    status: 'Completion',
                    completion: 100,
                    date: '2 Feb',
                    statusColor: 'success'
                },
                {
                    img: require('@/assets/images/BrandSVG/vaio.svg'),
                    name: 'VAIO',
                    timeUpload: 'Updated 2min ago',
                    task: 159,
                    members: 6.0,
                    status: 'In Progress',
                    completion: 44,
                    date: '2 Feb',
                    statusColor: 'primary'
                },
                {
                    img: require('@/assets/images/BrandSVG/lg.svg'),
                    name: 'LG',
                    timeUpload: 'Updated 2min ago',
                    task: 159,
                    members: 6.0,
                    status: 'In Progress',
                    completion: 95,
                    date: '2 Feb',
                    statusColor: 'primary'
                }
            ],
            items: [
                {
                    text: 'Dashboard',
                    disabled: false,
                    href: '/'
                },
                {
                    text: 'Overview',
                    disabled: true,
                    href: '/overview'
                }
            ]
        }
    },
    computed: {
        currentRouteName() {
            return this.$route.name
        }
    }
}
</script>
<style lang="scss" scoped>
::v-deep .table-one {
    thead.v-data-table-header {
        tr {
            th {
                span {
                    font-size: 16px;
                    // color: #304156;
                    white-space: nowrap;
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
                // background-color: #f2f3f8 !important;
            }
            td {
                padding: 0.95rem !important;
            }
        }
    }
}
</style>
