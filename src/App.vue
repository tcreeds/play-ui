<template>
  <div id="app" class="container">
    <div id="nav">
      <Navbar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: { Navbar },
  computed: {
    ...mapState([
      'loggedIn'
    ])
  }
}
</script>

<style lang="scss">

#nav {
  padding: 15px 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*{
    box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app > img {
    width: 2em;
    height: 2em;
}
footer{
    margin: 3em 0;
    width: 100%;
    bottom: 0em;
    position: absolute;
}
footer > p{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
button{
    border: 2px solid blue;
    border-radius: 0.3em;
    background: blue;
    color: white;
    font-size: 1em;
    font-family: Helvetica;
    cursor: pointer;
    padding: 0.1 0.3em;
    text-transform: uppercase;
    transition: all 0.25s ease;
}
button:hover{
    background: white;
    color: blue;
}
.display-input{
    border: 1px solid transparent;
}
.display-input:hover, .display-input:focus{
    border: 1px solid black;
}
.section.is-medium{
    padding: 1.5rem 3rem;
}
.card{
    margin-bottom: 1em;
    text-align: left;
}
.link{
  color: blue;
  cursor: pointer;
}
.link:hover{
  text-decoration: underline;
}
.hero{
  margin-bottom: 0.5em;
}
</style>
