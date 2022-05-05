<template>
  <div class="main-container container-fluid">
    <PageHeader />
    <div class="row">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0 d-inline-block">Update Department</h3>
          </div>
          <div class="card-body pt-4">
            <div
              v-if="pageLoading"
              class="spinner-grow d-block mx-auto my-5 text-primary"
              role="status"
            >
              <span class="sr-only">Loading...</span>
            </div>
            <form v-else @submit.prevent="updateDepartment(department)">
              <label>Select Company</label>
              <select
                class="form-select mb-5"
                v-model="department.companyId"
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
                v-model="department.name"
                class="form-control mb-5"
                required
              />

              <label>Select Branch</label>
              <select
                @change="modify()"
                class="form-select mb-5"
                v-model="details.branch"
                required
              >
                <option :value="{}" selected>{{ department.branch }}</option>
                <option
                  :value="branch"
                  v-for="branch in branches"
                  :key="branch.id"
                >
                  {{ branch.name }}
                </option>
              </select>

              <label>Branch ID</label>
              <input
                type="text"
                :value="department.branchId"
                disabled
                class="form-control mb-5"
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
                Update Department
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
        branch: {},
      },
    };
  },

  methods: {
    ...mapActions("admin/setup", [
      "getDepartment",
      "updateDepartment",
      "getCompanies",
      "getBranches",
    ]),

    modify() {
      this.department.branch = this.details.branch.name;
      this.department.branchId = this.details.branch.id;
    },
  },

  computed: {
    ...mapState("admin/setup", [
      "loading",
      "pageLoading",
      "errorMessage",
      "department",
      "companies",
      "branches",
    ]),
    ...mapState(["user"]),
  },

  created() {
    this.getDepartment(this.$route.params.id);
    this.getBranches();
    this.getCompanies();
  },
};
</script>