import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({

    data() {
        return {
            message: 'Welcome to the new and improved Netflix!',
            search: '',
            movieMatches: [],
            movies: [
                {
                    title: 'The Matrix',
                    poster: 'https://m.media-amazon.com/images/I/91++WV6FP4L._AC_SL1500_.jpg',
                    directors: [
                        'Wachowski 1',
                        'Wachowski 2'
                    ],
                    actors: [
                        'Mr Reeves',
                        'Mr Fishbourne'
                    ]
                },
                {
                    title: 'Hitch',
                    poster: 'https://i.ebayimg.com/images/g/DpAAAOSwKIpj9vpq/s-l500.jpg',
                    directors: [
                        'Kevin'
                    ],
                    actors: [
                        'Mr Smith',
                        'Bob'
                    ]
                }
            ]
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
            this.movieMatches = this.movies.filter(
                movie => movie.title.toLowerCase().indexOf(searchLower) != -1
            );

        }
    }
}).mount('#app')