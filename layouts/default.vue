<template>
  <body class="app sidebar-mini ltr light-mode">
    <!-- PAGE -->
    <div class="page">
      <div class="page-main">
        <Topbar />
        <Sidebar />

        <!--app-content open-->
        <div class="main-content app-content mt-0">
          <div class="side-app">
            <Nuxt />
          </div>
        </div>
        <!--app-content close-->
      </div>

      <Footer />
    </div>
    <!-- BACK-TO-TOP -->
    <a href="#top" id="back-to-top"><i class="fa fa-angle-up"></i></a>
  </body>
</template>

<script>
export default {
  deactivated() {
    this.$cookies.removeAll();
  },
};
</script>

<style>
footer {
  background-color: white;
}

.side-app {
  margin-top: 100px;
}

.emptyState img {
  width: 15vw;
}
</style>