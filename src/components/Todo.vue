<template>
  <div>
		<ul>
			<li v-for="todo in todos" v-text="todo"></li>
		</ul>

		<input type="text" v-model="newTodo">
		<button @click="addTodo">Add Todo</button>
	</div>
</template>

<script>
export default {
    data() {
      return {
        todos: [ 
          "Learn Vue",
          "Work on codesandbox.io",
          "Drink Coffee"
        ],
      }
    },

    methods: {
      addTodo() {
          this.todos.push( this.newTodo );
          this.text = '';
      }
    }

}
</script>

<style>

</style>
