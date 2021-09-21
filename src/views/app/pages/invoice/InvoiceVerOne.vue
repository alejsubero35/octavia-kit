<template>
    <v-row>
        <v-col cols="12">
            <base-card>
                <div class="primary mb-10">
                    <div class="mx-auto" style="width: 80%;">
                        <v-row>
                            <v-col cols="12">
                                <div class="my-12">
                                    <h1
                                        class="white--text text-center pb-12 pt-10 text-h3"
                                    >
                                        INVOICE
                                    </h1>
                                    <div
                                        class="ul-invoice-v1-header d-flex flex-wrap justify-center align-center"
                                    >
                                        <v-avatar>
                                            <img
                                                class="mr-2"
                                                src="@/assets/images/arctic-circle-logo.svg"
                                                alt
                                                srcset
                                            />
                                        </v-avatar>
                                        <p
                                            class="ma-0 grey--text text--lighten-3 font-weight-medium"
                                        >
                                            4798 Forest Avenue,New
                                            York,contact@ui-lib.com 646-822-3760
                                        </p>
                                    </div>
                                    <v-divider dark class="my-12"></v-divider>
                                </div>
                                <div
                                    class="d-flex justify-space-between flex-wrap py-10"
                                >
                                    <div
                                        class="mb-8 d-flex flex-column max-w-xs"
                                    >
                                        <span
                                            class="white--text font-weight-medium text-18"
                                            >INVOICE TO:</span
                                        >
                                        <span
                                            class="grey--text text--lighten-3 font-weight-medium text-18"
                                        >
                                            Iris Watson, P.O. Box 283 8562 Fusce
                                            Rd. Frederick Nebraska 20620
                                        </span>
                                    </div>
                                    <div class>
                                        <div class="mb-md">
                                            <span
                                                class="white--text font-weight-medium m mb-md text-18 mr-6"
                                                >DATE:</span
                                            >
                                            <span
                                                class="font-weight-medium grey--text text--lighten-3 text-18"
                                                >Dec 16, 2020</span
                                            >
                                        </div>
                                        <div class>
                                            <span
                                                class="white--text font-weight-medium text-18 mr-4"
                                                >INVOICE NO:</span
                                            >
                                            <span
                                                class="font-weight-medium grey--text text--lighten-3 text-18"
                                                >UI0987</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </div>
                <v-card-text>
                    <div class="mx-auto" style="width: 80%;">
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left pl-0 body-2">
                                            DESCRIPTION
                                        </th>
                                        <th class="text-left pl-0 body-2">
                                            HOURS
                                        </th>
                                        <th class="text-left pl-0 body-2">
                                            RATE
                                        </th>
                                        <th class="text-right pr-0 body-2">
                                            AMOUNT
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="hover:transparent"
                                        v-for="item in desserts"
                                        :key="item.name"
                                    >
                                        <td
                                            class="font-weight-bold body-1 pl-0"
                                        >
                                            {{ item.desc }}
                                        </td>
                                        <td
                                            class="font-weight-bold body-1 pl-0"
                                        >
                                            {{ item.hrs }}
                                        </td>
                                        <td
                                            class="font-weight-bold body-1 pl-0"
                                        >
                                            ${{ item.rate }}
                                        </td>
                                        <td
                                            class="font-weight-bold body-1 pr-0 text-right text-primary"
                                        >
                                            ${{ item.amount }}
                                        </td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>

                        <div
                            class="d-flex justify-space-between flex-wrap pt-16 mb-6"
                        >
                            <div class="mb-4">
                                <p
                                    class="text--disabled font-weight-medium text-18 mb-2"
                                >
                                    BANK TRANSFER:
                                </p>
                                <div class="d-flex mb-1">
                                    <h6 class="ma-0 mr-2">Account Name:</h6>
                                    <span>Manchester United</span>
                                </div>
                                <div class="d-flex mb-1">
                                    <h6 class="ma-0 mr-2">Account Number:</h6>
                                    <span>378282246310005</span>
                                </div>
                                <div class="d-flex mb-1">
                                    <h6 class="ma-0 mr-2">Code:</h6>
                                    <span>BARC0032US</span>
                                </div>
                            </div>
                            <div class="md:text-right sm:text-left">
                                <p
                                    class="text--disabled font-weight-medium text-18 ma-0"
                                >
                                    TOTAL AMOUNT:
                                </p>
                                <h4
                                    class="ma-0 primary--text font-weight-medium"
                                >
                                    $23000.00
                                </h4>
                                <p class="ma-0 text--disabled body-2">
                                    tax include
                                </p>
                            </div>
                        </div>
                    </div>
                </v-card-text>
                <div class="bg-off-white py-4">
                    <div class="mx-auto" style="width: 80%;">
                        <div class="d-flex justify-space-between flex-wrap">
                            <base-outline-button
                                text="Download Invoice"
                                text-color="text-primary"
                                bg-hover="hover:bg-primary"
                                class="border-primary"
                            />

                            <v-btn color="primary" class="white--text"
                                >Print Invoice</v-btn
                            >
                        </div>
                    </div>
                </div>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Invoice Ver 1'
    },
    data() {
        return {
            desserts: [
                {
                    desc: 'UI/UX for Mobile App',
                    hrs: 50,
                    rate: 50.0,
                    amount: 2500
                },
                {
                    desc: 'Front-End Development',
                    hrs: 130,
                    rate: 50.0,
                    amount: 6500
                },
                {
                    desc: 'Back-End Development',
                    hrs: 130,
                    rate: 80.0,
                    amount: 10400
                }
            ]
        }
    }
}
</script>
