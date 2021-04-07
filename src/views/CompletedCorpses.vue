<template>
    <div class="rand-corpse">
        <div class="desc">
            <span class="corpse-name">{{ name }}</span>
            <button type="button" @click="getRandomCorpse">Get a random corpse!</button>
        </div>
        <div>
            <img :src="imageURL">
        </div>
    </div>
</template>

<script>
import loadCorpse from '@/mixins/loadCorpse.js'

// getRandCorpse :: () -> Promise<str>
function getRandomCorpse () {
    let url = process.env.VUE_APP_CORPSE_API_URL + "random-complete-corpse/"
    fetch(url)
        .then(r => r.json())
        .then(d => (this.name = d))
}

export default {
  name: 'CompletedCorpses',
  data () {
      return {
          name: ''
      }
  },
  watch: {
      name () {
          this.loadCorpse()
      }
  },
  methods: {
      getRandomCorpse
  },
  mounted () {
      this.getRandomCorpse()
  },
  mixins: [loadCorpse]
}

</script>

<style scoped>
.corpse-name {
    display: inline-block;
    margin: 0.4em 0;
    font-size: 4em;
}

img {
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
.desc {
    width: 600px;
    text-align: center;
}
.corpse-name {
    position: relative;
    vertical-align: top;
    display: inline-block;
}
button {
    font-family: 'Gelasio', serif;
    position: relative;
    margin: 1em;
    top: 2.1em;
    padding: 1em;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
}
</style>