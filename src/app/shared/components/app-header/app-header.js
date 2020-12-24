import { mapGetters } from "vuex";

export default {
    name:'app-header',
    data() {
        return {
            isDisabled:true,
        }
    },
    props:['questionsLength'],
    methods: {
        nextBtn() {
            let questionId =this.$route.params.id
            if (questionId > 0 && questionId <= this.getQuestions.length - 1) {
                questionId++
                for (let question of this.getQuestions) {
                    if (question.id == questionId) {
                        this.$store.commit('setnextQuestion', { nextQuestion: question });
                        this.$store.commit('setCurrentQuestionId', { currentQuestionId: questionId });
                    }
                }
                //handle duplicated route
                // if( this.$route.params.id == questionId ){
                    // this.$router.push({ name: 'question', params: { id: questionId++ } })
                // }else{
                    this.$router.push({ name: 'question', params: { id: questionId } })
                // }
            }

        },
        prevBtn() {
            let questionId =this.$route.params.id
            if (questionId > 1 && questionId <= this.getQuestions.length) {
                questionId--
                for (let question of this.getQuestions) {
                    if (question.id == questionId) {
                        this.$store.commit('setnextQuestion', { nextQuestion: question });
                        this.$store.commit('setCurrentQuestionId', { currentQuestionId: questionId });
                    }
                }
            this.$router.push({ name: 'question', params: { id: questionId } })          
        }

        },
    },
    computed:{
        ...mapGetters(['getnextQuestion']),
        ...mapGetters(['getQuestions']),
        ...mapGetters(['getCurrentQuestionId']),
        ...mapGetters(['gettQuizStatue']),
        
    },
    watch:{
        isDisabled:function(val){
            console.log(val);
            let btn = document.getElementById('resultBtn')
            if(val == false){
                btn.setAttribute('disabled',val)
                btn.setAttribute('aria-disabled',val)
            }else {
                btn.removeAttribute('disabled')
                btn.removeAttribute('aria-disabled')
            }
        }
    },
    mounted() {
        if(this.$route.params.id){
            // this.$store.commit('setCurrentQuestionId', { currentQuestionId: this.$route.params.id  }); 
        }
        // this.questionIndex = this.$store.getters.getUpdatedQuestion

    }
}