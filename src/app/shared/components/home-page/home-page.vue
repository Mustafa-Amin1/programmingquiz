<template>
  <div id="home">
    <div class="container">
      <b-form  v-if="show" @submit.prevent="startQuiz">
         <b-form-group id="input-group-1" label="Choose difficulty:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.difficulty"
            :options="difficulty"
            required
          ></b-form-select>
        </b-form-group>
        <b-form-group id="input-group-2" label="Choose amount:" label-for="input-2">
          <b-form-select
            id="input-2"
            v-model="form.amount"
            :options="amount"
            required
          ></b-form-select>
        </b-form-group>


        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>
<script src="./home-page.js"></script>
<style lang="scss" scoped>
*{
  font-size: 1.7rem
}
</style>