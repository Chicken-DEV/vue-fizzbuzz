<template>
  <div id="app">
    <h1>Fizzbuzz Game</h1>
    <fizzbuzz></fizzbuzz>
    <footer>
      <p>The icons above are designed by Good Ware from <a href="https://www.flaticon.com/packs/transportation-46">Flaticon</a>.</p>
    </footer>
  </div>
</template>

<script>
import Fizzbuzz from './components/Fizzbuzz'
import Buttons from './components/Buttons'

export default {
  name: 'App',
  components: {
    Fizzbuzz,
    Buttons
  }
}
</script>

<style>

html, body {
  height: 100%;
  background-color: #d9ffb3;
}

#app {
  font-family: 'Avenir', Verdana, Tahoma, sans-serif;
  font-size: calc(18px + 0.25vw);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  height: 100%;
  margin-top: 0;
}

h1 {
  font-size: 120%;
  margin-bottom: 0px;
}

footer {
  font-size: 33%;
}

a {
  color: #00B7FF;
}
</style>
