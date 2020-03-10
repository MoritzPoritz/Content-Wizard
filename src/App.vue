<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <div id="footer"></div>
  </div>
</template>

<style>
body {
  height: 100%;
  width: 100vw;
  margin: 0;
  /*overflow-x: hidden;
  overflow-y: hidden;*/
}
h1, h2, h3 {
  font-size: 1em;
  font-weight: normal;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: white;
  height: 100%;
  width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  
}

#nav a.router-link-exact-active {
  
}

#footer {
  
}
</style>
