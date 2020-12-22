export default {
    name:'app-header',
    data() {
        return {
            isDisabled:true
        }
    },
    methods: {
        alertFn() {
            this.isDisabled = false
        },
        resultFn() {
            alert('hello')
        }
    },
    watch:{
        isDisabled:function(val){
            console.log(val);
            let btn = document.getElementById('resultBtn')
            if(val == false){
                btn.setAttribute('disabled',val)
                btn.setAttribute('aria-disabled',val)
            }else {
                btn.removeAttribute('disabled')
                btn.removeAttribute('aria-disabled')
            }
        }
    }
}