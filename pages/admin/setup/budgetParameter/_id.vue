<template>
  <div class="main-container container-fluid">
    <PageHeader />
    <div class="row">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0 d-inline-block">
              Update Budget Parameter
            </h3>
          </div>
          <div class="card-body pt-4">
            <div
              v-if="pageLoading"
              class="spinner-grow d-block mx-auto my-5 text-primary"
              role="status"
            >
              <span class="sr-only">Loading...</span>
            </div>
            <form
              v-else
              @submit.prevent="updateBudgetParameter(budgetParameter)"
            >
              <label>Description Of Budget Parameter</label>
              <input
                type="text"
                v-model="budgetParameter.description"
                class="form-control mb-5"
                required
              />

              <label>Budget Year</label>
              <input
                type="number"
                v-model="budgetParameter.budgetYear"
                class="form-control mb-5"
                required
              />

              <label>Use Of Budget Parameter</label>
              <input
                type="text"
                v-model="budgetParameter.use"
                class="form-control mb-5"
                required
              />

              <label>Budget Parameter Type</label>
              <input
                type="text"
                v-model="budgetParameter.type"
                class="form-control mb-5"
                required
              />

              <label>Year</label>
              <input
                type="number"
                v-model="budgetParameter.year"
                class="form-control mb-5"
                required
              />

              <label>Start Date</label>
              <input
                type="date"
                v-model="budgetParameter.startDate"
                class="form-control mb-5"
                required
              />

              <label>End Date</label>
              <input
                type="date"
                v-model="budgetParameter.endDate"
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
                Update Budget Parameter
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
    return {};
  },

  methods: {
    ...mapActions("admin/setup", [
      "getBudgetParameter",
      "updateBudgetParameter",
    ]),
  },

  computed: {
    ...mapState("admin/setup", [
      "loading",
      "pageLoading",
      "errorMessage",
      "budgetParameter",
    ]),
    ...mapState(["user"]),
  },

  created() {
    this.getBudgetParameter(this.$route.params.id);
  },
};
</script>