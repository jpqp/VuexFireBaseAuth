<template>
  <v-content>
    <v-container fluid>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Hello!</h3>
              <div>
                <p>
                  このページはVue.js + Vuex + VueRouter +
                  FirebaseでGoogle認証を実装したものです。
                </p>
                <p>
                  スマホの場合は、左上の三本線のメニューアイコンをクリックすると、ログインボタンが表示されます。
                </p>
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn
              flat
              color="orange"
              href="https://github.com/adash333/Vue_Vuex_Firebase_Auth"
              >ソースコード</v-btn
            >
            <v-btn
              flat
              color="orange"
              href="http://i-doctor.sakura.ne.jp/web/doku.php?id=16.vue.js%E3%81%AEvuex%E3%81%A7%E3%83%91%E3%82%B9%E3%83%AF%E3%83%BC%E3%83%89%E5%88%B6%E9%99%90:index.html"
              >解説ページ</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
