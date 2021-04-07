<template>
    <div id="corpse-creator">
        <!-- <div id="canvas-settings">
            <input type="radio" id="draw" value="draw" v-model="radioPicked">
            <label for="draw">Draw</label>
            <input type="radio" id="erase" value="erase" v-model="radioPicked">
            <label for="erase">Erase</label>
        </div> -->
        <div v-show="imageURL !== null" id="sketchpad-container" :style="hidingStyle">
            <canvas id="sketchpad" :width="width" :height="height" ref="canvas" :style="canvasShift"></canvas>
            <div class="clipper" :style="clipperStyle"></div>
        </div>
        <button type="button" @click="onSubmit">FINISH</button>
    </div>
</template>

<script>
import Atrament from 'atrament'

const WIDTH = 600
const HEIGHT = 800

let clippedAmount = HEIGHT * (2/3) - 20

export default {
    name: 'Canvas',
    data () {
        return {
            width: WIDTH,
            height: HEIGHT,
            canvas: null,
            sketchpad: null,
            radioPicked: 'draw',
            clipperStyle: {
                width: WIDTH + 'px',
                height: clippedAmount + 'px',
                top: HEIGHT - clippedAmount + 'px'
            }
        }
    },
    watch: {
        radioPicked (val) {
            this.sketchpad.mode = val
        },
        imageURL () {
            let image = new Image()
            image.src = this.imageURL
            image.onload = () => {
                let ctx = this.canvas.getContext('2d')
                ctx.drawImage(image, 0, 0)
            }
        }
    },
    props: {
        bodyPart: Number,
        name: String,
        imageURL: String
    },
    computed: {
        hidingStyle () {
            if (this.$router.currentRoute.name === 'CorpseBody') {
                return {
                    height: HEIGHT * (2/3) + 'px',
                    overflow: 'hidden'
                }
            } else if (this.$router.currentRoute.name === 'CorpseLegs') {
                return {
                    height: HEIGHT * (1/3) + 20 + 'px',
                    overflow: 'hidden'
                }
            } else {
                return {}
            }
        },
        canvasShift () {
            if (this.$router.currentRoute.name === 'CorpseBody') {
                return {
                    transform: `translate(0, -${HEIGHT * (1/3)}px)`,
                }
            } else if (this.$router.currentRoute.name === 'CorpseLegs') {
                return {
                    transform: `translate(0, -${HEIGHT * (2/3) - 20}px)`,
                }
            } else {
                return {}
            }  
        }
    },
    methods: {
        onSubmit () {
            this.$emit('submit', this.canvas)
        }
    },
    mounted () {
        this.canvas = this.$refs.canvas
        this.sketchpad = new Atrament(this.canvas)
        this.sketchpad.mode = 'draw'
    },
    destroyed () {
        let url = process.env.VUE_APP_CORPSE_API_URL + "close/" + this.name
        fetch(url)
            .then(r => r.json())
            .then(console.log)
    }
}
</script>

<style scoped>
#sketchpad {
    border-radius: 1px;
    background-image: linear-gradient(hsla(0,0%,100%,1),
                                        hsla(0,0%,100%,.9) 33%,
                                        hsla(0,0%,100%,1) 33%,
                                        hsla(0,0%,100%,.9) 67%,
                                        hsla(0,0%,100%,1) 67%,
                                        hsla(0,0%,100%,.9));
    box-shadow: inset 0 0 2.1em 0.1em hsl(0deg 0% 0% / 5%), 
                inset 0 0 3em hsl(0deg 0% 0% / 5%), 
                0 0.1em 0.25em hsl(0deg 0% 0% / 18%);
    z-index: 0;
}
#sketchpad:after,
#sketchpad:before {
    bottom: .1em;
    box-shadow: 0 0 .5em .5em hsla(0,0%,0%,.25);
    content: '';
    height: 3em;
    position: absolute;
    width: 80%;
    z-index: -1;
    display: block;
}
#sketchpad:after {
    right: 1em;
    transform: rotate(3deg);
    transform-origin: 100% 100%;
}
#sketchpad:before {
    left: 1em;
    transform: rotate(-3deg);
    transform-origin: 0% 100%;
}
#canvas-settings {
    display: inline-block;
}
#sketchpad-container {
    position: relative;
}
.clipper {
    border-top: 4px dashed rgb(151, 12, 54);
    position: absolute;
    z-index: 1;
}
button {
    font-family: 'Gelasio', serif;
    padding: 1em;
    margin: 0.5em;
    border-radius: 50%;
    cursor: pointer;
}
</style>