<template>
  <div id="quizBox">
    <div class="container">
        <b-card-group deck>
        <div v-for="(question, index) in questions" :key="index" class="d-block w-100">
            <b-card header-tag="header" footer-tag="footer" v-if="index==questionIndex">

                <template #header>
                    <h2 class="mb-0">{{question.question}}</h2>
                </template>
                <!-- <b-card-text>form</b-card-text> -->
                <div id="card__body">
                    <div class=" card__body-item m-auto p-3 w-100" v-for="(answer, index) in question.answers" :key="index">
                        <input class="" type="radio" name="exampleRadios" id="exampleRadios1" :value="inputValue+1" checked>
                        <label class="form-check-label pl-2" for="exampleRadios1">
                            {{answer}}
                        </label>
                    </div>
               
                </div>
                <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
                <template #footer>
                    <div class="row justify-content-start p-2 align-items-center">
                        <b-button class="mx-2" @click="prevBtn()"><i class="fas fa-angle-left"></i> Previous</b-button>
                        <b-button class="mx-2" @click="nextBtn()"><i class="fas fa-angle-right" ></i> Next</b-button>
                    </div>
                </template>
            </b-card>
        </div>
        </b-card-group>
    </div>
  </div>
</template>
<script src="./quiz-box.js"></script>
<style lang="scss" scoped>
* {
  font-size: 1.6rem !important;
}
.card-deck{
    height: auto;
    max-height: 60vh;
}
#card__body{
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    border-bottom:none;
    .card__body-item{
        
        border-bottom: 1px solid #ced4da;
    }
}
</style>