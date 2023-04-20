const { createApp } = Vue

createApp({
    data(){
        return{

            todos: [],

        }
    },

    methods:{

        getJson(){
            axios.get('./server.php').then(response => {
                console.log(response.data);

                this.todos = response.data;
            });
        }
    },

    mounted(){
        this.getJson()
    },

}).mount('#app');