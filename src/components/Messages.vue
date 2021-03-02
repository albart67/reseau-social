<template>
  <div class="top">
    <h3 v-if="user">Veuillez rajouter votre message {{ user.first_name }}</h3>
    <h3 v-if="!user">Vous n'êtes pas connecté</h3>
    <br />
    <!-- <p>how are you</p> -->
    <!-- <ul class="message-list">
      <li v-for="message in messages" v-bind:key="message.id">
        <div class="card-header">Utilisateur:</div>
        <div class="message-user" v-bind:key="val.id" v-for="val in message">
          {{ val.first_name }} {{ val.last_name }}
          <ul>
            <li v-for="comments in message" v-bind:key="comments.id">
              {{ val.comments }}
            </li>
          </ul>
        </div>
        <div class="list-group-item">
          {{ message.message }}
          {{ message.comments }}
        </div>
        <br />
      </li>
    </ul> -->
    <!-- <div class="card">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> -->

    <div v-if="true" class="hello">
      <div id="todo-list-example" class="container">
        <div class="row">
          <div class="col-md-10 mx-auto">
            <form class="message-write">
              <!-- <form v-on:submit.prevent="addNewMessage"> -->
              <label for="messageInput">VOTRE MESSAGE :</label>
              <input
                v-model="message"
                id="messageInput"
                class="form-control"
                placeholder="ajouter un message"
              />
              <br />
              <div class="form-group">
                <label for="imageURL">CHOISISSEZ VOTRE IMAGE :</label>
                <!-- <input
                v-model="imageURL"
                  type="url"
                  class="form-control"
                  id="imageURL"
                  placeholder="Put an image URL"
                /> -->
                <!-- <label for="avatar">Choose a profile picture:</label>
                <input
                  type="file"
                  id="imageURL"
                  name="avatar"
                  accept="image/png, image/jpeg"
                /> -->
                <div class="large-12 medium-12 small-12 cell">
                  <label>
                    <input
                      type="file"
                      id="file"
                      ref="file"
                      v-on:change="handleFileUpload()"
                    />
                  </label>
                  <!-- <button v-on:click="submitFile()">Submit</button> -->
                </div>
              </div>

              <button
                type="submit"
                v-on:click.prevent="submitFile()"
                class="btn btn-success btn-lg"
              >
                Envoyer message
              </button>

              <!-- <button
                type="button"
                v-on:click="updateMessage()"
                class="btn btn-primary btn-block mt-3"
              >
                Update
              </button> -->
            </form>
            <br />
            <h1 class="text-center">Liste des messages</h1>
            <table class="table">
              <ul
                id="bloc-message"
                class="list-group"
                v-for="message in messages"
                v-bind:key="message.id"
                v-bind:title="message.message"
              >
                <li
                  class="list-group-item card-header message-top bg-info text-white font-weight-bold lead"
                >
                  {{ message.user.first_name }}
                  {{ message.user.last_name }}
                </li>
                <li class="list-group-item">Message :{{ message.message }}</li>
                <!-- <li class="list-group-item">{{ message.user.id }}</li> -->
                <img
                  v-if="message.imageURL"
                  class="mr-3"
                  :src="'http://localhost:5000/images/' + message.imageURL"
                  :alt="message.subject"
                  style="width: 100%"
                />
                <!-- <img
                 // v-if="message.image"
                 // class="mr-3"
                  //:src="image"
                  //:alt="messageimage"                   
                ///> -->

                <li class="list-group-item">
                  <button id="btnComment" class="btn btn-primary">
                    <router-link id="toComment" :to="`/comments/${message.id}`">
                      Faire un commentaire
                    </router-link>
                  </button>
                  <div>
                    <button
                      v-if="message.userId == user.id || user.isAdmin == 1"
                      v-on:click="updateMessage(message.id)"
                      class="btn btn-info"
                    >
                      Modifier message
                    </button>
                    <button
                      v-if="message.userId == user.id || user.isAdmin == 1"
                      v-on:click="deleteMessage(message.id)"
                      class="btn btn-danger"
                    >
                      Supprimer message
                    </button>
                  </div>
                </li>
                <li>
                  <h2 v-if="message.comments.length > 0">Commentaires</h2>

                  <!-- <ul
                    class="card text-white bg-info mb-3"
                    style="max-width: 18rem"
                    v-for="comment in message.comments"
                    v-bind:key="comment.id"
                  >
                    <il class="card-header">
                      De: {{ findName(comment.userId) }}
                    </il>

                    <il class="card-body">
                      <p class="card-text">
                        {{ comment.comment }}
                      </p>
                    </il>
                  </ul> -->

                  <table class="table comment-list">
                    <ul
                      class="list-group"
                      v-for="comment in message.comments"
                      v-bind:key="comment.id"
                    >
                      <li
                        class="list-group-item card-header message-top bg-light"
                      >
                        <p comment-userName>
                          De: {{ findName(comment.userId) }}
                        </p>
                      </li>
                      <li class="list-group-item">{{ comment.comment }}</li>
                    </ul>
                  </table>

                  <!-- <label for="messageInput">Votre commentaire:</label>
                  <input
                    v-model="comment"
                    id="messageInput"
                    class="form-control"
                    placeholder="ajouter un commentaire"
                  />
                  <button
                    v-on:click="addNewComment(message.id)"
                    class="btn btn-danger"
                  >
                    Envoyer commentaire
                  </button>
                </li> -->

                  <!-- <button type="submit" class="btn btn-success btn-block mt-3">
                    Envoyer commentaire
                  </button> -->
                  <!-- <button
                type="button"
                v-on:click="updateMessage()"
                class="btn btn-primary btn-block mt-3"
              >
                Update
              </button> -->
                  <!-- <li>
                  <button id="btnComment" class="btn btn-primary btn-lg">
                    <router-link id="toComment" :to="`/comments/${message.id}`">
                      Faire un commentaire
                    </router-link>
                  </button>
                </li> -->
                </li>
              </ul>

              <!-- <ul
                class="list-unstyled"
                v-for="message in messages"
                v-bind:key="message.id"
                v-bind:title="message.message"
              >
                <li class="text-left">{{ message.message }}</li>
                <li class="text-left">
                  <button
                    v-on:click="editMessage(message.title, message._id)"
                    class="btn btn-info"
                  >
                    Edit
                  </button>
                  <button
                    v-on:click="deleteMessage(message.id)"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </li>
              </ul> -->
            </table>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Messages",
  computed: {
    ...mapGetters(["user"]),
  },
  //props: ["user"],
  data() {
    return {
      messages: null,
      id: "",
      message: "",
      isEdit: false,
      userId: "",
      comment: "",
      comments: "",
      imageURL: "",
      file: "",
      //image: "",
      isComment: "",
    };
  },
  async created() {
    const response = await axios.get("api/messages");
    // const image = await axios.get(`image/${this.imageURL}`);
    console.log(response.data);
    this.messages = response.data;
    this.comments = response.data.comments;
    this.images = response.data.imageURL;
    console.log(response.data);
    //console.log(response.data[comments]);
  },
  // created: function () {
  //   const response = axios.get("api/messages");
  //   console.log(response.data);
  //   this.messages = response.data;
  //   this.comments = response.data.comments;
  //   //console.log(response.data[comments]);
  // },
  methods: {
    //isComment() {
    //  if (this.messages.id.comments.length == 0);
    //  return false;
    //},

    findName(id) {
      const resultat = this.messages.find((message) => message.userId === id);
      const userName = resultat.user.last_name + " " + resultat.user.first_name;
      return userName;
    },

    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },

    submitFile() {
      /*
      
                Initialize the form data            */
      let formData = new FormData();

      /*
                Add the form data we need to submit
            */
      formData.append("image", this.file);
      formData.append("userId", this.user.id);
      formData.append("message", this.message);
      console.log(this.user.id);
      /*
      
          Make the request to the POST /single-file URL
        */
      axios
        .post("http://localhost:5000/api/message", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function () {
          console.log("SUCCESS!!");
          //this.$router.push("/");
          location.reload();
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },

    /*
        Handles a change on the file upload
      */

    addNewMessage() {
      console.log(this.file);
      axios
        .post("http://localhost:5000/api/message", {
          imageURL: this.file,
          message: this.message,
          userId: this.user.id,
        })
        .then((res) => {
          this.message = "";
          this.messageURL;
          location.reload();
          // this.getMessages();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteMessage(id) {
      axios
        .delete(`http://localhost:5000/api/message/${id}`, {
          userId: this.user.id,
        })
        .then((res) => {
          this.message = "";
          // this.getMessages();
          console.log(res);
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    updateMessage(id) {
      /*
      
                Initialize the form data            */
      let formData = new FormData();

      /*
                Add the form data we need to submit
            */
      formData.append("image", this.file);
      formData.append("userId", this.user.id);

      formData.append("message", this.message);
      console.log(this.user.id);
      console.log(this.message);
      /*
      
          Make the request to the POST /single-file URL
        */
      axios
        .post(`http://localhost:5000/api/messageUpdate/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function () {
          console.log("SUCCESS!!");
          location.reload();
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },

    updateMessa(id) {
      // if (this.file) {
      let formData = new FormData();

      formData.append("image", this.file);
      formData.append("userId", this.user.id);
      //formData.append("_method", "PUT");

      formData.append("message", this.message);
      console.log(this.user.id);
      console.log(id);
      console.log(this.file);
      /*
      
          Make the request to the POST /single-file URL
        */
      axios
        .post(`http://localhost:5000/api/messageUpdate/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function () {
          console.log("SUCCESS!!");
          location.reload();
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
      //}
    },

    updateMessag(id) {
      axios
        .put(`http://localhost:5000/api/message/${id}`, {
          message: this.message,
          userId: this.user.id,
        })
        .then((res) => {
          this.message = "";
          this.isEdit = false;
          // this.getMessages();
          console.log(res);
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addNewComment(id) {
      axios
        .post(`http://localhost:5000/api/newComment/`, {
          comment: this.comment,
          userId: this.user.id,
          messageId: `${id}`,
        })
        .then((res) => {
          this.message = "";
          location.reload();
          // this.getMessages();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // async addNewMessage() {
    //   await axios
    //     .post("api/message", {
    //       imageURL: this.imageURL,
    //       message: this.message,
    //       userId: this.userId,
    //     })
    //     .then((res) => {
    //       this.message = "";
    //       this.messageURL;
    //       this.getMessages();
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
};
</script>

<style scoped>
.top {
  margin-top: 20px;
}

h3 {
  text-align: center;
}

h2 {
  font-size: 25px;
  padding: 15px 20px;
  text-align: center;
  color: white;
  background-color: rgb(245, 124, 68);
  line-height: 15px;
  border-radius: 5px;
}

.message-write {
  padding: 10px;
  margin-bottom: 10px;
  border: solid 1px;
  border-radius: 10px;
}

#bloc-message {
  margin-bottom: 10px;
  border: solid 1px;
  border-radius: 10px;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
}

#btnCommen {
  display: block;
  margin: auto;
}

button {
  margin: 10px;
}

li {
  list-style: none;
  text-decoration: none;
}
.top {
  margin-top: 20px;
}

.comment-userName {
  margin-left: 50px;
}

.message-header {
  background-color: rgba(18, 197, 197, 1);
}

.message-use {
  border: solid 1px;
}

.tab {
  border: solid 1px;
}

.message-to {
  border-top: solid 1px;
}

#tooComment {
  display: inline;
  color: white;
}

a {
  color: white;
}
</style>