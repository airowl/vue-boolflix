<template>
    <header>
        <nav class="navbar bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-danger fs-1 fw-bolder">BOOLFLIX</a>
                <div class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="userInput" @keyup.enter="$emit('searchInput', userInput)">
                    <button class="btn btn-light" @click="$emit('searchInput', userInput)">Search</button>
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

</style>