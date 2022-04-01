<template>
    <header>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">LOGO</a>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="userInput">
                    <button class="btn btn-outline-success" type="submit" @click='apiMovies()'>Search</button>
                </form>
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
            moviesArray: null
        }
    },
    created() {
    },
    methods: {
        apiMovies() {

            axios.get('https://api.themoviedb.org/3/search/movie?api_key=&', { params: {query: this.userInput}} )
            .then((result) => {
                this.moviesArray = result.data.results;
                console.log(this.moviesArray);
            })
            .catch(
                console.error('error')
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