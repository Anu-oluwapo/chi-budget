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
            <form>
              <label>Name</label>
              <input type="text" class="form-control mb-5" />

              <label>Email</label>
              <input type="email" class="form-control mb-5" />

              <label>Username</label>
              <input type="text" class="form-control mb-5" />

              <label>Phone Number</label>
              <input type="text" class="form-control mb-5" />

              <label>Company</label>
              <select class="form-select mb-5">
                <option>CHI</option>
              </select>

              <label>Role</label>
              <select class="form-select mb-5">
                <option>Admin</option>
                <option>User</option>
              </select>

              <button class="btn btn-primary">Create User</button>
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
    ...mapActions("admin", ["getAllUsers", "activateUser", "deactivateUser"]),
  },

  computed: {
    ...mapState("admin", ["users", "loading", "errorMessage"]),
    ...mapState(["user"]),
  },

  created() {
    this.getAllUsers();
  },
};
</script>