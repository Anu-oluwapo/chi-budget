<template>
  <!-- PAGE -->
  <div class="page">
    <div class="page-main">
      <Topbar />
      <Sidebar />
      <div class="main-content app-content mt-0">
        <div class="side-app">
          <Nuxt />
        </div>
      </div>
    </div>
    <Footer />
    <!-- BACK-TO-TOP -->
    <a href="#top" id="back-to-top"><i class="fa fa-angle-up"></i></a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background-color: white;
}

.main-content {
  margin-top: 100px !important;
}
</style>