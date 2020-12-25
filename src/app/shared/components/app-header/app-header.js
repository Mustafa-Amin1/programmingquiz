import { mapGetters } from "vuex";

export default {
    name: 'app-header',
    data() {
        return {
        }
    },
    methods: {
        nextBtn() {
            let questionId = this.$route.params.id
            if (questionId > 0 && questionId <= this.getQuestions.length - 1) {
                questionId++
                for (let question of this.getQuestions) {
                    if (question.id == questionId) {
                        this.$store.commit('setnextQuestion', { nextQuestion: question });
                        this.$store.commit('setCurrentQuestionId', { currentQuestionId: questionId });
                    }
                }
                this.$router.push({ name: 'question', params: { id: questionId } })
            }
        },
        prevBtn() {
            let questionId = this.$route.params.id
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
    computed: {
        ...mapGetters(['getQuestions']),
        ...mapGetters(['getCurrentQuestionId']),
        ...mapGetters(['gettQuizStatue']),
    },
}