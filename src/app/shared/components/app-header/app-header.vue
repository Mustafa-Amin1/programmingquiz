<template>
  <section id="nav" class="mb-5">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand
        ><router-link to="/" tag="div" class="logo">Quiz App</router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item> <a role="button" @click="prevBtn">Previous</a> </b-nav-item>
          <b-nav-item>
            <i :class="{quizStatue1:gettQuizStatue}" class="fas fa-info-circle pr-2"></i>
            <i :class="{quizStatue2:gettQuizStatue}" class="quizStatue1 fas fa-check-circle pr-2"></i>
            {{ getCurrentQuestionId ? getCurrentQuestionId : "0" }} /
            {{ getQuestions.length }}</b-nav-item
          >
          <b-nav-item><a role="button" @click="nextBtn(getCurrentQuestionId)">Next</a></b-nav-item>
          <b-nav-item
            >
               <router-link id="resultBtn" to="/result" tag="b-link">Result</router-link>  
            </b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>
<script src="./app-header.js"></script>
<style lang="scss" scoped>
#nav {
  border-bottom: 3px solid #0357a8;
  transition: 0.5s;
  font-size: 1.6rem;
  .logo {
    cursor: pointer;
  }
  &:hover {
    box-shadow: 0px 5px 10px #9fc4e6;
  }
}
.quizStatue1{
  display: none;
}
.quizStatue2{
  display: inline-block;
}
</style>