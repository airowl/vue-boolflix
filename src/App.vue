<template>
  <div id="app">
    <Header  @searchUser="search"/>
    <Main 
      :arrayMovies="movies"
    />
    <Footer />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  data: function(){
    return{
      searchedByUser: '',
      movies: null
    }
  },
  methods: {
    search(moviesArray){
      this.movies = moviesArray
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';

</style>
