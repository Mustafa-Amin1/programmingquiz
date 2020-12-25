import { mapGetters } from 'vuex'
export default {
    name: 'quize-box',
    data() {
        return {
            choosed: '',
            currentQuestion: {},
            currentId: null,
            questionsArr: [],
            answersArr: [],
            myResults: [],
            totalPointes: 0,
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
                }
                storedAnswersNubmer.push(storedAnswer.number)
            }
            if (storedAnswersNubmer.indexOf(answerObj.number) == -1) {
                this.answersArr.push(answerObj)
            }
        },
        nextBtn() {
            let questionId = this.$route.params.id
            // console.log(this.$store.getters.gettQuestionAnswer);
            // this.choosed = this.answersArr[questionId-1].answer
            if (questionId > 0 && questionId <= this.questionsArr.length - 1) {
                questionId++
                for (let question of this.questionsArr) {
                    if (question.id == questionId) {
                        this.$store.commit('setnextQuestion', { nextQuestion: question });
                        this.$store.commit('setCurrentQuestionId', { currentQuestionId: questionId });
                    }
                }
                //handle duplicated route
                if (this.$route.params.id == questionId) {
                    questionId++
                    this.$router.push({ name: 'question', params: { id: questionId } })
                } else {
                    this.$router.push({ name: 'question', params: { id: questionId } })
                }
                if (questionId == this.questionsArr.length) {
                    this.$store.commit('setQuizStatue', { isFinished: true });

                }
            }
        },
        prevBtn() {
            let questionId = this.$route.params.id
            // console.log(this.answersArr[questionId-1].answer);
            // this.choosed = this.answersArr[questionId-1].answer
            if (questionId > 1 && questionId <= this.questionsArr.length) {
                questionId--
                for (let question of this.questionsArr) {
                    if (question.id == questionId) {
                        this.$store.commit('setnextQuestion', { nextQuestion: question });
                        this.$store.commit('setCurrentQuestionId', { currentQuestionId: questionId });
                    }
                }
                this.$router.push({ name: 'question', params: { id: questionId } })
            }

        },
        resultBtn() {
            this.$store.commit('setQuestionAnswer', { questionAnswer: this.answersArr });
            this.$store.commit('setQuizStatue', { isFinished: true });

            //commit result
            for (let rowInfo of this.questionsArr) {
                if (this.answersArr[rowInfo.id - 1]) {
                    this.myResults.push({
                        'The_Question': rowInfo.question,
                        'Correct_Answer': rowInfo.correct_answer,
                        'Your_Answer': !this.answersArr[rowInfo.id - 1] ? "no Answer" : this.answersArr[rowInfo.id - 1].answer,
                        'Points': this.answersArr[rowInfo.id - 1].answer == rowInfo.correct_answer ? 1 : 0,
                        'isCorrect': this.answersArr[rowInfo.id - 1].answer == rowInfo.correct_answer ? true : false,
                    })
                    this.answersArr[rowInfo.id - 1].answer == rowInfo.correct_answer ? this.totalPointes++ : this.totalPointes + 0
                }
            }
            this.$store.commit('setResults', { userResults: this.myResults, score: this.totalPointes });
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

        // handle refresh page if no object or reloading go route to home page
        if (!this.currentQuestion.id) {
            window.onload = this.$router.push({ name: 'Home' })
        }
    },
    beforeUpdate() {
        let questionId = this.$route.params.id
        console.log(questionId);
        if(this.answersArr[questionId-1]){
        this.choosed = this.answersArr[questionId-1].answer

        }
    }

}