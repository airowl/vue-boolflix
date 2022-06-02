<template>
    <main>
        <div class="thumbnail position-relative">
            <img :src="'https://image.tmdb.org/t/p/w500/' + moviesPopular[0].backdrop_path" :alt="moviesPopular[0].original_title" class="w-100 h-100"> 
            <div id="overlay"></div>
        </div>
        
        <div class="wrapper position-absolute w-100">
            <div class="text w-50">
                <h1 class="mb-5">{{ moviesPopular[0].original_title }}</h1>
                <p class="mb-5">{{ moviesPopular[0].overview }}</p>
                <button type="button" class="btn btn-secondary">Play</button>
                <button type="button" class="btn btn-secondary ms-5">More Info</button>
            </div>
            <div class="categories">
                <div class="container-fluid">
                    <h1>Most Popular</h1>
                    <div class="carousel">
                        <Cover 
                            :moviesPopular="moviesPopular"
                        />
                    </div>
                </div>
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
        result: Array,
        moviesPopular: Object
    },
    mounted(){
        console.log(this.moviePopular);
    },
    methods: {
        
    },
    computed: {
        
    }
}
</script>


<style lang="scss" scoped>

    main{
        background-color: #000;
        color: white;

        #overlay {
            position: absolute; /* Sit on top of the page content */
            width: 100%; /* Full width (cover the whole page) */
            height: 100%; /* Full height (cover the whole page) */
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgb(0,0,0);
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(252,163,17,0) 96%); 
            z-index: 1; /* Specify a stack order in case you're using a different order for other elements */
        }

        div.wrapper{
            z-index: 2;
            border: 1px solid red;
            top: 40%;
        }

        

        div.categories{
            margin-top: 10rem;
            border: 1px solid red;
        }
    }

</style>
