import { mapGetters } from 'vuex'

export default {
    name:'quize-box',
    data() {
        return {
            currentQuestion: {},
            currentId:null,
            questionsArr:[]
        }
    },
    // props:['questionsArr'],
    methods:{

        nextBtn() {
            if(this.currentId > 0 && this.currentId <= 9){
            this.currentId++
            for(let question of this.questionsArr){
                if(question.id == this.currentId){
                    this.$store.commit('setnextQuestion', { nextQuestion: question  }); 
                    this.$store.commit('setCurrentQuestionId', { currentQuestionId: this.currentId  }); 

                }
            }
            this.$router.push({name:'question',params:{id:this.currentId }})
            }

        },
        prevBtn() {
            if(this.currentId > 1 && this.currentId <= 10){
                this.currentId--
                for(let question of this.questionsArr){
                    if(question.id == this.currentId){
                        this.$store.commit('setnextQuestion', { nextQuestion: question  }); 
                        this.$store.commit('setCurrentQuestionId', { currentQuestionId: this.currentId  }); 

                    }
                }
                this.$router.push({name:'question',params:{id:this.currentId }})
                }
 
        }
    },
    computed:{
            //get current question
            ...mapGetters(['getnextQuestion'])
    },
    mounted() {
        this.currentId = this.$route.params.id
        this.questionsArr =  this.$store.getters.getQuestions
        for(let question of this.questionsArr){
            if(question.id == this.currentId){
                console.log(question);
                this.$store.commit('setnextQuestion', { nextQuestion: question  }); 
                 this.currentQuestion = this.$store.getters.getnextQuestion 
            }
        }
        // if no object route to home page
        if(!this.currentQuestion.id){
           window.onload= this.$router.push({name:'Home'})
           console.log(this.currentQuestion);

        }
    },
    components: {

    }
}