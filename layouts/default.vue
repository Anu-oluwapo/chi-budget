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

      <!-- Country-selector modal-->
      <div class="modal fade" id="country-selector">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content country-select-modal">
            <div class="modal-header">
              <h6 class="modal-title">Choose Country</h6>
              <button
                aria-label="Close"
                class="btn-close"
                data-bs-dismiss="modal"
                type="button"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <ul class="row p-3">
                <li class="col-lg-6 mb-2">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-country btn-lg btn-block active"
                  >
                    <span class="country-selector"
                      ><img
                        alt=""
                        src="../assets/images/flags/us_flag.jpg"
                        class="me-3 language" /></span
                    >USA
                  </a>
                </li>
                <li class="col-lg-6 mb-2">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-country btn-lg btn-block"
                  >
                    <span class="country-selector"
                      ><img
                        alt=""
                        src="../assets/images/flags/italy_flag.jpg"
                        class="me-3 language" /></span
                    >Italy
                  </a>
                </li>
                <li class="col-lg-6 mb-2">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-country btn-lg btn-block"
                  >
                    <span class="country-selector"
                      ><img
                        alt=""
                        src="../assets/images/flags/spain_flag.jpg"
                        class="me-3 language" /></span
                    >Spain
                  </a>
                </li>
                <li class="col-lg-6 mb-2">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-country btn-lg btn-block"
                  >
                    <span class="country-selector"
                      ><img
                        alt=""
                        src="../assets/images/flags/india_flag.jpg"
                        class="me-3 language" /></span
                    >India
                  </a>
                </li>
                <li class="col-lg-6 mb-2">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-country btn-lg btn-block"
                  >
                    <span class="country-selector"
                      ><img
                        alt=""
                        src="../assets/images/flags/french_flag.jpg"
                        class="me-3 language" /></span
                    >French
                  </a>
                </li>
                <li class="col-lg-6 mb-2">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-country btn-lg btn-block"
                  >
                    <span class="country-selector"
                      ><img
                        alt=""
                        src="../assets/images/flags/russia_flag.jpg"
                        class="me-3 language" /></span
                    >Russia
                  </a>
                </li>
                <li class="col-lg-6 mb-2">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-country btn-lg btn-block"
                  >
                    <span class="country-selector"
                      ><img
                        alt=""
                        src="../assets/images/flags/germany_flag.jpg"
                        class="me-3 language" /></span
                    >Germany
                  </a>
                </li>
                <li class="col-lg-6 mb-2">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-country btn-lg btn-block"
                  >
                    <span class="country-selector"
                      ><img
                        alt=""
                        src="../assets/images/flags/argentina.jpg"
                        class="me-3 language" /></span
                    >Argentina
                  </a>
                </li>
                <li class="col-lg-6 mb-2">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-country btn-lg btn-block"
                  >
                    <span class="country-selector"
                      ><img
                        alt=""
                        src="../assets/images/flags/malaysia.jpg"
                        class="me-3 language" /></span
                    >Malaysia
                  </a>
                </li>
                <li class="col-lg-6 mb-2">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-country btn-lg btn-block"
                  >
                    <span class="country-selector"
                      ><img
                        alt=""
                        src="../assets/images/flags/turkey.jpg"
                        class="me-3 language" /></span
                    >Turkey
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Country-selector modal-->
      <Footer />
    </div>
    <!-- BACK-TO-TOP -->
    <a href="#top" id="back-to-top"><i class="fa fa-angle-up"></i></a>
  </body>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background-color: white;
}

.side-app {
  margin-top: 100px;
}
</style>