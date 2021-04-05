<template>
    <div class="rand-corpse">
        <span id="corpse-name">{{ corpse.name }}</span>
        <img :src="corpse.img">
        <button type="button" @click="getRandCorpse">Get a random corpse!</button>
    </div>
</template>

<script>

// getRandCorpse :: () -> [{name: str, img: Image}]
function getRandCorpse () {
    // stub code
    return {
        name: 'Mr. Corpse',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shakahariblog.com%2Fwp-content%2Fuploads%2F2014%2F07%2FSUNFLOWER.jpg&f=1&nofb=1'
    }
}

export default {
  name: 'CompletedCorpse',
  data () {
      return {
          corpse: this.getRandCorpse()
      }
  },
  methods: {
      getRandCorpse
  }
}

</script>

<style scoped>

</style>