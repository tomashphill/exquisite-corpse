export default {
    methods: {
        submitImg (canvas) {
            let url = process.env.VUE_APP_CORPSE_API_URL + "create-corpse/" + this.name
            let options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ data: canvas.toDataURL() })
            }
            fetch(url, options)
                .then(res => res.json())
                .then(res => console.log(res));
        }
    }
}