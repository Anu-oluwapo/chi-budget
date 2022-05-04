<template>
  <div class="main-container container-fluid">
    <PageHeader />
    <div class="row">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0 d-inline-block">All Companies</h3>
            <nuxt-link
              class="d-inline-block ml-auto"
              to="/admin/setup/company/createcompany"
              ><button class="btn btn-primary">Create New Company</button>
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
            <div v-else-if="companies.length == 0" class="emptyState">
              <img class="d-block mx-auto my-4" src="@/assets/empty.svg" />
              <h3 class="text-center mt-5">No data available to show</h3>
              <nuxt-link
                class="d-block text-center"
                to="/admin/setup/company/createcompany"
                >Create new company to continue</nuxt-link
              >
            </div>

            <table v-else class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Company Name</th>

                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(company, i) in companies" :key="company.id">
                  <td>{{ i + 1 }}</td>
                  <td>{{ company.name }}</td>

                  <td>
                    <nuxt-link :to="'/admin/setup/company/' + company.id"
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
    ...mapActions("admin/setup", ["getCompanies"]),
  },

  computed: {
    ...mapState("admin/setup", [
      "companies",
      "loading",
      "errorMessage",
      "pageLoading",
    ]),
    ...mapState(["user"]),
  },

  created() {
    this.getCompanies();
  },
};
</script>

