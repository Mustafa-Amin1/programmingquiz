<template>
  <div id="home">
    <div class="container">
      <b-form  v-if="show" @submit="startQuiz">
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
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
      <button @click="startQuiz" class="btn btn-primary">Start Quiz</button>
    </div>
  </div>
</template>
<script src="./home-page.js"></script>
<style lang="sass" scoped>
</style>