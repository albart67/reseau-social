<template>
  <div class="container">
    <div v-if="user">
      <h3>Nom : {{ user.last_name }}</h3>
      <h3>Prenom : {{ user.first_name }}</h3>
      <h3>email : {{ user.email }}</h3>
      <h3 v-if="!user">You are not logged in</h3>
    </div>
    <button v-on:click="deleteUser()" class="btn btn-danger btn-lg text-center">
      Supprimer votre profil
    </button>
    <br />
    <button v-if="user.isAdmin == 1">
      <router-link to="/administrator" class="btn btn-lg text-center"
        >ZONE ADMINISTRATEUR</router-link
      >
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["user"]),
  },
  //props: ["user"],
  data() {
    return {
      //user: "",
    };
  },
  // async created() {
  //   const response = await axios.get("users/profile");
  //   console.log(response.data);
  //   this.user = response.data;
  // },

  methods: {
    deleteUser() {
      axios
        .delete(`http://localhost:5000/users/profile`, {
          userId: this.user.id,
        })
        .then((res) => {
          this.user = "";
          console.log(res);
          localStorage.removeItem("token");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background: #1c8ef9 !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: sans-serif;
}

.container {
}

button {
  margin: 20px 0px;
}

#app {
  text-align: center;
}

router-link {
  text-decoration: none;
  border: none;
}
</style>