<template>
    <div>
        <div class="description">
            <p>To draw, just click and drag on the paper at the bottom.</p>
            <p>This is the body of the corpse. Remember, you can't draw lower than the dotted line.</p>
            <p>Give the next drawer a hint by drawing a little past the fold. A body can be ANYTHING: Big, small, round, square, human, insect, arms, no arms, and on and on.</p>
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
    components: {
        Canvas
    },
    methods: {
        async submitCorpseBody (canvas) {
            this.updateImg(canvas)
            this.$router.push('/incompleted-corpses')
        }
    },
    mixins: [loadCorpse, updateImg],
    beforeMount () {
        this.loadCorpse()
    },
}
</script>

<style scoped>
.description {
    width: 40%;
    min-width: 400px;
    margin-right: 2em;
}
</style>