<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>

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

    <button class="btn btn-primary btn-block">Login</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async handleSubmit() {
      const response = await axios.post("users/login", {
        email: this.email,
        password: this.password,
      });
      console.log(response);

      localStorage.setItem("token", response.data.token);
      this.$store.dispatch("user", response.data.user);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>