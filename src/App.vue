<template>
  <div id="app">
    <v-app id="inspire">
      <Navigation />
      <router-view />
    </v-app>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Navigation
  },
  data() {
    return {};
  }
};
</script>
