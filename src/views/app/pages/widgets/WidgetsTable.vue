<template>
    <v-row>
        <v-col cols="12" md="12">
            <base-card>
                <v-card-title>Transactions</v-card-title>
                <v-card-text>
                    <v-data-table
                        hide-default-footer
                        :headers="headers"
                        :items="desserts"
                        class="elevation-1"
                    >
                        <!-- <template v-slot:header.date="{ header }">
              {{ header.text.totext-uppercase() }}
            </template> -->

                        <template v-slot:item.name="{item}">
                            <v-avatar tile size="24">
                                <img :src="item.name" alt="" />
                            </v-avatar>
                        </template>
                        <template v-slot:item.desc="{item}">
                            <h6 class="ma-0 font-weight-medium">
                                {{ item.desc }}
                            </h6>
                        </template>
                        <template v-slot:item.category="{item}">
                            <h6 class="ma-0 font-weight-medium">
                                {{ item.category }}
                            </h6>
                        </template>
                        <template v-slot:item.amount="{item}">
                            <p
                                class="ma-0 font-weight-bold"
                                :class="item.amountColor"
                            >
                                {{ item.amount }}
                            </p>
                        </template>
                        <template v-slot:item.status="{item}">
                            <v-icon :class="item.statusColor">
                                {{ item.status }}
                            </v-icon>
                        </template>
                    </v-data-table>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="12">
            <base-card>
                <v-card-title>Files</v-card-title>
                <v-card-text>
                    <v-data-table
                        hide-default-footer
                        :headers="headersTwo"
                        :items="dessertsTwo"
                        class="elevation-1 eg-table-bnone eg-table-td-py-md"
                    >
                        <!-- <template v-slot:header.date="{ header }">
              {{ header.text.totext-uppercase() }}
            </template> -->

                        <template v-slot:item.name="{item}">
                            <v-avatar tile size="46">
                                <img :src="item.name" alt="" />
                            </v-avatar>
                        </template>
                        <template v-slot:item.folderName="{item}">
                            <h6 class="ma-0 font-weight-medium">
                                {{ item.folderName }}
                            </h6>
                        </template>
                        <template v-slot:item.member="{item}">
                            <avatarGroupCard />
                        </template>
                        <template v-slot:item.action="{item}">
                            <v-menu left bottom>
                                <template v-slot:activator="{on}">
                                    <v-btn icon color v-on="on">
                                        <v-icon class=""
                                            >mdi-dots-horizontal</v-icon
                                        >
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-item @click>
                                        <v-icon class="body-1 mr-2"
                                            >mdi-eye-off</v-icon
                                        >
                                        <v-list-item-title
                                            >Unpublish</v-list-item-title
                                        >
                                    </v-list-item>
                                    <v-list-item @click>
                                        <v-icon class="body-1 mr-2"
                                            >mdi-lead-pencil</v-icon
                                        >
                                        <v-list-item-title
                                            >Edit Job Post</v-list-item-title
                                        >
                                    </v-list-item>
                                    <v-list-item @click>
                                        <v-icon class="body-1 mr-2"
                                            >mdi-trash-can</v-icon
                                        >
                                        <v-list-item-title
                                            >Delete</v-list-item-title
                                        >
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </template>
                    </v-data-table>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="12">
            <base-card>
                <v-card-title>Enrolled Courses</v-card-title>
                <v-card-text>
                    <v-data-table
                        hide-default-footer
                        :headers="headersThree"
                        :items="dessertsThree"
                        class="eg-table-td-py-md"
                    >
                        <!-- <template v-slot:header.date="{ header }">
              {{ header.text.totext-uppercase() }}
            </template> -->

                        <template v-slot:item.name="{item}">
                            <v-avatar tile size="24">
                                <img :src="item.name" alt="" />
                            </v-avatar>
                        </template>
                        <template v-slot:item.course="{item}">
                            <h6 class="ma-0 font-weight-medium">
                                {{ item.course }}
                            </h6>
                        </template>
                        <template v-slot:item.progress="{item}">
                            <v-progress-linear
                                :value="item.progress"
                            ></v-progress-linear>
                        </template>

                        <template v-slot:item.action="{item}">
                            <v-btn icon color="warning">
                                <v-icon>
                                    mdi-play
                                </v-icon>
                            </v-btn>
                        </template>
                    </v-data-table>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
import avatarGroupCard from '@/components/card/AvatarGroupCard'
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Table'
    },
    components: {
        avatarGroupCard
    },
    data() {
        return {
            headers: [
                {
                    text: '',
                    align: 'start',
                    sortable: false,
                    value: 'name'
                },
                {text: 'Date', value: 'date'},
                {text: 'Description', value: 'desc'},
                {text: 'Category', value: 'category'},
                {text: 'Amount', value: 'amount'},
                {text: 'Status', value: 'status'}
            ],
            desserts: [
                {
                    name: require('@/assets/images/logos/001-spotify.svg'),
                    date: '2 July 2020',
                    desc: 'Spotify Subscriptoin fee	',
                    category: 'Music',
                    amount: '-$10',
                    status: 'mdi-dots-horizontal-circle',
                    amountColor: 'danger--text',
                    statusColor: 'warning--text'
                },
                {
                    name: require('@/assets/images/logos/003-apple.svg'),
                    date: '3 July 2020',
                    desc: 'App Store payment',
                    category: 'Software',
                    amount: '-$100',
                    status: 'mdi-check-circle',
                    amountColor: 'danger--text',
                    statusColor: 'success--text'
                },
                {
                    name: require('@/assets/images/logos/004-windows.svg'),
                    date: '3 July 2020',
                    desc: 'Software Purchase',
                    category: 'Software',
                    amount: '$100',
                    status: 'mdi-check-circle',
                    amountColor: 'success--text',
                    statusColor: 'success--text'
                },
                {
                    name: require('@/assets/images/logos/005-google.svg'),
                    date: '3 July 2020',
                    desc: 'Adsense Revenue',
                    category: 'Software',
                    amount: '-$100',
                    status: 'mdi-check-circle',
                    amountColor: 'danger--text',
                    statusColor: 'success--text'
                }
            ],
            headersTwo: [
                {
                    text: '',
                    align: 'start',
                    sortable: false,
                    value: 'name'
                },
                {text: 'Name', value: 'folderName'},
                {text: 'Date', value: 'date'},
                {text: 'Members', value: 'member'},
                {text: '', value: 'action'}
            ],
            dessertsTwo: [
                {
                    name: require('@/assets/images/file-types/001-pdf.svg'),
                    folderName: 'Project_alpha_report.pdf',
                    date: '01/10/2020	',
                    member: '',
                    action: 'mdi-dots-horizontal-circle'
                },
                {
                    name: require('@/assets/images/file-types/002-psd.svg'),
                    folderName: 'Project_alpha_UI.pdf',
                    date: '01/10/2020	',
                    member: '',
                    action: 'mdi-dots-horizontal-circle'
                },
                {
                    name: require('@/assets/images/file-types/004-xlsx.svg'),
                    folderName: 'Project_alpha_UI.pdf',
                    date: '01/10/2020	',
                    member: '',
                    action: 'mdi-dots-horizontal-circle'
                }
            ],
            headersThree: [
                {
                    text: '',
                    align: 'start',
                    sortable: false,
                    value: 'name'
                },
                {text: 'Started', value: 'started'},
                {text: 'Course', value: 'course'},
                {text: 'Progress', value: 'progress'},
                {text: 'Play', value: 'action'}
            ],
            dessertsThree: [
                {
                    name: require('@/assets/images/logos/angular.png'),
                    started: '20 May, 20200',
                    course: 'Angular Beyond The Basics',
                    progress: 70,
                    action: ''
                },
                {
                    name: require('@/assets/images/logos/react.png'),
                    started: '20 May, 20200',
                    course: 'React Development Course',
                    progress: 40,
                    action: ''
                },
                {
                    name: require('@/assets/images/logos/webpack.png'),
                    started: '20 May, 20200',
                    course: 'Webpack For Busy Developer',
                    progress: 50,
                    action: ''
                },
                {
                    name: require('@/assets/images/logos/sass.png'),
                    started: '20 May, 20200',
                    course: 'Complete SASS Course',
                    progress: 50,
                    action: ''
                },
                {
                    name: require('@/assets/images/logos/bootstrap.png'),
                    started: '20 May, 20200',
                    course: '	Bootstrap For Everyone',
                    progress: 50,
                    action: ''
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.eg-table-bnone {
    tr {
        td {
            border-bottom: none !important;
        }
    }
}
.eg-table-td-py-md {
    tr {
        td {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
        }
    }
}
</style>
