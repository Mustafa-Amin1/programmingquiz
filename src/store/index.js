import Vue from 'vue'
// import { axios } from 'vue/types/umd'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    questions:[],
    questionLength:null,
    nextQuestion:{},
    currentQuestionId:0,
    apiOptions:{}
    // questionIndex:null,
    // totalQuestions:null
  },
  mutations: {
    setApiOptions(state, value) {
      state.apiOptions = value
    },
    setQuestions(state, value) {
      state.questions = value
    },
    setQuestionLength(state, value) {
      state.questionLength = value.questionLength
    },
    setnextQuestion( state, value) {
      state.nextQuestion = value.nextQuestion
    },
    setCurrentQuestionId( state, value) {
      state.currentQuestionId = value.currentQuestionId
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
      return  state.questionLength = state.questions.length
    },
    getnextQuestion: state => {
      return state.nextQuestion
    }
    ,
    getCurrentQuestionId: state => {
      return state.currentQuestionId
    }

  },
  actions: {
     async getApiData (store) {
       let apiOptions = store.state.apiOptions
       console.log(apiOptions);
       console.log(`https://opentdb.com/api.php?amount=${apiOptions.amount}&category=18&difficulty=${apiOptions.difficulty}&type=multiple`);
        return await axios.get(`https://opentdb.com/api.php?amount=${apiOptions.amount}&category=18&difficulty=${apiOptions.difficulty}&type=multiple`)
          .then( response => {
             for (let [index, result] of response.data.results.entries()) {
              result.id = index+1
              result.answers =[result.correct_answer, ...result.incorrect_answers ]
            }
            store.commit('setQuestions', response.data.results)
            return store.state.questions
          })
      }
    
  },

})


// export default new Vuex.Store({
//   state: {
//     questionIndex:0,
//     questionsNumber:10
//   },
//   mutations: {
//     UpdateQuestion(state, value) {
//       state.questionIndex = value.questionIndex;
//       state.questionsNumber = value.questionsNumber;
//     }
//   },
//   getters: {
//     getUpdatedQuestion: state => {
//       return  state.questionIndex
//     },
//     getQuestionsLength :state => {
//       return state.questionsNumber
//     }
//   },
//   actions: {
//   },
//   modules: {
//   }
// })


