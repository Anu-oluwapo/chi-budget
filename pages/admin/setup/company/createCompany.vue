<template>
  <div class="main-container container-fluid">
    <PageHeader />
    <div class="row">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0 d-inline-block">Create New Company</h3>
          </div>
          <div class="card-body pt-4">
            <form @submit.prevent="createCompany(details)">
              <label>Company Name</label>
              <input
                type="text"
                v-model="details.name"
                class="form-control mb-5"
                required
              />

              <button
                v-if="loading"
                type="button"
                class="btn btn-primary disabled"
              >
                <span
                  class="spinner-border mx-1 spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
              <button v-else type="submit" class="btn btn-primary">
                Create Company
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- ROW-4 END -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      details: {
        name: "",
      },
    };
  },

  methods: {
    ...mapActions("admin/setup", ["createCompany"]),
  },

  computed: {
    ...mapState("admin/setup", ["loading", "errorMessage"]),
    ...mapState(["user"]),
  },

  created() {},
};
</script>