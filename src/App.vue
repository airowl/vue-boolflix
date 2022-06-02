<template>
  <div id="app">
    <Header 
      @searchInput="search"
    />
    <Main 
      :result="resultBySearch"
      :moviesPopular="mostPopularMovies"
    />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
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
      resultBySearch: [],
      mostPopularMovies: null,
    }
  },
  methods: {
    search(userInput){
      this.searchedByUser = userInput;
      this.apiMovies(this.searchedByUser);
      this.apiSeries(this.searchedByUser);
      console.log(this.resultBySearch);
    },
    apiMovies(input) {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=9196a12671ed6b173a98229ed53f9ab4', { params: {query: input}} )
        .then((result) => {
            this.movies = result.data.results;
            console.log(result.data.results)
            this.resultBySearch = [...this.movies];
            console.log(this.resultBySearch)
        }).catch(function(error) {
                console.error(error);
            }
        );
    },
    apiSeries(input){
        axios.get('https://api.themoviedb.org/3/search/tv?api_key=9196a12671ed6b173a98229ed53f9ab4', { params: {query: input}} )
        .then((result) => {
            this.series = result.data.results;
            this.resultBySearch = [...this.series];
        }).catch(function(error){
              console.error(error);
            }
        );
    },
    apiPopular(){
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9196a12671ed6b173a98229ed53f9ab4')
        .then((result) => {
            this.mostPopularMovies = result.data.results;
        }).catch(function(error){
              console.error(error);
            }
        );
    }
  },
  created(){
    this.apiPopular();
  }
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';

</style>
