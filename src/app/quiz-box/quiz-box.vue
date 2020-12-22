<template>
  <div id="quizBox">
    <div class="container">
        <b-card-group deck>
            <b-card header-tag="header" footer-tag="footer">
                <template #header>
                    <h2 class="mb-0">Question ?</h2>
                </template>
                <!-- <b-card-text>form</b-card-text> -->
                <div id="card__body">
                    <div class=" card__body-item m-auto p-3">
                        <input class="" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                        <label class="form-check-label pl-2" for="exampleRadios1">
                            Default radio
                        </label>
                    </div>
                    <div class="card__body-item   m-auto p-3">
                        <input class="" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                        <label class="form-check-label pl-2" for="exampleRadios1">
                            Default radio
                        </label>
                    </div>
                    <div class="card__body-item   m-auto p-3">
                        <input class="" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                        <label class="form-check-label pl-2" for="exampleRadios1">
                            Default radio
                        </label>
                    </div>
                </div>
                <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
                <template #footer>
                    <div class="row justify-content-start p-2 align-items-center">
                        <b-button class="mx-2"><i class="fas fa-angle-left"></i> Previous</b-button>
                        <b-button class="mx-2"><i class="fas fa-angle-right"></i> Next</b-button>
                    </div>
                </template>
            </b-card>
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