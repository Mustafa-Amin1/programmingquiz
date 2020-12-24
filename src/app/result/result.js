
import { mapGetters } from 'vuex'

export default {
    name:'result',
    data() {
        return {
            answers:[]
        }
    },
    computed: {
        ...mapGetters(['gettQuestionAnswer']),

    },
    methods: {

    },
    mounted() {
       console.log(this.$store.getters.gettQuestionAnswer); 
    }
}