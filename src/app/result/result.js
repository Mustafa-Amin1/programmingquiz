
import { mapGetters } from 'vuex'

export default {
    name: 'result',
    data() {
        return {
            fields: ['The_Question', 'Correct_Answer', 'Your_Answer', 'Points'],
            results: [],
            isCorrect: true
        }
    },
    computed: {
        ...mapGetters(['getResults']),
    },
    mounted() {
        //get results
        this.results = this.$store.getters.getResults.userResults
        console.log(this.$store.getters.getResults.userResults);
        console.log(this.results);
    }
}