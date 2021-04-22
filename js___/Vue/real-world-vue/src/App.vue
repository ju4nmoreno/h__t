<template>
  <div id="nav">
    <router-link to="/">List</router-link>|
    <router-link to="/event">Show Event #1</router-link>|
    <router-link to="/event/create">Event Create</router-link>
  </div>

  <BaseIcon />
  <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>

