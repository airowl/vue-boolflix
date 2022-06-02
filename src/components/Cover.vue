<template>
    <div class="cover col-12 col-sm-6 col-md-3 col-xxl-2">
        <!--<img :src="'https://image.tmdb.org/t/p/' + 'w500/' + imgPoster" :alt="title">
        <div class="text-cover">
            <p><strong>Titolo:</strong> {{title}}</p>
            <p><strong>Titolo Originale:</strong> {{originalTitle}}</p>
            <p><strong>Voto:</strong> <font-awesome-icon icon="fa-solid fa-star" v-for="n in voteIngers(voteAverage)" :key="n"/></p>
            <p><strong>Overview:</strong> {{overview}}</p>
        </div>-->
        
    </div>
</template>

<script>
export default {
    name: 'showCover',
    props: {
        moviesPopular: Object
    },
    methods: {
        voteIngers(vote){
            const voteInt = vote / 2;
            return parseInt(voteInt);
        }
    }
}
</script>

<style lang="scss" scoped>
    div.cover{
        color: white;
        height: 25rem;
        margin-bottom: 2rem;

        img{
            width: 100%;
            height: 100%;
            display: block;
        }

        .text-cover{
            width: 100%;
            height: 100%;
            background-color: black;
            padding: 1rem;
            overflow: scroll;
            display: none;
        }

        &:hover .text-cover{
            display: block;
        }

        &:hover img{
            display: none;
        }
    }
</style>