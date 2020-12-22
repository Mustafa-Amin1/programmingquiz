<template>
  <section id="nav" class="mb-5">
  <b-navbar toggleable="lg" type="dark"  variant="dark">
    <b-navbar-brand >Quiz App</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item > <a role="button">Previous</a> </b-nav-item>
        <b-nav-item ><i class="fas fa-info-circle pr-2"></i> <i class="fas fa-check-circle pr-2"></i> 1 / 20</b-nav-item>
        <b-nav-item ><a role="button" @click="alertFn">Next</a></b-nav-item>
        <b-nav-item ><b-link id="resultBtn" role="button" :disabled="isDisabled" @click="resultFn">Result</b-link></b-nav-item>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  </section>
</template>
<script src="./app-header.js"></script>
<style lang="scss" scoped>
#nav {
border-bottom: 3px solid #0357a8;
transition: .5s;
font-size: 1.6rem;
&:hover{
    box-shadow: 0px 5px 10px #9fc4e6;
}
}
</style>