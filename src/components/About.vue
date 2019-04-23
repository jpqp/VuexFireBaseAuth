<template>
  <v-content>
    <v-container fluid>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">About Page</h3>
              <div>
                ログインすると、以下に名前とメールアドレスが表示されます。
              </div>
            </div>
          </v-card-title>
          <div v-if="user.displayName">
            <v-list two-line>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="user.photoURL" />
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title
                    v-html="user.displayName"
                  ></v-list-tile-title>
                  <v-list-tile-sub-title
                    v-html="user.email"
                  ></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </div>
        </v-card>
      </v-flex>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "About",
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  components: {}
};
</script>
