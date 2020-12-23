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
        // nextBtn(index) {
        //     if(index >= 0 && index <= 8){
        //         index++
        //         this.questionIndex = index
        //         console.log(index);
        //         this.$store.commit('UpdateQuestion', { questionIndex: index, questionsNumber:this.questions.length}); 
        //     }
    
        // },
        // prevBtn(index) {
        //     if(index > 0 && index <= 10){
        //         index--
        //         this.questionIndex = index
        //         this.$store.commit('UpdateQuestion', { questionIndex: index, questionsNumber:this.questions.length});
        //     }
 
        // }
    },
    computed:{
        ...mapGetters(['getnextQuestion']),
        ...mapGetters(['getQuestionsLength']),
        ...mapGetters(['getCurrentQuestionId']),
        
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