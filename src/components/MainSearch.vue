<template>
    <main>

            <div class="thumbnail position-relative">
                <img :src="'https://image.tmdb.org/t/p/w500/' + result[0].backdrop_path" :alt="result[0].original_title" class="w-100 "> 
                <div id="overlay"></div>
                <div class="text position-absolute">
                    <h1 class="mb-5">{{ result[0].original_title }}</h1>
                    <p class="mb-5">{{ result[0].overview }}</p>
                    <button type="button" class="btn btn-secondary">Play</button>
                    <button type="button" class="btn btn-secondary ms-5">More Info</button>
                </div>
            </div>
            
            <div class="categories container">
                <h1>Most Popular</h1>
                <div class="carousel">
                    <Cover 
                        v-for="(movie, index) in result"
                        :key="index"
                        :moviePopular="movie"
                    />
                </div>
            </div>
        
    </main>
</template>

<script>
import Cover from './Cover.vue'

export default {
    name: 'mainContentSearch',
    components: {
        Cover
    },
    data: function(){
        return{
        }
    },
    props: {
        result: Array,
    },
    mounted(){
        
    },
    methods: {
        //checkResultArray(){
        //    if (result){
        //        this.search = true
        //    }
        //    this.search = false
        //}
    },
    computed: {
        
    }
}
</script>


<style lang="scss" scoped>

    main{
        background-color: #000;
        color: white;
        height: 91.75vh;

        .thumbnail{
            height: 40rem;
            overflow: hidden;
        }

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

        div.text{
            z-index: 2;
            top: 25%;
            left: 8%;
            width: 45%;
        }

        div.container{
            max-width: 1600px;

            div.carousel{
                display: flex;
                justify-content: start;
                overflow: hidden;
                scrollbar-width: none;
                overflow-x: scroll;
            }
        }
    }

</style>
