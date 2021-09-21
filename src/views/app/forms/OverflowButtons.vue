<template>
    <v-row>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Usage
                </v-card-title>
                <v-card-text>
                    <v-overflow-btn
                        class="my-2"
                        :items="dropdown_font"
                        label="Overflow Btn"
                        target="#dropdown-example-1"
                    />
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Overflow Counter
                </v-card-title>
                <v-card-text>
                    <v-overflow-btn
                        class="my-2"
                        :items="dropdown_edit"
                        label="Overflow Btn w/ counter"
                        counter
                        item-value="text"
                    />
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Editable
                </v-card-title>
                <v-card-text>
                    <v-overflow-btn
                        class="my-2"
                        :items="dropdown_edit"
                        label="Overflow Btn w/ editable"
                        editable
                        item-value="text"
                    />
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Filled
                </v-card-title>
                <v-card-text>
                    <v-overflow-btn
                        class="my-2"
                        :items="dropdown_font"
                        label="Overflow Btn - filled"
                        filled
                        target="#dropdown-example-1"
                    />
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Loading
                </v-card-title>
                <v-card-text>
                    <v-overflow-btn
                        class="my-2"
                        :items="dropdown_font"
                        label="Overflow Btn w/ loading"
                        loading
                        target="#dropdown-example-1"
                    />
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6">
            <base-card>
                <v-card-title>
                    Segmented
                </v-card-title>
                <v-card-text>
                    <v-overflow-btn
                        class="my-2"
                        :items="dropdown_icon"
                        label="Overflow Btn w/ segmented"
                        segmented
                        target="#dropdown-example-2"
                    />
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        metaInfo: {
            // title will be injected into parent titleTemplate
            title: 'Overflow Buttons'
        },
        // usage
        dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
        // counter
        dropdown_edit: [
            {text: '100%'},
            {text: '75%'},
            {text: '50%'},
            {text: '25%'},
            {text: '0%'}
        ],
        // segmented
        dropdown_icon: [
            {text: 'list', callback: () => console.log('list')},
            {text: 'favorite', callback: () => console.log('favorite')},
            {text: 'delete', callback: () => console.log('delete')}
        ]
    })
}
</script>
