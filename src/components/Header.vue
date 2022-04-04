<template>
    <header>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">LOGO</a>
                <div class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="userInput" @keyup="apiMovies(); apiSeries()" >
                    <button class="btn btn-outline-success" @click="apiMovies(); apiSeries()">Search</button>
                </div>
                <h1>{{userInput}}</h1>
            </div>
        </nav>
    </header>
</template>

<script>
import axios from 'axios';

export default {
    name: 'mainHeader',
    data: function(){
        return{
            userInput: '',
            moviesArray: null,
            seriesArray: null
        }
    },
    created() {

    },
    methods: {
        apiMovies() {
            const i = this
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=9196a12671ed6b173a98229ed53f9ab4', { params: {query: this.userInput}} )
            .then((result) => {
                this.moviesArray = result.data.results;
                i.$emit('searchMovies', this.moviesArray)
                console.log(this.moviesArray);
            })
            .catch(
                function(error){
                    console.error(error);
                }
            );
        },
        apiSeries(){
            const i = this
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=9196a12671ed6b173a98229ed53f9ab4', { params: {query: this.userInput}} )
            .then((result) => {
                this.seriesArray = result.data.results;
                i.$emit('searchSeries', this.seriesArray)
                console.log(this.seriesArray);
            })
            .catch(
                function(error){
                    console.error(error);
                }
            );
        }
    },
    computed: {
        
    }
}
</script>

<style lang="scss" scoped>
    header{
        border: 3px solid magenta;
    }
</style>