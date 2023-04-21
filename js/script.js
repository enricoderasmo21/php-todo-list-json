const { createApp } = Vue

createApp({
    data(){
        return{

            todos: [],

            newTodo: '',
        }
    },

    methods:{

        getJson(){
            axios.get('./server.php').then(response => {
                console.log(response.data);

                this.todos = response.data;
            });
        },

        addTodo(){
            // this.todos.push(this.newTodo);
            
            // this.newTodo = {name: "", done: false};
            let data = {
                newTodo: "",
            }

            data.newTodo = this.newTodo;

            axios.post('./server.php', data, {headers: {'Content-Type':'multipart/form-data'}}).then((response) => {

                console.log(response);

                this.getJson();
            });

        }
    },

    mounted(){
        this.getJson()
    },

}).mount('#app');