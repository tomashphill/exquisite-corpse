<template>
    <div class="corpse-head">
        <input v-model="name" placeholder="Give your corpse a name!"> 
        <span>{{ name }}</span>
        <Canvas :name="name" :bodyPart="0"></Canvas>
    </div>
</template>

<script>
import Canvas from './Canvas.vue'

export default {
    data () {
       return {
          name: ""
       }
    },
    components: {
        Canvas
    }
}
</script>

<style scoped>

</style>