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
        nextBtn() {
            this.questions
        },
        prevBtn() {
           
        }
    },
    mounted() {

        // get question number
        this.questions = this.$store.getters.getQuestions


    },
    components: {

    }
}