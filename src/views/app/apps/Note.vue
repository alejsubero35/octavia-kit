<template>
    <div
        class="app-content-wrapper apps-wrapper shadow-lg"
        style="box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);"
    >
        <v-navigation-drawer v-model="drawer" absolute temporary right>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img
                        src="https://randomuser.me/api/portraits/men/78.jpg"
                    />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider />

            <v-list dense>
                <v-list-item v-for="item in drawerArray" :key="item.title" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <div :class="{open: isBlock}" class="app-overlay" @click="overlayApp" />
        <div :class="{open: isOpen}" class="app-sidebar">
            <div class="app-sidebar-header white  py-5">
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{on, attrs}">
                        <v-btn
                            class="rounded-lg py-5"
                            tile
                            color="primary"
                            block
                            dark
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon left class="pr-2">
                                mdi-card-account-details
                            </v-icon>
                            Add Note
                        </v-btn>
                    </template>
                    <v-card class="">
                        <v-card-title>
                            <span class="headline">Add Notes</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-text-field
                                            v-model="newNote.title"
                                            label="Title"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-text-field
                                            v-model="newNote.text"
                                            label="Text"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12">
                                        <label for="">Note Color</label>
                                        <v-color-picker
                                            v-model="newNote.color"
                                            class="ma-2"
                                            hide-canvas
                                            show-swatches
                                        ></v-color-picker>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary darken-1"
                                text
                                @click="dialog = false"
                                >Close</v-btn
                            >
                            <v-btn
                                color="primary darken-1"
                                text
                                @click="saveNote"
                                >Save</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>

            <vue-perfect-scrollbar
                :settings="{suppressScrollX: true, wheelPropagation: false}"
                class="h-100 rtl-ps-none app-sidebar-scroll white ps scroll"
                style="height:100%"
            >
                <div class="app-sidebar-body mt-6">
                    <v-list flat>
                        <v-list-item-group>
                            <v-list-item
                                v-for="(item, i) in items"
                                :key="i"
                                class="px-10"
                            >
                                <v-list-item-icon class="mr-3">
                                    <v-icon v-text="item.icon" />
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title
                                        class="font-weight-medium"
                                        v-text="item.text"
                                    />
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </div>
            </vue-perfect-scrollbar>
        </div>
        <div class="app-content relative">
            <div class="app-icon pa-4" @click="appToggle">
                <v-icon color="black">
                    mdi-menu-open
                </v-icon>
            </div>
            <vue-perfect-scrollbar
                :settings="{suppressScrollX: true, wheelPropagation: false}"
                class="h-100 rtl-ps-none ps scroll"
                style="height:100%"
            >
                <div class="app-body pt-0 px-8">
                    <!-- <v-row>
            <v-col
              cols="12"
              class=""
            >
              <div class="card-title pl-2">
                All Notes
              </div>
            </v-col>
            <v-col
              v-for="(note, index) in notes"
              :key="index"
              cols="12"
              md="12"
              lg="4"
            >
              <base-card>
                <v-alert
                  text
                  :color="note.cardColor"
                  border="top"
                >
                  <h6 class="">
                    {{ note.title }}
                  </h6>
                  <p> {{ note.date }} </p>
                  <p> {{ note.text }} </p>
                  <v-divider
                    class="my-4"
                    :class="note.dividerColor"
                    style="opacity: 0.22"
                  />

                  <v-row
                    align="center"
                    no-gutters
                  >
                    <v-col class="grow">
                      <v-btn
                        icon
                        :color="note.settingsColor"
                        @click.stop="drawer = !drawer"
                      >
                        <v-icon>mdi-cog-outline</v-icon>
                      </v-btn>
                    </v-col>
                    <v-spacer />
                    <v-col class="shrink">
                      <v-btn
                        icon
                        :color="note.trashColor"
                        @click="deleteNote(note.id)"
                      >
                        <v-icon>mdi-trash-can-outline</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-alert>
              </base-card>
            </v-col>
            
          </v-row> -->
                    <v-row>
                        <v-col cols="12" class="">
                            <div class="card-title pl-2">
                                All Notes
                            </div>
                        </v-col>
                        <v-col
                            v-for="(note, index) in notes"
                            :key="index"
                            cols="12"
                            md="12"
                            sm="6"
                            lg="6"
                        >
                            <base-card>
                                <v-alert
                                    border="top"
                                    colored-border
                                    :color="note.color"
                                >
                                    <div class="card-title">
                                        {{ note.title }}
                                    </div>
                                    <p class="text--disabled">11/05/2020</p>
                                    <p>{{ note.text }}</p>
                                    <div class="d-flex justify-space-between">
                                        <div>
                                            <v-btn icon color="warning">
                                                <v-icon
                                                    >mdi-star-outline</v-icon
                                                >
                                            </v-btn>
                                            <v-btn
                                                icon
                                                color="danger"
                                                @click="deleteNote(note)"
                                            >
                                                <v-icon>mdi-delete</v-icon>
                                            </v-btn>
                                        </div>
                                        <div>
                                            <v-btn icon color="success">
                                                <v-icon>mdi-cog</v-icon>
                                            </v-btn>
                                        </div>
                                    </div>
                                </v-alert>
                            </base-card>
                        </v-col>
                    </v-row>
                </div>
            </vue-perfect-scrollbar>
        </div>
    </div>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import axios from 'axios'
export default {
    name: 'Note',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Note'
    },
    components: {
        VuePerfectScrollbar
    },
    created() {
        axios.get('/api/notes').then((response) => {
            this.notes = response.data
        })
        // .catch(err => console.log(err))
    },
    data: () => ({
        dialog: false,
        isOpen: false,
        isBlock: false,
        notes: [],
        newNote: {},
        title: '',
        text: '',
        color: '',
        // item: 1,
        // itemsTwo: 0,
        drawer: null,
        drawerArray: [
            {title: 'Home', icon: 'dashboard'},
            {title: 'About', icon: 'question_answer'}
        ],
        notes: [],
        items: [
            {text: 'All Notes', icon: 'mdi-clipboard-list-outline'},
            {text: 'Favourites', icon: 'mdi-star'},
            {text: 'Tags', icon: 'mdi-tag'},
            {text: 'Personal', icon: 'mdi-bag-personal'},
            {text: 'Work', icon: 'mdi-account-clock'},
            {text: 'Social', icon: 'mdi-trash-can'},
            {text: 'Important', icon: 'mdi-trash-can'}
        ]
    }),
    methods: {
        // addNote: function() {
        //   console.log(this.title,this.color)
        //   axios.post('/api/notes', { data: this.text, dataTwo: this.title, color: this.color})
        //     .then(response => {
        //       console.log(response.data.title);
        //       this.notes.push({
        //         cardColor: this.color,
        //         trashColor: this.color,
        //         settingsColor: this.color,
        //         dividerColor: this.color,
        //         title: response.data.title,
        //         date: '11/05/2020',
        //         text: response.data.text
        //       })
        //     })
        //   this.title = ''
        //   this.text = ''
        //   this.dialog = false
        // },
        // deleteNote: function(id){
        //   // console.log(id)
        //   axios.delete(`/api/notes/${id}`, { data: this.text, dataTwo: this.title})
        //     .then(response => {
        //       // this.notes = this.notes.filter(note => id !== notes.id)
        //       let notes = this.notes.filter(note => note.id !== id)

        //       this.notes = notes
        //     })
        // },

        saveNote: function() {
            axios
                .post('/api/notes/add', {data: this.newNote})
                .then((response) => {
                    this.notes.push({
                        title: this.newNote.title,
                        text: this.newNote.text,
                        color: this.newNote.color.hex
                    })
                })
            this.dialog = false
        },

        deleteNote: function(note) {
            axios.post('/api/notes/delete', note).then((response) => {
                this.notes = this.notes.filter((x) => x.id !== note.id)
            })
        },

        appToggle: function() {
            this.isOpen = !this.isOpen
            this.isBlock = !this.isBlock
        },
        overlayApp: function() {
            this.isOpen = !this.isOpen
            this.isBlock = !this.isBlock
        }
    }
}
</script>
<style lang="scss" scoped>
.app-content-wrapper {
    position: relative;
    display: flex;
    overflow: hidden;
    height: calc(100vh - 200px);

    .app-overlay {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        display: none;
        z-index: 2;
        transition: all 0.3s ease-in;
        @media only screen and (max-width: 959px) {
            &.open {
                display: block;
                transition: all 0.3s ease-in;
            }
        }
    }
    .app-sidebar {
        width: 280px;
        position: relative;
        transition: all 0.3s ease-in;
        @media only screen and (max-width: 959px) {
            position: absolute;
            left: -340px;
            z-index: 5;
            height: calc(100vh - 120px);
            transition: all 0.3s ease-in;
            &.open {
                left: 0;
            }
        }
        .app-sidebar-header {
            padding: 0.75rem 1.25rem;
            margin-bottom: 0;
            // border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 1;
        }
        .app-sidebar-body {
            // overflow-y: scroll;
            // height: 100%;
            padding-top: 3.375rem;
            width: 280px;
        }
    }

    .app-content {
        width: calc(100% - 280px);
        @media only screen and (max-width: 959px) {
            width: 100%;
        }
        // margin-left: 30px;
        .app-header {
            padding: 0.75rem 1.25rem;
            margin-bottom: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 1;
        }
        .app-body {
            flex: 1 1 auto;
            padding-top: 3.375rem;
            // overflow-y: scroll;
            height: calc(100% - 130px);
        }
        .app-footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 130px;
        }
    }
}
.app-icon {
    display: none;
    @media only screen and (max-width: 959px) {
        display: block;
    }
}
.eg-filemanager {
    background-color: #fff;
}
.filemanager-content {
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
}

.apps-wrapper {
    &.--filemanager {
        .nested-sidebar-toggle {
            @media (min-width: 959px) {
                display: none;
            }
        }
    }
}
</style>
