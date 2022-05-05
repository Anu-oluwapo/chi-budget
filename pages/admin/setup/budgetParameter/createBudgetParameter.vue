<template>
  <div class="main-container container-fluid">
    <PageHeader />
    <div class="row">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0 d-inline-block">
              Create New Budget Parameter
            </h3>
          </div>
          <div class="card-body pt-4">
            <form @submit.prevent="createBudgetParameter(details)">
              <label>Description Of Budget Parameter</label>
              <input
                type="text"
                v-model="details.description"
                class="form-control mb-5"
                required
              />

              <label>Budget Year</label>
              <input
                v-model.number="details.budgetYear"
                class="form-control mb-5"
                type="number"
                required
              />

              <label>Use Of Budget Parameter</label>
              <input
                type="text"
                v-model="details.use"
                class="form-control mb-5"
                required
              />

              <label>Budget Type</label>
              <select class="form-select mb-5" v-model="details.type" required>
                <option value="" selected>Select Budget Type</option>
                <option
                  :value="type.name"
                  v-for="type in budgetTypes"
                  :key="type.id"
                >
                  {{ type.name }}
                </option>
              </select>

              <label>Year</label>
              <input
                v-model.number="details.year"
                class="form-control mb-5"
                type="number"
                required
              />

              <label>Start Date</label>
              <input
                type="date"
                v-model="details.startDate"
                class="form-control mb-5"
                required
              />

              <label>End Date</label>
              <input
                type="date"
                v-model="details.endDate"
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
                Create Budget Parameter
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
        description: "",
        budgetYear: 0,
        use: "",
        type: "",
        year: 0,
        startDate: "",
        endDate: "",
      },
    };
  },

  methods: {
    ...mapActions("admin/setup", ["createBudgetParameter", "getBudgetTypes"]),
  },

  computed: {
    ...mapState("admin/setup", ["loading", "errorMessage", "budgetTypes"]),
    ...mapState(["user"]),
  },

  created() {
    this.getBudgetTypes();
  },
};
</script>