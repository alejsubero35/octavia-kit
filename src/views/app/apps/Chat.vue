<template>
    <div class="app-content-wrapper apps-wrapper">
        <div :class="{open: isBlock}" class="app-overlay" @click="overlayApp" />
        <div :class="{open: isOpen}" class="app-sidebar bg-white">
            <div class="app-sidebar-header white shadow">
                <v-text-field
                    hide-details="auto"
                    class="d-md-flex ma-0 pa-0 d-sm-hidden"
                    label="Search"
                    outlined
                    dense
                    prepend-inner-icon="mdi-magnify"
                ></v-text-field>
            </div>
            <vue-perfect-scrollbar
                :settings="{suppressScrollX: true, wheelPropagation: false}"
                class="h-100 rtl-ps-none ps scroll app-sidebar-scroll"
                style="height: 100%;"
            >
                <div class="app-sidebar-body mt-5">
                    <v-list two-line subheader>
                        <v-subheader class="font-weight-bold grey--text"
                            >Recent chat</v-subheader
                        >
                        <v-list-item
                            v-for="(item, index) in itemsSb"
                            :key="index"
                            class=""
                        >
                            <v-list-item-avatar>
                                <v-img :src="item.avatar" />
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title v-text="item.title" />
                                <v-list-item-subtitle
                                    v-html="item.subtitle"
                                ></v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-icon class="align-self-center">
                                <v-icon
                                    class="body-1"
                                    :color="item.active ? 'success' : 'grey'"
                                >
                                    mdi-record
                                </v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list>

                    <v-divider />
                    <v-list>
                        <v-subheader class="font-weight-bold grey--text"
                            >Contacts</v-subheader
                        >
                        <v-list-item-group v-model="item" color="primary">
                            <v-list-item
                                v-for="(item, index) in contacts"
                                :key="index"
                                @click="contactView(item)"
                                class="mb-3"
                            >
                                <v-list-item-avatar>
                                    <v-img :src="item.avatar" />
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title v-text="item.name" />
                                    <v-list-item-subtitle
                                        v-html="item.status"
                                    ></v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-icon class="align-self-center">
                                    <v-icon
                                        class="body-1"
                                        :color="
                                            item.active ? 'success' : 'grey'
                                        "
                                    >
                                        mdi-record
                                    </v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </div>
            </vue-perfect-scrollbar>
        </div>
        <div class="app-content relative">
            <div class="app-header white">
                <div class="d-flex justify-space-between align-center">
                    <div class="d-flex align-center">
                        <div class="app-icon mr-2" @click="appToggle">
                            <v-icon color>
                                mdi-menu-open
                            </v-icon>
                        </div>
                        <div class="d-flex align-center">
                            <v-avatar size="41" class="mr-2">
                                <img
                                    src="@/assets/images/faces/13.jpg"
                                    alt=""
                                />
                            </v-avatar>
                            <div>
                                <p class="ma-0 body-1 font-weight-medium">
                                    Jason Oner
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <v-btn icon color="primary">
                            <v-icon>mdi-phone</v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>
            <vue-perfect-scrollbar
                :settings="{suppressScrollX: true, wheelPropagation: false}"
                class="rtl-ps-none ps scroll"
                style="height: calc(100% - 130px)"
            >
                <div class="app-body mt-12 px-4">
                    <!-- <div>
            <div class="d-flex align-center mb-5">
              <v-avatar size="41" class="mr-4">
                <img src="@/assets/images/faces/13.jpg" alt="">
              </v-avatar>
              <p class="ma-0 bg-primary white--text py-2 px-3 rounded">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div class="d-flex flex-reverse align-center mb-3 justify-end">
              <p class="ma-0 white text-gray-900 py-2 px-3 rounded">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div class="d-flex align-center my-3">
              <v-divider></v-divider>
              <div class="px-3">01 May 20</div>
              <v-divider></v-divider>
            </div>
            
          </div> -->
                    <div
                        v-for="(chatList, index) in singleChatInfo"
                        :key="index"
                    >
                        <div class="d-flex align-center mb-5">
                            <v-avatar size="41" class="mr-4">
                                <img :src="chatList.avatar" alt="" />
                            </v-avatar>
                            <p
                                class="ma-0 bg-primary white--text py-2 px-3 rounded"
                            >
                                {{ chatList.text }}
                            </p>
                        </div>
                        <div
                            class="d-flex flex-reverse align-center mb-3 justify-end"
                        >
                            <p class="ma-0 white black--text py-2 px-3 rounded">
                                {{ chatList.textTwo }}
                            </p>
                        </div>
                        <div class="d-flex align-center my-3">
                            <v-divider></v-divider>
                            <div class="px-3">01 May 20</div>
                            <v-divider></v-divider>
                        </div>
                    </div>
                </div>
            </vue-perfect-scrollbar>
            <div class="app-footer white">
                <v-text-field
                    @keyup.enter="sendMessage"
                    outlined
                    auto-grow
                    flat
                    label="Type Message"
                    v-model="newMessage"
                    rows="2"
                    row-height="10"
                ></v-text-field>

                <div class="d-flex justify-end mt-n3 px-3">
                    <v-btn class="mx-2" fab dark small color="primary">
                        <v-icon dark>mdi-send</v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab dark outlined small color="primary">
                        <v-icon class="rotate-90" dark>mdi-attachment</v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import axios from 'axios'

export default {
    name: 'Chat',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Chat'
    },
    created() {
        axios
            .get('/api/chat/contacts')
            .then((response) => (this.contacts = response.data))
            .catch((err) => console.log(err))
        axios
            .get('/api/chat/chats')
            .then((response) => (this.chats = response.data))
    },
    components: {
        VuePerfectScrollbar
    },
    data: () => ({
        isOpen: false,
        isBlock: false,
        itemsSb: [
            {
                active: true,
                title: 'Jason Oner',
                avatar: require('@/assets/images/faces/13.jpg'),
                subtitle: "<span class=''>3 Oct, 2018</span>"
            }
        ],
        currentChat: [],
        chatList: [],
        chatInfo: [],
        singleChatInfo: [],
        isLoading: false,
        item: 1,
        contacts: [],
        chats: [],
        newMessage: ''
    }),
    methods: {
        contactView(contact) {
            let contactID = contact.id

            axios.get('/api/chat/id', {contactID}).then((response) => {
                // console.log(response.data.chats)
                this.singleChatInfo = response.data.chats
            })
        },

        sendMessage() {
            // this.chats.push({
            //   text: this.newMessage,
            //   textTwo: "Hi, I'm Jason Oner. Your imaginary friend."
            // })

            this.singleChatInfo.push({
                textTwo: this.newMessage,
                avatar: require('@/assets/images/faces/2.jpg'),
                text: "Hi, I'm Jason Oner. Your imaginary friend."
            })
            this.newMessage = ''
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
    //   sendMessage: function() {
    //     axios.post('/api/chatInfo', { data: this.newChat })
    //       .then(response => {
    //         console.log(response.data);
    //         this.chatInfo.push({text: response.data})
    //         // setTimeout(function(){ alert("Hello"); }, 2000);
    //         setTimeout(() => {
    //           this.chatInfo.push({text: 'hello test'})
    //         }, 3000);
    //       })
    //     this.newChat = ''

    //   }

    // },
}
</script>
<style lang="scss">
// @import '@/assets/scss/egret-design-system/variables/_variables.scss';

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
        position:relative;
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
</style>
