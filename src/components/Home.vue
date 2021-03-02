<template>
  <div>
    <h3>
      Bonjour {{ user.first_name }} {{ user.last_name }}, soyez le bienvenue
      dans notre réseau social :)
    </h3>
    <h3 v-if="!user">Vous n'êtes pas connecté</h3>
    <img
      id="home-pic"
      src="../assets/homeGroupomania.png"
      alt=""
      width="100%"
    />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <img
      src="../assets/groupomania_4.png"
      alt="logo groupomania"
      height="60px"
      width="600px"
    />
    <img
      v-bind:src="logo1"
      alt="[ABC Tech posssède 75% de part de marché et XYZ
    25%]"
    /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
//import axios from "axios";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["user"]),
  },
  // props: ["user"],
  data() {
    return {
      // user: "",
      logo1: "../assets/groupomania_4.png",
    };
  },
  // async created() {
  //   const response = await axios.get("users/profile");
  //   console.log(response.data);
  //   this.user = response.data;
  // },
};
</script>

<style scoped>
.auth-wrapper {
  width: 1500px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}

#home-pic {
  margin-top: 20px;
}

h3 {
  text-align: center;
}
</style>