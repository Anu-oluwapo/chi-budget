<template>
  <div class="main-container container-fluid">
    <PageHeader />
    <div class="row">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0 d-inline-block">All Users</h3>
            <nuxt-link
              class="d-inline-block ml-auto"
              to="/admin/users/createuser"
              ><button class="btn btn-primary">Create New User</button>
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
            <div v-else-if="users.length == 0" class="emptyState">
              <img class="d-block mx-auto my-4" src="@/assets/empty.svg" />
              <h3 class="text-center mt-5">No data available to show</h3>
              <nuxt-link
                class="d-block text-center"
                to="/admin/setup/department/createdepartment"
                >Create new department to continue</nuxt-link
              >
            </div>

            <table v-else class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">status</th>
                  <th scope="col">Role</th>
                  <th scope="col">Company</th>
                  <th scope="col">Action</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, i) in users" :key="user.id">
                  <td>{{ i + 1 }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.userName }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.phoneNumber }}</td>
                  <td
                    :class="[
                      user.status == 'Active' ? 'text-success' : 'text-danger',
                    ]"
                  >
                    {{ user.status }}
                  </td>
                  <td>
                    {{ user.role }}
                  </td>
                  <td>{{ user.company }}</td>
                  <td>
                    <button
                      v-if="user.status == 'Active'"
                      @click.prevent="deactivateUser(user)"
                      class="btn btn-danger"
                    >
                      Deactivate
                    </button>
                    <button
                      v-else
                      @click.prevent="activateUser(user)"
                      class="btn btn-success"
                    >
                      Activate
                    </button>
                  </td>
                  <td>
                    <nuxt-link :to="'/admin/users/edituser/' + user.id"
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
    ...mapActions("admin/userManagement", [
      "getAllUsers",
      "activateUser",
      "deactivateUser",
    ]),
  },

  computed: {
    ...mapState("admin/userManagement", [
      "users",
      "loading",
      "errorMessage",
      "pageLoading",
    ]),
    ...mapState(["user"]),
  },

  created() {
    this.getAllUsers();
  },
};
</script>