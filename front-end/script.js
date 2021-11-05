
new Vue({
    el:"#root",
    data:{
        books:[],
        URL: "http://localhost:8000/api/books",
        author_id:null,
        title:null,
        description:null,
    },
    methods: {
        getBooks(){
            window.axios.get(this.URL).then(response=>{
                console.log(response.data);
                this.books = response.data;
            })
        },

    },
    mounted() {
        this.getBooks();
    },
})