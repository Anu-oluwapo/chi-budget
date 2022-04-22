<template>
  <div class="tab-pane active" id="tab5">
    <form
      @submit.prevent="checkOTP({ otp: data.otp, submittedBy: user.email })"
    >
      <div
        class="wrap-input100 validate-input input-group"
        data-bs-validate="Valid email is required: ex@abc.xyz"
      >
        <input
          class="input100 form-control ms-0"
          type="text"
          placeholder="Enter OTP"
          v-model="data.otp"
          required
        />
      </div>

      <div class="container-login100-form-btn">
        <button
          v-if="loading"
          class="btn btn-primary w-100"
          type="button"
          disabled
        >
          <span
            class="spinner-border mx-1 spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>

        <button v-else type="submit" class="login100-form-btn btn-primary">
          Submit
        </button>
      </div>
      <div class="text-center pt-3">
        <p class="text-dark mb-0">
          Didnt get a code ?<a href="" class="text-primary ms-1">Resend Code</a>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      data: {
        otp: "",
      },
    };
  },
  methods: {
    ...mapActions("authentication", ["checkOTP"]),
  },

  computed: {
    ...mapState(["token", "user"]),
    ...mapState("authentication", ["loading", "errorMessage"]),
  },
};
</script>

<style lang="scss" scoped>
</style>