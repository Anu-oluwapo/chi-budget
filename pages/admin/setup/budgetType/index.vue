<template>
  <div class="main-container container-fluid">
    <PageHeader />
    <div class="row">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0 d-inline-block">All Budget Types</h3>
            <nuxt-link
              class="d-inline-block ml-auto"
              to="/admin/setup/budgetType/createbudgetType"
              ><button class="btn btn-primary">Create New Budget Type</button>
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
            <div v-else-if="budgetTypes.length == 0" class="emptyState">
              <img class="d-block mx-auto my-4" src="@/assets/empty.svg" />
              <h3 class="text-center mt-5">No data available to show</h3>
              <nuxt-link
                class="d-block text-center"
                to="/admin/setup/budgetType/createbudgetType"
                >Create new budget type to continue</nuxt-link
              >
            </div>

            <table v-else class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Budget Type Name</th>

                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(budgetType, i) in budgetTypes" :key="budgetType.id">
                  <td>{{ i + 1 }}</td>
                  <td>{{ budgetType.name }}</td>

                  <td>
                    <nuxt-link :to="'/admin/setup/budgetType/' + budgetType.id"
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
    ...mapActions("admin/setup", ["getBudgetTypes"]),
  },

  computed: {
    ...mapState("admin/setup", [
      "budgetTypes",
      "loading",
      "errorMessage",
      "pageLoading",
    ]),
    ...mapState(["user"]),
  },

  created() {
    this.getBudgetTypes();
  },
};
</script>

