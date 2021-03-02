<template>
  <div>
    <div class="top">
      <div class="hello">
        <div id="todo-list-example" class="container">
          <div class="row">
            <div class="col-md-10 mx-auto">
              <h1 class="text-center">Liste des commentaires</h1>
              <br />
              <form v-on:submit.prevent="addNewComment">
                <label for="messageInput">Entrez votre commentaire</label>
                <input
                  v-model="comment"
                  id="messageInput"
                  class="form-control"
                  placeholder="ajouter un commentaire"
                />
                <br />
                <button type="submit" class="btn btn-success">
                  Envoyer commentaire
                </button>
              </form>
              <br />

              <table class="table">
                <li>
                  <ul
                    class="list-group"
                    message-list
                    v-for="comment in comments"
                    v-bind:key="comment.id"
                  >
                    <li
                      class="list-group-item card-header message-top bg-light font-weight-bold lead"
                    >
                      De: {{ comment.user.first_name }}
                      {{ comment.user.last_name }}
                    </li>
                    <li class="list-group-item list-group-item-action">
                      {{ comment.comment }}
                    </li>
                  </ul>
                </li>
              </table>
              <br />
            </div>
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
      messageId: "",
    };
  },
  async created() {
    const response = await axios.get(`api/comments/` + this.$route.params.id);
    console.log(response.data);
    // this.messages = response.data;
    this.comments = response.data;
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
    addNewComment() {
      axios
        .post("http://localhost:5000/api/newComment", {
          comment: this.comment,
          userId: this.user.id,
          messageId: this.$route.params.id,
        })
        .then((res) => {
          this.comment = "";
          //location.reload();
          // this.getMessages();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.top {
  margin-top: 100px;
}

.message-list {
  margin-top: 100px;
}

.message-user {
  border: solid 1px;
}

.table {
  border: solid 1px;
}

.message-top {
  border-top: solid 1px;
}
</style>