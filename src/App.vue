<template>
  <div id="app">
    <Header 
      @searchInput="search"
    />
    <Main 
      :moviesPopular="mostPopularMovies"
      v-if="isSearch === false"
    />
    <MainSearch 
      :result="resultBySearch"
      v-else
    />
    <!--<Footer />-->
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import MainSearch from './components/MainSearch.vue'
//import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    MainSearch
    //Footer
  },
  data: function(){
    return{
      searchedByUser: '',
      //movies: null,
      //series: null,
      resultBySearch: null,
      mostPopularMovies: null,
      isSearch: false
    }
  },
  methods: {
    search(userInput){
      this.searchedByUser = userInput;
      this.apiMultiSearch(this.searchedByUser);
      //this.apiMovies(this.searchedByUser);
      //this.apiSeries(this.searchedByUser);
    },
    //apiMovies(input) {
    //    axios.get('https://api.themoviedb.org/3/search/movie?api_key=9196a12671ed6b173a98229ed53f9ab4', { params: {query: input}} )
    //    .then((result) => {
    //        this.movies = result.data.results;
    //        console.log(result.data.results)
    //        this.resultBySearch = [...this.movies];
    //        console.log(this.resultBySearch)
    //    }).catch(function(error) {
    //            console.error(error);
    //        }
    //    );
    //},
    //apiSeries(input){
    //    axios.get('https://api.themoviedb.org/3/search/tv?api_key=9196a12671ed6b173a98229ed53f9ab4', { params: {query: input}} )
    //    .then((result) => {
    //        this.series = result.data.results;
    //        this.resultBySearch = [...this.series];
    //    }).catch(function(error){
    //          console.error(error);
    //        }
    //    );
    //},
    apiMultiSearch(input){
        axios.get('https://api.themoviedb.org/3/search/multi?api_key=9196a12671ed6b173a98229ed53f9ab4', { params: {query: input}} )
        .then((result) => {
            this.resultBySearch = result.data.results;
            this.isSearch = true
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
    console.log(!this.resultBySeach);
  }
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';

</style>
