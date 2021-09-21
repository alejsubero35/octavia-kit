<template>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
  >
    <v-col
      cols="12"
      sm="12"
      md="12"
    >
      <v-text-field
        label="search query"
        v-model="todoSearch"
      ></v-text-field>
    </v-col>
   

    <v-list-item two-line v-for="(i, index) in filterSearchList" :key="index">
      <v-list-item-content>
        <v-list-item-title>{{i}}</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    
  </v-card>
</template>

<script>
import axios from "axios";
export default { 
    created() {
      axios.get('/api/apps/todo/tasks')
       .then(response => {
         
         this.todos = response.data;
         console.log(this.todos);
       })
      
    },
    data() {
        return {
          todoSearch: '',
          todos: [],
        };
    },
    computed: {
      filterSearchList(){
        return this.todos.filter(post => {
         return post.title.toLowerCase().includes(this.todoSearch.toLowerCase())
        })
      }
    }
    
}
</script>

<style>

</style>