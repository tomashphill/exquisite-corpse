<template>
  <div id="app">
    <div id="nav">
      <div class="link-container"><router-link id="title" to="/">Exquisite Corpse</router-link></div>
      <div class="link-container"><router-link to="/incompleted-corpses">...INCOMPLETED CORPSES</router-link></div>
      <div class="link-container"><router-link to="/completed-corpses">...COMPLETED CORPSES</router-link></div>
    </div>
    <router-view id="view"/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barriecito&family=Gelasio&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');

* {
  margin: 0;
  box-sizing: border-box;
}
body {
  position: absolute;
  width: 100%;
  color: honeydew;
  background-color: rgb(32, 13, 32);
}
#nav {
  background-color: #37102d;
  padding: 0.4em 1em;
  top: 0;
}
#view {
  padding: 1em 1.5em;
  margin: 0 4em;
}
#title {
  font-size: 2em;
  font-family: 'Barriecito', cursive;
}
.link-container > a {
  font-size: 1.2em;
  font-family: 'Gelasio', serif;
  color: inherit;
  text-decoration: none;
}
.link-container {
  display: inline-block; 
  height: 100%;
  padding: 0.2em 0.5em;
}
.link-container:hover {
  background-color: honeydew;
  color: rgb(50, 14, 65);
}
.corpse-name {
  font-family: 'Amatic SC', cursive;
}
p {
  font-size: 1.2em;
  margin-bottom: 0.8em;
}
</style>