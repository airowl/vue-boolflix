<template>
    <header>
        <nav class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand">LOGO</a>
                <div class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="userInput" @keyup.enter="$emit('searchInput', userInput)">
                    <button class="btn btn-outline-success" @click="apiMovies(); apiSeries()">Search</button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'mainHeader',
    data: function(){
        return{
            userInput: ''
        }
    },
    created() {

    },
    methods: {
        
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