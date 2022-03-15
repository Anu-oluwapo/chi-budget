<template>
  <div class="tab-pane active" id="tab5">
    <div
      class="wrap-input100 validate-input input-group"
      data-bs-validate="Valid email is required: ex@abc.xyz"
    >
      <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
        <i class="zmdi zmdi-email text-muted" aria-hidden="true"></i>
      </a>
      <input
        class="input100 border-start-0 form-control ms-0"
        type="email"
        placeholder="Email"
      />
    </div>
    <div class="wrap-input100 validate-input input-group" id="Password-toggle">
      <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
        <i class="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
      </a>
      <input
        class="input100 border-start-0 form-control ms-0"
        type="password"
        placeholder="Password"
      />
    </div>
    <div class="text-end pt-4">
      <p class="mb-0">
        <a href="forgot-password.html" class="text-primary ms-1"
          >Forgot Password?</a
        >
      </p>
    </div>
    <div class="container-login100-form-btn">
      <a href="index.html" class="login100-form-btn btn-primary"> Login </a>
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>