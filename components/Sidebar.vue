<template>
  <div>
    <!--APP-SIDEBAR-->
    <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
    <aside class="app-sidebar">
      <div class="side-header">
        <a class="header-brand1" href="/">
          <!-- <img
            src="../assets/images/brand/logo.png"
            class="header-brand-img desktop-logo"
            alt="logo"
          />
          <img
            src="../assets/images/brand/logo-1.png"
            class="header-brand-img toggle-logo"
            alt="logo"
          />
          <img
            src="../assets/images/brand/logo-2.png"
            class="header-brand-img light-logo"
            alt="logo"
          />
          <img
            src="../assets/images/brand/logo-3.png"
            class="header-brand-img light-logo1"
            alt="logo"
          /> -->
          <!-- <div class="light-logo1 login100-form-title mt-5 pt-3">
            <img
              src="../assets/logo.png"
              class="header-brand-img mb-3"
              alt=""
            />
            CHI Budget
          </div> -->

          <img src="../assets/logo.png" class="header-brand-img mb-3" alt="" />
        </a>
        <!-- LOGO -->
      </div>
      <ul class="side-menu">
        <li class="sub-category">
          <h3>Main</h3>
        </li>
        <li class="slide">
          <nuxt-link class="side-menu__item" to="/"
            ><i class="side-menu__icon fe fe-home"></i
            ><span class="side-menu__label">Dashboard</span></nuxt-link
          >
        </li>
        <li class="sub-category">
          <h3>Admin</h3>
        </li>
        <li>
          <nuxt-link class="side-menu__item" to="/admin/users"
            ><i class="side-menu__icon fe fe-grid"></i
            ><span class="side-menu__label">Users</span></nuxt-link
          >
        </li>
        <li class="slide">
          <a
            class="side-menu__item"
            data-bs-toggle="collapse"
            href="#collapseExample"
            ><i class="side-menu__icon fe fe-globe"></i
            ><span class="side-menu__label">Setup</span
            ><i class="angle fa fa-angle-right"></i
          ></a>
          <ul class="slidemenu collapse" id="collapseExample">
            <li>
              <nuxt-link to="/admin/setup/budgetparameter" class="slide-item"
                >Budget Parameters</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/admin/setup/budgettype" class="slide-item"
                >Budget Types</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/admin/setup/company" class="slide-item"
                >Company</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/admin/setup/department" class="slide-item"
                >Departments</nuxt-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
  <!--/APP-SIDEBAR-->
</template>

<script>
export default {};
</script>

<style scoped>
.header-brand-img {
  width: 30px;
}

.slidemenu {
  padding-left: 35px;
}
</style>