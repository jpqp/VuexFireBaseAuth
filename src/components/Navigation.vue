<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile :to="{ path: '/' }">
          <v-list-tile-action> <v-icon>home</v-icon> </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{ path: '/About' }">
          <v-list-tile-action>
            <v-icon>description</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile> <Authentication /> </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer;"
      ></v-toolbar-side-icon>
      <v-toolbar-title>VuexFireAuth</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
import Authentication from "@/components/Authentication.vue";

export default {
  name: "Navigation",
  components: {
    Authentication
  },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
};
</script>
