export default {
    methods: {
        // isNameTaken :: CorpseHead => this.name -> Promise<bool>
        async isNameTaken () {
            if (this.name === '') {
                return false
            }
            let url = process.env.VUE_APP_CORPSE_API_URL + "corpse-name-taken/" + this.name
            return fetch(url)
                .then(r => r.json())
                .then(b => this.nameTaken = b)
                .then(console.log)
        }
    },
    data () {
        return {
            nameTaken: false
        }
    }
}