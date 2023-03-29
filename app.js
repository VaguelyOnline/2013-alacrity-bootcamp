import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({

    data() {
        return {
            message: 'Welcome to the new and improved Netflix!',
            search: '',
            movies: [],
            loading: false,
            adding: false,

            newMovie: this.getBlankMovie(),
            newActor: '',
            newDirector: '',
            modal: null
        };
    },

    mounted() {
        // Fetch the list of movies from the server
        this.loadMovies();
        this.modal = new bootstrap.Modal(this.$refs.newMovieModal);
    },

    computed: {
        squareMessageLength() {
            return this.message.length * this.message.length;
        },

        moviesToDisplay() { 
            return this.search ? this.doSearch() : this.movies;
        },

        formBad() {
            return !this.formOk;
        },

        formOk() {
            return this.newMovie.title &&
                this.newMovie.poster &&
                this.newMovie.actors.length &&
                this.newMovie.directors.length;
        }
    },

    methods: {

        getBlankMovie() {
            return {
                title: '',
                poster: '',
                actors: [],
                directors: []
            };
        },

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

        },

        loadMovies() {
            this.loading = true;
            fetch('/movies.json')
                .then(response => response.json())
                .then(movies => {
                    this.movies = movies;
                    this.loading = false;
                });
        },

        showNewMovieModal() {
            this.newMovie = this.getBlankMovie();
            this.newActor = '';
            this.newDirector = '';
            this.modal.show();
        },

        addMovie() {
            this.movies.push(this.newMovie);
            this.modal.hide();
        },

        addActor() {
            this.newMovie.actors.push(this.newActor);
            this.newActor = '';
        },

        addDirector() {
            this.newMovie.directors.push(this.newDirector);
            this.newDirector = '';
        }
    }
}).mount('#app')