<template>
  <div class="tab-pane active" id="tab5">
    <form @submit.prevent="authenticate(data)">
      <div
        class="wrap-input100 validate-input input-group"
        data-bs-validate="Valid email is required: ex@abc.xyz"
      >
        <a
          href="javascript:void(0)"
          class="input-group-text bg-white text-muted"
        >
          <i class="zmdi zmdi-email text-muted" aria-hidden="true"></i>
        </a>
        <input
          class="input100 border-start-0 form-control ms-0"
          type="text"
          placeholder="Username"
          v-model="data.username"
          required
        />
      </div>
      <div
        class="wrap-input100 validate-input input-group"
        id="Password-toggle"
      >
        <a
          href="javascript:void(0)"
          class="input-group-text bg-white text-muted"
        >
          <i class="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
        </a>
        <input
          class="input100 border-start-0 form-control ms-0"
          type="password"
          placeholder="Password"
          v-model="data.password"
          required
        />
      </div>
      <div class="text-end pt-4">
        <p class="mb-0">
          <a href="/" class="text-primary ms-1">Forgot Password?</a>
        </p>
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
          Login
        </button>
      </div>
      <!-- <div class="text-center pt-3">
      <p class="text-dark mb-0">
        Not a member?<a
          href="#tab6"
          data-bs-toggle="tab"
          class="text-primary ms-1"
          >Sign UP</a
        >
      </p>
    </div> -->
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      data: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("authentication", ["authenticate"]),
  },

  computed: {
    ...mapState("authentication", ["loading", "errorMessage"]),
  },
};
</script>

<style lang="scss" scoped>
</style>