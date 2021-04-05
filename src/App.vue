<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/incompleted-corpse">Incomplete Corpses</router-link>
      <router-link to="/completed-corpse">Look at a Corpse</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>
