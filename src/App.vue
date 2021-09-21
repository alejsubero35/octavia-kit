<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  metaInfo() {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: "Filmarket",
      // all titles will be injected into this template
      titleTemplate:
        "Filmarket"
    };
  },
  methods: {
    getRouterParams() {
      // console.log(this.$router.currentRoute.query);
    }
  },
  created() {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", e => {
      console.log(mq);
      this.$vuetify.theme.dark = e.matches;
    });
    this.getRouterParams();
  }
};
</script>
