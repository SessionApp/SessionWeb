<template>
  <div class="reset-password">
    <img src="logo.png" alt="Session-logo" class="logo" />
    <div class="title">
      {{ $t("auth.reset_password") }}
    </div>
    <div class="box" v-if="!passwordChanged">
      <div class="explanation">
        {{ $t("auth.reset_password_explanation") }}
      </div>
      <q-input
        :type="clearPswd ? 'text' : 'password'"
        :label="$t('auth.new_password')"
        class="new-password-input"
        v-model="newPassword"
      >
        <template v-slot:append>
          <q-icon
            :name="clearPswd ? 'visibility' : 'visibility_off'"
            class="cursor-pointer"
            @click="clearPswd = !clearPswd"
          />
        </template>
      </q-input>
      <q-btn
        color="primary"
        :label="$t('others.send')"
        :no-caps="true"
        @click="sendNewPassword"
        :loading="loading"
      />
    </div>
    <div class="box" v-if="passwordChanged">
      <div class="explanation">
        {{ $t("auth.password_changed") }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useAuthStore } from "stores/auth-store.js";

export default defineComponent({
  name: "ResetPassword",
  data() {
    return {
      newPassword: "",
      passwordChanged: false,
      loading: false,
      clearPswd: false,
    };
  },
  methods: {
    sendNewPassword() {
      this.loading = true;
      useAuthStore()
        .resetPassword({
          token: this.$route.query.token,
          userId: this.$route.query.userId,
          password: this.newPassword,
        })
        .then(() => {
          this.passwordChanged = true;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          this.$q.notify({
            message: this.$t("others.error_happened"),
            color: "red",
            timeout: 1000,
          });
        });
    },
  },
});
</script>
<style lang="scss" scoped>
@use "../../css/mixins.scss";

.reset-password {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 80px;
    margin: 10px 5px;
  }
  .title {
    color: black;
    font-size: 1.8em;
  }
  .box {
    @include mixins.elevated-box;
    max-width: 500px;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 20px 100px;
    padding: 15px;
    border-radius: 30px;
    .explanation {
      color: black;
      background-color: white;
    }
    .new-password-input {
      width: 90%;
      margin: 20px 0px 20px 0px;
    }
  }
}
</style>