import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({

    data() {
        return {
            message: 'Welcome to the new and improved Netflix!',
            search: '',
            movies: []
        };
    },

    mounted() {
        // Fetch the list of movies from the server
        fetch('/movies.json')
            .then(response => response.json())
            .then(movies => {
                debugger;
            });

        // assign my local movies data prop, to the 
        // server-fetched data
    },

    computed: {
        squareMessageLength() {
            return this.message.length * this.message.length;
        },

        moviesToDisplay() { 
            return this.search ? this.doSearch() : this.movies;
        }
    },

    methods: {

        getMoviePosterStyle: movie => 'background-image: url(' + movie.poster + ')',

        renameTitle(movie) {
            movie.title = prompt('Rename movie', movie.title);
        },

        doSearch() {
            // go through the movies and find the ones whose titles (and other?)
            // match the search term
            const searchLower = this.search.toLowerCase();
            return this.movies.filter(
                movie => movie.title.toLowerCase().indexOf(searchLower) != -1
            );

        }
    }
}).mount('#app')