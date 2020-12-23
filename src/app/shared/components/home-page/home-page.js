

export default {
    name:'home-page',
    data() {
        return {
            form: {

                difficulty: null,
                amount:null
              },
              difficulty: [{ text: 'Select difficulty', value: 'hard' }, 'easy', 'hard', 'medium'],
              amount: [{ text: 'Select amount', value: '10' }, '10', '20', '30'],

              show: true
        }
    },
    // props:['questionsArr'],
    methods: {
        
        startQuiz() {

           this.$store.commit('setApiOptions', { apiOptions: this.form  }); 
           this.$store.dispatch("getApiData").then(results => {
            this.questionsArr = results
            console.log(results);
          });
            // let index= 1
            // for(let question of this.questionsArr){
            //     if(question.id == index){
            //         this.$store.commit('setnextQuestion', { nextQuestion: question  }); 
            //         this.$store.commit('setCurrentQuestionId', { currentQuestionId: question.id   }); 
            //         this.$router.push(`question/${index}`)

            //     }
            // }

        }

    },
    created: function () {
        this.$store.dispatch("getApiData").then(results => {
            this.questions = results
            console.log(results);
        });

        //  console.log(this.$store.getters.getQuestions);
      },
} 