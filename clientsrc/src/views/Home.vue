<template>
  <div class="home container-fluid">
    <div class="row align-content-center">
      <div class="col-md-3"></div>
      <img class="col-xs-12 col-md-6" alt="Vue logo" src="../assets/logo.png" />
      <div class="col-md-3"></div>
    </div>
    <div class="row text-center">
      <div class="col-12">
        <h1 class="title">
          <u>Welcome to NewBrew</u>
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="text-warning">Posts:</h2>
      </div>
    </div>
    <posts />
  </div>
</template>

<script>
import posts from "@/components/posts";

export default {
  name: "home",
  components: {
    posts
  },
  computed: {
    posts() {
      let data = this.$store.state.posts;
      return data;
    }
  }
};
</script>

<style scoped>
.title {
  color: rgb(136, 96, 21);
  font-family: "Comfortaa";
}
img {
  border-radius: 50%;
}
</style>
