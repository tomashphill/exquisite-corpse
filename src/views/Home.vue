<template>
  <div class="home">
    <img src="https://www.functionalstone.com/cv/images/exquisite-corpse-game(21).jpg">
    <div class="content">
      <p>Welcome!</p>
      <p>This is a small web application that mimics the well-known drawing game/activity called Exquisite Corpse.</p>
      <p>The rules are simple, and require at least 3 people. Take a piece of paper, and fold it three-ways. The first person should draw a head in the top third of the paper, which should be neatly subdivided by the folds. A head of what, you ask? That’s up to the drawer! The imagination is the limit, anything goes, draw whatever comes to mind. Once that person is done drawing, they should fold the top-third of the paper so as to hide the head they just drew from the second person. The second person will now draw a body in the middle-third of the paper. Hopefully the first person drew a little over the top-third boundary to give the second person a hint of how the body should flow from the head. Once done, the second person should fold the paper to hide the head and body from the third person. The third person should now draw the legs.</p>
      <p>After all this, the exquisite corpse is complete! Unfold the paper and gawk at the creation!</p>
      <p><router-link class="create" to="/corpse-head">Click here to create a corpse!</router-link></p>
      <p>Or help draw the bodies/legs of other corpses in "Incomplete Corpses".</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  width: 60%;
  min-width: 400px;
}
.create {
  padding: 0.2em;
  background-color: honeydew;
  color: rgb(32, 13, 32);
  text-decoration: none;
}
.create:hover {
  color: #a02a2a;
  background-color: rgb(32, 13, 32);
}
content {
  float: left;
}
img {
  padding: 1em;
  float: right;
  height: 20em;
}
</style>
