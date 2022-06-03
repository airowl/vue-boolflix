<template>
    <div class="cover col-12 col-sm-6 col-md-3 col-xxl-2" :style="{ backgroundImage: `url(${bgImage}${moviePopular.backdrop_path})`}">
        <div class="text-cover">
            <h6>{{moviePopular.original_title}}</h6>
            <p>{{moviePopular.overview}}</p>
            <p>Vote Average: {{moviePopular.vote_average}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'showCover',
    props: {
        moviePopular: Object
    },
    data: function(){
        return{
            bgImage: 'https://image.tmdb.org/t/p/w500/'
        }
    },
    methods: {
        voteIngers(vote){
            const voteInt = vote / 2;
            return parseInt(voteInt);
        }
    },
    mounted(){
    }
}
</script>

<style lang="scss" scoped>
    div.cover{
        color: white;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        height: 10rem;

        &:not(:last-child){
            margin-left: 1rem;
        }

        &:hover .text-cover{
            display: inline-block;
            overflow-y: scroll;
            scrollbar-width: none;
        }

        .text-cover{
            background-color: rgba($color: #000000, $alpha: .5);
            color: white;
            padding: 1rem;
            display: none;
        }

    }
</style>