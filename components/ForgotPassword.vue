<template>
  <div class="tab-pane" id="tab6">
    <div id="mobile-num" class="wrap-input100 validate-input input-group mb-4">
      <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
        <span>+91</span>
      </a>
      <input class="input100 border-start-0 form-control ms-0" />
    </div>
    <div id="login-otp" class="justify-content-around mb-5">
      <input class="form-control text-center w-15" id="txt1" maxlength="1" />
      <input class="form-control text-center w-15" id="txt2" maxlength="1" />
      <input class="form-control text-center w-15" id="txt3" maxlength="1" />
      <input class="form-control text-center w-15" id="txt4" maxlength="1" />
    </div>
    <span>Note : Login with registered mobile number to generate OTP.</span>
    <div class="container-login100-form-btn">
      <a
        href="javascript:void(0)"
        class="login100-form-btn btn-primary"
        id="generate-otp"
      >
        Proceed
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>