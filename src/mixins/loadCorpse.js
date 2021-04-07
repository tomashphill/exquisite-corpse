export default {
    methods: {
        loadCorpse() {
            console.log("loading image...")
            let url = process.env.VUE_APP_CORPSE_API_URL + "corpses/" + this.name
            fetch(url)
                .then(res=>{return res.blob()})
                .then(blob=>{
                     this.imageURL = URL.createObjectURL(blob);
            })
        }
    },
    data () {
        return {
            imageURL: null
        }
    }
}