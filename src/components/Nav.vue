<template>
  <nav class="class=navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <div left-nav>
        <img
          id="logo"
          src="../assets/groupomania_4.png"
          alt="logo groupomania"
        />
        <router-link to="/" class="navbar-brand">HOME</router-link>
        <router-link to="/messages" class="navbar-brand">MESSAGES</router-link>
        <router-link to="/profile" class="navbar-brand"
          >UTILISATEUR</router-link
        >
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto" v-if="!user">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">LOGIN</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">SIGN UP</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <!-- <router-link to="/login" class="nav-link">LOGIN</router-link> -->
            <a href="javascript:void(0)" @click="handleClick" class="nav-link"
              >LOGOUT</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Nav",
  computed: {
    ...mapGetters(["user"]),
  },

  data() {
    return {
      //user: "",
    };
  },

  methods: {
    handleClick() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#logo {
  margin-right: 100px;
  margin-bottom: 10px;
  display: block;
  height: 50px;
  width: auto;
}

.container {
  display: flex;
  justify-content: space-between;
  height: 100px;
}
.left-nav {
  font-family: sans-serif;
  font-size: 20px;
  color: black;
}
</style>
