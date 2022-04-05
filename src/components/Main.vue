<template>
    <main>
        <h1>MAIN</h1>
        <ul>
            <li v-for="(element, index) in result" :key="index">
                <p>{{element.title}}</p>
                <p>{{element.original_title}}</p>
                <p>
                    {{element.original_language}}
                    <country-flag :country="noSeeIt(element.original_language)" size="normal"/>
                </p>
                <p>{{element.vote_average}}</p>
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
        noSeeIt(stringLanguage){
            const it = it;
            const flag = document.querySelector('country-flag')
            if (!flag.hasAttribute('country')) {
                return it
            }
            return stringLanguage
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


//! dobbiamo inserire al posto della stringa lingua, la bandiare della linqua
//* prendiamo la stringa e facciamo una verifica con una condizione
//* se la stringa statica è incluso nella lista delle bandiere
//* inserisci nel class dello span la stringa
//* altrimenti metti una stringa generale (per i paesi di cui non dispongo la bandiera)