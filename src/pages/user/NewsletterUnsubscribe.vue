<template>
  <div class="newsletter-unsubscribe">
    <div class="explanation">{{$t('email.do_you_want_unsubscribe')}}</div>
    <q-btn no-caps :label="$t('email.unsubscribe')" color="primary" @click="unsubscribe" />
    <div class="loading" v-if="btnClicked">{{$t(loading ? 'email.unsubscribing' : 'email.unsubscribed_successfully') }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useUserStore } from "stores/user-store.js";

export default defineComponent({
  name: "NewsletterUnsubscribe",
  data() {
    return {
      btnClicked: false,
      loading: true,
    };
  },
  created() {},
  methods: {
    unsubscribe() {
      this.btnClicked = true;
      useUserStore()
        .unsubscribeNewsletter({
          token: this.$route.query.token,
          userId: this.$route.query.userId,
        })
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.$q.notify({
            message: this.$t("others.error_happened"),
            color: "red",
            timeout: 2000,
          });
        });
    },
  },
});
</script>
<style lang="scss" scoped>
@use "../../css/mixins.scss";

.newsletter-unsubscribe {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  .explanation {
    margin-bottom: 10px;
  }
  .loading {
    margin-top: 10px;
  }
}
</style>