import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questionIndex:0,
    questionsNumber:10
  },
  mutations: {
    UpdateQuestion(state, value) {
      state.questionIndex = value.questionIndex;
      state.questionsNumber = value.questionsNumber;
    }
  },
  getters: {
    getUpdatedQuestion: state => {
      return  state.questionIndex
    },
    getQuestionsLength :state => {
      return state.questionsNumber
    }
  },
  actions: {
  },
  modules: {
  }
})
