<template>
  <div v-if="user">
    <h3>Nom : {{ user.last_name }}</h3>
    <h3>Prenom : {{ user.first_name }}</h3>
    <h3>email : {{ user.email }}</h3>
    <h3>Administrateur : {{ user.isAdmin }}</h3>
    <h3 v-if="!user">You are not logged in</h3>

    <!-- <button v-on:click="deleteUser()" class="btn btn-danger btn-lg text-center">
      Supprimer le profile
    </button> -->
    <h1>Liste des utilisateurs du réseau social</h1>

    <table class="table">
      <li>
        <ul
          class="list-group"
          message-list
          v-for="user in users"
          v-bind:key="user.id"
        >
          <li
            class="list-group-item card-header message-top bg-light font-weight-bold lead"
          >
            <p>
              {{ user.first_name }}
              {{ user.last_name }}
            </p>
          </li>
          <li class="list-group-item list-group-item-action">
            <p>
              Adresse mail :
              {{ user.email }}
            </p>
          </li>

          <li class="list-group-item list-group-item-action">
            <p>
              Mot de passe crypté:
              {{ user.password }}
            </p>
          </li>
          <li class="list-group-item list-group-item-action">
            <p>
              Administrateur:
              {{ user.isAdmin }}
            </p>
          </li>

          <li class="list-group-item list-group-item-action">
            <p>
              Date de création:
              {{ user.created }}
            </p>
          </li>
        </ul>
      </li>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Administrator",
  computed: {
    ...mapGetters(["user"]),
  },
  //   props: ["user"],
  data() {
    return {
      users: "",
      //user: "",
    };
  },
  async created() {
    const response = await axios.get("users/administrator");
    console.log(response.data);

    this.users = response.data;
  },

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
button {
  display: block;
  margin: auto;
  margin-top: 50px;
}

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

#app {
  text-align: center;
}

h1,
h2,
h3,
h4,
h5,
h6,
label,
span {
  font-weight: 500;
  font-family: sans-serif;
}

body,
html,
#app,
#root,
.auth-wrapper {
  width: 100%;
  height: 100%;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.auth-inner {
  width: 1000px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}

.auth-wrapper .from-control:focus {
  border-color: #167bff;
  box-shadow: none;
}

.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-label {
  font-weight: 400;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password a {
  color: #167bff;
}
</style>