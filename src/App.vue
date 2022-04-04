<template>
  <div id="app">
    <Header  @searchMovies="search" @searchSeries="search"/>
    <Main 
      :result="resultBySearch"
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
      movies: null,
      series: null,
      resultBySearch: null
    }
  },
  methods: {
    search(moviesArray, seriesArray){
      this.movies = moviesArray;
      this.series = seriesArray
      this.resultBySearch = this.movies.concat(this.series)
    console.log(this.resultBySearch);
      
    }
  },
  created(){

}
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';

</style>
