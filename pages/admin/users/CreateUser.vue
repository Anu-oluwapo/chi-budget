<template>
  <div class="main-container container-fluid">
    <PageHeader />
    <div class="row">
      <div class="col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title mb-0 d-inline-block">Create New User</h3>
          </div>
          <div class="card-body pt-4">
            <form @submit.prevent="createUser(details)">
              <label>Full Name</label>
              <input
                type="text"
                v-model="details.name"
                class="form-control mb-5"
                required
              />

              <label>Email</label>
              <input
                type="email"
                v-model="details.email"
                class="form-control mb-5"
                required
              />

              <label>Username</label>
              <input
                type="text"
                v-model="details.username"
                class="form-control mb-5"
                required
              />

              <label>Phone Number</label>
              <input
                type="text"
                v-model="details.phoneNumber"
                class="form-control mb-5"
                required
              />

              <label>Company</label>
              <select
                v-model="details.company"
                required
                class="form-select mb-5"
              >
                <option value="">Select Company</option>
                <option value="CHI">CHI</option>
              </select>

              <label>Role</label>
              <select v-model="details.role" required class="form-select mb-5">
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
                Create {{ details.role }}
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
        email: "",
        username: "",
        phoneNumber: "",
        company: "",
        role: "",
      },
    };
  },

  methods: {
    ...mapActions("admin/userManagement", ["createUser"]),
  },

  computed: {
    ...mapState("admin/userManagement", ["loading", "errorMessage"]),
    ...mapState(["user"]),
  },

  created() {},
};
</script>