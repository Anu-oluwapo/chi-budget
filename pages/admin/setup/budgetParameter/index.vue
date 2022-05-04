<template>
  <div class="main-container container-fluid">
    <PageHeader />
    <div class="row">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0 d-inline-block">
              All Budget Parameters
            </h3>
            <nuxt-link
              class="d-inline-block ml-auto"
              to="/admin/setup/budgetParameter/createbudgetParameter"
              ><button class="btn btn-primary">
                Create New Budget Parameter
              </button>
            </nuxt-link>
          </div>
          <div class="card-body pt-4">
            <div
              v-if="pageLoading"
              class="spinner-grow d-block mx-auto my-5 text-primary"
              role="status"
            >
              <span class="sr-only">Loading...</span>
            </div>
            <div v-else-if="budgetParameters.length == 0" class="emptyState">
              <img class="d-block mx-auto my-4" src="@/assets/empty.svg" />
              <h3 class="text-center mt-5">No data available to show</h3>
              <nuxt-link
                class="d-block text-center"
                to="/admin/setup/budgetparameter/createbudgetParameter"
                >Create new budget parameter to continue</nuxt-link
              >
            </div>

            <table v-else class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Budget Parameter Description</th>
                  <th scope="col">Budget Year</th>
                  <th scope="col">Use Of Budget</th>
                  <th scope="col">Budget Parameter Type</th>
                  <th scope="col">Year</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>

                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(budgetParameter, i) in budgetParameters"
                  :key="budgetParameter.id"
                >
                  <td>{{ i + 1 }}</td>
                  <td>{{ budgetParameter.description }}</td>
                  <td>{{ budgetParameter.budgetYear }}</td>
                  <td>{{ budgetParameter.use }}</td>
                  <td>{{ budgetParameter.type }}</td>
                  <td>{{ budgetParameter.year }}</td>
                  <td>{{ budgetParameter.startDate }}</td>
                  <td>{{ budgetParameter.endDate }}</td>

                  <td>
                    <nuxt-link
                      :to="'/admin/setup/budgetparameter/' + budgetParameter.id"
                      ><button class="btn btn-primary">Edit</button></nuxt-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
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
    ...mapActions("admin/setup", ["getBudgetParameters"]),
  },

  computed: {
    ...mapState("admin/setup", [
      "budgetParameters",
      "loading",
      "errorMessage",
      "pageLoading",
    ]),
    ...mapState(["user"]),
  },

  created() {
    this.getBudgetParameters();
  },
};
</script>

