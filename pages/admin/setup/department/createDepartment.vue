<template>
  <div class="main-container container-fluid">
    <PageHeader />
    <div class="row">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0 d-inline-block">
              Create New Department
            </h3>
          </div>
          <div class="card-body pt-4">
            <form @submit.prevent="createDepartment(details)">
              <label>Select Company</label>
              <select
                class="form-select mb-5"
                v-model="details.companyId"
                required
              >
                <option :value="0" selected>Select Company</option>
                <option
                  :value="company.id"
                  v-for="company in companies"
                  :key="company.id"
                >
                  {{ company.name }}
                </option>
              </select>

              <label>Department Name</label>
              <input
                type="text"
                v-model="details.name"
                class="form-control mb-5"
                required
              />

              <label>Select Branch</label>
              <select
                class="form-select mb-5"
                v-model="details.branch"
                required
              >
                <option :value="{}" selected>Select Branch</option>
                <option
                  :value="branch"
                  v-for="branch in branches"
                  :key="branch.id"
                >
                  {{ branch.name }}
                </option>
              </select>

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
                Create Department
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
    ...mapActions("admin/setup", [
      "createDepartment",
      "getCompanies",
      "getBranches",
    ]),
  },

  computed: {
    ...mapState("admin/setup", [
      "loading",
      "errorMessage",
      "companies",
      "branches",
    ]),
    ...mapState(["user"]),
  },

  created() {
    this.getBranches();
    this.getCompanies();
  },
};
</script>