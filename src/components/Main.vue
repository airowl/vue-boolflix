<template>
    <main>
        <h1>...</h1>
        <div class="container-fluid">
            <div class="row">
            <Cover      
                v-for="(element, index) in result" 
                :key="index" 
                :title="element.title"
                :originalTitle="element.original_title"
                :originalLanguage="element.original_language"
                :voteAverage="element.vote_average"
                :imgPoster="element.poster_path"
                :overview="element.overview"
            />
            </div>
        </div>
    </main>
</template>

<script>
import Cover from './Cover.vue'

export default {
    name: 'mainContent',
    components: {
        Cover
    },
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
        
    },
    computed: {
        
    }
}
</script>


<style lang="scss" scoped>

    main{
        background-color: #564d4d;
    }

</style>
