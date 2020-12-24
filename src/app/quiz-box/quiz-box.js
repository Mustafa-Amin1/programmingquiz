import { mapGetters } from 'vuex'

export default {
    name: 'quize-box',
    data() {
        return {
            choosed: [],
            currentQuestion: {},
            currentId: null,
            questionsArr: [],
            answersArr: []
        }
    },
    methods: {
        radioChoosed(answer, number) {
            let answerObj = {
                number: number,
                answer: answer
            }
            let storedAnswersNubmer = []
            for (let storedAnswer of this.answersArr) {
                if (storedAnswer.number === answerObj.number) {
                    storedAnswer.answer = answerObj.answer
                    console.log(storedAnswer.number);
                }
                storedAnswersNubmer.push(storedAnswer.number)
            }
            if (storedAnswersNubmer.indexOf(answerObj.number) == -1) {
                this.answersArr.push(answerObj)

            }
        },
        nextBtn() {
            let questionId =this.$route.params.id
            if (questionId > 0 && questionId <= this.questionsArr.length - 1) {
                questionId++
                for (let question of this.questionsArr) {
                    if (question.id == questionId) {
                        this.$store.commit('setnextQuestion', { nextQuestion: question });
                        this.$store.commit('setCurrentQuestionId', { currentQuestionId: questionId });
                    }
                }
                //handle duplicated route
                if( this.$route.params.id == questionId ){
                    questionId++
                    this.$router.push({ name: 'question', params: { id: questionId } })
                }else{
                    this.$router.push({ name: 'question', params: { id: questionId } })

                }
            }
        },
        prevBtn() {
            let questionId =this.$route.params.id
            console.log(questionId );
            if (questionId > 1 && questionId <= this.questionsArr.length) {
                questionId--
                for (let question of this.questionsArr) {
                    if (question.id == questionId) {
                        this.$store.commit('setnextQuestion', { nextQuestion: question });
                        this.$store.commit('setCurrentQuestionId', { currentQuestionId: questionId });

                    }
                }
                console.log(questionId);
                this.$router.push({ name: 'question', params: { id: questionId } })
            }

        },
        resultBtn() {
            console.log(this.answersArr);
            this.$store.commit('setQuestionAnswer', { questionAnswer: this.answersArr });
            this.$store.commit('setQuizStatue', { isFinished: true });
            this.$router.push({ name: 'result' })
        }
    },
    computed: {
        //get current question
        ...mapGetters(['getnextQuestion']),

    },
    mounted() {
        this.currentId = this.$route.params.id
        this.questionsArr = this.$store.getters.getQuestions
        for (let question of this.questionsArr) {
            if (question.id == this.currentId) {
                this.$store.commit('setnextQuestion', { nextQuestion: question });
                this.currentQuestion = this.$store.getters.getnextQuestion
            }
        }

        // if no object or reloading route to home page
        if (!this.currentQuestion.id) {
            window.onload = this.$router.push({ name: 'Home' })
            console.log(this.currentQuestion);

        }
    },
    components: {

    }
}