<template>
    <div>
    <canvas></canvas>
    <button type="button" @click="isNameTaken">Finished!</button>
    </div>
</template>

<script>

// isNameTaken :: CorpseHead => this.name -> Promise<bool>
async function isNameTaken () {
    return fetch(`http://127.0.0.1:8000/corpse-name-taken/${this.name}`, {mode: 'cors'})
        .then(r => r.json())
        .then(console.log)
}

export default {
    name: 'Canvas',
    methods: {
        isNameTaken
    },
    props: {
        bodyPart: Number,
        name: String
    }
}

</script>

<style scoped>

</style>