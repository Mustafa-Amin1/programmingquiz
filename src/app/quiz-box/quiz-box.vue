<template>
  <div id="quick-box">
    <div class="container">
      <b-card-group deck>
        <div class="d-block w-100">
          <b-card
            header-tag="header"
            footer-tag="footer"
            v-if="getnextQuestion"
          >
            <template #header>
              <h2 class="mb-0">{{ getnextQuestion.question }}</h2>
            </template>
            <div id="card__body">
              
              <div
                class="card__body-item m-auto p-3 w-100"
                v-for="(answer, index) in getnextQuestion.answers"
                :key="index"
              >
              
                <div class="container-fluid">
                  <b-form-group class="row align-items-baseline">
                    <input
                      class="mr-2"
                      type="radio"
                      :id="'radio' + getnextQuestion.id + index"
                      :value="answer"
                      v-model="choosed.answer"
                      @change="radioChoosed(answer, getnextQuestion.id)"
                    />
                    <label :for="'radio' + getnextQuestion.id + index" >
                      {{answer}}
                    </label>
                  </b-form-group>
                </div>
              </div>
            </div>
            <template #footer>
              <div class="row justify-content-start p-2 align-items-center">
                <b-button class="mx-2" @click="prevBtn(getnextQuestion.id)" :disabled="prevBtnDisabled"
                  ><i class="fas fa-angle-left"></i> Previous</b-button
                >
                <b-button class="mx-2" @click="nextBtn(getnextQuestion.id)" :disabled="nextBtnDisabled"
                  ><i class="fas fa-angle-right"></i> Next</b-button
                >
                <b-button class="mx-2" @click="resultBtn(getnextQuestion.id)"
                  ><i class="fas fa-angle-right d-none"></i> Results</b-button
                >
              </div>
            </template>
          </b-card>
        </div>
      </b-card-group>
    </div>
  </div>
</template>
<script src='./quiz-box.js'></script>
<style lang="scss" scoped>
* {
  font-size: 1.6rem !important;
}
.card-deck {
  height: auto;
  max-height: 60vh;
}
#card__body {
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  border-bottom: none;
  .card__body-item {
    border-bottom: 1px solid #ced4da;
  }
}
</style>
