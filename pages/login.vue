<template>
  <div class="">
    <!-- CONTAINER OPEN -->
    <!-- <div class="col col-login mx-auto mt-7">
      <div class="text-center">
        <img src="../assets/logo.png" class="header-brand-img" alt="" />
        <h2 class="text-light mt-2"></h2>
      </div>
    </div> -->

    <div class="container-login100">
      <div class="wrap-login100 p-6">
        <form class="login100-form validate-form">
          <img
            src="../assets/logo.png"
            class="header-brand-img d-block mx-auto mb-3"
            alt=""
          />
          <span class="login100-form-title pb-5"> CHI Budget </span>
          <div class="panel panel-primary">
            <div class="tab-menu-heading">
              <div class="tabs-menu1">
                <!-- Tabs -->
                <ul class="nav panel-tabs">
                  <li class="mx-0">
                    <a href="#tab5" class="active" data-bs-toggle="tab"
                      >Login</a
                    >
                  </li>
                  <li class="mx-0">
                    <a href="#tab6" data-bs-toggle="tab">Register</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="panel-body tabs-menu-body p-0 pt-5">
              <div class="tab-content">
                <Login />
                <Register />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- CONTAINER CLOSED -->
  </div>
</template>

<script>
export default {
  layout: "login",
};
</script>

<style scoped>
.header-brand-img {
  width: 40px;
}
</style>