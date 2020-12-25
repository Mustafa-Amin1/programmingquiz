import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userResults: [],
    questions: [],
    questionLength: null,
    nextQuestion: {},
    currentQuestionId: 0,
    apiOptions: {},
    questionAnswer: [],
    isFinished: false,
    score: 0
  },
  mutations: {
    setApiOptions(state, value) {
      state.apiOptions = value.apiOptions
    },
    setQuestions(state, value) {
      state.questions = value
    },
    setQuestionLength(state, value) {
      state.questionLength = value.questionLength
    },
    setnextQuestion(state, value) {
      state.nextQuestion = value.nextQuestion
    },
    setCurrentQuestionId(state, value) {
      state.currentQuestionId = value.currentQuestionId
    },
    setQuestionAnswer(state, value) {
      state.questionAnswer = value.questionAnswer
    },
    setQuizStatue(state, value) {
      state.isFinished = value.isFinished
    },
    setResults(state, value) {
      state.userResults = value.userResults
      state.score = value.score
    },
    // reset state when back to home
    RESET_STATE(state) {
      state.userResults = [],
        state.questions = [],
        state.questionLength = null,
        state.nextQuestion = {},
        state.currentQuestionId = 0,
        state.apiOptions = {},
        state.questionAnswer = [],
        state.isFinished = false,
        state.score = 0
    }
  },
  getters: {
    getapiOptions: state => {
      return state.apiOptions
    },
    getQuestions: state => {
      return state.questions
    },
    getQuestionsLength: state => {
      return state.questionLength = state.questions.length
    },
    getnextQuestion: state => {
      return state.nextQuestion
    }
    ,
    getCurrentQuestionId: state => {
      return state.currentQuestionId
    },
    gettQuestionAnswer: state => {
      return state.questionAnswer
    },
    gettQuizStatue: state => {
      return state.isFinished
    },
    getResults: state => {
      return {
        userResults: state.userResults,
        score: state.score,
      }
    }
  },
  actions: {
    getApiData(store) {
      let apiOptions = store.state.apiOptions
      return axios.get(`https://opentdb.com/api.php?amount=${apiOptions.amount}&category=18&difficulty=${apiOptions.difficulty}&type=multiple`)
        .then(response => {
          for (let [index, result] of response.data.results.entries()) {
            result.id = index + 1
            //concat incorrect and correct answers
            result.answers = [result.correct_answer, ...result.incorrect_answers].sort(() => Math.random() - 0.5)
          }
          store.commit('setQuestions', response.data.results)
          return store.state.questions
        })
    },
    // reset state
    resetState({ commit }) {
      commit('RESET_STATE');
    }

  },

})



