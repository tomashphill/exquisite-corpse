<template>
    <div>
        <div class="description">
            <p>To draw, just click and drag on the paper to the right.</p>
            <p>This is the last part of the corpse. Draw whatever you'd like. Legs, wheels, claws, tentacles, or even another (maybe upside-down) head!</p>
        </div>
        <Canvas class="editor" :imageURL="imageURL" @submit="submitCorpseBody"></Canvas>
    </div>
</template>

<script>
import Canvas from './Canvas.vue'
import loadCorpse from '@/mixins/loadCorpse.js'
import updateImg from '@/mixins/updateImg.js'

export default {
    data () {
        return {
            name: this.$route.params.name
        }
    },
    methods: {
        async submitCorpseBody (canvas) {
            this.updateImg(canvas)
            this.$router.push('/incompleted-corpses')
        }
    },
    beforeMount () {
        this.loadCorpse()
    },
    components: {
        Canvas
    },
    mixins: [loadCorpse, updateImg],
}

</script>

<style scoped>
.description {
    width: 40%;
    min-width: 400px;
    margin-right: 2em;
}
</style>