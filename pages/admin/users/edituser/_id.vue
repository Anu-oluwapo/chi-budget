<template>
  <div class="main-container container-fluid">
    <PageHeader />
    <div class="row">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0 d-inline-block">Edit User</h3>
          </div>
          <div class="card-body pt-4">
            <div
              v-if="pageLoading"
              class="spinner-grow d-block mx-auto my-5 text-primary"
              role="status"
            >
              <span class="sr-only">Loading...</span>
            </div>
            <form v-else @submit.prevent="updateUser(userDTO)">
              <label>Full Name</label>
              <input
                type="text"
                v-model="userDTO.name"
                class="form-control mb-5"
                required
              />

              <label>Email</label>
              <input
                type="email"
                v-model="userDTO.email"
                class="form-control mb-5"
                required
              />

              <label>Username</label>
              <input
                type="text"
                v-model="userDTO.userName"
                class="form-control mb-5"
                required
              />

              <label>Phone Number</label>
              <input
                type="text"
                v-model="userDTO.phoneNumber"
                class="form-control mb-5"
                required
              />

              <label>Company</label>
              <select
                v-model="userDTO.company"
                required
                class="form-select mb-5"
              >
                <option value="">Select Company</option>
                <option value="CHI">CHI</option>
              </select>

              <label>Role</label>
              <select v-model="userDTO.role" required class="form-select mb-5">
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
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
                Update {{ userDTO.role }}
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
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },

  methods: {
    ...mapActions("admin/userManagement", ["getUser", "updateUser"]),
  },

  computed: {
    ...mapState("admin/userManagement", [
      "users",
      "loading",
      "pageLoading",
      "errorMessage",
      "userDTO",
    ]),
    ...mapState(["user"]),
  },

  created() {
    this.getUser(this.$route.params.id);
  },
};
</script>