<template>
    <main>
        <h1>MAIN</h1>
        <ul>
            <li v-for="(element, index) in result" :key="index">
                <p>{{element.title}}</p>
                <p>{{element.original_title}}</p>
                <p>
                    {{element.original_language}}
                    <country-flag :country="element.original_language" size="normal"/>
                </p>
                <font-awesome-icon icon="fa-solid fa-star" v-for="(element, index) in voteIngers(element.vote_average)" :key="index"/>
                <img :src="'https://image.tmdb.org/t/p/' + 'w300/' + element.poster_path" :alt="element.title">
                <p>{{element.poster_path}}</p>
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
        result: Array
    },
    created(){

    },
    methods: {
        voteIngers(vote){
            const voteInt = vote / 2;
            return parseInt(voteInt);
        }
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
