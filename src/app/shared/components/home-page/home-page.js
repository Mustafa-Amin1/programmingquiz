
export default {
    name: 'home-page',
    data() {
        return {
            form: {
                difficulty: null,
                amount: null
            },
            difficulty: [{ text: 'Select difficulty', value: null}, 'easy', 'hard', 'medium'],
            amount: [{ text: 'Select amount', value: null }, '10', '20', '30'],
            show: true,
            questionsArr: []
        }
    },
    methods: {
        startQuiz() {
            //empty answers Array 
            this.$store.commit('setQuestionAnswer', { questionAnswer: {} });
            this.$store.commit('setQuizStatue', { isFinished: false });
            this.$store.commit('setApiOptions', { apiOptions: this.form });
            // get data from api
            this.$store.dispatch("getApiData").then(results => {
                this.questionsArr = results
                let index = 1
                for (let question of this.questionsArr) {
                    if (question.id == index) {
                        this.$store.commit('setnextQuestion', { nextQuestion: question });
                        this.$store.commit('setCurrentQuestionId', { currentQuestionId: question.id });
                        this.$router.push(`question/${index}`)
                    }
                }
            });
        }
    },
} 