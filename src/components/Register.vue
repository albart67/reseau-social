<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>

    <div class="from-groupe">
      <label>First Name</label>
      <input
        type="text"
        class="form-control"
        v-model="first_name"
        placeholder="First Name"
      />
    </div>

    <div class="from-groupe">
      <label>Last Name</label>
      <input
        type="text"
        class="form-control"
        v-model="last_name"
        placeholder="Last Name"
      />
    </div>

    <div class="from-groupe">
      <label>Email</label>
      <input
        type="email"
        class="form-control"
        v-model="email"
        placeholder="Email"
      />
    </div>

    <div class="form-group">
      <label>Password</label>
      <input
        type="password"
        class="form-control"
        v-model="password"
        placeholder="Password"
      />
    </div>

    <div class="form-group">
      <label>Confirm Password</label>
      <input
        type="password"
        class="form-control"
        v-model="password_confirm"
        placeholder="Confirm Password"
      />
    </div>

    <button class="btn btn-primary btn-block">Sign Up</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
    };
  },

  methods: {
    async handleSubmit() {
      const response = await axios.post("users/register", {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        isAdmin: 0,
        //password_confirm: this.password_confirm,
      });
      console.log(response);
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
</style>