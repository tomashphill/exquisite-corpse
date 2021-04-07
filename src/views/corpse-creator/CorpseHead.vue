<template>
    <div class="corpse-head">
        <div class="description">
            <p>To draw, just click and drag on the paper at the bottom. You can't draw lower than the dotted line</p>
            <p>This should be the head of your corpse. Draw anything you'd like, even if it doesn't resemble a head. Make sure you draw a little past the fold to give the next drawer a hint to how the head should connect to the body.</p>
            <p>Also, your corpse needs unique a name! Give it one. Click FINISH when you're done.</p>
        </div>
        <input 
            id="namer"
            :class="{ 'invalid-name': nameTaken }"
            v-model="name"
            @blur="isNameTaken" 
            placeholder="Give your corpse a name!"> 
        <Canvas :name="name" :bodyPart="0" @submit="submitCorpseHead"></Canvas>
    </div>
</template>

<script>
import Canvas from './Canvas.vue'
import isNameTaken from '@/mixins/isNameTaken.js'
import submitImg from '@/mixins/submitImg.js'

export default {
    data () {
       return {
          name: ""
       }
    },
    methods: {
        async submitCorpseHead (canvas) {
            await this.isNameTaken()
            if (this.name !== '' && !this.nameTaken) {
                this.submitImg(canvas)
                this.$router.push('/incompleted-corpses')
            }
        }
    },
    components: {
        Canvas
    },
    mixins: [isNameTaken, submitImg]
}
</script>

<style scoped>

.invalid-name {
    background-color: red;
}

.corpse-head {
    width: 90%;
    padding: 1em;
    margin: 0 auto;
}
.description {
    width: 40%;
    min-width: 400px;
    margin-right: 2em;
}
#namer {
    width: 20em;
    font-size: 1.2em;
    margin: 0.8em 0;
}

</style>