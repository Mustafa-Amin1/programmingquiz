import axios from 'axios'

export default {
    name:'quize-box',
    data() {
        return {
            questions:[],
            questionIndex: 1,
            inputValue:1
        }
    },
    methods:{
        hello(){
            console.log(this.questions);
        },
        nextBtn(index) {
            if(index >= 0 && index <= 8){
                index++
                this.questionIndex = index
                console.log(index);
                this.$store.commit('UpdateQuestion', { questionIndex: index, questionsNumber:this.questions.length}); 
            }
    
        },
        prevBtn(index) {
            if(index > 0 && index <= 10){
                index--
                this.questionIndex = index
                this.$store.commit('UpdateQuestion', { questionIndex: index, questionsNumber:this.questions.length});
            }
 
        }
    },
    mounted() {
        axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple')
        .then(response => {
            console.log(response.data.results);
             this.questions = response.data.results
            for(let question of this.questions){
                question.answers =[question.correct_answer, ...question.incorrect_answers ]
            }
            return console.log(this.questions);
        })
        .catch(err => {
            if(err){
                return alert('Api has an error')
            }
        })
        // get question number
        this.questionIndex = this.$store.getters.getUpdatedQuestion


    },
    components: {

    }
}