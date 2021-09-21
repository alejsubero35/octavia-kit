<template>
    <div>
        <v-row justify="center">
            <v-col cols="12" md="10">
                <div class="text-center">
                    <v-avatar size="96" class="mb-4">
                        <img src="@/assets/images/faces/1.jpg" alt="" />
                    </v-avatar>
                    <h3 class="mb-4">Welcome, Timothy Clarkson</h3>
                    <p>
                        Manage your info, privacy, and security to make UI Lib
                        work better for you. <a href="#">Learn more</a>
                    </p>
                </div>
            </v-col>
            <v-col v-for="(item, index) in home" :key="index" cols="12" md="5">
                <e-info-card
                    :title="item.title"
                    :sub-title="item.subTitle"
                    :image="item.img"
                    :link="item.link"
                />
            </v-col>
            <v-col cols="10">
                <v-row>
                    <v-col cols="10" md="10">
                        <p>
                            Only you can see your settings. You might also want
                            to review your settings for Maps, Search, or
                            whichever UI Lib services you use most. UI Lib keeps
                            your data private, safe, and secure.
                            <a href="#">Learn more</a>
                        </p>
                    </v-col>
                    <v-col cols="2" md="2">
                        <v-img
                            height="48"
                            width="48"
                            src="@/assets/images/svg/secret.svg"
                        ></v-img>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import EInfoCard from '@/components/card/BasicInfoCard'
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Account Home'
    },
    components: {
        EInfoCard
    },
    data() {
        return {
            home: [
                {
                    title: 'Privacy & personalization',
                    subTitle:
                        'See the data in your UI Lib Account and choose what activity is saved to personalize your UI Lib experience',
                    img: require('@/assets/images/svg/artist.svg'),
                    link: 'Manage your data & personalization'
                },
                {
                    title: 'Critical security issues found',
                    subTitle:
                        'Protect your account now by resolving the issues',
                    img: require('@/assets/images/svg/data-security.svg'),
                    link: 'Take action'
                },
                {
                    title: 'Account storage',
                    subTitle:
                        'Your account storage is shared across UI Lib services, like UI Lib and Photos',
                    img: require('@/assets/images/svg/folder.svg'),
                    link: 'Manage Storage'
                },
                {
                    title: 'Take the Privacy Checkup',
                    subTitle:
                        'This step-by-step guide helps you choose the privacy settings that are right for you',
                    img: require('@/assets/images/svg/data-security-2.svg'),
                    link: 'Get started'
                }
            ]
        }
    }
}
</script>
