import { mapGetters } from 'vuex'

export default {
    name: 'result',
    data() {
        return {
            fields: ['The_Question', 'Correct_Answer', 'Your_Answer', 'Points'],
            results: [],
            isCorrect: true,
        }
    },
    computed: {
        ...mapGetters(['getResults']),
    },
    mounted() {
        //get results
        this.results = this.$store.getters.getResults.userResults
        // handle refresh page if no object or reloading go route to home page
        this.results = this.$store.getters.getResults.userResults

    },
}