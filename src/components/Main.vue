<template>
    <main>
        <h1>MAIN</h1>
        <ul>
            <li v-for="(element, index) in arrayMovies" :key="index">
                <h2></h2>
                <h2></h2>
                <h2></h2>
                <h2></h2>
            </li>
        </ul>
    </main>
</template>

<script>

export default {
    name: 'mainContent',
    data: function(){
        return{

        }
    },
    props: {
        arrayMovies: Array
    },
    created(){

    },
    methods: {
        
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
    main{
        border: 3px solid red;
    }
</style>